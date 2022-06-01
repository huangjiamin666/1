<template>
  <div>
    <router-link class="tags-view-item" :to="item.path" :key="item.path"
      :class="isActive(item)?'active':''" v-for="(item) in Array.from(visitedViews)">
      {{item.name}}
      <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(item)'></span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      visitedViews: 'tagsView/visitedTags'
    })
  },
  watch: {
    $route() {
      this.addTags()
    }
  },
  methods: {
    addTags() {
      const route = this.$route
      this.$store.commit('tagsView/addTags', route)
    },
    isActive(route) {
      return route.path === this.$route.path
    },
    closeSelectedTag(view) {
      this.$store.commit('tagsView/closeTags', view)
    }
  }
}
</script>