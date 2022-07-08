<template>
  <v-modal :isOpen="showModal" @close="close">
    <h3 @click.stop="close">modal quiz</h3>
  </v-modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "QuizComponent",

  mounted() {
    this.loadPages();
  },

  data() {
    return {
      showModal: true,
    };
  },

  methods: {
    ...mapActions(["loadPages"]),
    close() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
