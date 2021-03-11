<template>
  <div class="bg">
    <div class="container max-w-screen-sm md:mx-auto">
      <site-head />
      <Nuxt />
      <box>
        All rights reserved. Copyright &copy; Kuropen.<br>
        Powered by <a href="https://nuxtjs.org/">Nuxt.js</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>.<br>
        Background: Photo by <a href="https://unsplash.com/@beautifullycapturedphotos1981?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brett Carey</a> on <a href="/s/photos/cherry-blossom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </box>
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
