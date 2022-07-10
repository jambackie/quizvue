<template>
  <label class="modal__select">
    <input type="checkbox" :name="inputName" v-model="value" @change="select" />
    <span>{{ input.label }}</span>
  </label>
</template>

<script>
export default {
  name: "v-checkbox",

  props: {
    inputName: {
      type: String,
      required: true,
    },
    input: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      value: false,
    };
  },

  methods: {
    select() {
      this.$emit("checkboxSelect", { ...this.input, value: this.value });
    },
  },
};
</script>
