<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Weather App {{ totalTvCount }}</b-navbar-brand>
        </b-navbar>

        <div class="page">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
                <b-form @submit.prevent="onSubmit" novalidate>
                    <b-form-group label="Keyword" label-for="keyword">
                        <ValidationProvider name="keyword" rules="required" v-slot="{ errors }">
                            <b-form-input
                            :state="errors.length == 0"
                            v-model="form.keyword"
                            type="text"
                            required
                            placeholder="Keyword"
                            name="keyword"
                            ></b-form-input>
                            <b-form-invalid-feedback :state="errors.length == 0">Keyword is required</b-form-invalid-feedback>
                        </ValidationProvider>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Search</b-button>
                </b-form>
            </ValidationObserver>

            <br />

            <b-tabs>
                <b-tab title="Current Weather">
                    <CurrentWeather />
                </b-tab>
                <b-tab title="Forecast">
                    <Forecast />
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import CurrentWeather from "@/components/CurrentWeather.vue";
import Forecast from "@/components/Forecast.vue";

export default {
  name: "App",
  components: { CurrentWeather, Forecast },

  data() {
    return {
      form: {},
      totalTvCount: ''
    };
  },

  mounted() {
    this.totalTvCount = this.$store.state.totalTvCount
  },

  // computed: {
  //   totalTvCount() {
  //       return this.$store.state.totalTvCount
  //   }
  // },

  methods: {
    async onSubmit() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      localStorage.setItem("keyword", this.form.keyword);
      this.$store.commit("setKeyword", this.form.keyword);
    }
  },

  beforeMount() {
    this.form = { keyword: localStorage.getItem("keyword") || "" };
  },

  mounted(){
    this.$store.commit("setKeyword", this.form.keyword);
  }

};
</script>

<style>
html {
  min-width: 500px;
}
.page {
  padding: 20px;
}
</style>
