<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
    
     
      <div v-if="!$store.getters.getIslogin">
        <login></login>
      </div>
       <div v-else class="row">
        <menu-left></menu-left>
        <div class="col-md-10">
          <router-view></router-view>
        </div>
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
  }
};
</script>

<style>

</style>
