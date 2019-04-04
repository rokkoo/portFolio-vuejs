<template>
  <section>
    <font-awesome-icon
      @click="redirect('https://github.com/')"
      class="icons"
      :icon="['fab', 'github-square']"
      size="3x"
    />
    <font-awesome-icon
      @click="redirect('https://es.linkedin.com/')"
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
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
}

.icons {
  margin: 10px;
  cursor: pointer;
  color: white;
  opacity: 0.8;
}

.icons:hover {
  box-shadow: 0 4px 8px 0 rgba(6, 81, 221, 0.308),
    0 6px 20px 0 rgba(52, 152, 219, 0.24);
}
</style>


