<template>
    <nav class="navbar sticky-top navbar-expand-lg  bg-dark">
        <a class="navbar-brand" href="#"><img src="../../assets/time.png" /><span class="txtTitle">ระบบลงเวลาการทำงาน</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class=" navbar-collapse pull-right" id="navbarNavAltMarkup">
            <div class="navbar-nav" v-show="$store.getters.getIsLogin">
                <a class="nav-item nav-link" @click="logout"><button type="button" class="btn btn-danger">ออกจากระบบ</button></a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
}
</script>

<style scoped>
a.navbar-brand img {
  width: 50px;
  background-color: rgba(255, 255, 255, 1);
  padding: 10px 13px;
  border-radius: 40px;
}
div#navbarNavAltMarkup {
  justify-content: flex-end;
}
a {
  color: white;
}
.txtTitle{
  margin-left: 20px;
}
</style>
