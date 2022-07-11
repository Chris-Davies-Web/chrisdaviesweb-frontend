<template>
  <router-link class="blog-link" :to="'/blogs/' + blog.id">
    <div class="blog-container">
      <div class="blog">
        <div class="blog-tile__image">
          <img
            :src="
              'http://localhost:1337' +
              blog.attributes.featuredImage.data.attributes.formats.large.url
            "
          />
        </div>
        <div class="blog-tile__details">
          <h1>{{ blog.attributes.title }}</h1>
          <span>{{ publishedDate }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import moment from "moment";
export default {
  name: "BlogTile",
  props: ["blog"],

  computed: {
    publishedDate() {
      return moment(this.blog.attributes.publishedAt).format("DD MMMM YYYY");
    },
  },
};
</script>

<style scoped>
.blog-link {
  text-decoration: none;
}
.blog-container {
  position: relative;
}
.blog {
  border: solid 1px lightgrey;
  width: 250px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 3px 9px 15px -8px black;
  margin: 20px;
  padding: 10px;
  transform: scale(1);
  transition: all 0.4s;
  background: white;
}

.blog:hover {
  transition: all 0.4s;
  border: solid 1px rgb(99, 97, 97);
  transform: scale(1.05);
}

.blog img {
  width: auto;
  height: 100%;
}

.blog-tile__image {
  height: 70%;
}

.blog-tile__details {
  height: 30%;
  color: black;
}
</style>
