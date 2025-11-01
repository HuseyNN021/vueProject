import { createRouter,createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import OurServicesPage from "@/views/OurServicesPage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";
import ContactUsPage from "@/views/ContactUsPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: '/services',
            name: 'services',
            component: OurServicesPage
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: AboutUsPage
        },
        {
            path: '/contactUs',
            name: 'contactUs',
            component: ContactUsPage
        }
    ]
})

export default router;