import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/views/TheHomepage";
import Projects from "@/components/views/TheProjects";
import Project from "@/components/views/TheProject";
import Blog from "@/components/views/TheBlog";
import Blogs from "@/components/views/TheBlogs";
import AboutMe from "@/components/views/AboutMe";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    {
      path: "/projects/:id",
      name: "Project",
      component: Project,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/blogs",
      name: "Blog",
      component: Blogs,
    },
    {
      path: "/blogs/:id",
      name: "Blogs",
      component: Blog,
    },
    {
      path: "/about-me",
      name: "About Me",
      component: AboutMe,
    },
  ],
});
