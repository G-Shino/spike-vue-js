<template>
  <div id="wrapper">
    <TextInput />
  </div>
</template>

<script>
import TextInput from "../components/TextInput.vue";
export default {
  components: {
    TextInput
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
