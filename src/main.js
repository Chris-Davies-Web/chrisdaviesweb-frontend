import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
import VueSimpleMarkdown from "vue-simple-markdown";
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import "vue-simple-markdown/dist/vue-simple-markdown.css";

Vue.use(VueSimpleMarkdown);

Vue.config.productionTip = false;
//defined as global component
Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
