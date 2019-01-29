<template>
  <div class="home">
    <h1>Search Parks</h1>
    <input type="search" v-model="query">
    <button @click="search">Search</button>
    <ul>
      <li :key="result.id" v-for="result in results">
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data: function() {
    return {
      query: "",
    };
  },
  computed: {
    results() {
      return this.$store.state.searchResults;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("doSearch", this.query);
    }
  }
};
// this.$store.state.query;
</script>
