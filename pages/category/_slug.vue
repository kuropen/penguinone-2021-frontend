<template>
  <div>
    <article-list
      :categories="categories"
      :notes="notes"
      :category="category.slug"
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
  async asyncData ({ $axios, query, $now, params, error }) {
    const { slug } = params
    const categories = await $axios.$get('https://penguinone-cms.kuropen.org/categories')
    let category = null
    for (const currentCategory of categories) {
      if (currentCategory.slug === slug) {
        category = currentCategory
        break
      }
    }
    if (category === null) {
      error('指定されたカテゴリが見つかりません。')
    }
    const { id } = category
    const now = $now()
    const offset = (query.page || 0) * 10
    const notesPromise = $axios.$get(`https://penguinone-cms.kuropen.org/notes?_sort=published:DESC&published_lte=${now}&categories_in=${id}&_limit=10&_start=${offset}`)
    const notesCountPromise = $axios.$get(`https://penguinone-cms.kuropen.org/notes/count?published_lte=${now}&categories_in=${id}`)
    return {
      notes: await notesPromise,
      count: await notesCountPromise,
      categories,
      category
    }
  },
  watchQuery: ['page']
}
</script>
