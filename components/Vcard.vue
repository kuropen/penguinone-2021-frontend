<template>
  <box>
    <div class="vcard">
      <div class="vc-left">
        <img src="/images/penguin.png" alt="アバターのペンギンアイコン">
      </div>
      <div class="vc-right">
        <p class="vc-name">
          Kuropen
        </p>
        <slot />
      </div>
    </div>
  </box>
</template>

<style lang="postcss">
  .vcard {
    @apply py-6 flex flex-row;
  }
  .vc-left {
    @apply flex-initial mr-4;
  }
  .vc-left img {
    @apply h-12 md:h-16 rounded-full;
  }
  .vc-right {
    @apply flex-1;
  }
  .vc-name {
    @apply text-2xl border-indigo-700 border-b-4;
  }
</style>
