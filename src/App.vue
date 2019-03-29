<template>
  <div id="app">
    <main>
      <Profile />
      <Profile />
    </main>
  </div>
</template>

<script>
import Profile from "./components/Profile";
export default {
  name: "app",
  components: {
    Profile
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Quicksand:500");

  font-family: "Lato", sans-serif;
  font-family: "Quicksand", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  display: grid;
}
</style>
