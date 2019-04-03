<template>
  <main>
    <section>
      <h1>Mis proyectos</h1>
      <div class="projects">
        <div
          v-for="(myRepos, index) in filterArray"
          :key="index"
          v-bind:class="{ js: myRepos.language.toLowerCase() === 'javascript' }"
          class="repoContainer"
          @click="goToUrl(myRepos.html_url)"
        >
          <font-awesome-icon :icon="langIcon(myRepos.language)" size="4x"/>
          <h4 class="repoTitle">{{ myRepos.name }}</h4>
          <!-- <p class="repoLang">{{ myRepos.language }}</p> -->
        </div>
      </div>
      <figure>
        <div
          v-for="(n, index) in reposPageSize"
          :key="index"
          class="circle"
          v-bind:class="{ active: currentPage === index }"
          @click="changueProyectPage(index)"
        ></div>
      </figure>
    </section>
  </main>
</template>

<script>
export default {
  name: "proyect",
  beforeMount: function() {
    this.fetchRepos();
  },
  data: function() {
    return {
      repos: [],
      currentPage: 0,
      perPage: 6
    };
  },
  methods: {
    insertRepo: function(repo) {
      const pagesLength = this.repos.length;
      if (pagesLength == 0) this.repos.push([repo]);
      else if (this.repos[pagesLength - 1].length < this.perPage)
        this.repos[pagesLength - 1] = [...this.repos[pagesLength - 1], repo];
      else this.repos.push([repo]);
    },
    fetchRepos: async function() {
      const url = "https://api.github.com/users/rokkoo/repos";
      const rawData = await fetch(url);
      const jsonData = await rawData.json();
      //TODO: Crear arrays correspondientes a cantidad de paginas @perpage
      jsonData.map(({ name, language, html_url }) => {
        this.insertRepo({ name, language, html_url });
      });
    },
    changueProyectPage: function(pointIndex) {
      this.currentPage = pointIndex;
    },
    langIcon: function(language) {
      const defaultValue = ["fab", "js-square"];
      if (language.toLowerCase() === "javascript") return ["fab", "js-square"];
      if (language.toLowerCase() === "java") return ["fab", "java"];

      return defaultValue;
    },
    goToUrl: function(url) {
      window.open(url, "_blank");
    }
  },
  computed: {
    filterArray: function() {
      return this.repos[this.currentPage];
    },
    reposPageSize: function() {
      return this.repos.length;
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
  display: grid;
  grid-template-rows: 0.1fr 1fr 0.1fr;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5%;
}

.projects {
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(3, minmax(12rem, 1fr));
  font-size: 2.2vh;
  margin: 10px;
}

.repoContainer {
  cursor: pointer;
  padding: 10px;
  background-color: white;
  margin: 10px;
  border-radius: 5%;
  box-shadow: 0 2px 3px rgba(116, 125, 140, 0.1),
    0 0 0 1px rgba(116, 125, 140, 0.1);
}

.repoContainer:hover {
  box-shadow: 0 4px 8px 0 rgba(6, 81, 221, 0.308),
    0 6px 20px 0 rgba(52, 152, 219, 0.24);
}
.repoTitle {
  margin-top: 20px;
}

.button {
  display: flex;
  text-align: center;
  align-items: center;
  border-radius: 30%;
  background-color: #53a0fd;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

figure {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

@media (max-width: 600px) {
  .section {
    margin-top: 50px;
  }
}
</style>
