<template>
  <header class="the-header">
    <nav>
      <router-link to="/">
        <img
          v-if="!homepage && logo"
          :src="`http://localhost:1337${logo.formats.medium.url}`"
          :alt="logo.alternativeText"
          class="the-header__home"
        />
      </router-link>
      <ul>
        <li v-for="item in menu" :key="item.path" class="the-header__menu-item">
          <router-link :to="'/' + item.path">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import axios from "axios";

export default {
  props: ["homepage"],
  data() {
    return {
      menu: null,
      logo: null,
    };
  },

  async mounted() {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/menus/1?populate=*"
      );
      this.menu = response.data.data.attributes.mainNav;

      this.logo = response.data.data.attributes.logo.data[0].attributes;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
header {
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
}
header,
nav {
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  display: flex;
  width: 80%;
  display: flex;
  justify-content: space-around;
  padding: 0;
}

.the_header {
  display: flex;
}

.the-header__home {
  height: 70px;
  width: fit-content;
  border-radius: 50%;
  margin-bottom: 10px;
  border: solid 1px black;
}

header a {
  display: inline-block;
  text-decoration: none;
  color: black;
  transition: all 0.2s;
  transform: scale(1);
}

header a:hover {
  transform: scale(1.2);
  transition: all 0.2s;
}
</style>
