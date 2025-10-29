<script setup></script>

<template>
  <header class="bg-white shadow-sm">
    <div class="flex flex-wrap items-center justify-between px-4 py-3 md:py-4">
      
      <div class="flex justify-center items-center w-full md:w-auto mb-3 md:mb-0">
        <img 
          src="https://www.hmc.az/assets/images/logo.svg" 
          alt="Logo"
          class="h-10 md:h-12"
        >
      </div>

      <nav class="w-full md:flex md:items-center md:justify-center md:w-auto">
        <ul class="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-gray-700 font-medium">
          <li class="hover:text-blue-600 transition-colors cursor-pointer">Əsas səhifə</li>
          <li class="hover:text-blue-600 transition-colors cursor-pointer">Xidmətlərimiz</li>
          <li class="hover:text-blue-600 transition-colors cursor-pointer">Haqqımızda</li>
          <li class="hover:text-blue-600 transition-colors cursor-pointer">Əlaqə</li>
        </ul>
      </nav>

      <div class="flex justify-center items-center w-full md:w-auto mt-3 md:mt-0">
        <input 
          type="text" 
          placeholder="Axtarış..." 
        >
      </div>

    </div>
  </header>
</template>

<style scoped>
  input{
    width: 100%;                    
    max-width: 16rem;               
    border: 1px solid #d1d5db;      
    border-radius: 0.375rem;         
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
