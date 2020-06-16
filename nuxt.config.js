
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/auth.js', mode: 'client' },
    { src: '@/plugins/materialize.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://foce-backend.eastus.cloudapp.azure.com/api'
    // baseURL: 'http://localhost:3000/api'
    // baseURL: 'https://foce-backend.herokuapp.com/api'
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/user/login', method: 'post', propertyName: 'access_token'},
          logout: { url: '/user/logout', method: 'get'},
          user: { url: '/user', method: 'get', propertyName: 'user'}
        },
        tokenName: 'auth-token',
        tokenType: ''
        // tokenRequired: false,
        // autoFetchUser: false,
        // globalToken: false,
      }
    }
  },

  styleResources: {
    scss: [
      'assets/scss/_variable.scss'
    ]
  },
  server: {
    port: 8000
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
