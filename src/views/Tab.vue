<template>
  <div>
    <p>fdsa</p>
    <ul class="tabs-menu">
      <li
        v-bind:class="{ active: activeTab === 'tabs-1' }"
        v-on:click="activeTab = 'tabs-1'"
      >
        タブ1
      </li>
      <li
        v-bind:class="{ active: activeTab === 'tabs-2' }"
        v-on:click="activeTab = 'tabs-2'"
      >
        タブ2
      </li>
      <li
        v-bind:class="{ active: activeTab === 'tabs-3' }"
        v-on:click="activeTab = 'tabs-3'"
      >
        タブ3
      </li>
    </ul>
    <section class="tabs-content">
      <section v-show="activeTab === 'tabs-1'">
        <p>タブ1の内容が入ります</p>
      </section>
      <section v-show="activeTab === 'tabs-2'">
        <p>タブ2の内容が入ります</p>
      </section>
      <section v-show="activeTab === 'tabs-3'">
        <p>タブ3の内容が入ります</p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      activeTab: "tabs-1"
    };
  }
};
</script>

<style scoped>
.tabs-menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.tabs-menu li {
  display: block;
  float: left;
  margin-right: 8px;
  margin-bottom: -1px;
  padding: 10px 20px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 4px 4px 0 0;
  color: #557f95;
  text-decoration: none;

  transition: all 0.15s;
}

.tabs-menu li:hover {
  cursor: pointer;
}

.tabs-menu li:not(.active):hover {
  border-color: #f0f0f0 #f0f0f0 #999;
  background-color: #fff;
}
.tabs-menu .active {
  border-color: #999 #999 transparent #999;
  background-color: #fff;
  color: #3f4548;
}

.tabs-content {
  clear: both;
  border: 1px solid #999;
  border-radius: 0 4px 4px 4px;
  padding: 10px;
}
</style>
