<!--
 * @Author: mjjh
 * @LastEditTime: 2023-04-09 18:02:27
 * @FilePath: \chagpt-shuowen\src\components\Setting\General.vue
 * @Description: 设置/总览
 * 配置聊天记录
 * 配置主题
 * 配置文字
-->

<script lang="ts" setup>
import { computed } from 'vue'
import { NButton } from 'naive-ui'
import type { Language, Theme } from '@/store/modules/app/helper'
import { SvgIcon } from '@/components/index'
import { useAppStore } from '@/store'
import { getCurrentDate } from '@/utils/functions'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const appStore = useAppStore()

const { isMobile } = useBasicLayout()

const theme = computed(() => appStore.theme)

/**
 * @description:  切换语言
 */
const language = computed({
  get() {
    return appStore.language
  },
  set(value: Language) {
    appStore.setLanguage(value)
  },
})

/**
 * @description: 样式配置文件
 */
const themeOptions: { label: string; key: Theme; icon: string }[] = [
  {
    label: 'Auto',
    key: 'auto',
    icon: 'ri:contrast-line',
  },
  {
    label: 'Light',
    key: 'light',
    icon: 'ri:sun-foggy-line',
  },
  {
    label: 'Dark',
    key: 'dark',
    icon: 'ri:moon-foggy-line',
  },
]

/**
 * @description: 语言配置文件
 */
const languageOptions: { label: string; key: Language; value: Language }[] = [
  { label: '简体中文', key: 'zh-CN', value: 'zh-CN' },
  { label: '繁體中文', key: 'zh-TW', value: 'zh-TW' },
  { label: 'English', key: 'en-US', value: 'en-US' },
]

/**
 * @description: 导出本地加载的聊天记录数据 json格式
 */
function exportData(): void {
  const date = getCurrentDate()
  const data: string = localStorage.getItem('chatStorage') || '{}'
  const jsonString: string = JSON.stringify(JSON.parse(data), null, 2)
  const blob: Blob = new Blob([jsonString], { type: 'application/json' })
  const url: string = URL.createObjectURL(blob)
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = url
  link.download = `chat-store_${date}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="p-4 space-y-5 min-h-[100px]">
    <div class="space-y-6">
      <div
        class="flex items-center space-x-4"
        :class="isMobile && 'items-start'"
      >
        <!-- <span class="flex-shrink-0 w-[100px]">{{ $t('setting.chatHistory') }}</span>

        <div class="flex flex-wrap items-center gap-4">
          <NButton size="small" @click="exportData">
            <template #icon>
              <SvgIcon icon="ri:download-2-fill" />
            </template>
            {{ $t('common.export') }}
          </NButton>
        </div> -->
      </div>
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.theme') }}</span>
        <div class="flex flex-wrap items-center gap-4">
          <template v-for="item of themeOptions" :key="item.key">
            <NButton
              size="small"
              style="
              --n-color: #fff;
              --n-text-color-hover: #000;
              --n-text-color-pressed: #000;
              --n-text-color: #000;
              --n-text-color-focus: #000;
              --n-color-hover: #f0a020;
              --n-color-pressed: #f0a020;
              --n-color-focus: #f0a020;
              --n-color-disabled: #f0a020;
              --n-ripple-color: #f0a020;
              --n-border: 1px solid rgba(191, 191, 191, 1);
              --n-border-hover: 1px solid #f0a020;
              --n-border-pressed: 1px solid #f0a020;
              --n-border-focus: 1px solid #f0a020;
              --n-border-disabled: 1px solid #f0a020;
              "
              :type="item.key === theme ? 'primary' : undefined"
              @click="appStore.setTheme(item.key)"
            >
              <template #icon>
                <SvgIcon :icon="item.icon" />
              </template>
            </NButton>
          </template>
        </div>
      </div>
      <!-- <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.language') }}</span>
        <div class="flex flex-wrap items-center gap-4">
          <NSelect
            class="list"
            style="
            width: 140px;
            --n-border-active: 1px solid #f0a020;
            --n-border-focus: 1px solid #f0a020;
            --n-border-hover: 1px solid #f0a020;
            --n-box-shadow-active: 0 0 0 1px #f0a020;
            --n-box-shadow-focus: 0 0 0 1px #f0a020;
            --n-caret-color: #f0a020;
            --n-loading-color: #f0a020;
            "
            :value="language"
            :options="languageOptions"
            @update-value="value => appStore.setLanguage(value)"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="less">
.n-base-select-menu .n-base-select-option.n-base-select-option--selected{
  color:#f0a020!important
}
</style>
