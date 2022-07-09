<template>
  <div v-show="isOpen" class="overlay" @click="close">
    <div class="overlay__modal modal" @click.stop>
      <button @click="close" class="modal__close"></button>
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
