<template>
<div class="mrgn_Top">
  <h1 class="text-center">{{dateNow()}}</h1>
  <p class=" text-center">ลงเวลาเข้างานแล้ว {{count}} คน</p>
  <div class="col-sm-4 offset-4">
  <input  id="bc" type="text" class="form-control" @change="attendTime" placeholder="กรอกรหัสพนักงานตรงนี้">
  <small>*กรอกรหัสพนักงาน หรือ ใช้ปืนยิงบาร์โค้ด</small>
  <p class="notiMsg" v-if="attendTimeResponse">{{attendTimeMessage}}</p>
  </div>
<table class="table mrgn_Top">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">รูป</th>
      <th scope="col">ชื่อ-นามสกุล</th>
      <th scope="col">เวลาเข้างาน</th>
      <!-- <th scope="col">เวลาออกงาน</th> -->
    </tr>
  </thead>
  <tbody v-if="count>0">
    
     <tr v-for="(data,index) in datas" :key="index">
      <th scope="row">{{index+1}}</th>
      <th><img class="profileImage" :src="(typeof data.user.profileImage !=='undefined')?`${url}${subStr(String(data.user.profileImage))}`:url+'noImage.jpg'"></th>
      <td>{{data.user.name+" "+data.user.lastName}}</td>
      <td>
        {{data.attendTime}}  
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
      attendTimeMessage: String,
      attendTimeResponse: false
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
    attendTime: function(event) {
      let id = event.target.value;
      Api()
        .post("/attend", {
          id: id
        })
        .then(response => {
          this.attendTimeMessage = response.data.message;
          this.attendTimeResponse = true;
          // this.datas = response.data.attend;
          // this.count = response.data.count;
          event.target.value = "";
          this.calAttendInDay();
        })
        .catch(err => {});
    },
    calAttendInDay: async function() {
      await Api()
        .get("/attend")
        .then(response => {
          this.message = response.data.message;
          this.datas = response.data.attend;
          this.count = response.data.count;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mixins: [siteConfig]
};
</script>
<style scoped>

</style>
