<script>
import { state } from './state';

export default {
  data() {
    return {
      state,
      searchFor: '',
    }
  },
  created() {
    state.fetchData()
  },
  methods: {
    lookingFor() {
      /* console.log(state.base_url + `&query=${this.searchFor}`); */

      const newUrl = state.base_url + `&query=${this.searchFor}`;
      this.state.base_url = newUrl

      state.fetchData(newUrl)
      console.log(newUrl);

      this.searchFor = ''
    }
  }
}


</script>

<template>
  <div class="contenitore d-flex justify-content-center align-items-center">
    <input type="text" v-model="searchFor" @keyup.enter="lookingFor()">
  </div>
</template>

<style lang="scss" scoped>
.contenitore {
  background-color: rgb(26, 25, 25);
  min-height: 100vh;
}
</style>

