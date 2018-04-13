<template>
<div class="mrgn_Top">
  <h1 class="text-center">{{dateNow()}}</h1>
  <p class=" text-center">ลงเวลาออกงานแล้ว {{count}} คน</p>
  <div class="col-sm-4 offset-4">
  <input  id="bc" type="text" class="form-control" @change="checkOut" placeholder="กรอกรหัสพนักงานตรงนี้">
  <small>*กรอกรหัสพนักงาน หรือ ใช้ปืนยิงบาร์โค้ด</small>
  <p class="notiMsg" v-if="checkOutResponse">{{checkOutMessage}}</p>
  </div>
<table class="table mrgn_Top">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">รูป</th>
      <th scope="col">ชื่อ-นามสกุล</th>
      <th scope="col">เวลาออกงาน</th>
      <!-- <th scope="col">เวลาออกงาน</th> -->
    </tr>
  </thead>
  <tbody v-if="count>0">
    
     <tr v-for="(data,index) in datas" :key="index">
      <th scope="row">{{index+1}}</th>
      <th><img class="profileImage" :src="(typeof data.user.profileImage !=='undefined')?`${url}${subStr(String(data.user.profileImage))}`:url+'noImage.jpg'"></th>
      <td>{{data.user.name+" "+data.user.lastName}}</td>
      <td>
        {{data.checkOutTime}}  
      </td>
      <!-- <td>
         {{data.workPlace.projectName+" "+data.workPlace.villaName}}
      </td> -->
      <!-- <td>
           {{data.offTime}}    
      </td> -->
    </tr>
  </tbody>
  <tbody v-else>
      <tr class="text-center">
      <td colspan="4"><h3>{{message}}</h3></td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
import Api from "@/config/axios-config";
import siteConfig from "@/mixins/siteConfig";
import $ from "jquery";
export default {
  data() {
    return {
      date: new Date(),
      datas: [],
      count: 0,
      message: String,
      checkOutMessage: String,
      checkOutResponse: false
    };
  },
  mounted() {
    this.setFocus("bc");
    this.calAttendInDay();
  },
  methods: {
    setFocus: function(id) {
      document.getElementById(id).focus();
    },
    checkOut: function(event) {
      new Promise((resolve, reject) => {
        let id = event.target.value;
        Api()
          .post("/checkOut", {
            id: id
          })
          .then(response => {
            this.checkOutMessage = response.data.message;
            this.checkOutResponse = true;
            event.target.value = "";
            this.calAttendInDay();
          })
          .catch(err => {});
      });
    },
    calAttendInDay: function() {
      Api()
        .get("/checkOut")
        .then(response => {
          this.message = response.data.message;
          this.datas = response.data.attend;
          this.count = response.data.count;
          // console.log(response.data)
        })
        .catch(err => {});
    }
  },
  mixins: [siteConfig]
};
</script>
<style scoped>

</style>
