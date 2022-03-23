<template>
    <Header />
    <ServiceInfo />
    <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceInfo from '../components/ServiceInfo.vue'
   export default {
       name: 'Services',
       components: {
            Header,
            Footer,
            ServiceInfo
        }
   }
</script>