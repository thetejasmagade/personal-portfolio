<template>
  <div class="container px-28 py-28 bg-gray-200 is-hidden-mobile">
    <h2
      class="text-7xl pb-2 about-text text-gray-900"
      style="font-family: 'Inter', sans-serif"
    >
      About Me 🧍‍♂️
    </h2>
    <p
      class="text-3xl text-gray-900 text-center"
      style="font-family: 'PT Sans', sans-serif"
    >
      My name is <span class="text-red-500">Tejas Magade</span> and I am
      learning in the Third Year of IT engineering. I love to code and
      especially I am very passionate about web development. I learned all the
      basics of web development and now I am learning the Django framework and
      Android development. I also know the C, Python, and Java programming
      languages. And I also love to explore new programming languages. From my
      web development knowledge, I developed my own blogging website, 2 clients
      business websites, and I am also working on some new projects.
    </p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function () {
    gsap.to(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
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