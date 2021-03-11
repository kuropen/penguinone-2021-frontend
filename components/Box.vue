<template>
  <div class="box">
    <slot />
  </div>
</template>

<style lang="postcss">
  .box {
    @apply my-4 shadow-lg px-4 py-4 bg-blue-200 dark:bg-indigo-900 bg-opacity-60 bg-clip-padding;
    @apply border rounded-xl border-blue-200 dark:border-indigo-900 border-opacity-60 backdrop-blur;
    @apply text-gray-900 dark:text-gray-100;
  }
  .box a:not(.no-underline) {
    @apply underline;
  }
  .box .prose, .box .prose * {
    @apply text-gray-900 dark:text-gray-100;
  }
</style>
