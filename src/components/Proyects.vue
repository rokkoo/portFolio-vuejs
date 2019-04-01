<template>
  <main>
    <section>
      <h1>Mis proyectos</h1>
      <div class="projects">
        <div
          v-for="(myRepos, index) in filterArray"
          :key="index"
          v-bind:class="{js: myRepos.language.toLowerCase() === 'javascript'}"
          class="repoContainer"
        >
          <h4 class="repoTitle">{{myRepos.name}}</h4>
          <h4 class="repoLang">{{myRepos.language}}</h4>
          <div class="button">Ver proyecto</div>
        </div>
      </div>
      <figure>
        <div
          v-for="(page, index) in reposPageSize"
          :key="index"
          class="circle"
          v-bind:class="{ active: index }"
        ></div>
      </figure>
    </section>
  </main>
</template>

<script>
export default {
  name: "proyect",
  beforeMount: async function() {
    await this.fetchRepos();
  },
  data: function() {
    return {
      repos: [],
      currentPage: 0,
      perPage: 6
    };
  },
  methods: {
    fetchRepos: async function() {
      const url = "https://api.github.com/users/rokkoo/repos";
      const rawData = await fetch(url);
      const jsonData = await rawData.json();
      //TODO: Crear arrays correspondientes a cantidad de paginas @perpage
      this.repos = jsonData.map(({ name, language, html_url }, index) => {
        return {
          name,
          language,
          html_url
        };
      });
    }
  },
  computed: {
    filterArray: function() {
      console.log(this.repos.filter((el, index) => index % 6 != 0));
      return this.repos.filter((el, index) => index < 6);
    },
    reposPageSize: function() {
      if (this.repos.length > 0)
        return this.repos.reduce((pages, index) =>
          index % 6 === 0 ? pages++ : pages
        );
      else return 0;
    }
  }
};
</script>

<style scoped>
main {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

section {
  min-height: 70%;
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5%;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.repoContainer {
  background-color: white;
  margin: 10px;
  border-radius: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.js {
  display: grid;
  grid-template-rows: 0.1fr 1fr 0.3fr;
  grid-auto-flow: dense;
  /* background-image: url("../assets/js.jpg");
  background-size: 100% 100%; */
}

.repoTitle {
  border-bottom: 1px solid gray;
}

.button {
  background-color: #53a0fd;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  border-top-right-radius: 50px 20px;
  border-top-left-radius: 50px 20px;
}

figure {
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: tomato;
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
</style>
