<template>
  <div>
    <box>
      <h2 class="text-2xl">
        SNSポリシー
      </h2>
      <p>
        最終更新日: {{ policy.last_update }}<br>
        対象となるSNSは<nuxt-link to="/">トップページ</nuxt-link>をご確認ください。
      </p>
    </box>
    <box>
      <div class="prose" v-html="$md.render(policy.text)" />
    </box>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const policy = await $axios.$get('https://penguinone-cms.kuropen.org/sns-policy')
    return { policy }
  },
  head () {
    return {
      title: 'SNSポリシー - Penguinone',
      meta: [
        { hid: 'og_title', property: 'og:title', content: 'SNSポリシー' },
        { hid: 'og_url', property: 'og:url', content: 'https://penguinone.kuropen.org/social' },
      ]
    }
  }
}
</script>
