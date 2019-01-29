<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
import api from "./api";
export default {
  mounted() {
    api.getParks().then((response) => {
      console.log(response);
    }).catch(error => {
      console.error(error.response);
    });
  }
};
</script>
