<template>
<div class="mrgn_Top">
  <router-link to="addWorkplace" class="btn btn-primary">เพิ่มสถานที่ทำงาน</router-link>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">โครงการ</th>
      <th scope="col">วิลล่า</th>
      <th scope="col">ที่อยู่</th>
      <th scope="col">จัดการ</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value,index) in datas" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{value.projectName}}</td>
      <td>{{value.villaName}}</td>
      <td>{{value.district+" "+value.pefecture+" "+value.province}}</td>
      <td><button class="btn btn-danger" @click="confirmDel(value._id)">ลบ</button></td>
    </tr>
     <h5>{{msg}}</h5>
  </tbody>
</table>
<h1 v-if="noWorkPlace">{{noData}}</h1>
</div>
  
</template>
<script>
import Api from "@/config/axios-config";
export default {
  name: "workPlace",
  props: {
    msg: String
  },
  data() {
    return {
      datas: [],
      noWorkPlace: false,
      noData: String
    };
  },
  mounted() {
    this.getWorkPlace();
  },
  methods: {
    del(id) {
      Api()
        .delete("/workplace/" + id)
        .then(Response => {
          this.getWorkPlace();
          // console.log(Response);
        })
        .catch(err => {});
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
    async getWorkPlace() {
      await Api()
        .get("/workplace")
        .then(Response => {
          if (Response.data.length == 0) {
            this.noData = "ไม่มีข้อมูลสถานที่ทำงาน";
            this.noWorkPlace = true;
          }
          this.datas = Response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>

</style>
