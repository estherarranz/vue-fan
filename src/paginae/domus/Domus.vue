<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>


<template>

<div class="bg-[rgb(21,25,52)] h-screen text-white font-sans text-center flex flex-col items-center justify-center gap-12 w-screen fixed overflow-hidden">

  
 <img class="absolute opacity-20" src="/imagines/tonitrui.png" alt="">

  <h1 class="text text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
    <span class="text-[rgb(24,188,246)]">Diseño</span> Web y 
    <br>
    Apps <span class="text-[rgb(24,188,246)]">Interactivas</span>
  </h1>

  <p class="text-lg md:text-2xl">
    Aprendiendo a crear aplicaciones Web
  </p>
  
  <div class="z-10">
    <Button variant="default" class="mr-2 bg-[rgb(24,188,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,188,246,0.7)] transition-all">
    <RouterLink to="/batman">Batman</RouterLink></Button>

    <Button variant="default"class="mr-2 bg-[rgb(24,188,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,188,246,0.7)] transition-all">
    <RouterLink to="/indecision">Si o No</RouterLink></Button>

    <Button variant="default" class="mr-2 bg-[rgb(24,188,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,188,246,0.7)] transition-all">
    <RouterLink to="/simpsons">Simpsons</RouterLink></Button>

    <Button variant="default" class="mr-2 bg-[rgb(24,188,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,188,246,0.7)] transition-all">
    <RouterLink to="/https://www.upv.es">UPV</RouterLink></Button>

  </div>

</div>
  
</template>





<style scoped>


</style>