<!--
 * @Author: mjjh
 * @LastEditTime: 2023-04-09 15:26:56
 * @FilePath: \chagpt-shuowen\src\components\Setting\index.vue
 * @Description: 弹出设置窗口
-->
<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NModal, NTabPane, NTabs } from 'naive-ui'
import General from './General.vue'
import { SvgIcon } from '@/components/index'

interface Props {
  visible: boolean
}

interface Emit {
  (e: 'update:visible', visible: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const active = ref('General')

const show = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  },
})
</script>

<template>
  <NModal v-model:show="show" :auto-focus="false" preset="card" style="width: 95%; max-width: 640px">
    <div>
      <NTabs v-model:value="active" type="line" animated>
        <NTabPane name="General" tab="General">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:file-user-line" />
            <span class="ml-2">{{ $t('setting.general') }}</span>
          </template>
          <div class="min-h-[100px]">
            <General />
          </div>
        </NTabPane>
      </NTabs>
    </div>
  </NModal>
</template>

<style lang="less" scoped>
/deep/.n-tabs.n-tabs--line-type .n-tabs-tab.n-tabs-tab--active, .n-tabs.n-tabs--bar-type .n-tabs-tab.n-tabs-tab--active{
  color:#f0a020!important;
}
/deep/ n-tabs-bar{
  color:#f0a020!important;
  background: #f0a020!important;
}
/deep/.n-tabs-nav-scroll-content{
  --n-bar-color: #f0a020;
}
.n-card > .n-card-header{
  padding:5px 24px!important;
}
</style>
