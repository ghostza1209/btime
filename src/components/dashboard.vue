<template>
  <div class="text-center mrgn_Top" >
    <h1>{{dateNow()}}</h1>
    <div class="row">
    <div class="col-sm-4 offset-1">
      <h1>ลงเวลาแล้ววันนี้</h1>
    <div class="list-group">
<div v-for="(data,index) in attend" :key="index" class="list-group-item list-group-item-action"><img class="mini" :src="(typeof data.user.profileImage !=='undefined')?`${url}${subStr(String(data.user.profileImage))}`:url+'noImage.jpg'">{{data.user.name+" "+data.user.lastName}}</div>
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
      attend: [],
      unAttend: []
    };
  },
  mounted() {
    this.unAttend = "";
    this.attend = "";
    this.getAttendEmpInDay();
    this.getAllEmployee();
  },
  methods: {
    getAttendEmpInDay: function() {
      Api()
        .get("/attend")
        .then(response => {
          this.attend = response.data.attend;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getAllEmployee: function() {
      new Promise((resolve, reject) => {
        Api()
          .get("/user")
          .then(response => {
            this.unAttend = response.data;
            $.each(this.attend, (key1, value1) => {
              let userId = value1.user._id;
              $.each(this.unAttend, (key2, value2) => {
                if (userId == value2._id) {
                  // var arr = this.unAttend;
                  var index = this.unAttend.indexOf(value2);
                  if (index >= 0) {
                    this.unAttend.splice(index, 1);
                    // console.log(this.unAttend);
                  }
                }
              });
            });
          })
          .catch(err => {});
      });
    },
    isInArray: function(value, array) {
      return array.indexOf(value) > -1;
    },
    prefix: function(name, lastName) {
      return name + " " + lastName;
    },
    removeArr(arr) {
      var what,
        a = arguments,
        L = a.length,
        ax;
      while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
          arr.splice(ax, 1);
        }
      }
      return arr;
    }
  },
  mixins: [siteConfig]
};
</script>
<style scoped>
.mini {
  width: 100px;
  height: 70px;
}
</style>

