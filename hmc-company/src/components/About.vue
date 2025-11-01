<script setup>
</script>

<template>
  <section class="relative flex flex-col items-center justify-center gap-2 bg-black/90 overflow-hidden">
    <div 
      class="absolute inset-0 bg-[url('../assets/Images/futuristic-white-technology-background_23-2148390336.jpg')] bg-cover bg-center blur-sm"
    ></div>

    <div class="relative z-10 flex flex-col items-center justify-center gap-8 py-8">
      <h1 class="font-montserrat font-bold text-5xl tracking-[0.1em] leading-[110%] ">
        Haqqımızda
      </h1>

      <div class="flex items-center justify-around max-sm:flex-col max-sm:gap-6">
        <div>
          <img src="https://www.hmc.az/assets/images/macbook.png" class="max-sm:w-[70vw]" alt="Macbook" />
        </div>
        <div class="w-[550px] flex flex-col items-center justify-center gap-3 text-center">
          <h2 class="font-montserrat font-bold text-4xl tracking-[0.1em] leading-[110%]">
            Biz kimik?
          </h2>
          <p class=" text-sm leading-relaxed">
            “HMC Company” 2013-cü ildə fəaliyyətə başlamışdır. İstər kiçik ölçülü, istərsə də böyük
            ölçülü şirkətlərə peşəkar səviyyədə İnformasiya Kommunikasiya Texnologiyaları (İKT)
            xidmətləri göstəririk. Bu sahədə əsas fərqli cəhətimiz ən qabaqcıl texnoloji biliklərə və
            təcrübəyə sahib aparıcı mütəxəssislərimizin olması və dünyanın ən qabaqcıl şirkətləri ilə
            əməkdaşlıq etməyimizdir. Təhlükəsizlik və etibarlılığın ən yüksək tələblərinə cavab verən
            Məlumat Mərkəzlərində bulud serverlər təklif edirik.
          </p>
          <button class="rounded-xl border  border-gray-500  hover:bg-black hover:text-amber-100 transition-all">
            Daha ətrafı
          </button>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
button{
    padding: 1rem;
}
</style>