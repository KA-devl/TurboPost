<template>
  <Navbar/>
<div v-if="data" class="lg:ml-16 md:ml16 lg:mr-16 md:mr-16">
  <section class="root">
  <figure>
    <img src="../assets/package.png"  alt="">
    <figcaption>
      <h4>Expected delivery : {{ formatDueDate(data.created_at) }}</h4>
      <h6>Tracking ID : {{ data.tracking_id }} </h6>
      <h2>${{data.amount}}0</h2>
    </figcaption>
  </figure>
  <div class="order-track">
    <div class="order-track-step">
      <div class="order-track-status">
        <span class="order-track-status-dot"></span>
        <span class="order-track-status-line"></span>
      </div>
      <div class="order-track-text">
        <p class="order-track-text-stat">Order Received</p>
        <span class="order-track-text-sub">{{ formatDate(data.created_at) }}</span>
      </div>
    </div>
    <div class="order-track-step">
      <div class="order-track-status">
        <span class="order-track-status-dot"></span>
        <span class="order-track-status-line"></span>
      </div>
      <div class="order-track-text">
        <p class="order-track-text-stat">Order Processed</p>
        <span class="order-track-text-sub">{{ formatDate(data.created_at) }}</span>
      </div>
    </div>
    <div v-if="data.status == 'delivered' || data.status == 'transit'" class="order-track-step">
      <div class="order-track-status">
        <span class="order-track-status-dot"></span>
        <span class="order-track-status-line"></span>
      </div>
      <div class="order-track-text">
        <p class="order-track-text-stat">In route</p>
        <!-- <span class="order-track-text-sub">21st November, 2019</span> -->
      </div>
    </div>
    <div v-if="data.status == 'delivered'" class="order-track-step">
      <div class="order-track-status">
        <span class="order-track-status-dot"></span>
        <span class="order-track-status-line"></span>
      </div>
      <div class="order-track-text">
        <p class="order-track-text-stat">Order Deliverd</p>
        <!-- <span class="order-track-text-sub">21st November, 2019</span> -->
      </div>
    </div>
  </div>
</section>
</div>

<Footer/>




</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { useRoute } from 'vue-router';
import {ref, onMounted} from 'vue';
import { supabase } from '../supabase/init';
import { DateTime } from "luxon";

export default {
  components: {
    Navbar,
    Footer
  },
  setup(){
    const route = useRoute();
    console.log(route.params.id);
    const packageId = route.params.id;
    const data = ref();



    const formatDate = (inputDate) => {
      const transformedDate = DateTime.fromISO(inputDate);
      return transformedDate.toLocaleString(DateTime.DATETIME_MED);
    };

    const formatDueDate = (inputDate) => {
      const transformedDate = DateTime.fromISO(inputDate);
      //Add 3 days and return the date
      return transformedDate
        .plus({ days: 3 })
        .toLocaleString(DateTime.DATETIME_MED);
    };



    onMounted(async ()=>{
      const res = await supabase.from('package').select('*').eq('tracking_id', packageId);

      data.value = res.data[0]
      console.log(data.value)

    })


    return {data, formatDate, formatDueDate}
  
  }
}






</script>
<style lang="scss" scoped>
@import '../assets/style/track-delivery.scss';



</style>