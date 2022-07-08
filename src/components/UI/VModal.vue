<template>
  <div v-show="isOpen" class="overlay" @click="close">
    <div class="overlay__modal modal">
      <button @click.stop="close" class="modal__close"></button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-modal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
