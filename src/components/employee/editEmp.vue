<template>
   <form class="col-sm-5 offset-sm-3">
        <div class="form-group">
            <label for="exampleFormControlInput1">ชื่อ</label>
            <input type="text" v-model="name" class="form-control">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">นามสกุล</label>
            <input type="text" v-model="lastname" class="form-control">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">Username</label>
            <input type="text" v-model="username" class="form-control">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">password</label>
            <input type="password" v-model="password" class="form-control">
        </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">rate</label>
            <input type="number" v-model="rate" class="form-control">
        </div>
        <div class="form-group">
            <button class="btn btn-success" @click="update">
                บันทึกข้อมูล
            </button>
        </div>
 
    </form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      lastname: "",
      username: "",
      password: "",
      rate: 0,
      myId: ""
    };
  },
  mounted() {
    this.myId = this.$route.params.id;
    this.get(this.myId);
  },
  methods: {
    get(id) {
      axios
        .get("http://localhost:3000/user/" + id)
        .then(response => {
          // console.log(response);
          (this.name = response.data.name),
            (this.lastname = response.data.lastName),
            (this.username = response.data.username),
            (this.password = response.data.password),
            (this.rate = response.data.rate);
        })
        .catch(error => {
          console.log(error);
        });
    },
    update() {
      axios
        .put("http://localhost:3000/user/" + this.myId, {
          name: this.name,
          lastName: this.lastname,
          username: this.username,
          password: this.password,
          rate: this.rate
        })
        .then(response => {
          this.$router.push({
            name: "employee"
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>

</style>
