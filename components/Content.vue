<template>
 <div class="flex flex-col h-screen w-screen items-center justify-center">
   <swiper
       :effect="'cards'"
       :grabCursor="true"
       :modules="modules"
       class="mySwiper"
   >
     <swiper-slide v-for="launch in launches" :key="launch.id">
       <span v-if="launch.date_utc" class="absolute top-0 right-0 z-10 bg-black bg-opacity-50 text-white p-2">
            {{ launchDate(launch.date_local) }}
       </span>
       <img :src="launch.links.patch.large" alt="" class="w-full object-cover">
       <span v-if="launch.details" class="absolute bottom-0 left-0 z-10 bg-black bg-opacity-50 text-white p-2 w-full">
            {{ launch.details }}
       </span>
     </swiper-slide>
   </swiper>
 </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/effect-cards';
  const config = useRuntimeConfig();
  const { data: launches } = await useFetch(`${config.public.BASE_URL}/launches`,{
    'method': "GET",
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });
  const launchDate = (localDate) => {
    return new Date(localDate).toDateString();
  }


</script>
<style>
.swiper {
  width: 75%;
  height: 75%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  border-radius: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>
