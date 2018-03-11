import moment from "moment";
export default {
  data() {
    return {
      url: process.env.API_URL
    }
  },
  methods: {
    subStr(str) {
      return str.replace("public", "");
    },
    dateNow() {
      moment.locale("th");
      return moment(this.date, "YYYYMMDD").format("LLLL");
    }
  }

}
