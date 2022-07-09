<template>
  <label class="modal__select">
    <input
      type="radio"
      :name="inputName"
      :value="input.value"
      @click="select"
    />
    {{ input.label }}
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
      this.$emit("radioSelect", this.input.value, this.input.label);
    },
  },
};
</script>
