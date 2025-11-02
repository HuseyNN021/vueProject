<script setup>
import { ref,defineProps } from 'vue';

const hidden=ref('hidden')

const detailedInfo=()=>{
    if(hidden.value=='hidden'){
        hidden.value='block'
    }else if(hidden.value=='block'){
        hidden.value='hidden'
    }
}

const showData=defineProps({
    data: {
        type: Object,
        requires: true
    }
})
console.log(showData.data.title);

</script>

<template>

          <section class="flex  h-90vh relative">
            <div class="flex items-center justify-center max-sm:flex-col  h-90vh sticky top-0 border border-b-blue-300 rounded-2xl" style="padding: 0.5rem;">
                <div class="w-[45vw] h-[60vh] max-sm:w-[70vw] flex items-center justify-center"><img :src="showData.data.image" alt="cloud" class="w-[40rem] h-[50vh] rounded-2xl max-sm:w-[30rem] max-sm:h-[40vh]" ></div>
                <div class="w-[30vw] max-sm:w-[50vw] bg-red">
                    <h3 class="font-montserrat font-bold text-[24px] text-white leading-[150%] tracking-[0.12em] mb-12">
                        {{ showData.data.title }}
                    </h3>
                    <p class="w-[25rem] max-sm:w-[15rem] max-sm:text-[0.7rem]"> {{ showData.data.shortDescription }}</p>
                    <p :class="hidden === 'hidden' ? 'max-h-0 overflow-hidden transition-all duration-500' : 'max-h-[500px] transition-all duration-500 w-[25rem] max-sm:w-[15rem] max-sm:text-[0.7rem]'">
                    {{ showData.data.detailedDescription }}
                    </p>
                    <button style="padding: 1rem;" class="rounded-xl border  border-gray-500  hover:bg-black hover:text-amber-100 transition-all" @click="detailedInfo">
                    Daha ətrafı
                    </button>                
                </div>
            </div>
          </section>  
          <br>
</template>