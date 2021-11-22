<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="bg-gray-900">
    <Navbar id="home" />
    <Hero id="hero" />
    <About id="about" />
    <FavouriteProjects id="favouriteprojects" />
    <Projects id="projects" />
    <LatestCode id="latestcode" />
    <a href="#home">
      <ScrollToTop />
    </a>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import FavouriteProjects from "./components/FavouriteProjects.vue";
import Projects from "./components/Projects.vue";
import LatestCode from "./components/LatestCode.vue";

export default {
  methods: {},
  components: {
    Navbar,
    Hero,
    About,
    ScrollToTop,
    FavouriteProjects,
    Projects,
    LatestCode,
  },
};
</script>

<style>
#hidden-mobile {
  display: block;
}
#hidden-desktop {
  display: none;
}

@media (max-width: 767px) {
  #hidden-mobile {
    display: none;
  }
  #hidden-desktop {
    display: block;
  }
}
</style>
