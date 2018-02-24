"use strict";
<template>
<div class="col-sm-12 mrgn_Top">
   <router-link to="addEmployee" class="btn btn-primary">เพิ่มพนักงาน</router-link>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ชื่อ-นามสกุล</th>
      <th scope="col">ชื่อผู้ใช้</th>
      <th scope="col">อัตราค่าจ้าง:วัน</th>
      <th scope="col">จัดการ</th>      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in datas">
      <th scope="row">{{index+1}}</th>
      <td class="txtcapitalize"><router-link :to="{name:'editEmp',params:{id:data._id}}">{{data.name+" "+data.lastName }}</router-link></td>
      <td>{{data.username}}</td>
      <td>{{data.rate}}</td>
      <td><button class="btn btn-danger" @click="confirmDel(data._id)">ลบ</button></td>
    </tr>
  </tbody>
</table>
<h1 v-if="noEmp">{{noData}}</h1>
</div>
</template>
<script>
import Api from "@/config/axios-config";

export default {
  data() {
    return {
      datas: [],
      noEmp: false,
      noData: ""
    };
  },
  async mounted() {
    await Api()
      .get("/user")
      .then(response => {
        if (response.data.length == 0) {
          this.noData = "ไม่มีข้อมูลพนักงาน";
          this.noEmp = true;
        }
        this.datas = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    del(id) {
      Api()
        .delete("user/" + id)
        .then(response => {
          this.getEmployee();
        })
        .catch(error => {});
    },
    confirmDel(id) {
      var _this = this;
      this.$dialog
        .confirm("ยืนยันการลบ!")
        .then(function() {
          _this.del(id);
        })
        .catch(function() {});
    },
    getEmployee() {
      Api()
        .get("/user")
        .then(response => {
          if (response.data.length == 0) {
            this.noData = "ไม่มีข้อมูลพนักงาน";
            this.noEmp = true;
          }
          this.datas = response.data;
        })
        .catch(err => {});
    }
  }
};
</script>
<style scoped>
table tr {
  text-align: center;
}
</style>
