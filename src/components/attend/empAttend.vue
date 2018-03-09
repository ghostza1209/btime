<template>
 <form class="col-sm-4 offset-sm-4 mrgn_Top">
       <div v-for="(value,index) in this.err" :key="index"  class="alert alert-danger">{{value.msg}}</div>
<h2 class="text-center">สวัสดี {{fullName}}</h2>
     <h3 class="text-center">{{dateNow()}}</h3>
  <div class="form-group">
  <!-- <div v-if="isMorethan('07:00') && isLessthan('15:00')" class="form-group"> -->
      
    <label>ลงเวลาเข้างาน</label>
    <input :disabled="isMorethan('14:30')" name="timeIn" v-model="timeIn" type="time" class="form-control">
  </div>
  <div class="form-group">
      <label>ไซต์งาน</label>
   <select v-model="whereWork" name="whereWork" class="form-control" :disabled="isMorethan('14:59')">
       <option value="0">-- กรุณาเลือกสถานที่ --</option>
              <option v-for="(data,index) in workPlace" :key="index" :value="data._id">{{showWorkPlaceFormat(data.projectName,data.villaName,data.district)}}</option>
    </select>
    </div>
      <div v-if="!isMorethan('14:30')" class="form-group">
    <label>ลงเวลาออกงาน</label>
    <input v-model="timeOut" name="timeOut" type="time" class="form-control" :disabled="isMorethan('20:00')"> 
  </div>
  <div class="form-group">
      <input type="button" class="btn btn-success" value="ตกลง" @click="saveAttend()">
  </div>
</form>
</template>
<script>
import Api from "@/config/axios-config";
import moment from "moment";

export default {
  data() {
    return {
      datas: [],
      date: new Date(),
      workPlace: [],
      username: this.$store.getters.getUsername,
      fullName: "",
      timeIn: this.timeNow(),
      timeOut: this.timeNow(),
      whereWork: 0,
      empId: this.$store.getters.getId,
      err: "",
      attendId: ""
    };
  },
  async mounted() {
    await Api()
      .post("/user/" + this.username)
      .then(response => {
        this.fullName = response.data.name + " " + response.data.lastName;
      })
      .catch(error => {
        console.log(error);
      });
    this.getAttendById(this.empId);
    this.getAllWorkPlace();
  },
  methods: {
    dateNow() {
      moment.locale("th");
      return moment(this.date, "YYYYMMDD").format("LLLL");
    },
    timeNow() {
      return moment(this.date).format("HH:mm");
    },
    isMorethan(time) {
      let now = moment(this.date, "hmm").format("HH:mm");
      return now > time;
    },
    isLessthan(time) {
      let now = moment(this.date, "hmm").format("HH:mm");
      return now < time;
    },
    getAllWorkPlace() {
      Api()
        .get("/workplace")
        .then(response => {
          // console.log(response.data);
          this.workPlace = response.data;
        })
        .catch(err => {});
    },
    showWorkPlaceFormat(projectName, villaName, district) {
      return projectName + " " + villaName + " " + district;
    },
    saveAttend() {
      // if (this.timeNow() < "15:00") {
      //   Api()
      //     .post("/attend", {
      //       id: this.empId,
      //       timeIn: this.timeIn,
      //       timeOut: 0,
      //       whereWork: this.whereWork
      //     })
      //     .then(response => {
      //       if (response.data !== 1) {
      //         this.err = response.data;
      //       } else {
      //         window.alert("ลงเวลาเข้างานสำเร็จ");
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // } else if (this.timeNow() > "14:59") {
        Api()
          .put("/attend/" + this.attendId, {
            offTime: this.timeOut
          })
          .then(response => {
            // console.log(response.data);
            this.getAttendById(this.empId);
            this.attendComplete = true;
            window.alert("ลงเวลาออกงานสำเร็จ");
          })
          .catch(err => {});
      // }
    },
    getAttendById(id) {
      Api()
        .get("/attend/" + id)
        .then(response => {
          if (response.data.message) {
          } else {
            this.attendId = response.data._id;
            this.timeIn = response.data.attendTime;
            this.timeOut = response.data.offTime;
            this.whereWork = response.data.workPlace;
          }
        })
        .catch(err => {});
    }
  }
};
</script>
<style scoped>

</style>
