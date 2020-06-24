<template>
  <div id="wrapper">
    <div ref="container" id="container"></div>
    <div v-if="flagModal">
      <textarea
        id="text"
        v-on:input="handleTextArea($event)"
        v-bind:value="message"
      ></textarea>
      <button v-on:click="handleOutsideCanvasClick">OK</button>
    </div>
  </div>
</template>
<script>
import Konva from "konva";
export default {
  data: function() {
    return {
      height: window.innerHeight,
      stage: null,
      canvas: null,
      context: null,
      layer: null,
      flagModal: false,
      message: "sample"
    };
  },
  methods: {
    handleTextArea: function(event) {
      console.log("hi");
      this.message = event.target.value;
      this.textNode.text(event.target.value);
      this.layer.draw();
    },
    handleOutsideCanvasClick: function() {
      this.flagModal = false;
    }
  },
  mounted: function() {
    const container = this.$refs.container;
    this.stage = new Konva.Stage({
      container,
      width: container.clientWidth,
      height: container.clientHeight
    });
    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    const textNode = new Konva.Text({
      text: this.message,
      x: 50,
      y: 50,
      fontSize: 20,
      draggable: true
    });

    textNode.on("dblclick", () => {
      this.flagModal = true;

      // const textPosition = textNode.getAbsolutePosition();
      // const stageBox = this.stage.container().getBoundingClientRect();
      // console.log(stageBox);

      // const areaPosition = {
      //   x: stageBox.left,
      //   y: stageBox.top
      // };

      // const textarea = document.createElement("textarea");
      // document.body.appendChild(textarea);

      // textarea.value = textNode.text();
      // textarea.style.position = "absolute";
      // textarea.style.top = `${areaPosition.x}px`;
      // textarea.style.left = `${areaPosition.y}px`;
      // textarea.style.width = textNode.width();

      // textarea.focus();

      // textarea.addEventListener("keydown", e => {
      //   if (e.keyCode === 13) {
      //     textNode.text(textarea.value);
      //     this.layer.draw();
      //     document.body.removeChild(textarea);
      //   }
      // });
    });
    this.textNode = textNode;
    this.layer.add(textNode);

    const tr = new Konva.Transformer({
      node: textNode,
      enabledAnchors: ["middle-left", "middle-right"],
      // set minimum width of text
      boundBoxFunc: function(oldBox, newBox) {
        newBox.width = Math.max(30, newBox.width);
        return newBox;
      }
    });

    textNode.on("transform", function() {
      // reset scale, so only with is changing by transformer
      textNode.setAttrs({
        width: textNode.width() * textNode.scaleX(),
        scaleX: 1
      });
    });

    this.layer.add(tr);

    this.canvas = this.$refs.canvas;
    this.layer.draw();
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  width: 100%;
  height: 100%;
}
#container {
  border: 1px solid #000;
  width: 60%;
  height: 60%;
}
</style>
