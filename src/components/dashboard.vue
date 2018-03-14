<template>
  <div class="text-center mrgn_Top" >
    <h1>{{dateNow()}}</h1>
    <div class="row">
    <div class="col-sm-4 offset-1">
      <h1>ลงเวลาแล้ววันนี้</h1>
    <div class="list-group">
<div v-for="(data,index) in attend" :key="index" class="list-group-item list-group-item-action"><img class="mini" :src="(typeof data.profileImage !=='undefined')?`${url}${subStr(String(data.profileImage))}`:url+'noImage.jpg'">{{data.user.name+" "+data.user.lastName}}</div>
</div>
</div>

 <div class="col-sm-4 offset-1">
      <h1>ยังไม่ลงเวลาวันนี้</h1>
    <div class="list-group">
  <div v-for="(data,index) in unAttend" :key="index" class="list-group-item list-group-item-action"><img class="mini"  :src="(typeof data.profileImage !=='undefined')?`${url}${subStr(String(data.profileImage))}`:url+'noImage.jpg'">{{prefix(data.name,data.lastName)}}</div>
</div>
</div>
</div>
  </div>
</template>
<script>
import Api from "@/config/axios-config";
import siteConfig from "@/mixins/siteConfig";

export default {
  data: function() {
    return {
      attend: {},
      unAttend: []
    };
  },
  mounted() {
    this.getAttendEmpInDay();
  },
  methods: {
    getAttendEmpInDay: function() {
      Api()
        .get("/attend")
        .then(response => {
          // console.log(response.data.attend);
          // if (response.data.length == 0) {
          //   this.noData = "ไม่มีข้อมูลพนักงาน";
          //   this.noEmp = true;
          // }
          this.attend = response.data.attend;
      console.log(this.attend)

          this.getAllEmployee();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getAllEmployee: function() {
      Api()
        .get("/user")
        .then(response => {
          this.attend.forEach((eiei, index) => {
            response.data.forEach((element, index) => {
              if (eiei.user._id !== element._id) {
                this.unAttend.push(element);
              }
            });
          });
          // console.log(this.unAttend)
        })
        .catch(err => {});
    },
    isInArray: function(value, array) {
      return array.indexOf(value) > -1;
    },
    prefix: function(name, lastName) {
      return name + " " + lastName;
    }
  },
  mixins: [siteConfig]
};
</script>
<style scoped>
.mini{
  width: 70px;
  height: 70px;
}
</style>

