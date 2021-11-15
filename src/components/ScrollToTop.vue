<template>
  <div class="is-hidden-mobile">
    <button
      class="
        bg-red-300
        hover:bg-gray-300
        text-gray-800
        font-bold
        py-2
        px-4
        rounded
        inline-flex
        items-center
      "
      style="position: fixed; bottom: 20px; right: 20px; cursor: pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <g><rect fill="none" height="24" width="24" /></g>
        <g>
          <g>
            <polygon
              points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59"
            />
            <polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5" />
          </g>
        </g>
      </svg>
      <span>Scroll To Top</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>