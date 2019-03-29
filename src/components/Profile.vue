/* eslint-disable no-console */
<template>
  <main>
    <section>
      <img src="../assets/profilePic.jpg" alt="Progfile img" />
      <p class="hi">¡Hola 😊!</p>
      <p>{{ information }}</p>
      <v-icon
        class="arrow"
        @mousedown.native="changueShowInfo()"
        @mouseover.native="onHover($event)"
        @mouseleave.native="onLeave()"
        name="arrow-right"
        scale="2"
      />
    </section>
  </main>
</template>

<script>
import informationText from "./informationText.js";
export default {
  data() {
    return {
      informationText,
      textPag: 0
    };
  },
  computed: {
    information() {
      return informationText[this.textPag];
    }
  },
  methods: {
    changueShowInfo() {
      //TODO: Añadir titulo a cada seccion?
      this.textPag + 1 >= informationText.length
        ? (this.textPag = 0)
        : (this.textPag += 1);
    },
    onHover: function(e) {
      e.target.style("");
      console.log(e.target);
      console.log("aa");
    },
    onLeave: function() {
      console.log("leave");
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
  background-color: white;
  border-radius: 5px;
  justify-self: center;
  width: 45%;
  max-width: 80%;
  padding: 15px;
  line-height: 2em;
}

img {
  width: 28%;
  height: 28%;
  border-radius: 50%;
}

.hi {
  font-size: 2em;
  line-height: 0;
}

.arrow {
  /* color: #5778f3; */
  /* transition: transform 0.3s ease-in-out; */
  animation: bounce 2s infinite;
  font-size: 25px;
  cursor: pointer;
}

/* .arrow:hover {
  cursor: pointer;
  transform: translateX(8px);
} */

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
