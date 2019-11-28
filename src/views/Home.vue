<template>
  <div class="home">
    <img class="leftImg" src="..//assets/back.png" alt="" />
    <div class="login">
      <div class="person">
        <img class="person_img" src="../assets/person.png" alt="" />
      </div>
      <h6 class="title">领课教育系统 - 开源版</h6>
      <p>
        <i class="el-icon-user-solid"></i> <input v-model="user" type="text" />
      </p>
      <p>
        <i class="el-icon-s-goods"></i> <input v-model="pass" type="password" />
      </p>
      <el-button type="primary" @click="logins">登陆</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { list } from "../api/yin";
import local from "../localStorege";
export default {
  components: {},
  data() {
    return {
      user: "13800000000",
      pass: "123456"
    };
  },
  watch: {
    "$store.state.token": {
      handler: function() {
        local.save("tokens", this.$store.state.token);
      }
    }
  },
  methods: {
    async logins() {
      let obj = {
        clientId: "lkb65617f842ad4c37895a733b8de43cbb",
        ip: "127.0.0.0",
        mobile: this.user,
        password: this.pass
      };
      console.log(obj);
      let res = await list(obj);
      if (res.code == 200) {
        this.$store.commit("token", res.data);
        this.$router.push({
          path: "/dashboard"
        });
      } else {
        console.log("请求失败");
      }
      console.log(res);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: #93defe;
  align-items: center;
}
.login {
  width: 500px;
  height: 480px;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
}
.person_img {
  margin-top: 23px;
}
.title {
  font-size: 30px;
  margin-top: -40px;
}
.person {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #93defe;
  position: relative;
  top: -80px;
  background-color: white;
  left: 180px;
}
p {
  width: 95%;
  height: 50px;
  margin: 0 auto;
  background-color: #ddd;
  margin-top: 20px;
  border-radius: 5px;
  input {
    width: 80%;
    height: 40px;
    border: none;
    outline: none;
    background-color: #ddd;
  }
}
button {
  width: 95%;
  margin-top: 10px;
}
</style>
