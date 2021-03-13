<template>
  <div>
    <h2 class="sr-only">記事一覧</h2>
    <akabeko />
    <article-link v-for="note in notes" :key="note.id" :article="note" />
  </div>
</template>

<script>
import Akabeko from '~/components/Akabeko.vue'
import ArticleLink from '~/components/ArticleLink.vue'
export default {
  components: { Akabeko, ArticleLink },
  async asyncData ({ $axios }) {
    const notes = await $axios.$get('https://penguinone-cms.kuropen.org/notes?_sort=published:DESC')
    return { notes }
  }
}
</script>

<style lang="postcss">
  .idx-grid {
    @apply grid grid-cols-1 md:grid-cols-5 gap-3 text-xl md:text-center mt-4 md:mt-6 md:mb-6;
  }
</style>
