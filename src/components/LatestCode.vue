<template>
  <div class="container px-28 py-28 bg-gray-900 is-hidden-mobile">
    <h2
      class="text-7xl latest-projects-text pb-10 text-gray-200"
      style="font-family: 'Inter', sans-serif"
    >
      Latest Code
    </h2>

    <!-- <div class="grid grid-cols-3 gap-8 justify-items-center">
      <div v-for="(latestRepos, i) in latestSixRepos" :key="i">
        <div class="py-4">
          <h4
            class="text-xl font-xl pb-2 text-gray-200"
            style="font-family: 'Inter', sans-serif"
          >
            {{ latestRepos.name }}
          </h4>
          <p class="text-lg text-gray-500 pb-2">
            {{ latestRepos.description }}
          </p>
          <a :href="latestRepos.url" class="text-lg font-semibold text-gray-200"
            >View Repository &rarr;</a
          >
        </div>
      </div>
    </div> -->

    <div class="grid grid-cols-3 gap-8 justify-items-center">
      <div v-for="(latestRepos, i) in latestSixRepos" :key="i" class="py-4">
        <h4
          class="text-xl font-xl pb-2 text-gray-200"
          style="font-family: 'Inter', sans-serif"
        >
          {{ latestRepos.name }}
        </h4>
        <p class="text-lg text-gray-500 pb-2">
          {{ latestRepos.description }}
        </p>
        <a
          :href="latestRepos.html_url"
          class="text-lg font-semibold text-gray-200"
          >View Repository &rarr;</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      repos: "",
      latestSixRepos: "",
    };
  },
  mounted: function () {
    gsap.to(".latest-projects-text", {
      scrollTrigger: {
        trigger: ".latest-projects-text",
        start: "top 700px",
        end: "top 100px",
        scrub: 2,
        // markers: true,
      },
      x: 100,
      ease: "none",
      duration: 2,
    });

    this.axios
      .get(
        "https://api.github.com/search/repositories?q=user:thetejasmagade+sort:author-date-asc"
      )
      .then((resp) => {
        let repos = resp.data.items;
        this.latestSixRepos = repos.splice(0, 6);
      });
  },
};
</script>

<style>
</style>