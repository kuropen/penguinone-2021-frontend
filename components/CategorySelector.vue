<template>
  <form>
    <select v-model="selectedItem" @change="move">
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
      window.location.href = moveTo
    }
  }
}
</script>
