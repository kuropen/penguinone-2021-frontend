<template>
  <div>
    <article-list :categories="categories" :notes="notes" :category="'all'" />
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'
export default {
  components: { ArticleList },
  async asyncData ({ $axios, $now }) {
    const now = $now()
    const notesPromise = $axios.$get(`https://penguinone-cms.kuropen.org/notes?_sort=published:DESC&published_lte=${now}`)
    const categoriesPromise = $axios.$get('https://penguinone-cms.kuropen.org/categories')
    return {
      notes: await notesPromise,
      categories: await categoriesPromise
    }
  }
}
</script>
