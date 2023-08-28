<template>
  <div class="inner">
    <swiper
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :slides="slides"
      :pagination="{
        type: 'fraction',
      }"
    >
      <swiper-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide" alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: {
      default: () => [],
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>
