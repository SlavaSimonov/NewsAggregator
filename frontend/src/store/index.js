import Vue from "vue";
import Vuex from "vuex";
import DefaultSites from "../data/DefaultSites.json";
import RssParser from "rss-parser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const USER_SITES = "ChosenNewsSites";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userSites: [],
    userNews: [],
    defaultSites: DefaultSites,
    isParsingNews: false
  },
  mutations: {
    setUserSites(state, sites) {
      state.userSites = sites;
    },
    setUserNews(state, news) {
      state.userNews = news;
    },
    setIsParsing(state, isParsing) {
      state.isParsingNews = isParsing;
    }
  },
  actions: {
    async parseUserSites({ commit, state }) {
      const parser = new RssParser();
      const newsList = [];

      commit("setIsParsing", true);

      if (state.userSites.length === 0) {
        commit("setUserNews", []);
      } else {
        for (let website of state.userSites) {
          console.log("Parsing : " + website.name);
          let feed = await parser.parseURL(CORS_PROXY + website.rssUrl);
          feed.items.forEach(item => {
            newsList.push({
              title: item.title ?? "",
              link: item.link ?? "",
              pubDate: item.isoDate ?? "",
              content: item.contentSnippet ?? "",
              image: feed.image?.url ?? "",
              siteName: website.name
            });
          });

          // Sort by publishing date from newer to older
          newsList.sort((a, b) => {
            if (a.pubDate === "") return -1;
            else if (b.pubDate === "") return 1;
            else return new Date(b.pubDate) - new Date(a.pubDate);
          });
          commit("setUserNews", newsList);
        }
      }

      commit("setIsParsing", false);
    },
    loadUserSitesList({ commit, dispatch }) {
      const userSites = localStorage.getItem(USER_SITES);
      if (userSites && userSites !== "undefined") {
        commit("setUserSites", JSON.parse(userSites));
        dispatch("parseUserSites");
      }
    },
    changeUserSitesList({ commit, dispatch }, newSites) {
      localStorage.setItem(USER_SITES, JSON.stringify(newSites));
      commit("setUserSites", newSites);
      dispatch("parseUserSites");
    }
  }
});
