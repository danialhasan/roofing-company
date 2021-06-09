<script>
import { defineComponent } from "vue";
import ContactButton from "@/components/ContactButton.vue";
import ContactBanner from "@/components/ContactBanner.vue";

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
          image: "/assets/images/roofingselection.jpeg",
        },
        {
          id: 3,
          title: "Siding & soffit",
          description: "We do siding & soffit repair and installation.",
          image: "/assets/images/roof12.jpeg",
        },
        {
          id: 4,
          title: "Fascia & eavestrough",
          description: "We do fascia & eavestrough repair and installation.",
          image: "/assets/images/roof10.jpeg",
        },
      ],
      workImages: [
        "/assets/images/roof2.jpeg",
        "/assets/images/roof6.jpeg",
        "/assets/images/roof3.jpeg",
        "/assets/images/roof7.jpeg",
        "/assets/images/roof4.jpeg",
        "/assets/images/roof5.jpeg",
        "/assets/images/roof15.jpeg",
      ],
      pricingCardInfo: [
        {
          icon: "/assets/icons/PhoneIcon.svg",
          title: "Free Estimates",
          description: "Call/text us at 289-927-688 for a free estimate.",
        },
        {
          icon: "/assets/icons/ChartIcon.svg",
          title: "24/7 Emergency Service",
          description: "We’re available 24 hours a day, 7 days a week.",
        },
        {
          icon: "/assets/icons/MoneyIcon.svg",
          title: "Price goes by square foot",
          description: "With Benford Roofing, you get competitive prices.",
        },
      ],
    };
  },
  components: { ContactButton, ContactBanner },
  methods: {
    clicked() {
      this.showMobileNav = !this.showMobileNav;
    },
    mobileNavScrollTo(section) {
      this.clicked();
      window.location.href = `/#${section}`;
    },
    desktopNavScrollTo(section) {
      window.location.href = `/#${section}`;
    },
  },
});
</script>
<template>
  <!-- 
  [x] Mobile Version
  [] Desktop Version
    [] lg version
    [] xl version
 -->
  <!-- background image -->
  <div class="bg-soft-black">
    <img
      src="/assets/images/roof1.jpeg"
      class="
        z-0
        bg-center
        object-cover
        h-100v
        lg:h-[710px]
        xl:w-full
        filter
        blur-md
        brightness-[0.65]
      "
      alt="background roof image"
      srcset=""
    />
  </div>
  <!-- navbar -->
  <!-- note: since we're positioning it absolute, we have to center it with the negative left and negative margin. -->
  <nav
    class="
      absolute
      top-0
      flex flex-row
      justify-between
      w-full
      lg:max-w-screen-xl
      lg:left-1/2
      lg:ml-lgNav
      xl:ml-xlNav
      px-4
      py-4
      lg:h-20
      lg:items-center
      lg:justify-between
      lg:px-8
      lg:mt-4
    "
  >
    <h3 class="font-medium text-2xl text-white">Benford Roofing</h3>
    <!-- NOTE: ALL SOURCES/STATIC FILES (IMAGES AND STUFF) NEED TO BE PREFIXED WITH  '/', 
    SO IT BECOMES '/ASSETS/..., OTHERWISE THE BUILD WILL FAIL WITH A 'Rollup failed to resolve import' ERROR-->
    <img
      src="/assets/icons/MenuIcon.svg"
      alt="Menu Icon"
      class="lg:hidden w-8 h-8 z-50"
      @click="clicked"
    />
    <!-- desktop navbar -->
    <div class="hidden lg:block text-soft-white w-[400px] h-full">
      <ul class="flex flex-row justify-between items-center h-full">
        <li @click="desktopNavScrollTo('services')">Services</li>
        <li @click="desktopNavScrollTo('our_work')">Our Work</li>
        <li @click="desktopNavScrollTo('pricing')">Pricing</li>
        <li @click="desktopNavScrollTo('contact')">Contact</li>
      </ul>
    </div>
    <div class="hidden lg:block">
      <contact-button />
    </div>
  </nav>
  <!-- mobile navbar -->
  <div
    v-if="this.showMobileNav"
    class="
      fixed
      flex flex-col
      justify-center
      items-center
      top-0
      z-40
      w-full
      h-100v
      backdrop-filter backdrop-blur-sm backdrop-brightness-[0.25]
    "
  >
    <ul class="text-soft-white text-3xl space-y-10 text-center font-bold">
      <li @click="mobileNavScrollTo('services')">Services</li>
      <li @click="mobileNavScrollTo('our_work')">Our Work</li>
      <li @click="mobileNavScrollTo('pricing')">Pricing</li>
      <li @click="mobileNavScrollTo('contact')">Contact</li>
    </ul>
  </div>
  <div id="wrapper" class="absolute top-0 mt-56 lg:mt-52 xl:w-full">
    <div
      class="
        xl:max-w-screen-xl
        flex flex-col
        text-center
        lg:text-left
        h-auto
        px-8
        mx-auto
      "
    >
      <h1
        class="
          z-20
          font-bold
          text-4xl
          lg:text-6xl
          lg:mr-20
          lg:leading-[78px]
          text-soft-white
        "
      >
        We’re a roofing company based in Northumberland.
      </h1>
      <h3
        class="
          text-xl
          lg:text-2xl
          lg:mr-36
          mt-12
          mb-6
          font-medium
          text-soft-white
        "
      >
        We offer skilled roofing services to houses and buildings in
        Northumberland and surrounding areas.
      </h3>
      <div class="flex flex-col lg:flex-row lg:items-center lg:h-14 lg:mt-8">
        <contact-button />
        <a
          href="#our_work"
          class="
            mt-12
            lg:mt-0
            lg:ml-[75px]
            text-2xl
            font-medium
            text-soft-white
          "
          >View Projects</a
        >
      </div>
    </div>
  </div>
  <!-- section 2, services section -->
  <div id="services" class="w-full mb-12 bg-soft-white">
    <h2 class="mt-16 text-center font-bold text-4xl lg:mb-8">Services</h2>
    <div class="xl:max-w-[1190px] xl:mx-auto">
      <div
        class="
          flex flex-col
          lg:flex-row lg:flex-wrap
          lg:justify-evenly
          xl:justify-start
          w-full
          h-auto
          px-2
        "
      >
        <!-- service card -->
        <div
          v-for="item in serviceItems"
          :key="item.id"
          class="
            w-auto
            lg:w-[360px]
            my-4
            border-2 border-soft-black
            h-auto
            lg:flex lg:flex-col
            xl:mr-6
          "
        >
          <div class="w-full h-1/2 lg:h-[212px] mx-auto lg:flex-grow">
            <img
              :src="item.image"
              class="w-full h-[212px] lg:h-full bg-center object-cover"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full h-1/2 lg:h-auto lg:flex lg:flex-col lg:mb-6 px-6">
            <h3 class="pt-4 font-bold text-2xl lg:pt-4 lg:pb-2">
              {{ item.title }}
            </h3>
            <p class="py-2 font-normal text-lg lg:pt-0 lg:pb-2">
              {{ item.description }}
            </p>
            <div class="mb-6 lg:mb-0 lg:relative lg:bottom-0 lg:p-0">
              <contact-button />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Banner -->
  <contact-banner />
  <!-- Our Work section -->
  <div id="our_work" class="w-full h-auto px-6 xl:p-0">
    <h2
      class="text-4xl text-soft-black mt-16 text-center font-bold mb-6 lg:mb-12"
    >
      Our Work
    </h2>
    <div class="xl:w-full">
      <div
        class="
          flex flex-col
          lg:flex-row lg:flex-wrap
          justify-evenly
          xl:justify-between
          w-auto
          xl:max-w-screen-xl
          xl:mx-auto
        "
      >
        <div
          v-for="image in workImages"
          :key="image"
          class="
            w-full
            h-[392px]
            lg:border-2 lg:border-soft-black
            mb-10
            lg:w-[360px]
          "
        >
          <img
            :src="image"
            alt="Example of our work"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Pricing section -->
  <div id="pricing" class="w-full h-auto">
    <h2 class="text-4xl text-soft-black mt-16 text-center font-bold mb-12">
      Pricing
    </h2>
    <div class="lg:flex lg:flex-row lg:max-w-[1008px] lg:mx-auto">
      <div
        v-for="item in pricingCardInfo"
        :key="item"
        class="
          w-[300px]
          h-auto
          bg-soft-black
          text-soft-white
          px-6
          pt-7
          rounded-xl
          mx-auto
          pb-6
          mb-8
        "
      >
        <div class="flex flex-col w-auto space-y-5">
          <img class="w-6" :src="item.icon" alt="Icon" />
          <h2 class="font-medium text-2xl">{{ item.title }}</h2>
          <h2 class="font-normal text-lg">
            {{ item.description }}
          </h2>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact section -->
  <div id="contact" class="w-full h-auto my-16">
    <h2
      class="
        text-4xl
        lg:text-6xl
        text-soft-black
        mt-36
        text-center
        font-bold
        mb-6
      "
    >
      Contact Us
    </h2>
    <p class="py-2 font-normal text-center text-lg lg:max-w-sm lg:mx-auto">
      You can also reach us at
      <a class="font-bold underline" href="tel:289-927-688">289-927-688</a>
      through phone call and SMS
    </p>
    <div
      id="contactForm"
      class="mt-8 px-8 w-full h-auto lg:w-[455px] lg:mx-auto"
    >
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="flex flex-col w-full h-auto"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label class="text-2xl pb-2 font-medium" for="name">Name</label>
        <input
          class="bg-gray-200 rounded-lg py-2 lg:py-3"
          type="text"
          name="name"
          id=""
        />
        <label class="text-2xl mt-6 pb-2 font-medium" for="email">Email</label>
        <input
          class="bg-gray-200 rounded-lg py-2 lg:py-3"
          type="email"
          name="email"
          id=""
        />
        <label class="text-2xl mt-6 pb-2 font-medium" for="message"
          >Message</label
        >
        <textarea
          type="text"
          name="message"
          id=""
          class="min-h-[160px] bg-gray-200 rounded-lg"
        ></textarea>
        <div class="lg:w-full h-auto">
          <button
            type="submit"
            class="
              bg-accent-orange
              mt-6
              px-12
              py-3
              rounded-lg
              text-2xl
              font-medium
              text-soft-black
              float-right
            "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- Footer section -->
  <footer id="footer" class="text-soft-white bg-softer-black">
    <div
      class="
        flex flex-col
        lg:space-y-4
        lg:max-w-screen-xl
        lg:mx-auto
        lg:flex-row lg:flex-wrap
        lg:justify-between
        text-center
        w-full
        h-auto
        mt-6
        pt-12
        px-6
        space-y-20
        pb-12
      "
    >
      <div class="flex flex-col lg:max-w-sm lg:order-first lg:text-left">
        <h2 class="text-2xl font-bold">Benford Roofing</h2>
        <h2 class="text-xl font-medium mt-8">
          We're a roofing company based in Northumberland and surrounding areas.
        </h2>
        <p class="text-xl font-normal mt-8">
          We offer skilled roofing services to houses and buildings in
          Northumberland.
        </p>
      </div>
      <div class="font-bold text-center lg:order-3 xl:order-2">
        <ul
          class="
            flex flex-col
            lg:flex-row lg:flex-nowrap
            lg:mt-8
            lg:space-x-5
            space-y-8
            lg:space-y-0
            text-lg
          "
        >
          <li><a href="#services">Services</a></li>
          <li><a href="#our_work">Our Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div
        class="
          mb-6
          text-center
          flex flex-col
          space-y-5
          px-6
          xl:px-0
          lg:max-w-sm
          lg:order-2
          xl:order-3
          lg:m-0
          lg:mt-0
          lg:p-0
        "
      >
        <h2 class="font-bold text-2xl">Contact us to get started</h2>
        <p class="text-lg font-regular">
          Schedule a call or send us an email to get a fast, accurate quote
          regarding your roofing needs.
        </p>
        <button class="bg-accent-orange px-12 py-3 lg:py-4 lg:mx-16 rounded-lg">
          <a href="#contactForm" class="text-xl font-medium text-soft-black"
            >Get a quote now</a
          >
        </button>
      </div>
      <p
        class="
          text-lg
          lg:pt-8
          text-center
          font-regular
          text-white
          lg:order-last
          xl:relative
          xl:left-1/2
          xl:ml-[-177px]
        "
      >
        Designed and developed by
        <a class="underline" target="_blank" href="https://hasandev.ca"
          >DHasanDev.ca</a
        >
      </p>
    </div>
  </footer>
</template>