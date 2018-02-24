<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
    <div v-if="!$store.getters.getIsLogin">
        <login></login>
      </div>
       <div v-if="$store.getters.getIsLogin && $store.getters.getType==1" class="row">
        <menu-left></menu-left>
        <div class="col-md-10">
          <router-view></router-view>
        </div>
      </div>
      <attend v-if="$store.getters.getIsLogin && $store.getters.getType!=1"></attend>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/nav/navbar";
import menuLeft from "@/components/nav/mnLeft";
import login from "@/components/login";
import attend from "@/components/attend/empAttend";

export default {
  name: "App",
  components: {
    navbar,
    menuLeft,
    login,
    attend
  }
};
</script>

<style>

</style>
