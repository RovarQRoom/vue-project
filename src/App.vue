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
