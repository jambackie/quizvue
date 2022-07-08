<template>
  <div id="app">
    <QuizComponent />
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import QuizComponent from "./components/QuizComponent.vue";

export default {
  name: "App",
  components: { HeaderComponent, QuizComponent },
};
</script>
