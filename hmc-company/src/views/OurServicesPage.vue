<script setup>
import ServicesCard from '@/components/ServicesCard.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import IpTelephony from '../assets/Images/serviceIpTelephony.webp'
import ItOutsourcing from '../assets/Images/serviceItAutosourcing.jpg'
import WebHosting from '../assets/Images/serviceWebHostinq.jpg'
import Mail from '../assets/Images/serviceMail.png'
import ActiveDirectory from '../assets/Images/serviceActiveDirectory.png'
import CloudServer from '../assets/Images/serviceCloud.jpg'


const servicesData=[
  {
    title: "Bulud Serverləri",
    shortDescription: "Bulud serverlər məlumatların saxlanması və idarə olunması üçün çevik və etibarlı həll təqdim edir. İşinizi istənilən yerdən idarə edin.",
    detailedDescription: "Bulud server xidmətimiz şirkətlərə yüksək performanslı və miqyaslana bilən infrastruktur təqdim edir. İstifadəçilər resursları asanlıqla artırıb-azalda bilərlər. Məlumatlarınız şifrələnmiş şəkildə saxlanır və daimi backup mexanizmləri ilə qorunur. Serverlərimiz beynəlxalq təhlükəsizlik standartlarına uyğundur. Əlavə proqram quraşdırılması və server idarəçiliyi rahat panel vasitəsilə həyata keçirilir. Xidmət həm kiçik, həm də böyük müəssisələr üçün uyğundur. Enerji səmərəliliyi və davamlılıq prinsiplərinə əsaslanır.",
    image: CloudServer
},
  {
    title: "Web Hostinq",
    shortDescription: "Web hostinq xidməti saytınızı təhlükəsiz və sabit serverlərdə yerləşdirməyə imkan verir. Bizim serverlər 24/7 fəaliyyət göstərir və yüksək sürət təmin edir.",
    detailedDescription: "Web hostinq xidmətimiz müasir texnologiyalara əsaslanır və saytınızın fasiləsiz işləməsini təmin edir. Məlumatlarınız mütəmadi olaraq ehtiyat nüsxələnir və təhlükəsizlik sistemi ilə qorunur. Müxtəlif hostinq planlarımız fərqli biznes ehtiyaclarına uyğundur. İstifadəçi dostu idarəetmə paneli ilə saytınızı rahat idarə edə bilərsiniz. SSL sertifikatları sayəsində məlumat ötürülməsi təhlükəsiz şəkildə həyata keçirilir. Texniki dəstək komandamız hər zaman sizə yardım etməyə hazırdır.",
    image: WebHosting
  },
  {
    title: "IP Telefoniya",
    shortDescription: "IP telefoniya xidməti biznesiniz üçün sərfəli və müasir rabitə həlli təklif edir. İnternet üzərindən zənglər vasitəsilə əlaqə xərclərinizi azaldın.",
    detailedDescription: "Bizim IP telefoniya sistemimiz ən son VoIP texnologiyalarına əsaslanır və kristal dərəcəsində səs keyfiyyəti təmin edir. Bu xidmət sayəsində beynəlxalq və yerli zənglər üçün xərclər əhəmiyyətli dərəcədə azalır. Avtomatik zəng yönləndirmə və səsli menyu funksiyaları ilə iş prosesiniz daha effektiv olur. İstifadəçilər üçün idarəetmə paneli vasitəsilə zəng tarixçəsini və hesabatları izləmək mümkündür. IP telefoniya sistemləri həm ofis, həm də uzaqdan işləyən komandalar üçün idealdır. Genişləndirilə bilən struktur sayəsində biznes böyüdükcə sistem də asanlıqla uyğunlaşır.",
    image: IpTelephony
  },
  {
    title: "IT Aut­sorsinq",
    shortDescription: "IT autsorsinq xidməti ilə texniki işləri mütəxəssislərə həvalə edin. Şirkətiniz əsas fəaliyyətinə fokuslana bilər, biz isə texnologiyanı idarə edərik.",
    detailedDescription: "IT autsorsinq xidmətimiz sistemlərinizi daimi nəzarətdə saxlayır və mümkün problemlərin qarşısını alır. Təcrübəli mütəxəssislərimiz serverlərin, şəbəkələrin və proqram təminatlarının sabit işləməsini təmin edir. Bu, həm xərcləri azaldır, həm də daxili resursların səmərəli istifadəsini artırır. Biz həm uzaqdan, həm də yerində texniki dəstək göstəririk. Hər bir müştəri üçün fərdi yanaşma tətbiq olunur. Xidmətimiz, biznesinizin IT infrastrukturunu dayanıqlı və təhlükəsiz vəziyyətdə saxlayır.",
    image: ItOutsourcing
  },
  {
    title: "Mail Xidməti",
    shortDescription: "Korporativ mail xidməti ilə şirkətiniz üçün peşəkar e-poçt ünvanları yaradın. Təhlükəsiz və etibarlı mesajlaşma mühiti təmin edirik.",
    detailedDescription: "Mail xidmətimiz biznes səviyyəli rabitə üçün optimallaşdırılmışdır. Məlumatların şifrələnməsi sayəsində e-poçtlarınız maksimum təhlükəsizlikdə saxlanılır. Avtomatik spam filtrasiyası və backup sistemi e-poçt itkisinin qarşısını alır. İstifadəçilər üçün intuitiv interfeys gündəlik işi asanlaşdırır. Eyni zamanda mobil cihazlarla tam uyğunluq təmin edilir. Mail serverlərimiz yüksək mövcudluq səviyyəsi ilə 24/7 aktiv olur. Şirkətinizin imicini gücləndirən xüsusi domenli e-poçtlar təqdim edirik.",
    image: Mail
  },
  {
    title: "Active Directory",
    shortDescription: "Active Directory xidməti ilə şirkət daxilində istifadəçiləri və resursları mərkəzləşdirilmiş şəkildə idarə edin. İdarəetməni sadələşdirin və təhlükəsizliyi artırın.",
    detailedDescription: "Active Directory sistemimiz IT infrastrukturunuzun əsas idarəetmə mərkəzidir. Bu xidmət vasitəsilə bütün istifadəçilərin, qrupların və cihazların idarə olunması bir məkandan həyata keçirilir. Giriş icazələri və təhlükəsizlik qaydaları mərkəzləşdirilmiş şəkildə tətbiq olunur. Şəbəkə üzərindən resurs paylaşımı və autentifikasiya prosesi sadələşdirilir. Bu sistem, həmçinin, istifadəçi fəaliyyətini izləməyə və hesabatlar yaratmağa imkan verir. Böyük şirkətlərdə idarəetmənin səmərəliliyini əhəmiyyətli dərəcədə artırır. IT təhlükəsizliyi üçün vacib bir komponent kimi fəaliyyət göstərir.",
    image: ActiveDirectory
  }
]
 




</script>

<template>

    <section class="flex flex-col justify-center gap-5 items-center bg-gray-900 py-16 text-white rounded-2xl">

        <h3 class="font-montserrat font-bold text-[48px] text-white leading-[150%] tracking-[0.12em] mb-12">
            HMC Company
        </h3>
        <p style="padding: 1rem;" class="w-[60vw] bg-white text-gray-900 rounded-2xl font-bold italic">
            “HMC Company olaraq, bizneslərin dayanıqlı və təhlükəsiz şəkildə fəaliyyət göstərməsi üçün geniş çeşiddə İT xidmətləri təqdim edirik.
             Aşağıda sizə təklif etdiyimiz əsas istiqamətlər haqqında ətraflı məlumat verilib.”
        </p>
        <div >
           <ServicesCard 
            v-for="(value, index) in servicesData" 
            :key="index" 
            :data="value" 
            />
            
        </div>
    </section>
    <Footer/>
</template>