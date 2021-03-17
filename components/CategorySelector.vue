<template>
  <box>
    <form>
      <div class="inline">
        <font-awesome-icon :icon="['fas', 'hashtag']" />
        カテゴリ:
      </div>
      <select v-model="selectedItem" class="categorySelector" @change="move">
        <option value="all">すべて表示</option>
        <option
          v-for="category in categories"
          :key="category.slug"
          :value="category.slug"
        >
          {{ category.name }} ({{ category.notes.length }})
        </option>
      </select>
    </form>
  </box>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedItem: this.selected
    }
  },
  methods: {
    move () {
      let moveTo
      if (this.selectedItem === 'all') {
        moveTo = '/'
      } else {
        moveTo = `/category/${this.selectedItem}`
      }
      this.$router.push({
        path: moveTo
      })
    }
  }
}
</script>

<style lang="postcss">
  .categorySelector {
    @apply dark:bg-gray-800;
  }
</style>
