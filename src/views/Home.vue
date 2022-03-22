<template>
  <Header />
  <Banner />
  <Commodity />
  <Team />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Commodity from '@/components/Commodity.vue'
import Team from '@/components/Team.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Commodity,
    Team,
    Footer
  },
}
</script>
