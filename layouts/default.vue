<template>
  <div class="bg">
    <div class="container max-w-screen-sm md:mx-auto">
      <site-head />
      <Nuxt />
      <author />
      <site-foot />
    </div>
  </div>
</template>

<style lang="postcss">
  .prose {
    @apply m-auto;
  }
  .bg {
    @apply fixed left-0 top-0 bg-cover bg-clip-padding h-full w-full overflow-auto p-1 md:p-0;
    background-image: url(~assets/images/night-cherry.jpg);
  }
</style>
