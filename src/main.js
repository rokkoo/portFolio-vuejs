import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import Icon from "vue-awesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faJsSquare,
  faJava,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faJsSquare, faJava, faGithubSquare, faLinkedin);

Vue.config.productionTip = false;

// globally (in your main .js file)
Vue.component("v-icon", Icon);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
