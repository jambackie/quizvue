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
    <div v-if="checkbox">
      <v-checkbox
        v-for="inputItem in page.answers"
        :key="inputItem.label"
        :inputName="page.question"
        :input="inputItem"
        @checkboxSelect="checkboxSelect"
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
    nextPageId() {
      return this.page.nextPage;
    },
    stepsGradient() {
      const contactPoint = ((this.step - 1) / (this.maxPage - 1)) * 100;
      return `background: linear-gradient(90deg, #48bbfa ${contactPoint}%, #b3b3b3 0%)`;
    },
    radio() {
      return this.getPage.type === "radio";
    },
    checkbox() {
      return this.getPage.type === "checkbox";
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
      if (this.nextPage !== this.page.id) {
        this.setCurrentPage(this.nextPage);
        this.currentSelect = "";
        this.currentFeedback = "";
      }
    },
    pointClasses(point) {
      return {
        "modal__step-active": this.step >= point,
      };
    },
    radioSelect({ nextPage: num, label: str }) {
      this.nextPage = num || this.nextPageId;
      this.currentSelect = str;
    },
    checkboxSelect({ nextPage: num, label: str }, value) {
      console.log(value);
      if (this.currentSelect !== "") {
        if (value) {
          this.currentSelect.push(str);
        } else {
          this.currentSelect = this.currentSelect.filter((el) => el !== str);
        }
      } else {
        this.currentSelect = [str];
      }
      this.nextPage = this.currentSelect.length
        ? num || this.nextPageId
        : this.page.id;
    },
  },
};
</script>
