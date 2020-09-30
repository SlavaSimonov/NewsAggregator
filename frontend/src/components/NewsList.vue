<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="(item, index) in currentItems" :key="index">
        <v-card v-if="putDate(index)" class="py-3" flat tile>
          <div class="d-flex align-center">
            <div class="text-body-2 text-center text--secondary pb-1 px-6">
              {{ itemDateFormat(item) }}
            </div>
            <v-divider />
          </div>
        </v-card>
        <news-entry
          :title="item.title"
          :date="itemDateFormat(item, true)"
          :text="item.content"
          :link="item.link"
          :image="item.image || defaultEntryImage"
          :siteName="item.siteName"
        />
      </v-col>
      <v-col cols="12">
        <v-card v-intersect="infiniteScrolling" class="py-5" flat tile>
          <v-progress-linear
            v-if="isLoading"
            indeterminate
            color="grey darken-4"
            class="my-5"
          ></v-progress-linear>
          <div v-else class="text-body-1 text-center">{{ endText }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import NewsEntry from "./NewsEntry.vue";
import DefaultImg from '../assets/DefaultNewsImg.png';
export default {
  name: "news-list",
  components: {
    "news-entry": NewsEntry
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentItems: [],
      LOAD_PORTION: 10,
      currentLastIndex: 0,
      endText: "Looking for older news...",
      defaultEntryImage: DefaultImg
    };
  },
  watch: {
    items(updatedList) {
      this.currentItems = updatedList.slice(0, this.currentLastIndex);
    }
  },
  created() {
    this.currentLastIndex += this.LOAD_PORTION;
    this.currentItems = this.items.slice(0, this.currentLastIndex);
  },
  methods: {
    infiniteScrolling(entries, observer, isIntersecting) {
      if (this.currentLastIndex < this.items.length) {
        this.currentLastIndex += this.LOAD_PORTION;
        this.currentItems = this.items.slice(0, this.currentLastIndex);
      } else if (this.items.length === 0) {
        this.endText = "No news found!";
      } else {
        this.endText = "It seems, you've read everything!";
      }
    },
    putDate(index) {
      const currDate = this.itemDateFormat(this.currentItems[index]);

      if (index === 0) {
        return currDate !== "";
      }

      const beforeDate = this.itemDateFormat(this.currentItems[index - 1]);

      return (
        this.itemDateFormat(this.currentItems[index]) !==
        this.itemDateFormat(this.currentItems[index - 1])
      );
    },
    itemDateFormat(item, preserveTime = false) {
      if (item.pubDate === "") {
        return "";
      } else {
        const d = new Date(item.pubDate);
        let formattedDate = "";
        if (d.toLocaleDateString() === new Date().toLocaleDateString()) {
          formattedDate = "Today";
        } else {
          formattedDate = d.toLocaleDateString();
        }

        if (preserveTime) {
          formattedDate += `, ${d.toLocaleTimeString()}`;
        }

        return formattedDate;
      }
    }
  }
};
</script>
