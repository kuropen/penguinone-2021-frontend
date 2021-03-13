<template>
  <a v-if="article.external_url" :href="article.external_url" target="_blank" rel="noopener" class="block">
    <article-link-internal :article="article" />
  </a>
  <nuxt-link v-else :to="`/articles/${article.slug}`" class="block">
    <article-link-internal :article="article" />
  </nuxt-link>
</template>

<script>
import ArticleLinkInternal from './ArticleLinkInternal.vue'
export default {
  components: { ArticleLinkInternal },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
