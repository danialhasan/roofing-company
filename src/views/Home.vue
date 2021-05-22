<script>
import { defineComponent } from "vue";
import ButtonRepo from "@/components/ButtonRepo.vue";

export default defineComponent({
  components: { ButtonRepo },
  methods: {
    clicked() {
      console.log("Hello!");
    },
  },
});
</script>
<template>
  <!-- 
  [] Mobile Version
  [] Desktop Version
 -->
  <!-- background image -->
  <div>
    <img
      src="/assets/images/roof1.jpeg"
      class="z-0 bg-center object-cover h-100v filter blur-md brightness-[0.65]"
      alt="background roof image"
      srcset=""
    />
    <!-- <div class="bg-black h-100v opacity-1"></div> -->
  </div>
  <!-- navbar -->
  <nav
    class="absolute top-0 flex flex-row justify-between w-full h-15 px-4 py-4"
  >
    <h3 class="font-medium text-2xl text-white">Benford Roofing</h3>
    <!-- <img
      src="assets/icons/MenuIcon.svg"
      alt="Menu Icon"
      class="w-8 h-8"
      @click="clicked"
    /> -->
  </nav>
</template>