<template>
  <Header />
  <Banner />
  <Commodity />
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Commodity from '@/components/Commodity.vue'

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Commodity
},
}
</script>
