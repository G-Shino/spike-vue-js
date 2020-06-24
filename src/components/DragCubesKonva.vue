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

    const rect = new Konva.Rect({
      x: 20,
      y: 30,
      width: 100,
      height: 50,
      fill: "#f98289",
      stroke: "#491022",
      strokeWidth: 4,
      draggable: true,
      // shadowBlur: 10,
      cornerRadius: [10, 10, 10, 10]
    });
    this.layer.add(rect);

    const circle = new Konva.Circle({
      x: 200,
      y: 50,
      radius: 40,
      fill: "#f98289",
      stroke: "#491022",
      strokeWidth: 4
    });
    this.layer.add(circle);

    const ellipse = new Konva.Ellipse({
      x: 280,
      y: 50,
      radiusX: 10,
      radiusY: 30,
      radius: 40,
      fill: "#f98289",
      stroke: "#491022",
      strokeWidth: 4
    });
    this.layer.add(ellipse);

    const wedge = new Konva.Wedge({
      x: 350,
      y: 50,
      radius: 40,
      angle: 80,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
      rotation: 80
    });
    this.layer.add(wedge);

    const greenLine = new Konva.Line({
      points: [5, 70, 140, 23, 250, 60, 300, 20],
      stroke: "#ffef20",
      strokeWidth: 5,
      lineJoin: "round",
      lineCap: "round",
      // dash: [29, 20, 0.001, 20]
      dash: [10, 30]
    });
    this.layer.add(greenLine);

    const simpleText = new Konva.Text({
      x: this.width / 4,
      y: this.height * 0.4,
      text: "Simple Text",
      fontSize: 30,
      fontFamily: "Calibri",
      fill: "green"
    });
    simpleText.offsetX(simpleText.width() / 2);
    const complexText = new Konva.Text({
      x: this.width / 4,
      y: this.height * 0.4 + 20,
      text:
        "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
      fontSize: 18,
      fontFamily: "Calibri",
      fill: "#555",
      width: 300,
      padding: 20,
      align: "center"
    });
    complexText.offsetX(complexText.width() / 2);
    const textRect = new Konva.Rect({
      x: this.width / 4,
      y: this.height * 0.4 - 10,
      stroke: "#555",
      strokeWidth: 5,
      fill: "#ddd",
      width: 300,
      height: complexText.height() + simpleText.height(),
      shadowColor: "black",
      shadowBlur: 10,
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowOpacity: 0.2,
      cornerRadius: 10
    });
    textRect.offsetX(textRect.width() / 2);
    this.layer.add(textRect);
    this.layer.add(simpleText);
    this.layer.add(complexText);

    this.stage.add(this.layer);
  }
};
</script>
<style lang="scss" scoped>
#container {
  border: 1px solid black;
}
</style>
