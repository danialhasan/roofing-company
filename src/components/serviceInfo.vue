<script>
export default {
  name: "serviceInfo",
  props: {
    image: {
      type: "String",
      default: "/assets/images/404image.jpg",
    },
  },
};
</script>
<template>
  <div class="w-full h-auto flex flex-col outline-black">
    <img :src="image" alt="Service info image" class="w-full h-1/2" srcset="" />
    <div class="w-full h-1/2 bg-red-400"></div>
  </div>
</template>