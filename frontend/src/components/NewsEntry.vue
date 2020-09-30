<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :href="link"
      target="_blank"
      v-ripple
      tile
      :elevation="hover ? 5 : 0"
      class="transition-swing"
    >
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12" md="1">
            <v-img
              :src="image"
              max-width="100"
              min-width="50"
              class="mx-auto"
            />
          </v-col>
          <v-col>
            <div id="title">{{ title }}</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="text-body-2 text--secondary" v-if="date !== ''">
              Posted: {{ date }}
            </div>
            <div class="text-body-1" v-if="text !== ''">
              {{ trimText(text) }}
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>
<script>
import DefaultImg from '../assets/DefaultNewsImg.png';
export default {
  name: "news-entry",
  props: {
    title: { type: String, default: "" },
    date: { type: String, default: "" },
    text: { type: String, default: "" },
    link: { type: String, default: "" },
    image: { type: String, default: DefaultImg },
    siteName: { type: String, default: "" }
  },
  methods: {
    trimText(text) {
      return text.length > 650 ? `${text.slice(0, 600)}...` : text;
    }
  }
};
</script>
<style scoped>
  #title {
    font-family: 'Roboto Slab', serif;
    font-weight: 600;
    font-size: 1.25rem;
  }
</style>