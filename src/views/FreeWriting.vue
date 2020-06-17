<template>
  <div>
    <div class="md-layout md-gutter" style="margin-left: 340px">
      <div class="md-layout-item">
        <!-- <md-field style="float: left">
          <label for="mode">Mode</label>
          <md-select v-model="mode" name="mode" id="mode">
            <md-option value="brush">Brush</md-option>
            <md-option value="eraser">Eraser</md-option>
            <md-option value="line">Line</md-option>
          </md-select>
        </md-field>

        <md-field style="float: left">
          <label for="brushColor">Color</label>
          <md-input type="color" v-model="brushColor" />
        </md-field> -->

        <!-- <md-field style="float: left; margin-top: -8px">
          <md-button class="md-dense md-raised md-primary">
            Back
          </md-button>
        </md-field>
        <md-field style="float: left; margin-top: -8px">
          <md-button class="md-dense md-raised md-primary">
            Forward
          </md-button>
        </md-field>
        <md-field style="float: left; margin-top: -8px">
          <md-button class="md-dense md-raised md-primary">
            Reset
          </md-button>
        </md-field>
        <md-field style="float: left; margin-top: -8px">
          <md-button class="md-dense md-raised md-primary">
            Save
          </md-button>
        </md-field> -->
        <FreeDrawing />
      </div>
    </div>
  </div>
</template>

<script>
import FreeDrawing from "../components/FreeDrawing";

export default {
  name: "Canvas",
  data() {
    return {
      mode: "",
      brushColor: "",
      defaultMode: "brush",
      defaultBrushColor: "#ffffff"
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      this.mode = this.defaultMode;
      this.brushColor = this.defaultBrushColor;
    }
  },
  components: {
    FreeDrawing
  }
};
</script>

<style lang="scss" scoped>
.md-field {
  max-width: 110px;
}
</style>
