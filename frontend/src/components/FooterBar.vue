<template>
  <v-footer absolute padless dark color="grey darken-4" height="100">
    <div class="d-flex flex-column justify-center mx-auto">
      <div class="text-subtitle-2 text-center">
        © {{ year }} - Slava Simonov
      </div>
      <div class="text-subtitle-2 text-center">
        <v-icon>mdi-email-outline</v-icon>
        simonowslawa@gmail.com
      </div>
    </div>
  </v-footer>
</template>
<script>
export default {
  name: "footer-bar",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
