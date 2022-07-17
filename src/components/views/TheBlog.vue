<template>
  <div class="blog">
    <slot name="menu">
      <the-header></the-header>
    </slot>
    <h1>{{ blog.attributes.title }}</h1>
    <span>{{ publishedDate }}</span>
    <vue-simple-markdown
      :source="blog.attributes.content"
    ></vue-simple-markdown>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Blog",
  data() {
    return {
      blog: null,
      error: null,
      baseUrl: process.env.VUE_APP_ROUTE_API,
    };
  },
  computed: {
    publishedDate() {
      return moment(this.blog.attributes.publishedAt).format("DD MMMM YYYY");
    },
  },
  async mounted() {
    try {
      console.log(this.$route.params.id);
      const response = await axios.get(
        `${this.baseUrl}/api/blogs/${this.$route.params.id}`
      );
      this.blog = response.data.data;
      console.log(this.blog);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
