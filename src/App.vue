<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
    
      <div v-if="getUser != 204" class="row">
        <menu-left></menu-left>
        <div class="col-md-10">
          <router-view></router-view>
        </div>
      </div>
      <div v-else>
        <login></login>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/nav/navbar";
import menuLeft from "@/components/nav/mnLeft";
import login from "@/components/login";

export default {
  name: "App",
  components: {
    navbar,
    menuLeft,
    login
  },
  computed: {
    loadUser() {
      this.$store.dispatch("getUser");
    },
    getUser() {
      return this.$store.getters.getUser;
    }
  },
  created() { //เมื่อมีการเข้าครั้งแรก จะเรียกใช้ทันที 
    this.loadUser;
  }
};
</script>

<style>

</style>
