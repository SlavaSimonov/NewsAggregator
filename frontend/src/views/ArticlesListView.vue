<template>
  <div>
    <news-sites-bar
      :currentNewsSites="currentSitesList"
      :defaultNewsSites="defaultSites"
      @changeSites="v => changeUserSitesList(v)"
    />
    <news-list :items="newsList" :isLoading="isLoading" />
  </div>
</template>

<script>
import NewsSitesBar from "../components/NewsSitesBar.vue";
import NewsList from "../components/NewsList.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "articles-list-view",
  components: {
    "news-sites-bar": NewsSitesBar,
    "news-list": NewsList
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      newsList: "userNews",
      currentSitesList: "userSites",
      defaultSites: "defaultSites",
      isLoading: "isParsingNews"
    })
  },
  methods: {
    ...mapActions({
      changeUserSitesList: "changeUserSitesList"
    })
  }
};
</script>
