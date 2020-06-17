<template>
  <canvas
    width="500"
    height="500"
    class="canvas"
    v-on:click="clickDraw($event)"
  ></canvas>
</template>
<script>
export default {
  data: function() {
    return {
      mouseX: 0,
      mouseY: 0
    };
  },
  methods: {
    clickDraw: function(event) {
      console.log(this.$el.width);
      console.log(this.$el.height);
      console.log(event);
      // const canvasWidth = this.$el.width;
      // const canvasHeight = this.$el.height;
      const ctx = this.ctx;
      // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      const rect = event.target.getBoundingClientRect();
      this.mouseX = event.clientX - Math.floor(rect.left) - 2;
      this.mouseY = event.clientY - Math.floor(rect.top) - 2;
      ctx.beginPath();
      ctx.arc(this.mouseX, this.mouseY, 5, 0, Math.PI * 2, false);
      ctx.fill();
      // const maxWidth = 100;
      // ctx.textAlign = "right";
      // ctx.fillText(
      //   `(${this.mouseX}, ${this.mouseY})`,
      //   canvasWidth - 20,
      //   canvasHeight - 20,
      //   maxWidth
      // );
    }
  },
  mounted: function() {
    this.ctx = this.$el.getContext("2d");
  }
};
</script>
<style lang="scss" scoped>
.canvas {
  border: 1px solid #000;
}
</style>
