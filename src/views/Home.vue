<script>
import { defineComponent } from "vue";
import ContactButton from "@/components/ContactButton.vue";

export default defineComponent({
  data() {
    return {
      showMobileNav: false,
      serviceItems: [
        {
          id: 0,
          title: "Sloped Roofing Replacement",
          description: "We do this for shingled, steel, cedar and slate roofs.",
          image: "/assets/images/roof9.jpeg",
        }, //make sure the image link extension is correct.
        {
          id: 1,
          title: "Roofing repairs",
          description: "We repair shingled, steel, cedar and slate roofs.",
          image: "/assets/images/roof14.png",
        },
        {
          id: 2,
          title: "Insulation removal and installation",
          description:
            "We remove and install insulation, so your building stays thermally efficient.",
          image: "/assets/images/roof11.jpeg",
        },
        {
          id: 3,
          title: "Siding & soffit",
          description: "We do siding & soffit repair and installation.",
          image: "/assets/images/roof12.jpeg",
        },
      ],
    };
  },
  components: { ContactButton },
  methods: {
    clicked() {
      this.showMobileNav = !this.showMobileNav;
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
  <div class="bg-soft-black">
    <img
      src="/assets/images/roof1.jpeg"
      class="z-0 bg-center object-cover h-100v filter blur-md brightness-[0.65]"
      alt="background roof image"
      srcset=""
    />
  </div>
  <!-- navbar -->
  <nav
    class="absolute top-0 flex flex-row justify-between w-full h-15 px-4 py-4"
  >
    <h3 class="font-medium text-2xl text-white">Benford Roofing</h3>
    <!-- NOTE: ALL SOURCES/STATIC FILES (IMAGES AND STUFF) NEED TO BE PREFIXED WITH  '/', 
    SO IT BECOMES '/ASSETS/..., OTHERWISE THE BUILD WILL FAIL WITH A 'Rollup failed to resolve import' ERROR-->
    <img
      src="/assets/icons/MenuIcon.svg"
      alt="Menu Icon"
      class="w-8 h-8 z-50"
      @click="clicked"
    />
  </nav>
  <!-- mobile navbar -->
  <div
    v-if="this.showMobileNav"
    class="fixed flex flex-col justify-center items-center top-0 z-40 w-full h-100v backdrop-filter backdrop-blur-sm backdrop-brightness-[0.25]"
  >
    <ul class="text-soft-white text-3xl space-y-10 text-center font-bold">
      <li>Services</li>
      <li>Our Work</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  </div>
  <div class="flex flex-col absolute top-0 mt-56 h-auto px-8 mx-auto">
    <h1 class="z-20 font-bold text-center text-4xl text-soft-white">
      We’re a roofing company based in Northumberland.
    </h1>
    <h3 class="text-xl mt-12 mb-6 text-center font-medium text-soft-white">
      We offer skilled roofing services to houses and buildings in
      Northumberland and surrounding areas.
    </h3>
    <contact-button />
    <a href="#" class="text-center mt-12 font-xl font-medium text-soft-white"
      >View Projects</a
    >
  </div>
  <!-- section 2, services section -->
  <div class="w-full mb-12 bg-soft-white">
    <h2 class="mt-16 text-center font-bold text-4xl">Services</h2>
    <!-- <div class="w-full h-auto px-2 mx-auto">
      <div
        class="w-full h-auto outline-black"
        v-for="serviceItem in this.serviceImages"
        :key="serviceItem.id"
      >
        <div class="w-[330px] h-[210px] outline-black">
          <img :src="serviceItem.image" alt="" srcset="" />
        </div>
        <div class="w-full h-1/2 outline-black">
          <h2 class="font-bold text-2xl pl-4 pt-4">{{ serviceItem.title }}</h2>
          <p class="font-normal text-lg pl-4 pt-4">
            {{ serviceItem.description }}
          </p>
        </div>
      </div>
    </div> -->
    <div
      class="flex flex-col w-full h-auto px-2"
      v-for="item in this.serviceItems"
      :key="item.id"
    >
      <!-- service card -->
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
    </div>
  </div>
</template>