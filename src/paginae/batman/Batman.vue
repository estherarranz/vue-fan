
<script lang="ts" setup>
import { House } from 'lucide-vue-next';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import Carrusimaginum from '@/components/ui/Carrusimaginum.vue';

import { scrollToSection} from '@/utils/scrollToSection';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import Label from '@/components/ui/label/Label.vue';

import { Calendar } from '@/components/ui/calendar'
import { ref } from 'vue';
import { resolve } from 'path';

const nomen = ref<string>("")
const cognomen = ref<string>("")
const missio = ref<string>("")

const dies = ref<DateValue>()

const estLoading = ref<boolean>

const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"];





const mittereSubmit = async () => {
  await new Promise(resolve=> setTimeout(resolve, 2000))

  

  estLoading.value = false

  nomen.value = ""
  cognomen.value = ""
  missio.value = ""
  dies.value = undefined

  



</script>


<template>
    <div class="batman"> 

      <nav class="extra-nav flex flex-col sm:flex-row justify-between px-3">
   <RouterLink to="/">
    <House class="icon-home"/>
  </RouterLink>

  <NavigationMenu>
    <NavigationMenuList class="flex flex-col sm:flex-row">

       <NavigationMenuItem>
        <a href="#" @click.prevent="scrollToSection('#')">
      
          <NavigationMenuLink :class="[navigationMenuTriggerStyle(),'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
            Portada
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>


      <NavigationMenuItem>
        <a href="#vehiculis" @click.prevent="scrollToSection('#vehiculis')">
          <NavigationMenuLink :class="[navigationMenuTriggerStyle(),'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
            Vehículos
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>

       <NavigationMenuItem>
        <a href="#videre" @click.prevent="scrollToSection('#videre')">
          <NavigationMenuLink :class="[navigationMenuTriggerStyle(),'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
            Imagenes
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>

       <NavigationMenuItem>
        <a href="#contactus" @click.prevent="scrollToSection('#contactus')">
          <NavigationMenuLink :class="[navigationMenuTriggerStyle(),'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
            Contacto
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
  </nav>

  <header class="titulus">
    <h1>Batman</h1>
    <div id="titulus-batman" class="titulus-img"></div>
    <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>


  </header>

  <section id="vehiculis">
  <div class="vehiculis-arca">
    <div class="item unus">
        <div class="notitia">
          <h2>Avión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
          <small>Fabricado en 2005</small>
        </div>
        <img src="/imagines/batman/avion.jpg"/>
      </div>

      <div class="item duo">
        <div class="notitia">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
          <small>Fabricado en 2006</small>
        </div>
        <img src="/imagines/batman/moto.jpg"/>
      </div>
      
      <div class="item tribus">
        <div class="notitia">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
          <small>Fabricado en 2007</small>
        </div>
        <img src="/imagines/batman/car.jpg"/>
      </div>
    </div>

    <div class="vehiculis-titulus">
      <h1>Vehículos de Batman</h1>
    </div>
 </section>


 <section id="videre" class="w-full flex justify-center items-center min-h-[60vh] lg:min-h[95vh] bg-gray-900 text-white">

  <Carrusimaginum
  :photos="photos"
  base-path="/imagines/batman"
  :autoplay-delay="100"

  />

 </section>

<section id="contactus" class="w-full py-12 bg-gray-100">

  <div class="container mx-auto max-w-5xl px-4">

    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta con Batman</h2>
          
    <div class="flex flex-col lg:flex-row gap-8 items-center">

            <!-- Mapa de Google Maps -->
      <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <div class="aspect-square">
          <iframe></iframe>
            
          
        </div>
      </div>

            <!-- Formulario -->
      <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
        <form  class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square"
        
        @submit.prevent="mittereSubmit"

        >
          
        
          <div class="space-y-2">

            <Label for="nomen">Nombre</Label>
            <Input id="nomen" required v-model="nomen"/>
                  
           

          </div>
                
          <div class="space-y-2">

            <Label for="cognomen">Nombre</Label>
            <Input id="cognomen" required v-model="cognomen"/>

          </div>

          <div class="space-y-2">

                  <Select required v - mission = "mission">
              <SelectTrigger>
            <SelectValue placeholder="Selecciona una misión" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Rescatare">
              Rescate de rehenes
            </SelectItem>
            <SelectItem value="Investigare">
              Investigación criminal
            </SelectItem>
            <SelectItem value="Persequi">
              Persecución de villanos
            </SelectItem>
            <SelectItem value="Defendere">
              Defensa de Gotham
            </SelectItem>
            
          </SelectContent>
        </Select>

          </div>

          <div class="space-y-2">

            <Label>Fecha de la misión</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <span v-if="dies">{{ dies.day }}/{{ dies.month }}/{{ dies.year }}</span>
                  
                  <span v-else> Selecciona una fecha</span>

              </Button>
            </PopoverTrigger>
              <Calendar v-model="dies"/>
            </Popover>
          </div>

          <Button type="submit"
          class="w-full bg-[rgb(106,90,205)] hover:bg[rgb(88,75,171)] text-white- text-md mt-4"
          :disabled="estLoading"
          >
          <Loader2 v-if="estLoading" class="mr-2 h-4 w-4 animate-spin"/>
          <span v-if="estLoading"><Enviando...</span>
          </Button>
              
        </form>
      </div>
    </div>
  </div>
</section>

<footer class="w-full bg-gray-900 text-gray-300 py-12">
   <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

    <div class="space-y-4 text-center md:text-left">

      <h3 class="text-xl font-bold text-white">Información de Contacto</h3>
            
        <div class="space-y-2">
          <p class="flex items-center gap-2 justify-center md:justify-start">

            +1 (555) 123-4567

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">

            batman@wayneenterprises.com

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">

            Wayne Manor, Gotham City

          </p>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="space-y-4 text-center md:text-left text-gray-400">
        <h3 class="text-xl font-bold text-white">Síguenos</h3>
        <div class="flex gap-8 justify-center">
        
          Icono de X -
          Icono de Instagram -
          Icono de Linkedin - 
          Icono de MessageCircle
              
        </div>
    </div>
  </div>
</footer>



 </div>
  
</template>

<section id="contactus" class="w-full py-12 bg-gray-100">

  
         
<style scoped>

  .batman {
  font-family: Arial, Helvetica, sans-serif;
}

.icon-home {
  height: 3rem;
  width: 3rem;
  color: slateblue;
}

.icon-home:hover {
  color: white;
  background-color: slateblue;
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}

.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imagines/batman/batman.jpg");
  min-height: 100vh;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
  font-family: batman;
}

