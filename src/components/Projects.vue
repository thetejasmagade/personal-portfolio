<template>
  <div>
    <div class="container px-28 py-28 bg-gray-200 is-hidden-mobile">
      <h2
        class="text-7xl pb-10 projects-text text-gray-900"
        style="font-family: 'Inter', sans-serif"
      >
        Projects 💻
      </h2>

      <div class="grid grid-cols-3 gap-8 justify-items-center">
        <div class="py-4">
          <h4
            class="text-xl font-xl pb-2"
            style="font-family: 'Inter', sans-serif"
          >
            Bulma Blocks
          </h4>
          <p class="text-lg text-gray-600 pb-2">
            This project helps you to create simple & responsive websites within
            10 mins ⏰
          </p>
          <a href="#" class="text-lg font-semibold">View Repository &rarr;</a>
        </div>
        <div class="py-4">
          <h4
            class="text-xl font-xl pb-2"
            style="font-family: 'Inter', sans-serif"
          >
            VCode
          </h4>
          <p class="text-lg text-gray-600 pb-2">
            VCode is online editor for HTML, CSS, JS. This is a Frontend for
            VCode Editor. It is written in Vue. 👨‍💻
          </p>
          <a href="#" class="text-lg font-semibold">View Repository &rarr;</a>
        </div>
        <div class="py-4">
          <h4
            class="text-xl font-xl pb-2"
            style="font-family: 'Inter', sans-serif"
          >
            Text Formatter
          </h4>
          <p class="text-lg text-gray-600 pb-2">
            🎯 This App helps you to edit and format your text online 📓
          </p>
          <a href="#" class="text-lg font-semibold">View Repository &rarr;</a>
        </div>
        <div class="py-4">
          <h4
            class="text-xl font-xl pb-2"
            style="font-family: 'Inter', sans-serif"
          >
            Personal Portfolio
          </h4>
          <p class="text-lg text-gray-600 pb-2">
            This is my personal portfolio website to showcase my skills and
            projects. 🎯
          </p>
          <a href="#" class="text-lg font-semibold">View Repository &rarr;</a>
        </div>
        <div class="py-4">
          <h4
            class="text-xl font-xl pb-2"
            style="font-family: 'Inter', sans-serif"
          >
            Weather App
          </h4>
          <p class="text-lg text-gray-600 pb-2">
            This Live Weather App shows the live weather of any city. 🌫️❄️
          </p>
          <a href="#" class="text-lg font-semibold">View Repository &rarr;</a>
        </div>
        <div class="py-4">
          <h4
            class="text-xl font-xl pb-2"
            style="font-family: 'Inter', sans-serif"
          >
            VCode API
          </h4>
          <p class="text-lg text-gray-600 pb-2">
            This is a backend for VCode Editor for saving & retriving data. 🔄
          </p>
          <a href="#" class="text-lg font-semibold">View Repository &rarr;</a>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
        <a
          href="https://github.com/thetejasmagade?tab=repositories"
          target="_blank()"
        >
          <button
            class="
              bg-red-500
              hover:bg-red-700
              text-white
              font-bold
              mt-5
              py-2
              px-4
              rounded
            "
          >
            View More on GitHub &#8599;
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function () {
    gsap.to(".projects-text", {
      scrollTrigger: {
        trigger: ".projects-text",
        start: "top 700px",
        end: "top 100px",
        scrub: 2,
        // markers: true,
      },
      x: -100,
      ease: "none",
      duration: 2,
    });
  },
};
</script>

<style>
</style>