<template>
  <div>
    <MyCanvas v-bind:radius="radius" />
    <p><input type="range" min="0" max="100" v-model.number="radius" /></p>
    <p>{{ radius }}</p>
    <ClickCircleCanvas />
    <DragCubesCanvas />
  </div>
</template>

<script>
import MyCanvas from "../components/MyCanvas.vue";
import ClickCircleCanvas from "../components/ClickCircleCanvas.vue";
import DragCubesCanvas from "../components/DrabCubesCanvas.vue";
export default {
  components: {
    MyCanvas,
    ClickCircleCanvas,
    DragCubesCanvas
  },
  data: function() {
    return {
      radius: 50
    };
  }
};
</script>

<style lang="scss" scoped></style>
