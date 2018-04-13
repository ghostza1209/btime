<template>
  <div class="col-sm-3 offset-sm-4 mrgn_Top">
  <div class="form-group">
    <label>Username</label>
    <input autocomplete="off" type="text" class="form-control" v-model="username">
    <small id="emailHelp" class="form-text text-muted">Enter your username</small>    
  </div>
  <div class="form-group">
    <label>Password</label>
    <input autocomplete="off" type="password" class="form-control" v-model="password">
  </div>
  <!-- <div class="form-check">
    <input autocomplete="off" type="checkbox" class="form-check-input">
    <label class="form-check-label">remember me</label>
  </div> -->
  <div>
  </div>
  <button type="button" class="btn btn-primary"  @click="login">Submit</button>
</div>
</template>
<script>
import user from "@/controller/user";
import Api from "@/config/axios-config";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      Api()
        .post("/login", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          const data = {
            username: response.data.uname,
            _id: response.data.id,
            type: response.data.type,
            auth: response.data.auth
          };
          // console.log(data);
          this.$store.dispatch("isLogin", data);
        })
        .catch(error => {
          console.log("You have an error!! when login");
        });
    }
  }
};
</script>
<style scoped>

</style>
