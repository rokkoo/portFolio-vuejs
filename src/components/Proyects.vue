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
          <font-awesome-icon :icon="langIcon(myRepos.language)" size="4x" />
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
  background-color: #ffffff;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232c3e50' fill-opacity='0.02'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2353a0fd' fill-opacity='0.07'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

section {
  display: grid;
  background-color: #ffffff;
  grid-template-rows: 0.1fr 1fr 0.1fr;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5%;
}

.projects {
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(3, minmax(7.5rem, 1fr));
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
  height: 0.7rem;
  width: 0.7rem;
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
  .projects {
    grid-template-columns: repeat(2, minmax(7.5rem, 1fr));
  }
}
</style>
