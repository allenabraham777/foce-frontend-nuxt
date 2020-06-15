<template>
  <div class="container">
    <div v-if="history" class="row">
      <h1 class="history-page-head col l12 m12 s12">
        Prediction History
      </h1>
      <div v-for="(hist, key) in history" :key="key" class="history-card-wrapper col l3 m4 s12">
        <div class="card history-card center-align">
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
  .history-card-wrapper {
    .history-card {
      padding: 20px;
      height: 200px;
      border-radius: 5px;

      h1 {
        margin: 10px;
        text-transform: uppercase;
        font-size: 24px;
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
}
</style>
