<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper #4caf50 green">
        <span class="brand-logo">FOCE</span>
        <a data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <span id="nav-mobile" class="right actions">
          <button class="action-button" @click="uploader">
            <i class="material-icons">file_upload</i>
          </button>
          <button class="action-button" @click="logout">
            <i class="material-icons">exit_to_app</i>
          </button>
          <!-- hide-on-med-and-down -->
        </span>
      </div>
    </nav>
    <div id="mobile-demo" class="sidenav">
      <div v-if="$auth.loggedIn" class="#4caf50 green drawer-card">
        <h5>{{ $auth.user.name }}</h5>
        <div>{{ $auth.user.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // async asyncData (context) {
  //   const user = await context.$auth.fetchUser()
  //   return {
  //     user
  //   }
  // },
  mounted () {
    this.$materialize.sidenav()
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    },
    uploader () {
      this.$router.push('/uploader')
    }
  }
}
</script>

<style lang="scss">
.brand-logo {
  padding: 0 16px !important;
  font-weight: bold;
  letter-spacing: 12px;
}
.actions {
  .action-button {
    padding: 0 8px;
    background: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    color: #ffffff !important;
    margin: 0;
    cursor: pointer;

  }
}

.sidenav {

  .drawer-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0;
    padding: 12px;
    height: 160px;
    color: #ffffff;
    font-weight: bold;

    h5 {
      font-weight: bolder;
    }
  }
}
</style>
