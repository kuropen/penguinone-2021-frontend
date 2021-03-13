<template>
  <div class="container max-w-screen-sm md:mx-auto">
    <site-head />
    <Nuxt />
    <author />
    <site-foot />
  </div>
</template>

<style lang="postcss">
  body {
    @apply bg-gradient-to-r from-blue-500 to-green-500;
  }
  .prose {
    @apply m-auto;
  }
</style>
