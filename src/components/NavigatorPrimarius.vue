
<script setup lang="ts">

import { House, Menu } from 'lucide-vue-next';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { onMounted, ref } from 'vue';

import { Toggle } from '@/components/ui/toggle'

interface MenuItems {
    label: string
    href: string
    onClick: () => void 

}

interface Props {
    items: MenuItems[]
    homeRoute ?: string
}

withDefaults (defineProps<Props>(),{
    homeRoute: '/'
})



const videreMenu = ref<boolean>(true)

const handleResize = ()  => {
  if (window.innerWidth <=640) {
    videreMenu.value = false
  } else {
    videreMenu.value = true

  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onMounted(() => {
window.removeEventListener('resize', handleResize)
})



</script>



<template>
    <div>
    <Toggle 
      class="fixed top-2 right-4 bg-slate-500" 
      @click= "videreMenu = !videreMenu">

      <Menu></Menu>
      
    </Toggle>

    <nav v-if="videreMenu" class="extra-nav flex flex-col sm:flex-row justify-between px-3">
   <RouterLink to="homeRoute">
    <House class="icon-home"/>
  </RouterLink>

  <NavigationMenu>
    <NavigationMenuList class="flex flex-col sm:flex-row">

       <NavigationMenuItem v-for="item in items" :key="item.label">
        <a 
        :href="item.href" 
        @click.prevent="item.onClick ? item.onClick() : null">
      
          <NavigationMenuLink :class="[navigationMenuTriggerStyle(),'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
            ({item.label})
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>  

    </NavigationMenuList>
  </NavigationMenu>
  </nav>


    </div>


</template>



<style scoped>

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

</style>