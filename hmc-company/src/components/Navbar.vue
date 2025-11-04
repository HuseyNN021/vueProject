<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Mobil menyunu idarə edən dəyişən
const isMenuOpen = ref(false)

// Toggle funksiyası
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-white shadow-sm rounded-b-2xl sticky top-0 z-50">
    <div class="flex flex-wrap items-center justify-between px-4 py-3 md:py-4">
      
      <div class="flex justify-between items-center w-full md:w-auto">
        <RouterLink to="/">
          <img 
            src="https://www.hmc.az/assets/images/logo.svg" 
            alt="Logo"
            class="h-10 md:h-12"
          >
        </RouterLink>

        <button 
          @click="toggleMenu"
          class="text-gray-700 text-2xl md:hidden focus:outline-none"
        >
          <i :class="isMenuOpen ? 'pi pi-times' : 'pi pi-align-justify'"></i>
        </button>
      </div>

      <nav 
        :class="[
          'w-full md:flex md:items-center md:justify-center md:w-auto transition-all duration-300 ease-in-out',
          isMenuOpen ? 'block' : 'hidden'
        ]"
      >
        <ul class="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-gray-600 font-medium mt-3 md:mt-0">
          <RouterLink to="/" @click="isMenuOpen=false">
            <li class="hover:text-blue-600 transition-colors cursor-pointer">Əsas səhifə</li>
          </RouterLink>
          <RouterLink to="/services" @click="isMenuOpen=false">
            <li class="hover:text-blue-600 transition-colors cursor-pointer">Xidmətlərimiz</li>
          </RouterLink>
          <RouterLink to="/aboutUs" @click="isMenuOpen=false">
            <li class="hover:text-blue-600 transition-colors cursor-pointer">Haqqımızda</li>
          </RouterLink>
          <RouterLink to="/contactUs" @click="isMenuOpen=false">
            <li class="hover:text-blue-600 transition-colors cursor-pointer">Əlaqə</li>
          </RouterLink>
        </ul>
      </nav>

      <div class="hidden md:flex justify-center items-center w-auto">
        <input 
          type="text" 
          placeholder="Axtarış..." 
          class="w-full max-w-xs border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
  header{
    padding: 1rem;
  } 
  input{
    width: 100%;                    
    max-width: 16rem;               
    border: 1px solid #d1d5db;      
    border-radius: 1rem;         
    padding: 0.5rem 0.75rem;         
    font-size: 0.875rem;             
    transition: all 0.2s ease-in-out;
  }

  input:focus {
    outline: none;                   
    border-color: #3b82f6;         
    box-shadow: 0 0 0 2px #3b82f6;   
  }
</style>
