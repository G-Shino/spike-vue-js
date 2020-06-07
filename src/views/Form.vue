<template>
  <div>
    <div>Form</div>
    <input v-model="name" />
    <p>{{ name }}</p>
    <div>
      <p>身長: <input v-model="height" type="text" /> cm</p>
      <p>体重: <input v-model="weight" type="text" /> kg</p>
    </div>
    <div>BMI: {{ bmi }}</div>
    <br />
    <div>
      <button v-on:click="countUp()">{{ count }}回</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      name: "test",
      height: "",
      weight: "",
      count: 0
    };
  },
  computed: {
    bmi() {
      if (this.height && this.weight) {
        const meterHeight = this.height / 100;
        const bmi = this.weight / (meterHeight * meterHeight);
        return bmi.toFixed(2);
      }
      return "";
    }
  },
  methods: {
    countUp() {
      this.count += 1;
    }
  }
};
</script>
