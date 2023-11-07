<template>
  <Navbar/>
<div class="lg:ml-16 md:ml16 lg:mr-16 md:mr-16">
  <section class="root">
  <figure>
    <img src="../assets/package.png"  alt="">
    <figcaption>
      <h4>Expected delivery : 21st november, 2019 + 3 days</h4>
      <h6>Tracking ID : 138947213</h6>
      <h2>$23.40</h2>
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
        <span class="order-track-text-sub">21st November, 2019</span>
      </div>
    </div>
    <div class="order-track-step">
      <div class="order-track-status">
        <span class="order-track-status-dot"></span>
        <span class="order-track-status-line"></span>
      </div>
      <div class="order-track-text">
        <p class="order-track-text-stat">Order Processed</p>
        <span class="order-track-text-sub">21st November, 2019</span>
      </div>
    </div>
    <div class="order-track-step">
      <div class="order-track-status">
        <span class="order-track-status-dot"></span>
        <span class="order-track-status-line"></span>
      </div>
      <div class="order-track-text">
        <p class="order-track-text-stat">In route</p>
        <span class="order-track-text-sub">21st November, 2019</span>
      </div>
    </div>
    <div class="order-track-step">
      <div class="order-track-status">
        <span class="order-track-status-dot"></span>
        <span class="order-track-status-line"></span>
      </div>
      <div class="order-track-text">
        <p class="order-track-text-stat">Order Deliverd</p>
        <span class="order-track-text-sub">21st November, 2019</span>
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
export default {
  components: {
    Navbar,
    Footer
  }
}






</script>
<style lang="scss" scoped>
@import '../assets/style/track-delivery.scss';



</style>