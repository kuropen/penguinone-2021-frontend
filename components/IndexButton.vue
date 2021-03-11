<template>
  <nuxt-link v-if="to.charAt(0) === '/'" v-tooltip="tooltip || label" :to="to" class="no-underline">
    <div class="idx-btn" :class="color">
      <img v-if="image" :src="image" alt="" class="">
      <font-awesome-icon v-else :icon="icon" />
      <span class="idx-label">
        {{ label }}
      </span>
    </div>
  </nuxt-link>
  <a v-else v-tooltip="tooltip || label" :href="to" class="no-underline">
    <div class="idx-btn" :class="color">
      <img v-if="image" :src="image" alt="" class="">
      <font-awesome-icon v-else :icon="icon" />
      <span class="idx-label">
        {{ label }}
      </span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    tooltip: {
      type: String,
      default: null
    },
    icon: {
      type: Array,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: '/'
    },
    color: {
      type: String,
      default: 'bg-blue-200 dark:bg-indigo-900 border-blue-300 dark:border-indigo-800 text-gray-900 dark:text-gray-100'
    }
  }
}
</script>

<style lang="postcss">
  .idx-btn {
    @apply shadow px-4 py-4 bg-opacity-60 bg-clip-padding;
    @apply border rounded backdrop-blur md:h-28 md:w-28;
    @apply flex flex-row md:grid border-opacity-60;
  }
  .idx-btn :not(.idx-label):first-of-type {
    @apply text-2xl mr-2 md:text-5xl md:m-auto self-center justify-center;
  }
  .idx-btn img {
    @apply w-10 md:w-auto rounded-lg;
  }
  .idx-label {
    @apply flex-grow md:sr-only self-center justify-center;
  }
</style>
