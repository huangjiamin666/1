<template>
  <el-form-item
    :label="templateOptions.label"
    :prop="prop"
    :rules="rules"
  >
    <!--slot自定義-->
    <template v-if="templateOptions.render">
      <slot :name="templateOptions.render"></slot>
    </template>
    <!--input-->
    <template v-else-if="type==='input'">
      <el-input
        v-model="data[prop]"
        :placeholder="templateOptions.placeholder||'請輸入'"
        :disabled="!!templateOptions.disabled"
        :clearable="!!templateOptions.clearable"
        :maxlength="templateOptions.maxlength"
        :style="{width:templateOptions.width+'px'}"
      >
      </el-input>
    </template>
    <!--textarea-->
    <template v-else-if="type==='textarea'">
      <el-input
        type="textarea"
        v-model="data[prop]"
        :placeholder="templateOptions.placeholder||'請輸入'"
        :disabled="!!templateOptions.disabled"
        :rows="templateOptions.rows||2"
        :clearable="!!templateOptions.clearable"
        :maxlength="templateOptions.maxlength"
        :style="{width:templateOptions.width+'px'}"
      ></el-input>
    </template>
    <!--autocomplete-->
    <template v-else-if="type==='autocomplete'">
      <el-autocomplete
        v-model="data[prop]"
        :placeholder="templateOptions.placeholder||'請輸入'"
        :disabled="!!templateOptions.disabled"
        :clearable="!!templateOptions.clearable"
        @blur="templateOptions.resc"
        @select="templateOptions.handleSelect"
        :fetch-suggestions="templateOptions.fetchSuggestions"
      >
      </el-autocomplete>
    </template>
    <!--date-->
    <template v-else-if="type==='date'">
      <el-date-picker
        v-model="data[prop]"
        :type="templateOptions.type||'date'"
        :placeholder="templateOptions.placeholder||'選擇日期'"
        :disabled="!!templateOptions.disabled"
        :clearable="!!templateOptions.clearable"
        :pickerOptions="templateOptions.pickerOptions"
        @change="templateOptions.change"
        :value-format="templateOptions.valueFormat"
      >
      </el-date-picker>
    </template>
    <!--daterange-->
    <template v-else-if="type==='date-range'">
      <el-date-picker
        v-model="data[prop]"
        :type="templateOptions.type||'daterange'"
        range-separator='至'
        start-placeholder="開始日期"
        end-placeholder="結束日期"
        :disabled="!!templateOptions.disabled"
        :clearable="!!templateOptions.clearable"
        :pickerOptions="templateOptions.pickerOptions"
        :value-format="templateOptions.valueFormat"
        @change="templateOptions.change"
      >
      </el-date-picker>
    </template>
    <!--select-->
    <template v-else-if="type==='select'">
      <el-select
        v-model="data[prop]"
        placeholder="請選擇"
        :disabled="!!templateOptions.disabled"
        :clearable="!!templateOptions.clearable"
      >
        <el-option
          v-for="item in templateOptions.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </template>
    <!--select-remote-->
    <template v-else-if="type==='select-remote'">
      <el-select
        v-model="data[prop]"
        filterale
        remote
        reserve-keyword
        placeholder="請選擇"
        :remote-method="
        templateOptions.remoteMethod.bind(this,{
          key:prop,
          type,
          rules,
          templateOptions,
        })
          "
        @change="templateOptions.change"
        :clearable="!!templateOptions.clearable"
      >
        <el-option
          v-for="item in templateOptions.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </template>
    <!--機構所在地-->
    <!-- <template v-else-if="type=='district-cascader'">
      <el-cascader
        :options='proviceList'
        :props="Object.assign({{checkStrictly:true},templateOptions.props||{})"
        v-model="data[prop]"
        @change="templateOptions.change"
      >
      </el-cascader>
    </template> -->
    <!--上傳-->
    <template v-else-if="type==='upload'">
      <el-upload
        class="upload-demo"
        :action="templateOptions.action||'file'"
        :disabled="templateOptions.disabled||false"
        :data="templateOptions.uploadParams"
        :name="templateOptions.name"
        :auto-upload="templateOptions.autoUpload||false"
        :on-preview="
      templateOptions.handlePreview.bind(this,{
        key:prop,
        type,
        rules,
        templateOptions,
      })
        "
        :on-exceed="
      templateOptions.handleExceed.bind(this,{
        key:prop,
        type,
        rules,
        templateOptions,
      })
        "
        :on-change="
      templateOptions.uploadChange.bind(this,{
        key:prop,
        type,
        rules,
        templateOptions,
      })
        "
        :on-progress="
      templateOptions.handlePogress.bind(this,{
        key:prop,
        type,
        rules,
        templateOptions,
      })
        "
        :on-success="
      templateOptions.uploadSuccess.bind(this,{
        key:prop,
        type,
        rules,
        templateOptions,
      })
        "
        :on-error="
      templateOptions.handleError.bind(this,{
        key:prop,
        type,
        rules,
        templateOptions,
      })
        "
        :on-remove="
      templateOptions.handleRemove.bind(this,{
        key:prop,
        type,
        rules,
        templateOptions,
      })
        "
        :before-remove="
      templateOptions.beforeRemove.bind(this,{
        key:prop,
        type,
        rules,
        templateOptions,
      })
        "
        :file-list="data[prop]"
        :limit="templateOptions.limit"
        :multiple="templateOptions.multiple"
        :accept="templateOptions.accept"
        :http-request="templateOptions.httpRequest"
        :show-file-list="templateOptions.showFileList"
      >
        <el-button
          siz="small"
          :type="templateOptions.buttonType||'default'"
          :plain="!templateOptions.buttonType"
        >
          <span v-if="(!data[prop]||data[prop].length===0)&&templateOptions.emptyButtonText">
            {{
            templateOptions.emptyButtonText
          }}</span>
          <span v-else>
            {{templateOptions.hideUploadButton?'':'點擊上傳'}}
          </span>
        </el-button>
      </el-upload>
      <el-checkbox-group
        v-model="
        data[prop]"
        style="display:none"
      >
        </el-checkbox-group>
    </template>
  </el-form-item>
</template>
<script>
const proviceList = [
  {
    value: '440000',
    label: '廣東省',
    children: [
      {
        value: '',
        label: '',
        children: [

        ]
      }
    ]
  }
]
export default {
  data () {
    return {
      proviceList
    }
  },
  props: {
    prop: String,
    type: String,
    render: String,
    rules: {
      type: Array,
      default: () => [],
    },
    templateOptions: {
      type: Object,
      default: () => { }
    },
    data: {
      type: Object,
      default: () => { }
    }
  }
}
</script>