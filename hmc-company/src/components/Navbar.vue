<script setup></script>

<template>
  <div class="flex flex-col md:flex-row items-center md:justify-between px-4 py-2">
    
    <!-- Logo -->
    <div class="flex justify-center items-center w-full md:w-1/4 mb-2 md:mb-0">
      <img class="navLogo" src="https://www.hmc.az/assets/images/logo.svg" alt="Logo">
    </div>

    <!-- Menu links -->
    <div class="flex justify-center items-center w-full md:w-1/2 mb-2 md:mb-0">
      <ul class="flex flex-col md:flex-row justify-around w-full">
        <li class="py-1 md:py-0">Əsas səhifə</li>
        <li class="py-1 md:py-0">Xidmətlərimiz</li>
        <li class="py-1 md:py-0">Haqqımızda</li>
        <li class="py-1 md:py-0">Əlaqə</li>
      </ul>
    </div>

    <!-- Search input -->
    <div class=" flex justify-center items-center w-full md:w-1/4">
      <input 
        type="text" 
        placeholder="Axtarış..." 
      >
    </div>

  </div>
</template>

<style scoped>
.navLogo{
    width: 100px;
    height: 86px;
    object-fit: contain;
}
input {
  width: 100%;                /* w-full */
  max-width: 20rem;           /* max-w-xs ~ 20rem */
  padding: 0.5rem 0.75rem;    /* py-2 px-3 */
  font-size: 0.875rem;        /* text-sm */
  border: 1px solid #D1D5DB;  /* border border-gray-300 */
  border-radius: 0.5rem;      /* rounded-lg */
  outline: none;              /* focus:outline-none */
  transition: border-color 0.2s, box-shadow 0.2s; /* focus transition */
}

input:focus {
  border-color: #3B82F6;      /* focus:border-blue-500 */
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* focus:ring-2 focus:ring-blue-500 */
}

</style>
