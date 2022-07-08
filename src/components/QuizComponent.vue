<template>
  <v-modal :isOpen="showModal" @close="close">
    <h3 @click.stop="close">modal quiz</h3>
  </v-modal>
</template>

<script>
export default {
  name: "QuizComponent",

  data() {
    return {
      showModal: true,
    };
  },

  methods: {
    close() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
