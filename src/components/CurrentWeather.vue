<template>
  <div>
    <br />
    <b-list-group v-if="weather.main">
      <b-list-group-item>{{weather.weather[0].description}}</b-list-group-item>
      <b-list-group-item>Current Temparature: {{weather.main.temp}} F</b-list-group-item>
      <b-list-group-item>High: {{weather.main.temp_max}} F</b-list-group-item>
      <b-list-group-item>Low: {{weather.main.temp_min}} F</b-list-group-item>
      <b-list-group-item>Pressure: {{weather.main.pressure }}mb</b-list-group-item>
      <b-list-group-item>Humidity: {{weather.main.humidity }}%</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { requestsMixin } from "@/mixins/requestsMixin";

export default {
  name: "CurrentWeather",

  mounted() {},

  mixins: [requestsMixin],

  computed: {
    keyword() {
      return this.$store.state.keyword;
    }
  },

  data() {
    return {
      weather: {}
    };
  },

  watch: {
    async keyword(val) {
      const response = await this.searchWeather(val);
      this.weather = response.data;
    }
  }

};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
