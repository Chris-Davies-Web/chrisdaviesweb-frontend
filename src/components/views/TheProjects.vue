<template>
  <div class="work">
    <h1 v-if="work.title">{{ work.title }}</h1>
    <project-filters></project-filters>
    <template v-if="projects">
      <div class="projects">
        <project-tile
          v-for="project in projects"
          :project="project.attributes"
          :key="project.attributes.name"
          :projectId="project.id"
        ></project-tile>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import ProjectTile from "../common/ProjectTile.vue";
import ProjectFilters from "../common/ProjectFilters.vue";

export default {
  components: { ProjectTile, ProjectFilters },
  name: "Work",
  data() {
    return {
      work: {
        title: "Projects",
      },
      error: null,
      projects: null,
      skills: null,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/work?populate=*"
      );
      this.work = response.data.data.attributes;
      this.projects = response.data.data.attributes.projects.data;
      console.log(this.projects);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
.projects {
  display: flex;
  max-width: 80%;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
}
</style>
