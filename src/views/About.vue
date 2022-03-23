<template>
    <Header />
    <AboutInfo />
    <Footer />
</template>

<script>
import Header from '@/components/Header'
import AboutInfo from '@/components/AboutInfo'
import Footer from '@/components/Footer'
   export default {
        name: 'About',
        components:{
            Header,
            AboutInfo,
            Footer
        }
   }
</script>