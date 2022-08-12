<template>
  <v-form
    :data="formData"
    :fields="formFields"
    :config="formConfig"
    :formRef.sync="formRef"
  >
    <template slot="actions">
      <el-button>插槽</el-button>
    </template>
  </v-form>

</template>
<script>
import { formatDate } from './tools.js'
export default {
  data () {
    return {
      formRef: {},
      formConfig: {
        labelWidth: '120px',
        inline: true,
        labelPosition: 'right'
      },
      formatData: {
        modName: '',
        modelingYear: '',
        areaCode: '',
        fileList: '',
        reportFlag: ''
      },
      formFields: [
        {
          key: 'orgName',
          type: 'autocomplete',
          rules: [
            {
              required: true,
              message: '請輸入正確的機構名稱',
              trigger: 'change',
            }
          ],
          templateOptions: {
            label: '機構名稱',
            placeholder: '請輸入',
            width: 300,
            fetchSuggestions: async (queryString, cb) => {
              if (!queryString) {
                queryString = ''
              }
              let list = await api.getOrgNameList({
                pageSize: 10,
                pageNum: 1,
                orgName: queryString,
                loading: 'NO'
              }).then(res => {
                return res.data
              })
              list = list.map(item => {
                return {
                  value: item.orgName,
                  areaCode=item.registerAddrCode,
                  socialId=item.socialId
                }
              })
              this.orgNameArr = list
              cb(list)
            },
            resc: () => {
              let newArr = this.orgNameArr && this.orgNameArr.map(item => {
                return item
              })
              if (!newArr.includes(this.form.orgName)) {
                this.form.orgName = ''
              }
            }
          }
        },
        {
          key: 'modName',
          type: 'input',
          templateOptions: {
            label: '模型名稱',
            placeholder: '請輸入'
          }
        },
        {
          key: 'areaCode',
          type: 'district-cascader',
          templateOptions: {
            label: '機構所屬地區',
            placeholder: '請選擇',
            change: (val) => {
              this.formDaa.areaCode = val && val.length ? val[val.length - 1] : ''
            }
          }
        },
        {
          key: 'modelingYear',
          type: 'date',
          templateOptions: {
            label: '評級年度',
            placeholder: '請選擇',
            valueFormat: 'yyyy-MM-dd',
            type: 'year',
            pickerOptions: {
              disableDate: (date) => moment(date).year() > moment().yearI()
            }
          }
        },
        {
          key: 'reportFlag',
          type: 'select',
          templateOptions: {
            label: '報送情況',
            placeholder: '請選擇',
            options: [
              { label: '', value: '' },
              { label: '', value: '' },
              { label: '', value: '' },
            ]
          }
        },
        {
          key: 'fileList',
          type: 'upload',
          rules: [
            {
              type: 'array',
              require: true,
              message: '請至少選擇一個文件',
              trigger: 'change'
            }
          ],
          templateOptions: {
            label: '上傳模板',
            limit: 1,
            accept: '.xls, .xlsx'
          }
        },
        // {
        //   key: 'fileList',
        //   type: 'upload',
        //   rules: [
        //     {
        //       type: 'array',
        //       require: true,
        //       message: '請至少選擇一個文件',
        //       trigger: 'change'
        //     }
        //   ],
        //   templateOptions: {
        //     label: '上傳模板',
        //     limit: 10,
        //     accept: '.xls, .xlsx',
        //     autoUpload: true,
        //     name: 'file',
        //     action: '/regadmin/dmdofhdf',
        //     uploadParams: {
        //       madTaskId,
        //       socialId,
        //     },
        //     multiple: true,
        //     maxSize: 20 * 1024 * 1024,// 20M,
        //     handleRemove: this.handleFileRemove.bind(this),
        //     handlePreview: this.handleFilePreview.bind(this),
        //     uploadSuccess: this.handleUploadSuccess.bind(this)
        //   }
        // },
        {
          render: 'actions'
        }
      ]
    }
  }
}
</script>

