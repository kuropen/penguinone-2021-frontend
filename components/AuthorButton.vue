<template>
  <nuxt-link v-if="to.charAt(0) === '/'" v-tooltip="tooltip || label" :to="to" class="no-underline block">
    <div class="author-btn" :class="color">
      <img v-if="image" :src="image" alt="" class="">
      <font-awesome-icon v-else :icon="icon" />
      <span class="sr-only">
        {{ label }}
      </span>
    </div>
  </nuxt-link>
  <a v-else v-tooltip="tooltip || label" :href="to" class="no-underline block">
    <div class="author-btn" :class="color">
      <img v-if="image" :src="image" alt="" class="">
      <font-awesome-icon v-else :icon="icon" />
      <span class="sr-only">
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
      default: 'bg-gray-200 dark:bg-gray-900 border-blue-300 dark:border-indigo-800 text-gray-900 dark:text-gray-100'
    }
  }
}
</script>

<style lang="postcss">
  .author-btn {
    @apply shadow bg-opacity-60 bg-clip-padding;
    @apply border rounded backdrop-blur h-12 w-12 grid;
  }
  .author-btn :not(.author-label):first-of-type {
    @apply text-2xl m-auto self-center justify-center;
  }
  .author-btn img {
    @apply w-8 rounded-lg;
  }
</style>
