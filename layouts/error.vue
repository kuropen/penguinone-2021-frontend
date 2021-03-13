<template>
  <box>
    <h2 class="err-title">エラーが発生しました。 <span lang="en">(An error occurred.)</span></h2>
    <p>{{ error.message }}</p>
  </box>
</template>

<script>
export default {
  props: {
    error: { type: Object, default () { return {} } }
  }
}
</script>

<style lang="postcss">
.err-title {
  @apply text-2xl;
}
</style>
