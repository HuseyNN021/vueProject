<script setup>
import 'primeicons/primeicons.css'
import { defineProps } from 'vue';
const reyler=defineProps({
    name: {
        type: String,
        requries: true
    },
    position: {
        type: String,
        requries:true
    },
    comment: {
        type: String,
        requries: true
    }
})


</script>
<template>

    <section class="flex justify-center items-center">
        <div class="flex items-center bg-blue-200 gap-5 commentPadding border border-b-blue-950 rounded-2xl">
            <div><i class="pi pi-user bg-blue-950 rounded-full text-amber-50"></i></div>
            <div>
                <h6 class="font-bold">{{ reyler.name }}:</h6>
                <p>{{ reyler.comment }}</p>
            </div>
        </div>
        
    </section>

</template>

<style scoped>
section{
    margin-bottom: 1rem;
}
i, .commentPadding{
    padding: 1rem;
}
</style>