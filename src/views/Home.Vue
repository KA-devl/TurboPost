
<template>

    <div class="home bg-red-100">
        <h1>Home</h1>
        <p>Home page content goes here.</p>
    </div>

    <PackageSentConfirmation />

</template>



<script>
import PackageSentConfirmation from '../components/PackageSentConfirmation.vue';

export default {
    components: {PackageSentConfirmation},
    setup(){
        return {};
    }
}


</script>