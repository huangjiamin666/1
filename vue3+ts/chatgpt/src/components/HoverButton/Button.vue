<script setup lang='ts'>
interface Emit {
  (e: 'click'): void
}

const emit = defineEmits<Emit>()

function handleClick() {
  emit('click')
}
</script>

<template>
  <button
    class="flex items-center clsss justify-center w-10 h-10 transition rounded-full hover:bg-neutral-100 dark:hover:bg-[#f0a020]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped>
 .clsss{
  margin-left:40%;
 }
</style>
