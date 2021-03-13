<template>
  <div>
    <box>
      <h2 class="text-2xl">
        このサイトについて
      </h2>
      <div class="prose" v-html="$md.render(siteInfo.text)" />
    </box>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const siteInfo = await $axios.$get('https://penguinone-cms.kuropen.org/site-info')
    return { siteInfo }
  },
  head () {
    return {
      title: 'このサイトについて - Penguinone'
    }
  }
}
</script>
