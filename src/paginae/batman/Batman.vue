
<script lang="ts" setup>

import { scrollToSection} from '@/utils/scrollToSection';

import Carrusimaginum from '@/components/ui/Carrusimaginum.vue';
import { useMouseMotio } from '@/composables/useMouseMotio';
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import Label from '@/components/ui/label/Label.vue';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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

import { Calendar } from '@/components/ui/calendar'

import type {DateValue} from 'reka-ui';
import { ref } from 'vue';

import { Instagram, Linkedin, Loader2, LucideBadgeCheck, Mail, MapPin, MessageCircle, Phone, X } from 'lucide-vue-next'

import { toast } from 'vue-sonner'


import { Toggle } from '@/components/ui/toggle'
import { resolve } from 'path';
import { MessageChannel } from 'worker_threads';



const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"];

const { mousePositione, cumMouseMove, cumMouseLeave, } = useMouseMotio()

const MenuItems = [
  {
    label: 'Portada',
    href: '#',
    onClick: () => scrollToSection('#')
  },

  {
    label: 'Vehículos',
    href: '#vehiculis',
    onClick: () => scrollToSection('#vehiculis')
  },

  {
    label: 'Imágenes',
    href: '#videre',
    onClick: () => scrollToSection('#videre')
  },

  {
    label: 'Contacto',
    href: '#contactus',
    onClick: () => scrollToSection('#contactus')
  }
]

const dies = ref<DateValue>()

const nomen = ref<string>('')
const cognomen = ref<string>('')
const missio = ref<string>('')


const estLoading = ref<boolean>(false)

const mittereSubmit = async () => {

estLoading.value = true 

toast(`Solicitud enviada correctamente

- Nombre: ${ nomen.value } ${ cognomen.value }
- Misión: ${ missio.value }

Fecha:  ${dies.value ? `${ dies.value.day}/${ dies.value.month}/ ${ dies.value.year }`: 'No especificada'}`, {

duration:4000,
position: "top-right",
icon: LucideBadgeCheck,
style: {
  background: "#201c3b",
  color: "#fff",
  whiteSpace:"pre-wrap",
}

})



await new Promise(resolve=> setTimeout(resolve, 2000))

estLoading.value=false

nomen.value = ''
cognomen.value = ''
missio.value = ''
dies.value = undefined


}





</script>


<template>
    < class="batman"> 

     <NavigatorPrimarius :items="MenuItems" home-route="/"/>


  <header class="titulus">
    <h1>Batman</h1>
    <div id="titulus-batman" 
    class="titulus-img"
    @mousemove="cumMouseMove"
    @mouseleave="cumMouseLeave"
    :style="{
      backgroundPositionX: `calc(50% + ${mousePositione.x})px`, 
      backgroundPositionY: `calc(50% + ${mousePositione.y})px`, 
      transition: 'background-position 0.1s ease-out',
    }"
    ></div>
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
  :autoplay-delay="3000"
 />
 </section>

 <section id="contactus" class="w-full py-12 bg-gray-100">

  <div class="container mx-auto max-w-5xl px-4">

    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta con Batman</h2>
          
    <div class="flex flex-col lg:flex-row gap-8 items-center">

            <!-- Mapa de Google Maps -->
      <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <div class="aspect-square">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1745.9774364572324!2d-0.34587451332735236!3d39.48366030170448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultad%20de%20Bellas%20Artes%20BBAA!5e1!3m2!1ses!2ses!4v1776799155258!5m2!1ses!2ses" 
          width="600" 
          height="450" 
          style="{ border: 0 }" 
          allowfullscreen 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

            <!-- Formulario -->
      <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
        <form  
          class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square"
          @submit.prevent="mittereSubmit"
        >
          <div class="space-y-2">
                  
           <Label for="nomen">Nombre</Label>
           <Input id="nomen" v-model="nomen" required/>

          </div>
                
          <div class="space-y-2">
              
           <Label for="cognomen">Apellidos</Label>
           <Input id="cognomen" v-model="cognomen" required/>

          </div>

          <div class="space-y-2">
          <Select required v-model="missio">

            <SelectTrigger class="border-gray-200 bg-white text-gray-900">
              <SelectValue placeholder="Selecciona una misión" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rescatare">
                Rescate de rehenes
              </SelectItem>
              <SelectItem value="investigare">
                Investigación criminal
              </SelectItem>
              <SelectItem value="persequi">
                Persecución de villanos
              </SelectItem>
              <SelectItem value="defendere">
                Defensa de Gotham
              </SelectItem>
            </SelectContent>
          </Select>

          </div>

          <div class="space-y-2">

           <Label>Fecha de la misión</Label>
            <Popover>

              <PopoverTrigger as-child>
                <Button variant="outline">
                  <span v-if="dies">
                    {{ dies.day }}/{{ dies.month }}/{{ dies.year }}
                  </span>

                  <span v-else class="text-gray-500">
                    Selecciona una fecha

                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-80">
                <Calendar v-model="dies"/>
              </PopoverContent>
            </Popover>

          </div>

          <Button
           type="submit"
           class="w-full bg-[rgb (106,90,205) hover: bg-[(88,75,171)] text-white text-md mt-4"
           :disabled="estLoading"


          > 
            <Loader2 v-if= "estLoading" class="animate-spin h-4 w-4 mar-2"/>
            <span v-if="estLoading">Enviando...</span>
            <span v-else="estLoading">Enviar solicitud</span>
          
            Enviar solicitud

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

            <Phone class="w-5 h-5"/>
            

            +1 (555) 123-4567

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">
             <Mail class="w-5 h-5"/>

            batman@wayneenterprises.com

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">
             <MapPin class="w-5 h-5"/>

            Wayne Manor, Gotham City

          </p>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="space-y-4 text-center md:text-left text-gray-400">
        <h3 class="text-xl font-bold text-white">Síguenos</h3>
        <div class="flex gap-8 justify-center">

           <X class="w-10 h-10"/>
           <Instagram class="w-10 h-10"/>
           <Linkedin class="w-10 h-10"/>
           <MessageCircle class="w-10 h-10"/>
          
              
        </div>
    </div>
  </div>
</footer>

  
</template>

         
<style scoped>

  .batman {
  font-family: Arial, Helvetica, sans-serif;
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

