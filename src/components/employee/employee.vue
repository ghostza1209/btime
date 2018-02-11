"use strict";
<template>
<div class="col-sm-12">
   <router-link to="addEmployee" class="btn btn-primary">เพิ่มพนักงาน</router-link>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">tName</th>
      <th scope="col">Username</th>
      <th scope="col">Rate</th>
      <th scope="col">Rate</th>      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in datas">
      <th scope="row">{{index+1}}</th>
      <td><router-link :to="{name:'editEmp',params:{id:data._id}}">{{ data.name+" "+data.lastName }}</router-link></td>
      <td>{{data.username}}</td>
      <td>{{data.rate}}</td>
      <td><button class="btn btn-danger" @click="del(data._id)">ลบ</button></td>
    </tr>
  </tbody>
</table>
  <h5 v-show="status">{{ statusAdd }}</h5>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "employee",
  props: {
    statusAdd: {
      default: ""
    }
  },
  data() {
    return {
      datas: [],
      status: true
    };
  },
  mounted() {
    this.getEmployee();
  },
  methods: {
    getEmployee() {
      axios
        .get("http://localhost:3000/user")
        .then(response => {
          this.datas = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    del(id) {
      if (confirm("are you sure?")) {
        axios
          .delete("http://localhost:3000/user/" + id)
          .then(() => {
            this.getEmployee();
            this.status = true;
            this.statusAdd = "ลบข้อมูลสำเร็จ";
          })
          .catch(error => {
            this.status = true;
            this.statusAdd = "ลบข้อมูลไม่สำเร็จ";
          });
      }
    }
  },
  watch: {
    statusAdd: function(val) {
      console.log("props changed");
    }
  }
};
</script>
<style scoped>
div {
  margin-top: 30px;
}
</style>
