<template>
  <div>
    <article-list :categories="categories" :notes="notes" :category="category.slug" />
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'
export default {
  components: { ArticleList },
  async asyncData ({ $axios, $now, params, error }) {
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
    const notes = await $axios.$get(`https://penguinone-cms.kuropen.org/notes?_sort=published:DESC&published_lte=${now}&categories_in=${id}`)
    return { notes, categories, category }
  }
}
</script>
