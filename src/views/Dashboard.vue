
<template>
<Navbar/>
  
<DeliveryTable/>

  

</template>



<script>
import Navbar from '../components/Navbar.vue';
import DeliveryTable from '../components/DeliveryTable.vue';


export default {
    components: {Navbar, DeliveryTable},
    setup(){
        return {};
    }
}


</script>