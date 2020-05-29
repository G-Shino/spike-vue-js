<template>
  <div>
    <hr />
    <p>{{ message }}</p>
    <input v-model="message" />
    <button v-on:click="reverse()">Reverse</button>
    <hr />
    <ol>
      <li v-for="(it, idx) in items" v-bind:key="idx">
        {{ it }} <button v-on:click="delItem(idx)">x</button>
      </li>
    </ol>
    <input v-model="item" />
    <button v-on:click="addItem()">Add Item</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "samples",
  data: function() {
    return {
      // 1
      message: "Hello Vue.js!",
      //2
      items: ["aaa", "bb", "c"],
      item: "hello"
    };
  },
  methods: {
    //1
    reverse: function() {
      // console.log(this);
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    //2
    addItem: function() {
      this.items.push(this.item);
    },
    delItem: function(_idx) {
      this.items.splice(_idx, 1);
    }
  }
};
</script>

<style scoped></style>
