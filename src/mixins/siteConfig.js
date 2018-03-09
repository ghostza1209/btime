export default {
  data() {
    return {
      url: process.env.API_URL
    }
  },
  methods: {
    subStr(str) {
      return str.replace("public", "");
    }
  }

}
