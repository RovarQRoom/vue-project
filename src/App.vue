<script setup lang="ts">
import { onMounted } from 'vue'
import { type IStaticMethods } from 'preline/preline'
import NavbarHeaderComponent from './components/NavbarHeader.Component.vue'
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit()
  }, 100)
})
</script>

<template>
  <NavbarHeaderComponent />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
