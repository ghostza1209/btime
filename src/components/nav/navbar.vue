<template>
    <nav class="navbar navbar-expand-lg  bg-dark">
        <a class="navbar-brand" href="#"><img src="../../assets/time.png" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class=" navbar-collapse pull-right" id="navbarNavAltMarkup">
            <div class="navbar-nav" v-show="$store.getters.getIslogin">
                <a class="nav-item nav-link" @click="destroy">Log out</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    destroy() {
      this.$store.dispatch("destroy");
    }
  },
  computed: {
    getStatus() {
      if (this.$store.getters.getUser !== 204) {
        return true;
      } else {
        return false;
      }
    }
  }
};
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
</style>
