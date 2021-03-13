<template>
  <div class="article-link">
    <div class="article-left" :style="`background-image:url(${article.cover_image ? article.cover_image.formats.thumbnail.url : require('~/assets/images/Penguinone_NoImage.png')});`" />
    <div class="article-right">
      <div>
        <h3>{{ article.title }}</h3>
        <client-only placeholder="Loading...">
          <p>
            <font-awesome-icon :icon="['fas', 'calendar-alt']" /> {{ article.published }}
          </p>
          <p v-if="article.categories && article.categories.length > 0">
            <font-awesome-icon :icon="['fas', 'hashtag']" />
            {{ article.categories.map((category) => category.name).join(', ') }}
          </p>
          <p v-if="article.external">
            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            <!-- Translation should be considered when an external posting site name includes whitespace -->
            {{ article.external }}
          </p>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss">
  .article-link {
    @apply my-3 shadow-lg pr-4 bg-indigo-300 dark:bg-indigo-900 bg-opacity-60 bg-clip-padding;
    @apply border border-indigo-300 dark:border-indigo-900 rounded-xl backdrop-blur;
    @apply text-black dark:text-gray-100 flex flex-row;
    min-height: 5rem; /* "min-h-20" */
  }
  .article-left {
    @apply w-36 rounded-l-xl bg-no-repeat bg-cover bg-center mr-4 flex-shrink-0;
  }
  .article-right {
    @apply grid py-2;
  }
  .article-right :first-child {
    @apply self-center justify-center;
  }
  .article-right h3 {
    @apply font-semibold md:text-lg;
  }
  .article-right p {
    @apply text-xs md:text-sm md:inline md:mr-2
  }
</style>
