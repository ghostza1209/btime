<template>
  <div class="col-sm-5 offset-sm-3">
  <div class="form-group">
    <label>Username</label>
    <input type="text" class="form-control" v-model="user.username">
    <small id="emailHelp" class="form-text text-muted">Enter your username</small>    
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" v-model="user.password">
    <b style="color: red" v-show="getError" class="text-center">ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง</b>
  </div>
  <button type="button" class="btn btn-primary"  @click="getEmp">Submit</button>
</div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    getEmp() {
      this.$store.dispatch("getUser", this.user);
    }
  },
  computed: {
    checkLogin(){
      this.$store.dispatch("checkLogin")
    },
    getError(){
      this.checkLogin
      return this.$store.getters.getError
    }
  }
};
</script>
<style scoped>

</style>
