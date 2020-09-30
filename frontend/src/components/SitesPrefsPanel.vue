<template>
  <v-container>
    <v-chip
      v-for="(newsSite, index) in currentSites"
      :key="index"
      close
      @click:close="removeSite(newsSite.name)"
      class="mr-2 mt-1"
      >{{ newsSite.name }}</v-chip
    >
    <v-divider class="my-4" />
    <v-form ref="addForm" lazy-validation>
      <v-row align="center">
        <v-col cols="12" md="1">
          <div id="addTitle">Add website:</div>
        </v-col>
        <v-col cols="12" md="4">
          <v-combobox
            v-model="inputSite"
            :items="availableNewsSites"
            item-text="name"
            label="News website"
            prepend-inner-icon="mdi-web"
            :rules="siteInputRules"
            hide-no-data
            :return-object="false"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="inputRss"
            label="RSS Feed URL"
            :rules="[v => !!v || 'RSS URL is required!']"
            prepend-inner-icon="mdi-link"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-btn rounded color="grey darken-4" dark @click="addNewsSite"
            ><v-icon left>
              mdi-plus </v-icon
            >ADD WEBSITE</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
    <v-btn
      block
      text
      large
      tile
      class="mt-5"
      @click="collapse"
      :disabled="currentSites.length === 0"
      ><v-icon>mdi-arrow-collapse-up</v-icon></v-btn
    >
  </v-container>
</template>
<script>
export default {
  name: "sites-prefs-panel",
  props: {
    currentSites: {
      type: Array,
      required: true
    },
    allSites: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      inputSite: "",
      inputRss: "",
      siteInputRules: [
        v => !!v || "Site name is required!",
        v =>
          !this.currentSites.map(site => site.name).includes(v) ||
          "This site already exists!"
      ]
    };
  },
  watch: {
    inputSite(newSite) {
      this.inputRss =
        this.allSites.find(site => site.name === newSite)?.rssUrl ?? "";
    }
  },
  computed: {
    availableNewsSites() {
      return this.allSites.filter(
        site => !this.currentSites.map(curr => curr.name).includes(site.name)
      );
    }
  },
  methods: {
    addNewsSite() {
      if (this.$refs.addForm.validate()) {
        const newSite = this.allSites.find(
          site => site.name === this.inputSite
        ) ?? {
          name: this.inputSite,
          rssUrl: this.inputRss
        };

        this.$emit("change", [...this.currentSites, newSite]);
        this.$refs.addForm.reset();
      }
    },
    removeSite(siteName) {
      this.$emit(
        "change",
        this.currentSites.filter(site => site.name !== siteName)
      );
    },
    collapse() {
      this.$emit("collapse");
    }
  }
};
</script>
<style scoped>
#addTitle {
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  font-size: 1.25rem;
}
</style>
