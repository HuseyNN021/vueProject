<script setup>
import ShowService from '@/components/ShowService.vue';
import Footer from '@/components/Footer.vue';
import Comments from '@/components/Comments.vue';
import { ref } from 'vue';

const comments=ref([
    {
      name: "Elvin Məmmədov",
      position: "IT meneceri, TechnoSoft MMC",
      comment: "HMC Company ilə əməkdaşlıq etdiyimizdən bəri serverlərimiz daha sabit və təhlükəsiz işləyir. Texniki dəstək komandası çox operativdir."
    },
    {
      name: "Aygün Rzayeva",
      position: "Direktor, Nova Digital",
      comment: "HMC-nin bulud xidmətləri sayəsində infrastruktur xərclərimiz azaldı və iş proseslərimiz sürətləndi. Peşəkar komandaya təşəkkürlər!"
    },
    {
      name: "Murad Əliyev",
      position: "Layihə rəhbəri, DataLine",
      review: "Şirkət müasir texnologiyalardan istifadə edir və bütün proseslər çox şəffaf şəkildə həyata keçirilir. Ən vacibi isə etibarlılıqdır."
    },
    {
      name: "Nigar Səlimova",
      position: "Marketinq rəhbəri, BrightNet",
      review: "Bizə təqdim etdikləri korporativ mail həlləri çox uğurlu oldu. Sistem sabit işləyir və istifadəçilər üçün çox rahatdır."
    },
    {
      name: "Kamran Hüseynov",
      position: "CEO, CloudVision",
      comment: "HMC Company komandası işinə ciddi yanaşır. Hər zaman dəstəyə hazırdırlar və texniki məsələləri operativ həll edirlər."
    },
    {
      name: "Kamran Hüseynov",
      position: "CEO, CloudVision",
      comment: "HMC Company komandası işinə ciddi yanaşır. Hər zaman dəstəyə hazırdırlar və texniki məsələləri operativ həll edirlər."
    }
])

</script>

<template>

<section class="relative flex flex-col justify-center items-center">
  <div class="absolute inset-0  bg-[url('../assets/Images/futuristic-white-technology-background_23-2148390336.jpg')] bg-cover bg-center blur-sm opacity-100 z-0"></div>

  <h3 class="relative z-10 font-montserrat font-bold text-[48px] text-[#666] leading-[150%] tracking-[0.12em] mb-12">
    HMC Company
  </h3>
  <div class="relative z-10 flex justify-around w-full items-center divPadding">
    <img src="../assets/Images/HMC.jpg" class="w-[30vw] rounded-2xl" alt="HMC" />
    <p class="w-[50vw]  bg-blue-200 rounded-2xl font-montserrat not-italic font-normal text-base text-blue-950 leading-[150%] tracking-[0.12em] text-center">
      "HMC Company" 2013-cü ildə fəaliyyətə başlamışdır. İstər kiçik ölçülü, istərsə də böyük ölçülü şirkətlərə peşəkar 
      səviyyədə İnformasiya Kommunikasiya Texnologiyaları (İKT) xidmətləri göstəririk. Bu sahədə əsas fərqli cəhətimiz ən 
      qabaqcıl texnoloji biliklərə və təcrübəyə sahib aparıcı mütəxəssislərimizin olması və dünyanın ən qabaqcıl şirkətləri ilə 
      əməkdaşlıq etməyimizdir. Təhlükəsizlik və etibarlılığın ən yüksək tələblərinə cavab verən Məlumat Mərkəzlərində bulud serverlər təklif edirik.
    </p>
  </div>
  <div>

</div>
</section>
<ShowService/>
<section class="flex flex-col justify-center items-center">
    <h3 class="relative z-10 font-montserrat font-bold text-[30px] text-[#666] leading-[150%] tracking-[0.12em] mb-12">
      Müştəri rəyləri
    </h3>
        <Comments v-for="value in comments" :name="value.name" :position="value.position" :comment="comments[0].comment"/>
</section>
<Footer/>
</template>

<style scoped>
p,.divPadding{
    padding: 1rem;
}

</style>