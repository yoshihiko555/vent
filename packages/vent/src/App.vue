<template>
  <div>
    <h1 class="title">Welcome Vent!!</h1>
    <ve-button-vue />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import veButtonVue from '~/components/ve-button.vue'
  export default defineComponent({
    components: { veButtonVue },
    setup() {
      return {}
    },
  })
</script>

<style scoped>
  .title {
    @apply text-2xl;
  }
</style>
