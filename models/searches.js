const axios = require("axios");

class Searches {
  history = ["Corea", "Inglaterra", "Islandia", "Canada"];

  constructor() {
    //TODO read from database
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
    };
  }
  async city(city = "") {
    //HTTP request

    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
        params: this.paramsMapbox,
      });
      const resp = await instance.get();
      console.log(resp.data);
    } catch (error) {
      return [];
    }
  }
}

module.exports = Searches;
