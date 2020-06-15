<template>
  <div class="container">
    <form v-if="loginState === 0" class="login-card" @submit.stop.prevent="userLogin">
      <h1 class="desc">
        Food Observation and Calorie Estimation
      </h1>
      <h1 class="app-title left-align">
        FOCE <span class="dot #4caf50 green-text">.</span>
      </h1>
      <span class="red-text">
        {{ message }}
      </span>
      <div class="input-field">
        <input id="email" v-model="login.email" name="email" type="email" class="validate">
        <label for="email">EMAIL</label>
      </div>
      <div class="input-field">
        <input id="password" v-model="login.password" name="password" type="password" class="validate">
        <label for="password">PASSWORD</label>
      </div>
      <div class="input-field">
        <input class="btn #4caf50 green login-button bold" type="submit" value="LOGIN">
      </div>
      <div class="center-align">
        New to FOCE ? <nuxt-link to="signup" class="#4caf50 green-text bold underline">
          Register
        </nuxt-link>
      </div>
    </form>
    <div v-else-if="loginState === 1" class="loading">
      <div>
        <a class="btn-floating btn-large blue pulse"><i class="material-icons">hourglass_full</i></a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      loginState: 0,
      message: null,
      login: {
        email: '',
        password: ''
      },
      resp: {}
    }
  },
  created () {
    if (this.$auth.loggedIn) {
      this.$router.push('/') 
    }
  },
  methods: {
    async userLogin () {
      try {
        this.loginState = 1
        this.$auth.loginWith('local', { data: this.login })
        .then((response) => {
          console.log(response)
          this.resp = response
          this.$router.push('/') 
        })
        .catch((err) => {
          /* disable-eslint */
          console.log(err);
          this.message = err.response.data.message
          this.loginState = 0

        })
        
        // this.$axios.setHeader('auth-token', response.data.access_token)
        // this.$axios.get('/user').then((resp) => { 
        //   // this.$store.commit('User',resp.data)
        //   this.$auth.setUser(resp.data)
        // })
        // this.$auth.setUser(response.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss">
.login-card {
  padding: 50px 20px;
  box-sizing: border-box;
  max-width: 600px;
  margin-left: auto!important;
  margin-right: auto!important;

  .desc {
    font-size: 16px;
    font-weight: bold;
  }

  .app-title {
    font-weight: bolder;
    margin-top: 20px;

    .dot {
      line-height: 0px;
      font-size: 100px;
    }
  }

  .login-button {
    margin-top: 20px;
    height: 40px;
    border-radius: 20px;
    width: 100%;
  }
}
</style>
