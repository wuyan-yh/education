<template>
  <div :class="isCollapse ? 'lefts_left1' : 'lefts_left2'">
    <div :class="isCollapse ? 'toggle2' : 'toggle1'" @click="isCollapses">
      | | |
    </div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#333744"
      text-color="white"
      :collapse-transition="true"
      router
      unique-opened
    >
      <template v-for="(item, index) in navList">
        <el-submenu
          :key="index"
          v-if="item.name != '首页'"
          :index="String(index + 1)"
        >
          <template slot="title">
            <span slot="title" @click="getItem(item)">{{ item.name }}</span>
          </template>
          <template v-for="(item2, index2) in item.children">
            <el-submenu
              :key="index2"
              @click="push2(item2, index2)"
              v-if="item2.children.length > 0"
              :index="item2.path"
            >
              <span slot="title">{{ item2.name }}</span>
              <el-menu-item
                :key="index3"
                v-for="(item3, index3) in item2.children"
                @click="push(item3, index3)"
                :index="item3.path"
                >{{ item3.name }}</el-menu-item
              >
            </el-submenu>
          </template>
          <template v-for="(item2, index2) in item.children">
            <el-menu-item
              v-if="item2.children.length <= 0"
              :key="index2"
              :index="item2.path"
              >{{ item2.name }}</el-menu-item
            >
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { navlist } from "../api/yin";
export default {
  props: {},
  data() {
    return {
      isCollapse: false,
      navList: []
    };
  },
  created() {
    this.getNav();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    async getNav() {
      let obj = {};
      let res = await navlist(obj);
      console.log(res.data.sysMenu);
      this.navList = res.data.sysMenu;
    },
    push(item3, index3) {
      console.log(item3, index3);
      let obj = {
        name: item3.name,
        path: item3.path,
        state: true
      };
      console.log(obj);
      this.$store.commit("tag", obj);
      console.log(this.$store.state.tag);
    },
    push2(item2, index2) {
      console.log("two", item2, index2);
    },
    getItem(v) {
      console.log(v.name);
    },
    isCollapses() {
      this.isCollapse = !this.isCollapse;
      this.$store.state.aside = !this.$store.state.aside;
      console.log(this.$store.state.aside);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
.toggle1 {
  height: 50px;
  color: white;
  line-height: 50px;
  position: absolute;
  transition: all 1s;
  left: 210px;
}
.toggle2 {
  height: 50px;
  color: white;
  line-height: 50px;
  position: absolute;
  left: 60px;
  transition: all 1s;
}
</style>
