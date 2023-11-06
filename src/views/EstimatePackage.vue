<template>
    <Navbar/>
    <Quotation/>
    <Footer/>

</template>


<script>
import Quotation from '../components/Quotation.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
    components:{Quotation, Navbar, Footer},
    setup(){
        return {}
    }
}




</script>