<template>
  <div class="blog-list">
    <h1>Blogs</h1>
    <template v-if="blogs">
      <div class="blogs">
        <blog-tile
          v-for="blog in blogs"
          :key="blog.id"
          :blog="blog"
          :baseUrl="baseUrl"
        />
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import BlogTile from "../common/BlogTile.vue";

export default {
  name: "Blogs",
  components: { BlogTile },
  data() {
    return {
      blogs: null,
      error: null,
      baseUrl: process.env.VUE_APP_ROUTE_API,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/blogs?populate=*`);
      this.blogs = response.data.data;
      console.log("this.blogs", this.blogs);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
.blogs {
  display: flex;
  max-width: 80%;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
}
</style>
