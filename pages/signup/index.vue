<template>
  <div class="container">
    <form class="login-card" @submit.stop.prevent="signUp">
      <h1 class="app-title">
        Signup <span class="dot #4caf50 green-text">.</span>
      </h1>
      <div class="input-field">
        <input id="name" v-model="register.name" name="name" type="text" class="validate">
        <label for="name">Name</label>
      </div>
      <div class="input-field">
        <input id="email" v-model="register.email" name="email" type="email" class="validate">
        <label for="email">EMAIL</label>
      </div>
      <div class="input-field">
        <input id="password" v-model="register.password" name="password" type="password" class="validate">
        <label for="password">PASSWORD</label>
      </div>
      <div class="input-field">
        <input id="password2" v-model="register.password2" name="password2" type="password" class="validate">
        <label for="password2">RETYPE PASSWORD</label>
      </div>
      <div class="input-field">
        <input class="btn #4caf50 green login-button bold" type="submit" name="submit" value="SIGNUP">
      </div>
      <div class="center-align">
        Already a user ? <nuxt-link to="login" class="#4caf50 green-text bold underline">
          Login
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      register: {
        name: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  method: {
    signUp () {

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
