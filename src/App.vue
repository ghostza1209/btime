<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <menu-left></menu-left>
        <div class="col-md-10">
          <router-view></router-view>
  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/nav/navbar'
  import menuLeft from '@/components/nav/mnLeft'
  
  export default {
    name: 'App',
    components: {
      navbar,
      menuLeft
    }
  }
</script>

<style>
  
</style>
