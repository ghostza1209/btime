<template>
  <form class="col-sm-5 offset-sm-3 mrgn_Top" autocomplete="off">
    <div v-for="(value,key) in this.err" class="alert alert-danger" :key="key">{{value}}</div>
  
    <div class="form-group">
      <label>ชื่อ</label>
      <input type="text" v-model="name" @keyup="lettersOnly"  class="form-control txtcapitalize">
    </div>
    <div class="form-group">
      <label>นามสกุล</label>
      <input type="text"  v-model="lastname" @keyup="lettersOnly" class="form-control txtcapitalize">
    </div>
    <div class="form-group">
      <label>Username</label>
      <input type="text"  v-model="username" @keyup="lettersWithNumberic" class="form-control">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" v-model="password" class="form-control">
    </div>
    <div class="form-group">
      <label>Confirm-password</label>
      <input type="password" v-model="confirmPass" class="form-control">
    </div>
    <div class="form-group">
      <label>Rate</label>
      <input type="number" v-model="rate" class="form-control">
    </div>
      <!-- <div class="form-group">
      <label>รูปภาพ</label>
      <input  type="file" class="form-control" @change="onFileSelected">
    </div> -->
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">รูปภาพ</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" @change="onFileSelected">
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
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
import validator from "validator";
export default {
  data() {
    return {
      name: "",
      lastname: "",
      username: "",
      password: "",
      confirmPass: "",
      rate: "",
      err: [],
      selectedImg: ""
    };
  },
  methods: {
    saveEmp() {
      this.err = [];
      if (this.formValidate()) {
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("lastname", this.lastname);
        formData.append("username", this.username);
        formData.append("password", this.password);
        formData.append("confirmPass", this.confirmPass);
        formData.append("rate", this.rate);
        formData.append("provider", "local");
        formData.append("file", this.selectedImg);
        Api()
          .post("/user", formData)
          .then(response => {
            if (response.data !== 1) {
              this.err = response.data;
            } else {
              this.$router.push({
                name: "employee",
                params: {
                  statusAdd: "เพิ่มข้อมูลสำเร็จแล้ว"
                }
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
        // console.log("validate success");
      } else {
        // console.log("validate fail");
      }
    },
    onFileSelected(event) {
      this.selectedImg = event.target.files[0];
    },
    formValidate() {
      let _isValidate = Boolean,
        _nameValidate,
        _lastNameValidate,
        _usernameValidate,
        _passwordValidate,
        _confirmPassValidate,
        _rateValidate;
      if (validator.isEmpty(this.name)) {
        this.err.push("กรุณากรอกชื่อ");
        _nameValidate = false;
      } else {
        _nameValidate = true;
      }
      if (validator.isEmpty(this.lastname)) {
        this.err.push("กรุณากรอกนามสกุล");
        _lastNameValidate = false;
      } else {
        _lastNameValidate = true;
      }
      if (validator.isEmpty(this.username)) {
        this.err.push("กรุณากรอกชื่อผู้ใช้");
        _usernameValidate = false;
      } else {
        _usernameValidate = true;
      }
      if (validator.isEmpty(this.password)) {
        this.err.push("กรุณากรอกรหัสผ่าน");
        _passwordValidate = false;
      } else {
        _passwordValidate = true;
      }
      if (this.confirmPass !== this.password) {
        this.err.push("รหัสผ่านไม่ตรงกัน");
        _confirmPassValidate = false;
      } else {
        _confirmPassValidate = true;
      }
      if (validator.isEmpty(this.rate)) {
        this.err.push("กรุณากรอกอัตราค่าจ้าง");
        _rateValidate = false;
      } else {
        _rateValidate = true;
      }

      if (
        _nameValidate &&
        _lastNameValidate &&
        _usernameValidate &&
        _passwordValidate &&
        _confirmPassValidate &&
        _rateValidate
      ) {
        _isValidate = true;
      } else {
        _isValidate = false;
      }
      // console.log(_isValidate);
      return _isValidate;
    },
    lettersOnly(event) {
      // console.log(event.target.value.replace(/[^a-z]/gi, ""));
      return (event.target.value = event.target.value.replace(
        /[^A-Za-zก-๙]+$/gi,
        ""
      ));
    },
    lettersWithNumberic(event) {
      return (event.target.value = event.target.value.replace(
        /[^A-Za-z0-9]+$/gi,
        ""
      ));
    }
  }
};
</script>

<style scoped>

</style>
