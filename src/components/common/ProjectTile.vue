<template>
  <router-link class="project-link" :to="'/projects/' + this.projectId">
    <div class="project-container">
      <div class="project">
        <h1 v-if="projectTile.logo" class="project-image">
          <img :src="baseUrl + projectTile.logo.attributes.url" />
        </h1>
        <h1 class="project-name" v-else>{{ projectTile.name }}</h1>
        <p class="project-position">
          {{ projectTile.role }} @ {{ projectTile.company }}
        </p>
        <span class="project-date">{{ from }} - {{ to }}</span>

        <div class="skills">
          <div
            v-for="skill in projectTile.skills"
            :key="skill.attributes.name"
            class="skill"
          >
            <div class="skill-logo" v-if="skill.logo">
              <img
                :src="baseUrl + skill.logo.attributes.image.data[0].url"
                :alt="
                  skill.logo.attributes.image.data[0].attributes.alternativeText
                "
              />
            </div>
            <span class="skill-pill" v-else>
              {{ skill.attributes.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "ProjectTile",
  props: ["project", "projectId"],
  data() {
    return {
      projectTile: {
        ...this.project,
        skills: {},
        logo: null,
      },
      skillLogos: false,
      baseUrl: process.env.VUE_APP_ROUTE_API,
    };
  },
  computed: {
    to() {
      return this.projectTile.to
        ? moment(this.projectTile.to).format("MMMM YYYY")
        : "Today";
    },
    from() {
      return moment(this.projectTile.from).format("MMMM YYYY");
    },
  },
  methods: {
    async getData() {
      await this.getLogoAndSkills();
      await this.getSkillLogos();
    },
    async getLogoAndSkills() {
      const response = await axios.get(
        `${this.baseUrl}/api/projects/${this.projectId}?populate=*`
      );
      this.projectTile.skills = response.data.data.attributes.skills.data;
      this.projectTile.logo = response.data.data.attributes.logo.data;
    },
    async getSkillLogos() {
      await this.projectTile.skills.forEach(async (skill) => {
        const response = await axios.get(
          `${this.baseUrl}/api/skills/${skill.id}?populate=*`
        );
        this.skill.logo = response.data.data;
      });

      this.skillLogos = true;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.project-link {
  text-decoration: none;
}

.project-container {
  position: relative;
}
.project {
  border: solid 1px lightgrey;
  width: 200px;
  border-radius: 5px;
  box-shadow: 3px 9px 15px -8px black;
  margin: 20px;
  padding: 10px;
  transform: scale(1);
  transition: all 0.4s;
  background: white;
}

.project .project-name {
  height: 65px;
}

.project .project-position {
  height: 40px;
}

.project:hover {
  transition: all 0.4s;
  border: solid 1px rgb(99, 97, 97);
  transform: scale(1.05);
}

.project-position {
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.project-date {
  font-size: 16px;
  color: black;
  text-decoration: none;
}

.project-image {
  margin-top: 0;
  height: 100px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.project img {
  max-width: 100%;
  height: fit-content;
}

.skills {
  display: flex;
  padding-top: 10px;
  flex-wrap: nowrap;
  overflow: auto;
  margin-top: 15px;
  border-top: 1px solid lightgrey;
}

.skills::-webkit-scrollbar {
  width: 10px;
  height: 3px;
}

/* Track */
.skills::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.skills::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.skills::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.skill-pill {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  white-space: nowrap;
}

.skill-logo {
  max-width: 100px;
}
</style>
