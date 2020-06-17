<template>
  <canvas
    width="500"
    height="500"
    class="canvas"
    v-on:mousedown="checkObjOnDown"
    v-on:mouseup="checkOnUp"
    v-on:mousemove="handleMouseMove"
  ></canvas>
</template>
<script>
export default {
  data: function() {
    return {
      mouseX: 0,
      mouseY: 0,
      dragging: false
    };
  },
  methods: {
    checkObjOnDown: function(event) {
      console.log(this.$el.width);
      console.log(this.$el.height);
      console.log(event);
      const rect = event.target.getBoundingClientRect();
      this.mouseX = event.clientX - Math.floor(rect.left) - 2;
      this.mouseY = event.clientY - Math.floor(rect.top) - 2;
      if (
        this.objX < this.mouseX &&
        this.objX + this.objWidth > this.mouseX &&
        this.objY < this.mouseY &&
        this.objY + this.objHeight > this.mouseY
      ) {
        this.dragging = true; // ドラッグ開始
        this.relX = this.objX - this.mouseX;
        this.relY = this.objY - this.mouseY;
      }
    },
    checkOnUp: function() {
      this.dragging = false;
    },
    handleMouseMove: function() {
      console.log("aa");
      const rect = event.target.getBoundingClientRect();
      this.mouseX = event.clientX - Math.floor(rect.left) - 2;
      this.mouseY = event.clientY - Math.floor(rect.top) - 2;

      if (this.dragging) {
        this.objX = this.mouseX + this.relX;
        this.objY = this.mouseY + this.relY;
        this.drawRect();
      }
    },
    drawRect: function() {
      this.ctx.clearRect(0, 0, this.$el.width, this.$el.height);
      this.ctx.fillRect(this.objX, this.objY, this.objWidth, this.objHeight);
    },
    init: function() {
      this.objWidth = 50;
      this.objHeight = 50;
      this.objX = this.$el.width / 2 - this.objWidth / 2;
      this.objY = this.$el.width / 2 - this.objWidth / 2;
      this.ctx.fillRect(this.objX, this.objY, this.objWidth, this.objHeight);
    }
  },
  mounted: function() {
    this.ctx = this.$el.getContext("2d");
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.canvas {
  border: 1px solid #000;
}
</style>
