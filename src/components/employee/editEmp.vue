<template>
   <form class="col-sm-5 offset-sm-3 mrgn_Top">
        <div class="form-group">
            <label for="exampleFormControlInput1">ชื่อ</label>
            <input type="text" v-model="name" class="form-control txtcapitalize">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">นามสกุล</label>
            <input type="text" v-model="lastname" class="form-control txtcapitalize">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">Username</label>
            <input type="text" v-model="username" class="form-control ">
        </div>
         <div class="form-group">
            <label for="exampleFormControlInput1">password</label>
            <input type="text" v-model="password" class="form-control">
        </div>
          <div class="form-group">
            <label>rate</label>
            <input type="number" v-model="rate" class="form-control">
        </div>
        <div class="form-group">
            <label>รูป </label>          
          <img class="img img-thumbnail" :src="(typeof profileImage !=='undefined')?`${url}${subStr(String(profileImage))}`:url+'noImage.jpg'">
        </div>
        <div class="form-group">
            <button class="btn btn-success" @click="update">
                บันทึกข้อมูล
            </button>
        </div>
 
    </form>
</template>
<script>
import Api from "@/config/axios-config";
import siteConfig from "@/mixins/siteConfig";

export default {
  data() {
    return {
      name: "",
      lastname: "",
      username: "",
      password: "",
      rate: 0,
      profileImage: "",
      myId: "",
      hash: ""
    };
  },
  mounted() {
    this.myId = this.$route.params.id;
    this.get(this.myId);
  },
  methods: {
    get(id) {
      Api()
        .get("/user/" + id)
        .then(response => {
          // console.log(response.data)
          this.name = response.data.name;
          this.lastname = response.data.lastName;
          this.username = response.data.username;
          this.password = response.data.password;
          this.rate = response.data.rate;
          this.profileImage = response.data.profileImage;
        })
        .catch(error => {
          console.log(error);
        });
    },
    update() {
      Api()
        .put("/user/" + this.myId, {
          name: this.name,
          lastName: this.lastname,
          username: this.username,
          password: this.password,
          rate: this.rate
        })
        .then(response => {
          this.$router.push({
            name: "employee"
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mixins: [siteConfig]
};
</script>
<style scoped>

</style>
