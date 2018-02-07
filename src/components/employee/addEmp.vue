<template>
    <form class="col-sm-5 offset-sm-3">
        <div class="form-group">
            <label for="exampleFormControlInput1">ชื่อ</label>
            <input type="text" v-model="name" class="form-control" placeholder="">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">นามสกุล</label>
            <input type="text" v-model="lastname" class="form-control" placeholder="">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">Username</label>
            <input type="text" v-model="username" class="form-control" placeholder="">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">password</label>
            <input type="password" v-model="password" class="form-control" placeholder="">
        </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">rate</label>
            <input type="number" v-model="rate" class="form-control" placeholder="">
        </div>
        <div class="form-group">
            <button class="btn btn-success" @click="saveEmp">
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
      rate: 0
    };
  },
  methods: {
    saveEmp() {
      axios
        .post("http://localhost:3000/user", {
          name: this.name,
          lastName: this.lastname,
          username: this.username,
          password: this.password,
          rate: this.rate
        })
        .then(response => {
          this.$router.push({name: 'employee', params: {statusAdd: 'เพิ่มข้อมูลสำเร็จแล้ว'}});
          // console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 20px;
}
</style>
