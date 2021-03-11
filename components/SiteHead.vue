<template>
  <header>
    <div class="flex-grow">
      <box class="titlebox">
        <h1>
          Penguinone
        </h1>
      </box>
    </div>
    <div>
      <nuxt-link to="/">
        <box class="homebox">
          <font-awesome-icon :icon="['fas', 'house-user']" />
        </box>
      </nuxt-link>
    </div>
  </header>
</template>

<style lang="postcss">
  @import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap);
  header {
    @apply flex flex-row;
  }
  .titlebox, .homebox {
    @apply w-min;
  }
  .titlebox h1 {
    @apply text-2xl inline;
    font-weight: 700;
    font-family: Orbitron,sans-serif;
  }
  .homebox {
    @apply text-2xl;
  }
</style>
