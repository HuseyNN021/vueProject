<script setup>
import 'primeicons/primeicons.css'
</script>

<template>
  <section class="flex flex-col items-center py-16 px-6 bg-gray-50">
    <h3 class="font-montserrat font-bold text-[48px] text-[#666] leading-[150%] tracking-[0.12em] mb-12">
      Bizimlə əlaqə
    </h3>

    <div class="flex flex-col  lg:flex-row md:flex-row  justify-between items-center gap-16 max-w-6xl w-full">
      <div class="flex flex-col gap-6 w-full lg:w-1/2">
        <div class="flex items-start gap-4">
          <i class="pi pi-map-marker text-2xl text-[#666] p-3 bg-gray-200 rounded-full"></i>
          <div>
            <p class="font-semibold text-[#666]">Ünvan:</p>
            <p class="text-[#666]">Bakı, Azərbaycan</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <i class="pi pi-envelope text-2xl text-[#666] p-3 bg-gray-200 rounded-full"></i>
          <div>
            <p class="font-semibold text-[#666]">Email:</p>
            <p class="text-[#666]">info@hmc.az</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <i class="pi pi-mobile text-2xl text-[#666] p-3 bg-gray-200 rounded-full"></i>
          <div>
            <p class="font-semibold text-[#666]">Telefon:</p>
            <p class="text-[#666]">+994 12 310 55 11</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <i class="pi pi-phone text-2xl text-[#666] p-3 bg-gray-200 rounded-full"></i>
          <div>
            <p class="font-semibold text-[#666]">Mobil:</p>
            <p class="text-[#666]">+994 77 477 55 11</p>
          </div>
        </div>

        <div class="mt-4">
          <p class="font-semibold text-[#666] mb-3">Sosial şəbəkələrdə bizi izləyin</p>
          <div class="flex gap-3">
            <i class="pi pi-whatsapp text-white bg-[#666] p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in hover:bg-green-500"></i>
            <i class="pi pi-facebook text-white bg-[#666] p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in hover:bg-blue-600"></i>
            <i class="pi pi-telegram text-white bg-[#666] p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in hover:bg-sky-500"></i>
            <i class="pi pi-youtube text-white bg-[#666] p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in hover:bg-red-600"></i>
            <i class="pi pi-linkedin text-white bg-[#666] p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in hover:bg-blue-700"></i>
          </div>
        </div>
      </div>

      <form class="flex flex-col gap-5 w-full lg:w-1/2">
        <div class="relative">
          <label for="name" class="absolute -top-3 left-4 text-[16px] font-semibold text-[#666] bg-gray-50 px-2">
            Ad və Soyad
          </label>
          <input
            id="name"
            type="text"
            maxlength="100"
            class="w-full border-2 border-[#666] rounded-lg p-3 text-[#666] focus:outline-none focus:ring-2 focus:ring-[#666] transition-all"
          />
        </div>

        <div class="relative">
          <label for="phone" class="absolute -top-3 left-4 text-[16px] font-semibold text-[#666] bg-gray-50 px-2">
            Əlaqə nömrəsi
          </label>
          <input
            id="phone"
            type="text"
            maxlength="100"
            class="w-full border-2 border-[#666] rounded-lg p-3 text-[#666] focus:outline-none focus:ring-2 focus:ring-[#666] transition-all"
          />
        </div>

        <div class="relative">
          <label for="mail" class="absolute -top-3 left-4 text-[16px] font-semibold text-[#666] bg-gray-50 px-2">
            Email
          </label>
          <input
            id="mail"
            type="email"
            maxlength="100"
            class="w-full border-2 border-[#666] rounded-lg p-3 text-[#666] focus:outline-none focus:ring-2 focus:ring-[#666] transition-all"
          />
        </div>

        <div class="relative">
          <label for="mesaj" class="absolute -top-3 left-4 text-[16px] font-semibold text-[#666] bg-gray-50 px-2">
            Mesajınız
          </label>
          <textarea
            id="mesaj"
            maxlength="300"
            class="w-full h-[6rem] border-2 border-[#666] rounded-lg p-3 text-[#666] focus:outline-none focus:ring-2 focus:ring-[#666] transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-[#666] text-white font-semibold py-3 rounded-lg transition-all duration-200 ease-in hover:bg-[#555]"
        >
          Göndər
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>

i{ 
    padding: 0.5rem; 
    }
</style>