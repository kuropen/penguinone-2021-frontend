<template>
  <div>
    <h2 class="sr-only">
      自己紹介
    </h2>
    <vcard>
      <dl>
        <dt>
          職業
        </dt>
        <dd>
          {{ profile.occupation }}
        </dd>
        <dt>
          主な拠点
        </dt>
        <dd>
          {{ profile.location }}
        </dd>
        <dt>
          出身校
        </dt>
        <dd>
          {{ profile.alma_mater }}
        </dd>
      </dl>
    </vcard>
    <box>
      <div class="prose" v-html="$md.render(profile.detail)" />
    </box>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const profile = await $axios.$get('https://penguinone-cms.kuropen.org/profile')
    return { profile }
  }
}
</script>
