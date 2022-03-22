<template>
    <div class="shadow">
        <!-- Commodities  -->
        <div class="bg-black p-3">
            <marquee>
                <p class="text-green-500 font-bold">Commodities: 
                    (Tiger Nut, Price/Kg: <a class="text-danger" href="mailto:contact@smartecov.com">Get latest price</a>, MOQ: 18 tonnes), 
                    (Dried Split Ginger (DGS), Price/Kg: $1.85, MOQ: 18 tonnes), 
                    (Gum Arabic, Price/Kg: $1.19, MOQ: 18 tonnes), 
                    (Groundnut, Price/Kg: $0.87, MOQ: 18 tonnes), 
                    (Cashew Nut, Price/Kg: $1.43, MOQ: 18 tonnes), 
                    (Luban Gum, Price/Kg: <a class="text-danger" href="mailto:contact@smartecov.com">Get latest price</a>, MOQ: 10 tonnes), 
                    (Sesame Seeds, Price/Kg: $1.08, MOQ: 18 tonnes), 
                    (Tamarind, Price/Kg: $0.52, MOQ: 18 tonnes), 
                    (Hibiscus Flower, Price/Kg: $0.52, MOQ: 18 tonnes), 
                    (Stone Flower, Price/Kg: <a class="text-danger" href="mailto:contact@smartecov.com">Get latest price</a>, MOQ: 18 tonnes), 
                    (Hide & Skin: MOQ: 18 tonnes), 
                    (Cotton: MOQ: 18 tonnes), 
                </p>
            </marquee>
        </div>
        <!-- Logo & Nav  -->
        <div class="grid grid-cols-2 gap-2 px-20 py-4 bg-white">
            <div>
                <a href="/"><img src="../assets/images/smart.png" alt="Logo"></a>
            </div>
            <div>
                <div>
                    <ul class="flex justify-between items-center relative top-3 font-bold">
                        <li>
                            <a href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li> 
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/#commodities">Commodities</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
       name: 'Header'
   }
</script>