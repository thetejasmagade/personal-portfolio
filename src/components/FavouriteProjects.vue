<template>
  <div class="container px-28 py-28 bg-gray-900 is-hidden-mobile">
    <h2
      class="text-7xl fav-projects-text pb-10 text-gray-200"
      style="font-family: 'Inter', sans-serif"
    >
      Favourite Projects ❤️
    </h2>
    <div class="grid grid-cols-2 gap-7">
      <div>
        <a href="https://bulma-blocks-dev.netlify.app/" target="_blank">
          <img src="@/assets/images/balmblocks.png" alt="image" class="zoom" />
          <p
            class="
              text-3xl text-gray-200
              bg-red-500
              rounded-md
              px-2
              font-semibold
            "
            style="font-family: 'PT Sans', sans-serif; position: absolute"
          >
            Balm Blocks
          </p>
        </a>
      </div>
      <div>
        <a href="#">
          <img src="@/assets/images/portfolio.png" alt="image" class="zoom" />
          <p
            class="
              text-3xl text-gray-200
              bg-red-500
              rounded-md
              px-2
              font-semibold
              float-right
            "
            style="font-family: 'PT Sans', sans-serif; position: relative"
          >
            Personal Portfolio
          </p>
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
    gsap.to(".fav-projects-text", {
      scrollTrigger: {
        trigger: ".fav-projects-text",
        start: "top 700px",
        end: "top 100px",
        scrub: 2,
        // markers: true,
      },
      x: 100,
      ease: "none",
      duration: 2,
    });
  },
};
</script>

<style>
.zoom {
  transition: transform 0.7s;
  height: 100;
  width: 100;
  cursor: pointer;
}

.zoom:hover {
  transform: scale(
    1.5
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>