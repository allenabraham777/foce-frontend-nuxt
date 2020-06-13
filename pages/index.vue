<template>
  <div class="container">
    <h1>Prediction History</h1>
    <div v-for="(hist, key) in history" :key="key" class="card history-card center-align">
      <h1>
        {{ hist.food }}
      </h1>
      <h2>
        {{ hist.calorie }}
      </h2>
      <h3>
        {{ hist.volume }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'header',
  middleware: 'auth',
  asyncData () {
    return {
      history: [
        {
          food: 'food1',
          calorie: 'calorie',
          volume: 'volume'
        },
        {
          food: 'food2',
          calorie: 'calorie',
          volume: 'volume'
        },
        {
          food: 'food3',
          calorie: 'calorie',
          volume: 'volume'
        },
        {
          food: 'food4',
          calorie: 'calorie',
          volume: 'volume'
        },
        {
          food: 'food5',
          calorie: 'calorie',
          volume: 'volume'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .container {

    h1 {
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