.titulus > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
  font-family: batman;
  display: none;
}

@media (min-width: 768px) {
  .titulus > p {
    display: block;
  }
}

#vehiculis {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
}

.vehiculis-arca {
  order: 1;
  display: flex;
  flex-direction: column;
}

.vehiculis-titulus {
  height: 5.5rem; /* 88px */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center
}

.item {
  padding: 1.5rem 0;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.item > img {
  width: 450px;
}

.unus {
  background-color: rgba(220, 220, 220, 0.2) ; 
  order: 2;
}

.duo {
  background-color: rgba(220, 220, 220, 0.8);
}

.tribus {
  background-color: rgba(220, 220, 220, 0.8);
  order: 3;
}

.notitia {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 
.notitia > small {
  font-weight: bold;
  padding: 1rem;
}
 
.notitia > h2 {
 font-size: 1.7rem; 
 font-weight: 600;
 color: rgba(0, 0, 0, 0.7);
 padding-bottom: 1rem;
} 

@media (min-width: 640px) {
  #vehiculis {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  #vehiculis {
    max-width: 900px;
  }

  .item {
    flex-direction: row;
    height: 320px
  }

  .notitia {
    width: 40%;
  }

  .unus > img {
    order: -1;
  }
}

@media (min-width: 1024px) {
  #vehiculis {
    max-width: 1280px;
  }

  .item {
    flex-direction: column;
    height: 560px
  }

  .vehiculis-arca {
    flex-direction: row;
  }

  .notitia {
    width: 90%;
  }
}


</style>

