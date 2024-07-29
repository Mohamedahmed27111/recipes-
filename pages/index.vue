<template>
    <div>
        <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
 
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class=" w-full h-1/2  flex flex-col items-center justify-center">
        <div class="main-img h-[500px]">
          <NuxtLink to="/pizza" class=" flex items-center justify-center">  <img src="/assets/img/https___pngspace.net_wp-content_uploads_2024_04_Pizza-realistic-stock-photography-white-background-d.png" alt="pizza" class="w-1/2"></NuxtLink>
        </div>
        <div class="main-body mt-12">
          <h1 class="text-5xl text-G font-extrabold">Craft Your Own Pizza Paradise!</h1>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class=" w-full h-1/2  flex flex-col items-center justify-center">
        <div class="main-img h-[500px]">
          <NuxtLink to="/seafood" class=" flex items-center justify-center">  <img src="/assets/img/pngfind.com-paella-png-5328610.png" alt="pizza" class="w-1/2"></NuxtLink>
        </div>
        <div class="main-body mt-12">
          <h1 class="text-5xl text-G font-extrabold">Dive into Deliciousness with Our Seafood Sensations!</h1>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class=" w-full h-1/2  flex flex-col items-center justify-center">
        <div class="main-img h-[500px]">
          <NuxtLink to="/beef" class=" flex items-center justify-center">  <img src="/assets/img/klipartz.com.png" alt="pizza" class="w-1/2"></NuxtLink>
        </div>
        <div class="main-body mt-12">
          <h1 class="text-5xl text-G font-extrabold ">Beef Elevate Your Culinary Experience!</h1>
        </div>
      </div>
    </swiper-slide>

    
    
  </swiper> 
     
       
      
    </div>
</template>

<script >
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

