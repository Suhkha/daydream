const axios = require("axios");

class Searches {
  history = ["Corea", "Inglaterra", "Islandia", "Canada"];

  constructor() {
    //TODO read from database
  }

  async city(city = "") {
    //HTTP request
    //console.log("city", city);
    try {
      const resp = await axios.get("https://reqres.in/api/users?page=2");
      console.log(resp.data);
    } catch (error) {
      return [];
    }
  }
}

module.exports = Searches;
