<script setup lang="ts">
import { ref } from 'vue';



const imagoCirca = ref<string>('lisa.png')

</script>


<template>
    <div class="flex flex-col lg:flex-row lg: justify-between max-w-[1400px] md:items-center w-full md:mx-auto my-8 gap-8 px-5 md:px-20">

        <figure class="flex justify-center min-w-min order-2 lg:order-1 h-[400px] lg:h-[500px]">
            <img 
                :src="`/imagines/simpsons/${ imagoCirca }`"
                alt=""
                class="object-contain h-full w-auto"
                @mouseenter="imagoCirca = 'marge.png'"
                @mouseleave="imagoCirca = 'lisa.png'"
            >
        </figure>

        <div class="flex flex-col gap-4 order-1 text-center lg:text-left">

	    <h1 class="font-bold text-xl lg:text-5xl mb-5"> 
		    About the Simpsons Quote App
	    </h1>

        <div class="lg:max-w-3xl">
            <p class="mb-5">
                The Simpsons is a beloved animated television show that has been on the air since 1989, and it has a massive following of fans who love the show's humor, characters, and memorable moments. The show has also become a cultural phenomenon, with many of its characters and catchphrases becoming part of the popular lexicon.
            </p>
                    
            <p class="mb-5">
                Knowing quotes from The Simpsons can be cool for a few reasons. First, it can help you connect with other fans of the show and spark conversations about favorite episodes, characters, and jokes. Second, many of the show's quotes have become iconic and are often referenced in popular culture, so knowing them can make you feel more in tune with current trends and references.
            </p>

            <p class="mb-5">
                Furthermore, The Simpsons has often tackled social and political issues through satire and parody, making its quotes more than just funny one-liners. Being familiar with the show's commentary on current events and societal trends can also make you more aware and engaged with the world around you.
            </p>

            <p class="mb-5">
                API and images:
                <a className="hover:underline focus:underline" href="https://thesimpsonsquoteapi.glitch.me/quotes">
                    https://thesimpsonsquoteapi.glitch.me/quotes
                </a>
            </p>
        </div>
    </div>

    </div>
</template>

<style scoped></style>