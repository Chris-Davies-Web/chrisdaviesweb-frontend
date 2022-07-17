<template>
  <div class="the-homepage">
    <h1 class="the-homepage__header" ref="typeIn" v-if="homepage">
      {{ homepage.attributes.title }}
    </h1>
    <div class="the-homepage__desc" v-if="homepage">
      {{ homepage.attributes.description }}
    </div>
    <div class="the-homepage__hero">
      <div class="the-homepage__hero-image bb">
        <img
          v-if="homepage"
          :data-src="`${baseUrl}${homepage.attributes.secondary.data.attributes.formats.medium.url}`"
          :src="`${baseUrl}${homepage.attributes.main.data.attributes.formats.medium.url}`"
          :alt="homepage.attributes.main.data.attributes.alternativeText"
        />
        {{ homepage }}
      </div>
    </div>

    <!-- <slot name="menu">
      <the-header :homepage="true"></the-header>
    </slot> -->

    <the-social></the-social>
  </div>
</template>

<script>
import axios from "axios";
//import TheHeader from "../global/TheHeader.vue";
import TheSocial from "../common/TheSocial.vue";
// import Typewriter from "typewriter-effect/dist/core";

export default {
  components: {
    // TheHeader,
    TheSocial,
  },
  name: "Homepage",
  data() {
    return {
      homepage: null,
      error: null,
      baseUrl: process.env.VUE_APP_ROUTE_API,
    };
  },

  async mounted() {
    try {
      console.log("baseUrl", this.baseUrl);
      // Get Data
      const response = await axios.get(
        `${this.baseUrl}/api/homepage?populate=*`
      );
      this.homepage = response.data.data;

      console.log("this.homepage", this.homepage);

      // Typewriter effect
      // new Typewriter(this.$refs.typeIn, {
      //   strings: ["Hello", "World"],
      //   autoStart: true,
      // });
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
.the-homepage {
  max-width: 800px;
  margin: auto;
}

.the-homepage__hero {
  display: flex;
  align-items: center;
  position: relative;
  height: 280px;
}

.the-homepage__hero img {
  width: auto;
  height: auto;
  max-height: 200px;
}

.the-homepage__desc {
  max-width: 500px;
  margin: auto;
  font-size: 17px;
  letter-spacing: 0.4px;
}

/* Image animation */
.bb,
.bb::before,
.bb::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.bb {
  width: 200px;
  height: 200px;
  margin: auto;
  color: #3746cf;
}
.bb::before,
.bb::after {
  content: "";
  z-index: -1;
  margin: -5%;
  box-shadow: inset 0 0 0 2px;
  animation: clipMe 8s linear infinite;
}
.bb::before {
  animation-delay: -4s;
}
@keyframes clipMe {
  0%,
  100% {
    clip: rect(0px, 220px, 2px, 0px);
  }
  25% {
    clip: rect(0px, 2px, 220px, 0px);
  }
  50% {
    clip: rect(218px, 220px, 220px, 0px);
  }
  75% {
    clip: rect(0px, 220px, 220px, 218px);
  }
}
html,
body {
  height: 100%;
}
body {
  position: relative;
  background-color: #0f222b;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
