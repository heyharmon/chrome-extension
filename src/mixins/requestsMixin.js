const APIURL = "http://api.openweathermap.org";

const axios = require("axios");

export const requestsMixin = {
  methods: {

    searchWeather(loc) {
      return axios.get(
        `${APIURL}/data/2.5/weather?q=${loc}&units=imperial&appid=${process.env.VUE_APP_APIKEY}`
      );
    },

    searchForecast(loc) {
      return axios.get(
        `${APIURL}/data/2.5/forecast?q=${loc}&units=imperial&appid=${process.env.VUE_APP_APIKEY}`
      );
    }

  }
};
