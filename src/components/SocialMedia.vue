<template>
  <section>
    <font-awesome-icon
      @click="redirect('https://github.com/rokkoo/')"
      class="icons"
      :icon="['fab', 'github-square']"
      size="3x"
    />
    <font-awesome-icon
      @click="redirect('https://es.linkedin.com/in/alfonso-aguirre-12b296142')"
      class="icons"
      :icon="['fab', 'linkedin']"
      size="3x"
    />
  </section>
</template>

<script>
export default {
  name: "SocialMedia",
  methods: {
    redirect: function(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icons {
  margin: 10px;
  cursor: pointer;
  opacity: 0.8;
  animation: bounce 1s infinite; /* Star animation */
  animation-play-state: paused; /* but paused */
}

.icons:hover {
  animation-play-state: running; /* trigger on hover */
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
</style>
