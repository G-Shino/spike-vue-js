<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" />
    <button v-on:click="reverse()">Reverse</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return { message: "Hello Vue.js!" };
  },
  methods: {
    reverse: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style scoped></style>
