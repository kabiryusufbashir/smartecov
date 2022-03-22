<template>
  <Header />
  <Banner />
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: "Home",
  components: {
    Header,
    Banner
  },
}
</script>
