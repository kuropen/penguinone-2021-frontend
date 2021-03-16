<template>
  <div>
    <h2 class="sr-only">記事一覧</h2>
    <category-selector :categories="categories" :selected="category" />
    <akabeko />
    <article-link v-for="note in notes" :key="note.id" :article="note" />
  </div>
</template>

<script>
import ArticleLink from './ArticleLink.vue'
import Akabeko from './Akabeko.vue'
import CategorySelector from './CategorySelector.vue'
export default {
  components: {
    ArticleLink,
    Akabeko,
    CategorySelector
  },
  props: {
    notes: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>
