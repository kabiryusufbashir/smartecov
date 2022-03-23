<template>
    <Header />
    <ContactInfo />
    <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
    export default {
    name: "Contact",
    components: {
        Header,
        Footer,
        ContactInfo
    }
}
</script>