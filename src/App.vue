<template>
  <div id="app">
    <main>
      <the-header :homepage="homepage"></the-header>
      <!-- <transition name="fade"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "./components/global/TheFooter.vue";
import TheHeader from "./components/global/TheHeader.vue";

export default {
  name: "App",

  data() {
    return {
      homepage: true,
    };
  },

  components: {
    TheHeader,
    TheFooter,
  },

  mounted() {
    this.homepage = this.$route.path === "/" ? true : false;
  },

  watch: {
    $route() {
      this.homepage = this.$route.path === "/" ? true : false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

#app {
  font-family: "VT323", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1440px;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  background: linear-gradient(-45deg, #ffffff, #cfc7c7, #dcf1f8, #b2c3bf);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
#app {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-areas: "main" "footer";
  grid-template-rows: 1fr 80px;
  height: 100%;
}
main {
  grid-area: main;
}
footer {
  grid-area: footer;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  position: relative;
  transition: opacity 0.3s;
}

.fade-enter-to,
.fade-leave {
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s;
} */
/* .slither-enter-active,
.slither-leave-active {
  transition: transform 1s;
}

.slither-enter,
.slither-leave-to {
  transform: translateX(-100%);
  position: relative;
}

.slither-enter-to,
.slither-leave {
  transform: translateX(0);
} */
</style>
