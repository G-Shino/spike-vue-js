<template>
  <div ref="container" id="container"></div>
</template>
<script>
import Konva from "konva";
export default {
  data: function() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      stage: null,
      layer: null
    };
  },
  mounted: function() {
    const container = this.$refs.container;
    this.stage = new Konva.Stage({
      container: container,
      width: this.width / 2,
      height: this.height * 0.8
    });
    this.layer = new Konva.Layer();
    const rect1 = new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 50,
      fill: "green",
      stroke: "black",
      strokeWidth: 4
    });
    this.layer.add(rect1);
    this.stage.add(this.layer);
  }
};
</script>
<style lang="scss" scoped>
#container {
  border: 1px solid black;
}
</style>
