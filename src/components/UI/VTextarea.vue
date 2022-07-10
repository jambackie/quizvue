<template>
  <div>
    <v-checkbox
      v-if="useCheckbox"
      inputName="textarea"
      :input="{ label: 'Your answer' }"
      @checkboxSelect="yourAnswer"
    />
    <textarea
      class="modal__textarea"
      rows="4"
      cols="30"
      v-model="value"
      :disabled="disabled"
      @input="input"
    ></textarea>
    <v-checkbox
      v-if="noAnswer"
      inputName="textarea"
      :input="{ label: 'I do not want to answer' }"
      @checkboxSelect="noAnyAnswer"
    />
  </div>
</template>

<script>
export default {
  name: "v-textarea",

  props: {
    useCheckbox: {
      type: Boolean,
      required: true,
      default: false,
    },
    noAnswer: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data() {
    return {
      value: "",
      disabled: this.useCheckbox,
    };
  },

  watch: {
    disabled: function () {
      this.input();
    },
  },

  methods: {
    yourAnswer({ value }) {
      this.disabled = !value;
    },
    noAnyAnswer({ value }) {
      this.disabled = value;
    },
    input() {
      const str = this.disabled ? "" : this.value;
      this.$emit("textareaChange", { value: str, disabled: this.disabled });
    },
  },
};
</script>
