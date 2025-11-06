<script setup>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";


const name = ref("");
const phone = ref("");
const mail = ref("");
const mesaj = ref("");

function sendMessage() {
  if (!name.value || !phone.value || !mail.value || !mesaj.value) {
    alert("Zəhmət olmasa bütün xanaları doldurun!");
    return;
  }

  if (!mail.value.includes("@")) {
    alert("Düzgün e-mail daxil edin!");
    return;
  }

  alert(
    `Hörmətli ${name.value}, siz qeydiyyatdan keçdiniz. Bir neçə dəqiqə sonra ${mail.value} e-mail adresinizə və yaxud da ${phone.value} nömrənizə bildiriş gələcək. Bizi seçdiyiniz üçün təşəkkürlər.`
  );
}
</script>

<template>
  <section class="flex flex-col justify-center items-center bg-gray-900 py-16 text-white">
    <h3
      class="font-montserrat font-bold text-[48px] text-white leading-[150%] tracking-[0.12em] mb-12 text-center"
    >
      Bizimlə əlaqə saxlayın
    </h3>

    <div class="text-center max-w-3xl flex flex-col gap-5 space-y-4 mb-12" >
      <p class="bg-gray-800 rounded-2xl p-4" style="padding: 1rem;">
        HMC Company 2013-cü ildən etibarən informasiya texnologiyaları sahəsində fəaliyyət göstərir.
        Biz kiçik və iri bizneslərə yüksək keyfiyyətli İKT xidmətləri təqdim edirik.
        Təcrübəli mütəxəssislərimiz və qabaqcıl texnologiyalarımızla təhlükəsiz, etibarlı və innovativ
        həllər təklif edirik.
      </p>
      <p class="bg-gray-800 rounded-2xl p-4" style="padding: 1rem;">
        HMC Company olaraq hər zaman müştərilərimizin suallarına və təkliflərinə açığıq.
        Aşağıdakı bölmədən bizimlə əlaqə yarada və xidmətlərimiz barədə daha ətraflı məlumat ala bilərsiniz.
      </p>
    </div>

    <div class="flex flex-col items-center justify-center gap-10 w-full px-6">
      <h4
        class="font-montserrat font-bold text-[24px] text-white leading-[150%] tracking-[0.12em] mb-6 text-center"
      >
        Bizimlə əlaqə qurmaq istəsəz, zəhmət olmasa qeydiyyatdan keçin
      </h4>

      <form class="flex flex-col gap-5 w-full lg:w-1/2" @submit.prevent="sendMessage">
        <div class="relative">
          <label
            for="name"
            class="absolute -top-3 left-4 text-[16px] font-semibold text-white bg-gray-900 px-2"
            style="padding: 0.2em;"
          >
            Ad və Soyad
          </label>
          <input
            id="name"
            v-model="name"
            type="text"
            maxlength="100"
            class="w-full border-2 border-gray-600 bg-gray-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            style="padding: 1rem;"          
            />
        </div>

        <div class="relative">
          <label
            for="phone"
            class="absolute -top-3 left-4 text-[16px] font-semibold text-white bg-gray-900 px-2"
            style="padding: 0.2rem;"          
            >
            Əlaqə nömrəsi
          </label>
          <input
            id="phone"
            v-model="phone"
            type="text"
            maxlength="100"
            class="w-full border-2 border-gray-600 bg-gray-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            style="padding: 1rem;"          
            />
        </div>

        <div class="relative">
          <label
            for="mail"
            class="absolute -top-3 left-4 text-[16px] font-semibold text-white bg-gray-900 px-2"
            style="padding: 0.2rem;"          
            >
            Email
          </label>
          <input
            id="mail"
            v-model="mail"
            type="email"
            maxlength="100"
            class="w-full border-2 border-gray-600 bg-gray-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            style="padding: 1rem;"

            />
        </div>

        <div class="relative">
          <label
            for="mesaj"
            class="absolute -top-3 left-4 text-[16px] font-semibold text-white bg-gray-900 px-2 "
            style="padding: 0.2rem;"          
            >
            Mesajınız
          </label>
          <textarea
            id="mesaj"
            v-model="mesaj"
            maxlength="300"
            class="w-full h-[6rem] border-2 border-gray-600 bg-gray-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none"
            style="padding: 1rem;"
            ></textarea>
        </div>

        <button
          type="submit"
          class="bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 ease-in hover:bg-blue-500"
          style="padding: 1rem;"
          >
          Göndər
        </button>
      </form>
    </div>

    <div class="flex flex-col justify-center items-center mt-16 space-y-8" style="padding: 0.5rem;">
      <h4 class="font-montserrat font-bold text-[24px] text-white leading-[150%] tracking-[0.12em]">
        Əlaqə məlumatları
      </h4>
      <div class="flex items-center gap-5 justify-between max-sm:flex-col">
        <div>
          <img src="../assets/Images/map.jpg" alt="Map" class="rounded-2xl shadow-lg w-[400px]" />
        </div>

        <div class="grid grid-cols-2 gap-10 w-[80vw] lg:w-1/2 ">
          <div class="flex items-start gap-4">
            <i class="pi pi-map-marker text-2xl text-blue-400 p-3 bg-gray-800 rounded-full"></i>
            <div>
              <p class="font-semibold">Ünvan:</p>
              <p class="text-xs">Bakı, Azərbaycan</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="pi pi-envelope text-2xl text-blue-400 p-3 bg-gray-800 rounded-full"></i>
            <div>
              <p class="font-semibold">Email:</p>
              <p class="text-xs">info@hmc.az</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="pi pi-mobile text-2xl text-blue-400 p-3 bg-gray-800 rounded-full"></i>
            <div>
              <p class="font-semibold">Telefon:</p>
              <p class="text-xs">+994 12 310 55 11</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="pi pi-phone text-2xl text-blue-400 p-3 bg-gray-800 rounded-full"></i>
            <div>
              <p class="font-semibold">Mobil:</p>
              <p class="text-xs">+994 77 477 55 11</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>

  <Footer />
</template>

<style scoped>
i,
input,
textarea {
  padding: 1rem;
}
</style>
