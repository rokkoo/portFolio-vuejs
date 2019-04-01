/* eslint-disable no-console */
<template>
  <main>
    <section>
      <img src="../assets/profilePic.jpg" alt="Progfile img">
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
      <v-icon class="arrow" @mousedown.native="changueShowInfo()" name="arrow-right" scale="2"/>
    </section>
  </main>
</template>

<script>
import information from "./informationText.js";

export default {
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
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: radial-gradient(50% 54%, #53a0fd 50%, #4f3eeb 200%);
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
}

section {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  justify-self: center;
  width: 45%;
  min-width: 70%;
  max-width: 80%;
  padding: 15px;
  line-height: 2em;
}

img {
  width: 28%;
  height: 28%;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13), 0 6px 20px 0 rgba(0, 0, 0, 0.082);
}
.information {
  min-height: 10em;
}

.hi {
  font-size: 2em;
  line-height: 0;
}

figure {
  margin: 0;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
.circle {
  border-radius: 50%;
  height: 7px;
  width: 7px;
  margin: 3px;
  border: 1px solid #2c3e5059;
  cursor: pointer;
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
  section {
    width: 70%;
  }

  img {
    width: 45%;
    height: 45%;
  }
}
</style>
