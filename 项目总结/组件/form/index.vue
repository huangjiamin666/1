<template>
  <el-form
    ref="form"
    :model="data"
    :disable="$attrs.disabled"
    v-bind="config"
  >
    <template v-for="{key,type,rules,templateOptions,render,hide} in fields">
      <FieldItem
        v-if="!hide"
        :Key="key"
        :prop="Key"
        :type="type"
        :rules="rules"
        :templateOptions="templateOptions"
        :data="data"
        :render="render"
      >
        <template
          :slot="render"
          v-if="render"
        >
          <slot
            :name="render"
            :type="type"
            :rules="rules"
            :render="render"
            :data="data"
            :templateOptions="templateOptions"
            :prop="key"
          ></slot>
        </template>
      </FieldItem>
    </template>
  </el-form>
</template>
<script>
import FieldItem from './fieldItem'
const fileSizeUnit = ['B', 'KB', 'MB', 'GB']
function getFileSizeRange (size, num) {
  size = size / 1024
  if (size < 1) {
    return {
      size: size * 1024,
      num
    }
  } else {
    num++
  }
  return getFileSizeRange(size, num)
}
export default {
  name: 'VForm',
  components: {
    FieldItem
  },
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => { }
    },
    config: {
      type: Object,
      default: () => { }
    },
    formRef: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      instance: null,
      // 組件模板參數的默認配置
      defaultTemplateOptions: {
        common: {
          change: (cb, val) => {
            if (cb) {
              cb(val)
            }
          }
        },
        select: {
          options: []
        },
        'select-remote': {
          remoteMethod: (cb, tplScope, queryString) => {
            if (cb) {
              cb(tplScope, queryString)
            }
          }
        },
        upload: {
          multiple: false,// 是否允許多個上傳
          showFileList: true,//是否顯示上傳列表
          accept: '',//上傳文件類型
          limit: null,//限制上傳個數
          handleExceed: (cb, tplScope, files, fileList) => {
            const { templateOptions } = tplScope
            this.$message.warning(`當前限制選擇${templateOptions.limit}個文件`)
            if (cb) {
              cb(tplScope, files, fileList)
            }
          },
          handlePreview: (cb, tplScope, file) => {
            if (cb) {
              cb(tplScope, file)
            }
          },
          beforeUpload: (cb, tplScope, file) => {
            const { key, templateOptions } = tplScope
            if (cb) {
              cb(tplScope, file)
            }
            // 限制文件大小
            if (templateOptions.maxSize && file.size > templateOptions.maxSize) {
              const formatSizeObj = getFileSizeRange(templateOptions.maxSize, 0)
              this.$message.warning(`上次文件大小不能超過${formatSizeObj.size}${fileSizeUnit[formatSizeObj.num]}`)
              file.overMaxSizeError = true
              return false
            }
          },
          uploadChange: (cb, tplScope, response, file, fileList) => {
            const { key, templateOptions } = tplScope
            this.data[key] = fileList
            if (cb) {
              cb(tplScope, file, fileList)
            }
          },
          uploadSuccess: (cb, tplScope, response, file, fileList) => {
            const { key } = tplScope
            if (response && Number(response.code != 200)) {
              file.status = 'error'
            }
            this.data[key] = fileList
            if (cb) {
              cb(tplScope, response, file, fileList)
            }
          },
          handleRemove: (cb, tplScope, file, fileList) => {
            const key = tplScope.key
            this.data[key] = fileList
            if (cb) {
              cb(tplScope, file, fileList)
            }
          },
          beforeRemove: (cb, tplScope, file, fileList) => {
            if (cb) {
              cb(tplScope, file, fileList)
            }
            // 超過最大上傳尺寸時不執行刪除確認
            if (file.raw && file.raw.overMaxSizeError) {
              return
            }
            // 如果上傳錯誤，不執行刪除確認
            if (file.status === 'error') {
              return
            }
            return this.$confirm(`確定刪除${file.name}`, '提示', {
              type: 'warning'
            })
          },
          handleProgress: (cb, tplScope, file, fileList) => {
            if (cb) {
              cb(tplScope, file, fileList)
            }
          },
          handleError: (cb, tplScope, file, fileList) => {
            if (cb) {
              cb(tplScope, file, fileList)
            }
          }
        }
      }
    }
  },
  cteated () {
    this.fileds.forEach(field => {
      field.templateOptions = field.templateOptions || {}
      field.hide = field.hide || false
      const defaultTemplateOptions = {
        ...this.defaultTemplateOptions.common,
        ...this.defaultTemplateOptions[field.type]
      }
      Object.keys(defaultTemplateOptions).forEach(optKey => {
        //如果配置項是函數,則在默認函數執行后，回調配的置函數
        if (typeof defaultTemplateOptions[optKey] === 'function') {
          field.templateOptions[optKey] = defaultTemplateOptions[optKey].bind(this, field.templateOptions[optKey])
        }
        //如果當前的配置項不存在
        if (field.templateOptions[optKey] == null) {
          if (typeof defaultTemplateOptions[optKey] === 'object') {
            field.templateOptions[optKey] = JSON.parse(JSON.stringify(defaultTemplateOptions[optKey]))
          } else {
            field.templateOptions[optKey] = defaultTemplateOptions[optKey]
          }
        }
      })
    })
  },
  mounted () {
    this.instance = this.$refs.form
    this.$emit('update:formRef', this.instance)
  }
}
</script>
