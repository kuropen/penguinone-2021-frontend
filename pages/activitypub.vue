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
  }
}
</script>
