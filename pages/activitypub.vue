<template>
  <div>
    <box>
      <h2 class="text-2xl">
        ActivityPubアカウントについて
      </h2>
      <div class="prose" v-html="$md.render(apInfo.text)" />
    </box>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const apInfo = await $axios.$get('https://penguinone-cms.kuropen.org/activity-pub')
    return { apInfo }
  },
  head () {
    return {
      title: 'ActivityPubアカウントについて - Penguinone',
      meta: [
        { hid: 'og_title', property: 'og:title', content: 'ActivityPubアカウントについて' },
        { hid: 'og_url', property: 'og:url', content: 'https://penguinone.kuropen.org/activitypub' },
      ]
    }
  }
}
</script>
