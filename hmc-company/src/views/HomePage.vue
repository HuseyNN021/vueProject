<script setup>
import Slider from '@/components/Slider.vue';
import About from '@/components/About.vue';
import ShowService from '@/components/ShowService.vue';
import OurService from '@/components/OurService.vue';
import OurMissions from '@/components/OurMissions.vue';
import ContactUs from '@/components/ContactUs.vue';
import Footer from '@/components/Footer.vue';

import { ref } from 'vue';
import img1 from '@/assets/Images/internet-information-technology-concept-laptop-computer-showing-data-processing-screen-122397310.webp'
import img2 from '@/assets/Images/depositphotos_359328654-stock-photo-fiber-optic-cables-connected-optic.jpg'
import img3 from '@/assets/Images/depositphotos_53875805-stock-photo-information-technology-background.jpg'
import img4 from '@/assets/Images/circuit-programming-big-data-server-information-technology-software-coding-digital-future-internet-crypto-computer-code-380397051.webp'
import img5 from '@/assets/Images/mail.png'
import img6 from '@/assets/Images/itoutsourcing.png'

const sliderData=ref([
        {
            title: 'Yüksək Performanslı Bulud Serverləri',
            image: img1
        },
        {
            title: 'Təhlükəsiz və Etibarlı Korporativ Mail Xidməti',
            image: img2
        },
        {
            title: 'Sürətli və Sabit Web Hostinq Həlli',
            image: img3
        },
        {
            title: 'Effektiv IP Telefoniya və Rabitə Sistemi',
            image: img4
        },
        {
            title: 'Mərkəzləşdirilmiş İdarəetmə ilə Active Directory Xidməti',
            image: img5
        },
        {
            title: 'Peşəkar IT Autosorsinq və Texniki Dəstək Xidməti',
            image: img6
        }
])

 console.log(`app data: ${sliderData.value[0].title}`);


</script>

<template>

    <Slider :data="sliderData" />
    <About/>
    <ShowService/>
    <OurService/>
    <br>
    <OurMissions/>
    <ContactUs/>
    <br>
    <Footer/>
</template>