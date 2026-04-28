<script lang="ts" setup>

import Button from '@/components/ui/button/Button.vue';

</script>

 
<template>

   <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

    <header class="bg-[#ffde00] w-full border border-black">

        <div class="flex flex-col md:flex-row items-center justify-between p-3 mx-auto max-w-[1400px] md:px-20">

            <LogoSimpsons estilus="w-[8rem] h-auto" />
         
            <div class="flex gap-6 pt-3">
                <RouterLink to="/simpsons/gallery" active-class="font-bold">
            
                  Characters

                </RouterLink>
        
                 <RouterLink to="/simpsons/about" active-class="font-bold">
         
                   About

                </RouterLink>
        
                <Button variant="tertiarius" size="elongatis" class="bg-[#ee3133] hover: bg-[#ffde00] focus: bg-[#ffde01]">
                    <RouterLink to="/simpsons/" active-class="font-bold">
            
                      Exit

                    </RouterLink>

                </Button>


            </div>
        </div>

        
    </header>

    <main>
         <RouterView/>
    </main>

    <footer class="bg-[#ffde00] w-full border border-black text-center py-6">

        <div>
	       <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2023
        </div>

        <small>
	      This app was done by Esther Arranz
        </small>

     

    </footer>

   </div>

</template>

<style scoped></style>
