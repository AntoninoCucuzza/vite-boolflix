<script>
import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default {
  data() {
    return {
      state,

    }
  },
  methods: {

  },
  components: {
    AppHeader,
    AppMain
  }
}


</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>

