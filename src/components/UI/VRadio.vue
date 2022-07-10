<template>
  <label class="modal__select">
    <input
      type="radio"
      :name="inputName"
      :value="input.label"
      @change="select"
    />
    <span>{{ input.label }}</span>
  </label>
</template>

<script>
export default {
  name: "v-radio",

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

  methods: {
    select() {
      this.$emit("radioSelect", this.input);
    },
  },
};
</script>
