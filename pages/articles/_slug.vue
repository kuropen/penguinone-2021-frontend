<template>
  <div>
    <div
      class="article-head"
      :class="article.cover_image ? 'article-head-with-image' : ''"
      :style="article.cover_image ? `background-image:url(${article.cover_image.formats.thumbnail.url})` : ''"
    >
      <div class="article-attributes">
        <div
          v-if="article.license === 'CreativeCommons'"
          v-tooltip="'このページのコンテンツは<br>クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 ライセンス<br>の下に提供されています。'"
          class="article-ccl"
        >
          <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            <img src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" alt="クリエイティブ・コモンズ・ライセンス">
          </a>
        </div>
        <h2>
          {{ article.title }}
        </h2>
        <dl>
          <dt>初出日</dt>
          <dd><client-only><font-awesome-icon :icon="['fas', 'calendar-alt']" /></client-only> {{ article.published }}</dd>
        </dl>
        <dl>
          <dt>カテゴリ</dt>
          <dd><client-only><font-awesome-icon :icon="['fas', 'hashtag']" /></client-only> {{ article.categories.map((category) => category.name).join(', ') }}</dd>
        </dl>
      </div>
    </div>
    <box v-if="article.external_url">
      <p>
        このページのコンテンツは、<a :href="article.external_url" target="_blank" rel="noopener">外部サイト</a>にて提供されています。
      </p>
    </box>
    <box v-else>
      <div class="prose" v-html="$md.render(article.text)" />
    </box>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params, error }) {
    const { slug } = params
    try {
      const fetchResult = await $axios.$get(`https://penguinone-cms.kuropen.org/notes?slug=${encodeURI(slug)}`)
      if (fetchResult.length === 0) {
        error({
          statusCode: 404,
          message: '指定されたページが見つかりません。URLが間違っているか、削除されています。なお、サイト内のリンクをクリックしてこの表示がされた場合は、管理者にご連絡ください。'
        })
      }
      const article = fetchResult[0]
      return { article }
    } catch (e) {
      error(e)
    }
  },
  head () {
    const { article } = this
    return {
      title: `${article.title} - Penguinone`,
      meta: [
        { hid: 'og_title', property: 'og:title', content: article.title },
        { hid: 'og_url', property: 'og:url', content: `https://penguinone.kuropen.org/articles/${article.slug}` },
        { hid: 'og_type', property: 'og:type', content: 'article' },
        { hid: 'og_image', property: 'og:image', content: article.cover_image ? article.cover_image.formats.thumbnail.url : `https://penguinone.kuropen.org${require('~/assets/images/Penguinone_NoImage.png')}` }
      ]
    }
  }
}
</script>

<style lang="postcss">
  .article-head {
    @apply my-4 shadow-lg bg-indigo-300 dark:bg-indigo-900 bg-opacity-60 bg-clip-padding;
    @apply border rounded-xl border-indigo-300 dark:border-indigo-900 border-opacity-60 backdrop-blur;
    @apply text-black dark:text-gray-100 h-44;
  }
  .article-head-with-image {
    @apply bg-no-repeat bg-cover bg-center;
  }
  .article-head-with-image .article-attributes {
    @apply bg-white bg-opacity-60 text-gray-900;
    text-shadow: 0 0 2rem gray, 0 0 0.2rem gray;
  }
  .article-attributes {
    @apply h-full w-full px-4 py-4 bg-clip-padding rounded-xl;
  }
  .article-attributes h2 {
    @apply text-2xl md:text-3xl;
  }
  .article-attributes dt {
    @apply sr-only;
  }
  .article-ccl {
    @apply float-right;
  }
</style>
