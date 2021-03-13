<template>
  <a href="https://akabe.co/" target="_blank" rel="noopener" class="block">
    <div class="bekocard">
      <h3 class="font-semibold md:text-lg">赤べこからパワーを</h3>
      <p class="text-xs md:text-sm">福島県会津地方に伝わる民芸品「赤べこ」。無病息災のお守りとしても知られています。</p>
    </div>
  </a>
</template>

<style lang="postcss">
  .bekocard {
    @apply my-3 shadow-lg pr-4 bg-red-600 dark:bg-red-900 bg-opacity-60 bg-clip-padding;
    @apply border border-red-800 rounded-xl backdrop-blur text-gray-200;
    @apply grid bg-no-repeat bg-contain bg-left pl-40;
    min-height: 5rem; /* "min-h-20" */
    background-image: url(~/assets/images/beko3.jpg);
  }
  @media (max-width: 340px) {
    /* measure for smaller devices, e.g. iPhone SE 1st */
    .bekocard {
      background-image: url(~/assets/images/beko.png);
    }
  }
  .bekocard :first-child {
    @apply self-center justify-center;
  }
</style>
