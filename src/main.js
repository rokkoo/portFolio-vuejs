import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import Icon from "vue-awesome";

Vue.config.productionTip = false;

// globally (in your main .js file)
Vue.component("v-icon", Icon);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
