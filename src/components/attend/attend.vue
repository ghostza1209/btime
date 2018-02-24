<template>
  <div class="mrgn_Top">
      <p class="title text-center">วันที่ {{dateNow()}}</p>
      <p class=" text-center">ลงเวลาเข้างานแล้ว {{count}} คน</p>
<table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ชื่อ</th>
      <th scope="col">เวลาเข้างาน</th>  
      <th scope="col">สถานที่ทำงาน</th>      
      <th scope="col">เวลาออกงาน</th>      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in datas" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{data.user.name+" "+data.user.lastName}}</td>
      <td>
        {{data.attendTime}}  
      </td>
      <td>
         {{data.workPlace.projectName+" "+data.workPlace.villaName}}
      </td>
      <td>
           {{data.offTime}}    
      </td>
      
    </tr>
    <tr>
    <!-- <td class="text-right" colspan="5">
        <button class="btn btn-success">บันทึก</button>
      </td> -->
    </tr>
  </tbody>
</table>  
  </div>
</template>
<script>
import Api from "@/config/axios-config";
import moment from "moment";

export default {
  data() {
    return {
      date: new Date(),
      datas: [],
      count: 0
    };
  },
 async mounted() {
    await Api()
      .get("/attend")
      .then(response => {
        // console.log(response.data.attend);
        this.datas = response.data.attend;
        this.count = response.data.count;
      })
      .catch(err => {});
  },
  methods: {
    dateNow() {
      moment.locale("th");
      return moment(this.date, "YYYYMMDD").format("LLLL");
    }
  }
};
</script>
<style scoped>

</style>
