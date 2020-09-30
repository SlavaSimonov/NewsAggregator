<template>
  <v-app>
    <header-bar />
    <v-main>
      <articles-list-view />
    </v-main>
    <footer-bar />
  </v-app>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
import ArticlesListView from "./views/ArticlesListView";
import { mapActions } from "vuex";

export default {
  components: {
    "header-bar": HeaderBar,
    "footer-bar": FooterBar,
    "articles-list-view": ArticlesListView
  },
  created() {
    this.loadUserSitesList();
  },
  methods: {
    ...mapActions(["loadUserSitesList"])
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
</style>
