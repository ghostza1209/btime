<template>
    <form class="col-sm-5 offset-sm-3 mrgn_Top">
       <div v-for="(value) in this.err" class="alert alert-danger">{{value.msg}}</div>

        <div class="form-group">
            <label >ชื่อ</label>
            <input autocomplete="off" type="text" name="name" v-model="name" class="form-control txtcapitalize">
        </div>
         <div class="form-group">
            <label >นามสกุล</label>
            <input autocomplete="off" type="text" name="lastname" v-model="lastname" class="form-control txtcapitalize">
        </div>
         <div class="form-group">
            <label>Username</label>
            <input autocomplete="off" type="text" name="username" v-model="username" class="form-control">
        </div>
         <div class="form-group">
            <label>Password</label>
            <input autocomplete="off" type="password" name="password" v-model="password" class="form-control">
        </div>
          <div class="form-group">
            <label >Confirm-password</label>
            <input autocomplete="off" type="password" name="confirmPass" v-model="confirmPass" class="form-control">
        </div>
          <div class="form-group">
            <label >Rate</label>
            <input autocomplete="off" type="number" v-model="rate" class="form-control">
        </div>
        <div class="form-group">
            <button class="btn btn-success" @click.prevent="saveEmp">
                บันทึกข้อมูล
            </button>
        </div>

    </form>

</template>

<script>
import Api from "@/config/axios-config";
export default {
  data() {
    return {
      name: "",
      lastname: "",
      username: "",
      password: "",
      confirmPass: "",
      rate: 0,
      err: null
    };
  },
  methods: {
    saveEmp: function() {
      Api()
        .post("/user", {
          name: this.name,
          lastname: this.lastname,
          username: this.username,
          password: this.password,
          confirmPass: this.confirmPass,
          rate: this.rate,
          provider: "local"
        })
        .then(response => {
          if (response.data !== 1) {
            this.err = response.data;
          } else {
            this.$router.push({
              name: "employee",
              params: { statusAdd: "เพิ่มข้อมูลสำเร็จแล้ว" }
            });
          }
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
