<template>
  <v-modal v-if="page" :isOpen="showModal" @close="close">
    <h3 class="modal__title">Please answer a few questions</h3>
    <div class="modal__steps" :style="stepsGradient">
      <div
        v-for="point in maxPage"
        :key="point"
        class="modal__step"
        :class="pointClasses(point)"
      ></div>
    </div>
    <h4 class="modal__heading">
      {{ page.question }} ({{ page.step }}/{{ maxPage }})
    </h4>
    <div v-if="radio">
      <v-radio
        v-for="inputItem in page.answers"
        :key="inputItem.label"
        :inputName="page.question"
        :input="inputItem"
        @radioSelect="radioSelect"
      />
    </div>
    <button class="modal__btn" @click="next">{{ page.button }}</button>
  </v-modal>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "QuizComponent",

  mounted() {
    this.loadPages();
  },

  data() {
    return {
      showModal: true,
      nextPage: 1,
      currentSelect: "",
      currentFeedback: "",
    };
  },

  computed: {
    ...mapGetters(["getPage", "getMaxPage"]),
    page() {
      return this.getPage;
    },
    step() {
      return this.getPage.step;
    },
    maxPage() {
      return this.getMaxPage;
    },
    stepsGradient() {
      const contactPoint = ((this.step - 1) / (this.maxPage - 1)) * 100;
      return `background: linear-gradient(90deg, #48bbfa ${contactPoint}%, #b3b3b3 0%)`;
    },
    radio() {
      return this.getPage.type === "radio";
    },
  },

  methods: {
    ...mapMutations(["setCurrentPage"]),
    ...mapActions(["loadPages"]),
    close() {
      this.showModal = !this.showModal;
      localStorage.setItem("quiz", 1);
    },
    next() {
      this.setCurrentPage(this.nextPage);
    },
    pointClasses(point) {
      return {
        "modal__step-active": this.step >= point,
      };
    },
    radioSelect(num, str) {
      this.nextPage = num;
      this.currentSelect = str;
    },
  },
};
</script>
