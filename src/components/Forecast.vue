<template>
  <div>
    <br />
    <b-list-group v-for="(l, i) of forecast.list" :key="i">
      <b-list-group-item>
        <b>Date: {{l.dt_txt}}</b>
      </b-list-group-item>
      <b-list-group-item>Temperature: {{l.main.temp}} F</b-list-group-item>
      <b-list-group-item>High: {{l.main.temp_max}} F</b-list-group-item>
      <b-list-group-item>Low: {{l.main.temp_min }}mb</b-list-group-item>
      <b-list-group-item>Pressure: {{l.main.pressure }}mb</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { requestsMixin } from "@/mixins/requestsMixin";

export default {
  name: "Forecast",
  mixins: [requestsMixin],

  computed: {
    keyword() {
      return this.$store.state.keyword;
    }
  },

  data() {
    return {
      forecast: []
    };
  },

  watch: {
    async keyword(val) {
      const response = await this.searchForecast(val);
      this.forecast = response.data;
    }
  }

};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
