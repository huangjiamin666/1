<!--
 * @Author: mjjh
 * @LastEditTime: 2023-04-09 12:40:24
 * @FilePath: \chatgpt-shuowen\src\views\chat\layout\sider\index.vue
 * @Description: 侧边栏主体布局
-->
<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NButton, NLayoutSider } from 'naive-ui'
import List from './List.vue'
import Footer from './Footer.vue'
import { PromptStore, SvgIcon } from '@/components/index'
import { useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const appStore = useAppStore()
const chatStore = useChatStore()

const { isMobile } = useBasicLayout()
const show = ref(false)

const collapsed = computed(() => appStore.siderCollapsed)

/**
 * @description: 添加一个聊天室
 * @return {*}
 */
function handleAdd() {
  chatStore.addHistory({ title: '新对话', uuid: Date.now(), isEdit: false })
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

/**
 * @description: 根据pinia中的数据更新侧边栏
 * @return {*}
 */
function handleUpdateCollapsed() {
  appStore.setSiderCollapsed(!collapsed.value)
}

/**
 * @description: 移动端代码样式
 * @param {*} computed
 * @return {*}
 */
const getMobileClass = computed<CSSProperties>(() => {
  if (isMobile.value) {
    return {
      position: 'fixed',
      zIndex: 50,
    }
  }
  return {}
})

/**
 * @description: 移动端代码样式
 * @param {*} computed
 * @return {*}
 */
const mobileSafeArea = computed(() => {
  if (isMobile.value) {
    return {
      paddingBottom: 'env(safe-area-inset-bottom)',
    }
  }
  return {}
})

/**
 * @description: 监听移动端和pc端尺寸变化
 * @return {*}
 */
watch(
  isMobile,
  (val) => {
    appStore.setSiderCollapsed(val)
  },
  {
    immediate: true,
    flush: 'post',
  },
)
</script>

<template>
  <NLayoutSider
    :collapsed="collapsed"
    :collapsed-width="0"
    :width="260"
    :show-trigger="isMobile ? false : 'arrow-circle'"
    collapse-mode="transform"
    position="absolute"
    bordered
    :style="getMobileClass"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <div class="p-4 cllsss">
          <span class="icons"><SvgIcon icon="ic:round-plus" /></span>
          <NButton
            dashed
            block
            style="
              --n-text-color-hover: #f0a020;
              --n-text-color-focus: #f0a020;
              --n-border-hover: 1px solid #f0a020;
              --n-border-focus: 1px solid #f0a020;
              --n-ripple-color: #f0a020;
              --n-text-color-pressed: #f0a020;
              --n-border-pressed: 1px solid #f0a020;
            "
            @click="handleAdd"
          >
            {{ $t('chat.newChatButton') }}
          </NButton>
        </div>
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
        <!-- <div class="p-4">
          <NButton block @click="show = true">
            {{ $t('store.siderButton') }}
          </NButton>
        </div> -->
      </main>
      <Footer />
    </div>
  </NLayoutSider>
  <template v-if="isMobile">
    <div v-show="!collapsed" class="fixed inset-0 z-40 bg-black/40" @click="handleUpdateCollapsed" />
  </template>
  <PromptStore v-model:visible="show" />
</template>

<style scoped lang="less">
// .p-4{
//   border-color:#f0a020;
// }
 .n-button:not(.n-button--disabled):hover{
  /* background:#f0a020; */
  color:#f0a020;
  border-color:#f0a020;
 }
.cllsss{
  position:relative;
 .icons{
  position:absolute;
  left: 26px;
  top:24px;
  font-size: 18px;
  color: gray;
 }
}
 /deep/ .ast{
  &:hover{
    border-color:#f0a020!important;
  }
 }
</style>
