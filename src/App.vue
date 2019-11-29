<template>
  <div>
    <div
      v-loading="loading"
      style="width: 100%"
      class="loading"
      v-if="this.$store.state.show"
    ></div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.loading {
  width: 100%;
  height: 100% !important;
  position: absolute;
}
.box {
  width: 100%;
  height: 100%;
  background: rgba(256, 256, 256, 0.1);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
