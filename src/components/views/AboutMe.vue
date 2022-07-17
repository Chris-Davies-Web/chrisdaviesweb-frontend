<template>
  <div class="about-me">
    <h1>About Me</h1>
    <vue-simple-markdown :source="about.description"></vue-simple-markdown>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About Me",
  data() {
    return {
      about: null,
      error: null,
      baseUrl: process.env.VUE_APP_ROUTE_API,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/api/about-me?populate=*`
      );
      this.about = response.data.data.attributes;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap");
.about-me {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  margin: auto;
}

.about-me * {
  font-family: "Roboto";
}
</style>
