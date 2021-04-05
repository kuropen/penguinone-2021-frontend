<template>
  <div>
    <article-list
      :categories="categories"
      :notes="notes"
      :category="'all'"
      :page="$route.query.page || '0'"
      :count="count"
      :articles-per-page="10"
    />
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'
export default {
  components: { ArticleList },
  async asyncData ({ $axios, query, $now }) {
    const now = $now()
    const offset = (query.page || 0) * 10
    const notesPromise = $axios.$get(`https://penguinone-cms.kuropen.org/notes?_sort=published:DESC&published_lte=${now}&_limit=10&_start=${offset}`)
    const notesCountPromise = $axios.$get(`https://penguinone-cms.kuropen.org/notes/count?published_lte=${now}`)
    const categoriesPromise = $axios.$get('https://penguinone-cms.kuropen.org/categories')
    return {
      notes: await notesPromise,
      categories: await categoriesPromise,
      count: await notesCountPromise
    }
  },
  watchQuery: ['page']
}
</script>
