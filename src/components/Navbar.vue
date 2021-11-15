<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <h2
              style="font-family: 'Pacifico', cursive"
              class="text-white text-3xl hover:text-green-400 cursor-pointer"
            >
              Tejas<span
                class="
                  text-3xl
                  font-extrabold
                  text-transparent
                  hover:text-white
                  bg-clip-text bg-gradient-to-br
                  from-pink-500
                  to-yellow-500
                "
                >Magade</span
              >
            </h2>
          </div>
        </div>

        <div
          class="
            hidden
            sm:block sm:ml-6
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
            absolute
            inset-y-0
            right-0
          "
        >
          <div class="flex space-x-4">
            <a
              href="#"
              @click="whichPage('Home')"
              :class="{ active: isHomeActive, inactive: !isHomeActive }"
              >Home</a
            >
            <a
              href="#about"
              @click="whichPage('About')"
              :class="{ active: isAboutActive, inactive: !isAboutActive }"
              >About</a
            >
            <a
              href="#"
              @click="whichPage('FavouriteProjects')"
              :class="{
                active: isFavouriteProjectsActive,
                inactive: !isFavouriteProjectsActive,
              }"
              >Favourite Projects</a
            >
            <a
              href="#"
              @click="whichPage('Work')"
              :class="{ active: isWorkActive, inactive: !isWorkActive }"
              >Work</a
            >
            <a
              href="#"
              @click="whichPage('Blog')"
              :class="{ active: isBlogActive, inactive: !isBlogActive }"
              >Blog</a
            >
            <a
              href="#"
              @click="whichPage('Contact')"
              :class="{ active: isContactActive, inactive: !isContactActive }"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      page: "Home",
      isHomeActive: true,
      isAboutActive: false,
      isFavouriteProjectsActive: false,
      isWorkActive: false,
      isBlogActive: false,
      isContactActive: false,

      activePageStyle: `text-white
                px-4
                py-2
                rounded-md
                text-sm
                font-medium
                bg-gradient-to-r
                from-green-400
                to-blue-500
                hover:from-pink-500 hover:to-yellow-500`,
      inActivePageStyle: `text-gray-300
                hover:bg-gray-700 hover:text-white
                px-4
                py-2
                rounded-md
                text-sm
                font-medium`,
    };
  },
  methods: {
    whichPage(data) {
      if (data == "Home") {
        this.isHomeActive = true;
        this.isAboutActive = false;
        this.isFavouriteProjectsActive = false;
        this.isWorkActive = false;
        this.isBlogActive = false;
        this.isContactActive = false;
      } else if (data == "About") {
        this.isHomeActive = false;
        this.isAboutActive = true;
        this.isFavouriteProjectsActive = false;
        this.isWorkActive = false;
        this.isBlogActive = false;
        this.isContactActive = false;
      } else if (data == "FavouriteProjects") {
        this.isHomeActive = false;
        this.isAboutActive = false;
        this.isFavouriteProjectsActive = true;
        this.isWorkActive = false;
        this.isBlogActive = false;
        this.isContactActive = false;
      } else if (data == "Work") {
        this.isHomeActive = false;
        this.isAboutActive = false;
        this.isFavouriteProjectsActive = false;
        this.isWorkActive = true;
        this.isBlogActive = false;
        this.isContactActive = false;
      } else if (data == "Blog") {
        this.isHomeActive = false;
        this.isAboutActive = false;
        this.isFavouriteProjectsActive = false;
        this.isWorkActive = false;
        this.isBlogActive = true;
        this.isContactActive = false;
      } else if (data == "Contact") {
        this.isHomeActive = false;
        this.isAboutActive = false;
        this.isFavouriteProjectsActive = false;
        this.isWorkActive = false;
        this.isBlogActive = false;
        this.isContactActive = true;
      }
    },
  },
};
</script>

<style>
.active {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #34d399;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, #3b82f6);
}
.active:hover {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #ec4899;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, #f59e0b);
}

.inactive {
  --tw-text-opacity: 1;
  color: rgba(209, 213, 219, var(--tw-text-opacity));
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

.inactive:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));
  color: white;
}
</style>