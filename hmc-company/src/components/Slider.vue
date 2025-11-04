    <script setup>
    import { ref,defineProps } from 'vue'
    import { RouterLink } from 'vue-router'

import img1 from '../assets/Images/internet-information-technology-concept-laptop-computer-showing-data-processing-screen-122397310.webp'
   
const propsSlider=defineProps({
        data: {
          type: Array,
          default: ()=>[
            {
              title: "Bulud",
              image: img1
            }
          ]
        }
    })

    const showImage = ref(0)
    
 const nextImage = () => {
  showImage.value++
  if (showImage.value >= propsSlider.data.length) showImage.value = 0
}

const prevImage = () => {
  showImage.value--
  if (showImage.value < 0) showImage.value = propsSlider.data.length - 1
}

    </script>


<template>
<main class="relative flex justify-center items-center mt-10 w-full h-[80vh]">
  <div class="absolute inset-0 bg-[url('../assets/Images/Inside_Network.png')] bg-cover bg-center filter blur-sm -z-10"></div>
  <section class="flex items-center gap-8 z-10 w-80vw">
    <button @click="prevImage" class="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[30px] border-orange-950"></button>

    <div class="flex justify-center items-center max-sm:flex-col w-60vw">
      <div class="flex flex-col justify-center items-center">

          <h1 class="font-montserrat font-bold w-[50vw] text-[48px] max-sm:text-[2rem] text-gray-500 leading-[150%] tracking-[0.12em]">{{ propsSlider.data[showImage].title }}</h1>

          <RouterLink to="/services">

            <button id="slideBtn" class="rounded-xl border  border-black  hover:bg-black hover:text-amber-100 transition-all">
              Daha ətrafı
            </button>

          </RouterLink>


      </div>
      <img :src="propsSlider.data[showImage].image" alt="image" class="w-[30vw] h-[50vh] max-lg:h-[30vh] max-sm:hidden  rounded-2xl" />
    
    </div>

    <button @click="nextImage" class="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[30px] border-l-orange-950"></button>
  </section>

</main>
</template>

<style scoped>
  #slideBtn{
    padding: 1rem;
  }
</style>