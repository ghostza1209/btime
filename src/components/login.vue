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
  </div>
  <div>
  <b class="text-danger">{{ $store.getters.getErr}}</b>
  </div>
  <button type="button" class="btn btn-primary"  @click="login">Submit</button>
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
    login() {
      this.$store.dispatch("getUser", this.user);
    }
  }
};
</script>
<style scoped>

</style>
