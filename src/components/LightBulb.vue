<template>
  <div class="container px-28 py-10 bg-gray-200 is-hidden-mobile">
    <img src="@/assets/images/lightbulb-on.png" id="bulb" />
    <p class="pt-5">
      <button
        class="
          h-10
          px-5
          m-2
          text-indigo-100
          transition-colors
          duration-150
          bg-indigo-700
          rounded-lg
          focus:shadow-outline
          hover:bg-indigo-800
        "
        @click="light(1)"
      >
        Turn On Bulb
      </button>
      <button
        class="
          h-10
          px-5
          m-2
          text-indigo-100
          transition-colors
          duration-150
          bg-indigo-700
          rounded-lg
          focus:shadow-outline
          hover:bg-indigo-800
        "
        @click="light(0)"
      >
        Turn Off Bulb
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: "@/assets/images/lightbulb-off.png",
    };
  },
  methods: {
    light(sw) {
      if (sw == 0) {
        this.pic = "@/assets/images/lightbulb-off.png";
      } else {
        this.pic = "@/assets/images/lightbulb-on.png";
      }
    },
  },
};
</script>

<style>
#bulb {
  height: 250px;
  width: 250px;
}
</style>