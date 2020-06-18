<template>
  <div id="wrapper">
    <DragCubesKonva />
  </div>
</template>

<script>
import DragCubesKonva from "../components/DragCubesKonva.vue";
export default {
  components: {
    DragCubesKonva
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  display: flex;
  justify-content: center;
}
</style>
