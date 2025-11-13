<script setup>
import { ref, defineProps } from 'vue';

const hidden = ref(true);

const detailedInfo = () => {
  hidden.value = !hidden.value;
};

const showData = defineProps({
  data: {
    type: Object,
    required: true, 
  },
});

console.log(showData.data.title);
</script>

<template>
  <section class="flex justify-center items-center min-h-[40vh] bg-slate-900 text-white p-4 max-sm:w-[80vw]">
    <div
      class="flex flex-col md:flex-row items-center justify-center md:justify-between border border-b-blue-300 rounded-2xl w-full max-w-6xl gap-6 p-6 shadow-lg"
        style="padding: 0.5rem;"
      >
      <div
        class="flex justify-center items-center w-full md:w-1/2"
      >
        <img
          :src="showData.data.image"
          alt="cloud"
          class="w-full w-[30rem] h-[15rem] rounded-2xl max-md:w-[27rem] max-md:h-[14rem] max-sm:w-[25rem] max-sm:h-[12rem]"
        />
      </div>

      <div
        class="w-full md:w-1/2 flex flex-col justify-center items-center  space-y-4"
      >
        <h3
          class="font-montserrat font-bold text-[22px] sm:text-[26px] md:text-[28px] leading-[150%] tracking-[0.12em] text-center"
        >
          {{ showData.data.title }}
        </h3>
        <br>
        <p
          class="text-justify text-gray-300 text-sm sm:text-base w-[90%] md:w-[25rem] "
        >
          {{ showData.data.shortDescription }}
        </p>
        <br>
        <p
          :class="hidden
            ? 'max-h-0 overflow-hidden transition-all duration-500'
            : 'max-h-[500px] transition-all duration-500 text-gray-300 text-sm sm:text-base w-[90%] md:w-[25rem]   text-justify'"
        >
          {{ showData.data.detailedDescription }}
        </p>

        <button
          class="mt-2 px-6 py-2 sm:px-8 sm:py-3 rounded-xl border border-gray-500 hover:bg-white hover:text-black transition-all duration-300"
          @click="detailedInfo"
          style="padding: 0.5rem;"
        >
          {{ hidden ? 'Daha ətraflı' : 'Daha az' }}
        </button>
      </div>
    </div>
  </section>
</template>
