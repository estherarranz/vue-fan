<script setup lang="ts">

import { ref } from 'vue'; import CardContent from '@/components/ui/card/CardContent.vue';
import { characters } from './Data';

const listaSimpsons = ref( characters.slice(0, 6) )


</script>


<template>
    <div class="flex flex-col items-center justify-center w-full max-w-[1400px]">

        <div class="text-center">

            <h1 class="font-bold text-xl mb-0.5">Simpsons Quote App</h1>
            <p class="mb-5">Click on the quote of your favourite character</p>

        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">

            <Card 
                v-for="character in listaSimpsons"
                :key="character.id"
                class="cursor-pointer w-[220px] h-[240px] hover:bg-[#ee3133] hover:text-white transition-colors"
                >
                <CardContent class="flex flex-col items-center gap-1 w-full px-0">

                    <img 
                    src="/imagines/simpsons/homer.png" alt=""
                    class = "w-48 h-42 object-cover object-top mt-2 bg-amber-300 border border-b-blue-300">
                    
                    <h2>Homer Simpson</h2>
                </CardContent>
            </Card>
        </div>

    </div>
</template>

<style scoped>

</style>
