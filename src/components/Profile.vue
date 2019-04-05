/* eslint-disable no-console */
<template>
  <main>
    <section class="profile">
      <img src="../assets/profilePic.jpg" alt="Progfile img" />
      <p class="hi">{{ informationTitle }}</p>
      <p class="information">{{ informationText }}</p>
      <figure>
        <div
          v-for="(info, index) in information"
          :key="index"
          @click="changueShowInfo()"
          class="circle"
          v-bind:class="{ active: index === textPag }"
        ></div>
      </figure>
      <hr />
      <SocialMedia />
    </section>
  </main>
</template>

<script>
import information from "./informationText.js";
import SocialMedia from "./SocialMedia";

export default {
  components: {
    SocialMedia
  },
  data() {
    return {
      information,
      textPag: 0
    };
  },
  computed: {
    informationTitle() {
      return information[this.textPag].title;
    },
    informationText() {
      return information[this.textPag].text;
    }
  },
  methods: {
    changueShowInfo() {
      this.textPag + 1 >= information.length
        ? (this.textPag = 0)
        : (this.textPag += 1);
    }
  }
};
</script>

<style scoped>
main {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  background: -webkit-linear-gradient(
    50% 54% at center,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  /* background: radial-gradient(50% 50% at center, #53a0fd 50%, #4f3eeb 200%); */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353a0fd' fill-opacity='0.07'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    radial-gradient(50% 50% at center, #53a0fd 50%, #4f3eeb 200%);
}

.profile {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  width: 75%;
  justify-self: center;
  align-self: center;
  line-height: 2em;
}

img {
  width: 28%;
  height: 28%;
  margin-top: 1rem;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13), 0 6px 20px 0 rgba(0, 0, 0, 0.082);
}

.hi {
  font-size: 2em;
  line-height: 0;
  margin-top: 1rem;
}

figure {
  margin: 0;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}
.circle {
  border-radius: 50%;
  height: 0.7rem;
  width: 0.7rem;
  margin: 3px;
  border: 1px solid #2c3e5059;
  cursor: pointer;
}

.information {
  padding-left: 1rem;
  padding-right: 1rem;
}

.active {
  background-color: #141e30;
}

.arrow {
  /* color: #5778f3; */
  /* transition: transform 0.3s ease-in-out; */
  animation: bounce 4s infinite;
  font-size: 25px;
  cursor: pointer;
}

hr {
  border: 0.5px solid #2c3e50;
  border-radius: 5px;
  width: 50%;
  opacity: 0.3;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-30px);
  }
  60% {
    transform: translateX(-15px);
  }
}

@media (max-width: 600px) {
  img {
    width: 45%;
    height: 45%;
  }
}
</style>
