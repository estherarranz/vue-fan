<script setup lang="ts">
import type { RouterView } from 'vue-router';

import { Toaster  as SonnerToaster} from '@/components/ui/sonner'
import 'vue-sonner/style.css'



</script>

<template>
  <main>
    <RouterView />
    <SonnerToaster />
   
  </main>
</template>

<style scoped>



</style>
