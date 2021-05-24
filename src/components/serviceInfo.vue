<script>
export default {
  name: "ServiceInfo",
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: "No Title Specified",
          description: "No Description Specified",
          image: "/assets/images/404image.jpg",
        };
      },
    },
  },
};
</script>
<template>
  <div class="w-auto my-4 border-2 border-soft-black h-auto">
    <div class="w-full h-1/2 mx-auto">
      <img
        :src="item.image"
        class="w-full h-[212px] bg-center object-cover"
        alt=""
        srcset=""
      />
    </div>
    <div class="w-full h-1/2 px-6">
      <h3 class="pt-4 font-bold text-2xl">{{ item.title }}</h3>
      <p class="py-2 font-normal text-lg">
        {{ item.description }}
      </p>
      <div class="mb-6">
        <contact-button />
      </div>
    </div>
  </div>
</template>