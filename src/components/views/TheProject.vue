<template>
  <div class="project">
    <div class="container">
      <h1>{{ project.name }}</h1>
      <p>{{ project.role }}</p>

      <div class="content">
        <div class="description">
          <vue-simple-markdown
            :source="project.description"
          ></vue-simple-markdown>
        </div>
        <div class="skills">
          <span v-for="skill in project.skills.data" :key="skill">
            {{ skill.attributes.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Work",
  data() {
    return {
      work: null,
      error: null,
      project: null,
      baseUrl: process.env.VUE_APP_ROUTE_API,
    };
  },
  async mounted() {
    try {
      const id = this.$route.params.id;
      console.log(id);
      const response = await axios.get(
        `${this.baseUrl}/api/projects/${id}?populate=*`
      );
      this.project = response.data.data.attributes;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap");
.project * {
  font-family: "Roboto";
}

.project {
  display: flex;
  max-width: 80%;
  justify-content: center;
  margin: auto;
  flex-direction: column;
}

.content {
  display: flex;
}

.description {
  width: 80%;
}

.skills {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skills span {
  margin-bottom: 10px;
}
</style>
