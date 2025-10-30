    <script setup>
    import { ref } from 'vue'
    
    import img1 from '../assets/Images/internet-information-technology-concept-laptop-computer-showing-data-processing-screen-122397310.webp'
    import img2 from '../assets/Images/depositphotos_359328654-stock-photo-fiber-optic-cables-connected-optic.jpg'
    import img3 from '../assets/Images/depositphotos_53875805-stock-photo-information-technology-background.jpg'
    
    const photos = ref([img1, img2, img3])
    const showImage = ref(0)
    
    const nextImage = () => {
      showImage.value++
      if (showImage.value >= photos.value.length) showImage.value = 0
    }
    
    const prevImage = () => {
      showImage.value--
      if (showImage.value < 0) showImage.value = photos.value.length - 1
    }
    </script>


<template>
<main class="relative flex justify-center items-center mt-10 w-full h-[80vh]">

  <!-- Blur background -->
  <div class="absolute inset-0 bg-[url('../assets/Images/Inside_Network.png')] bg-cover bg-center filter blur-sm -z-10"></div>

  <!-- Content -->
  <section class="flex items-center gap-8 z-10">
    <!-- Sola baxan üçbucaq -->
    <button @click="prevImage" class="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[30px] border-orange-950"></button>

    <!-- Şəkil -->
    <div>
      <img :src="photos[showImage]" alt="image" class="w-[50vw] h-[70vh] max-lg:h-[50vh] max-sm:h-[40vh] rounded-2xl" />
    </div>

    <!-- Sağa baxan üçbucaq -->
    <button @click="nextImage" class="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[30px] border-l-orange-950"></button>
  </section>

</main>
</template>

