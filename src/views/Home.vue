<template>
  <div class="home">
    <img class="leftImg" src="..//assets/back.png" alt="" />
    <div class="login">
      <h6>领课教育系统 - 开源版</h6>
      <p><i class="el-icon-user-solid"></i> <input type="text" /></p>
      <p><i class="el-icon-s-goods"></i> <input type="text" /></p>
      <el-button type="primary" :loading="true">登陆</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.login {
  width: 500px;
  height: 480px;
  background-color: white;
}
</style>
