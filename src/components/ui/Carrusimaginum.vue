<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

interface Props {
    photos:string[]
    basePath:string
    autoplayDelay?:number
    loop?:boolean
    dragFree?:boolean
}

const props = withDefaults(defineProps<Props>(), {

    autoplayDelay:2000,
    loop:true,
    dragFree:true,

})

</script>

<template>

    <Carousel class="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-gray-900 text-white"
 :opts="{
  dragFree: props.dragFree,
  loop:props.loop,
  
 }"
 :plugins="[Autoplay({
      delay: props.autoplayDelay,
    })]"
 >
    <CarouselContent>
      <CarouselItem v-for="i in photos.length" :key="i">
        <div class="p-1">
          <Card class="bg-gray-900 border-none">
            <CardContent class="flex aspect-6/4 items-center justify-center p-6">
              <img 
              
              :src="`/imagines/batman/${photos[i-1]}.jpg`" 
              
              :alt="`Imagen ${i-1} de Batman`"
              
              class="w-full h-full object-cover"
              >
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden md:flex justify-center items-center" />
    <CarouselNext class="hidden md:flex justify-center items-center"/>
  </Carousel>

</template>
