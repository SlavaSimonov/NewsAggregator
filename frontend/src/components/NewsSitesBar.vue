<template>
  <v-card color="grey lighten-3" flat tile>
    <v-container class="d-flex align-center">
      <div class="text-body-1 pr-4 grey--text text--darken-1">
        {{ currentSitesText }}
      </div>
      <v-btn
        color="grey darken-1"
        @click="expandChange = !expandChange"
        small
        right
        outlined
        v-show="!expandChange"
        ><v-icon left>
          mdi-pencil-outline
        </v-icon>
        EDIT</v-btn
      >
    </v-container>
    <v-expand-transition>
      <sites-prefs-panel
        v-show="expandChange"
        :currentSites="currentNewsSites"
        :allSites="defaultNewsSites"
        @change="v => $emit('changeSites', v)"
        @collapse="expandChange = !expandChange"
      />
    </v-expand-transition>
  </v-card>
</template>

<script>
import SitesPrefsPanel from "./SitesPrefsPanel.vue";
export default {
  name: "news-sites-bar",
  components: {
    "sites-prefs-panel": SitesPrefsPanel
  },
  props: {
    currentNewsSites: {
      type: Array,
      required: true
    },
    defaultNewsSites: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expandChange: false
    };
  },
  mounted() {
    this.expandChange = this.currentNewsSites.length === 0;
  },
  computed: {
    currentSitesText() {
      if (!this.hasNewsSites()) {
        return "You have no sites selected";
      }

      const SITES_TO_SHOW = 5;
      let siteNames =
        "Showing news from: " +
        this.currentNewsSites
          .slice(0, SITES_TO_SHOW)
          .map(site => site.name)
          .join(", ");

      if (this.currentNewsSites.length >= SITES_TO_SHOW) {
        siteNames += ` + ${this.currentNewsSites.length - SITES_TO_SHOW}`;
      }

      return siteNames;
    },

  },
  methods: {
    hasNewsSites() {
      return this.currentNewsSites.length > 0;
    }
  }
};
</script>
