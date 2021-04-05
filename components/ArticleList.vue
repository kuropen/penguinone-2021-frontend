<template>
  <div>
    <h2 class="sr-only">記事一覧</h2>
    <category-selector :categories="categories" :selected="category" />
    <akabeko />
    <article-link v-for="note in notes" :key="note.id" :article="note" />
    <div class="grid grid-flow-col grid-cols-3 grid-rows-1 gap-2">
      <nuxt-link :to="`?page=${pageNum - 1}`" :class="{invisible: page == 0}">
        <box>
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
          <span class="hidden md:inline">前のページ</span>
        </box>
      </nuxt-link>
      <box class="text-center">
        {{ pageNum + 1 }} / {{ maxPage }}
      </box>
      <nuxt-link :to="`?page=${pageNum + 1}`" :class="{invisible: page >= maxPage}">
        <box class="text-right">
          <span class="hidden md:inline">次のページ</span>
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </box>
      </nuxt-link>
    </div>
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
    },
    count: {
      type: Number,
      required: true
    },
    page: {
      type: String,
      required: true
    },
    articlesPerPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    pageNum () {
      return parseInt(this.page)
    },
    maxPage () {
      return Math.ceil(this.count / this.articlesPerPage)
    }
  }
}
</script>
