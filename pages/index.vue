<template>
  <div class="container">
    <div v-if="history">
      <h1 class="history-page-head">
        Prediction History
      </h1>
      <div v-for="(hist, key) in history" :key="key" class="card history-card center-align">
        <h1>
          {{ hist.food }}
        </h1>
        <h2>
          {{ hist.calorie }}
        </h2>
        <h3>
          {{ hist.foodmass }}
        </h3>
      </div>
    </div>
    <div v-else>
      <h1>
        Hey
        <br>
        There,
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'header',
  middleware: 'auth',
  async asyncData ({ $axios, $auth }) {
    // const token = await $auth.getToken('local')
    // const user = await $auth.fetchUser()
    // $axios.setHeader('auth-token', token)
    return await $axios.get('/prediction/results')
      .then((res) => {
        return {
          history: res.data.history.length > 0 ? res.data.history : null
        }
      })
      .catch((err) => {
        return {
          history: {},
          err
        }
      })
  },
  data () {
    return {
      auth: null
    }
  }
}
</script>

<style lang="scss">
  .container {

    .history-page-head {
      font-size: 40px;
      text-align: center;
    }

    .history-card {
      padding: 20px;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;

      h1 {
        margin: 10px;
        text-transform: uppercase;
        font-size: 28px;
        font-weight: bold;
      }

      h2 {
        margin: 10px;
        text-transform: uppercase;
        font-size: 20px;
      }

      h3 {
        margin: 10px;
        text-transform: uppercase;
        font-size: 16px;
      }
    }
  }
</style>
