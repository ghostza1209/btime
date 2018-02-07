var axios = require('axios')

module.exports = function(){
    axios.create({
        baseURL: 'http://localhost:3000/'
      })
}
