<!--  -->
<template>
  <div class>
    <el-container class="box">
      <el-aside :style="{ width: this.$store.state.aside ? '200px' : '50px' }"
        ><dashNav></dashNav
      ></el-aside>
      <el-container>
        <el-header>
          <dashDer></dashDer>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import dashNav from "../components/dashboard_left";
import dashDer from "../components/header";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    dashNav,
    dashDer
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.box {
  position: fixed;
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.lefts_left1 {
  width: 0px;
  background-color: #333744;
  // transition: all 0.5s;
}
.lefts_left2 {
  width: 200px;
  background-color: #333744;
  // transition: all 0.5s;
}
.el-aside {
  background-color: #333744;
  text-align: center;
  line-height: 200px;
  transition: all 1s;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
