import moment from "moment";
export default {
  data: function () {
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
      return moment(new Date(), "YYYYMMDD").format("LLLL");
    }
  }

}
