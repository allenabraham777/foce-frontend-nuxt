<template>
  <section class="container center-align">
    <div v-if="uploaderState === 0">
      <img v-if="imageData" :src="`${imageData}`" class="uploaded-image">
      <form @submit.stop.prevent="upload">
        <div class="file-field input-field">
          <div class="btn #4caf50 green">
            <span>File</span>
            <input ref="file" type="file" @change="handleFile">
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text">
          </div>
        </div>
        <div class="input-field center-align">
          <button type="submit" class="btn #4caf50 green">
            UPLOAD
          </button>
        </div>
      </form>
    </div>
    <div v-else-if="uploaderState === 1" class="loading">
      <div>
        <a class="btn-floating btn-large blue pulse"><i class="material-icons">wb_cloudy</i></a>
      </div>
    </div>
    <div v-else-if="uploaderState === 2">
      <img v-if="imageData" :src="`${imageData}`" class="uploaded-image">
      <h2 class="food #4caf50 green-text">
        {{ response.food }}
      </h2>
      <h3 class="calorie #b71c1c red-text darken-4">
        {{ response.calorie }}
      </h3>
      <h3 class="volume #1a237e indigo-text darken-4">
        {{ response.volume }}
      </h3>
      <button class="btn #4caf50 green" @click="goback">
        Return Home
      </button>
    </div>
    <div v-else class="loader">
      <h1 class="calorie #b71c1c red-text darken-4">
        {{ response }}
      </h1>
      <br>
      <br>
      <br>
      <button class="btn #4caf50 green" @click="goback">
        Return Home
      </button>
    </div>
  </section>
</template>

<script>
/*
State of uploader
0. Uploader
1. Waiting
2. Result
3. Error
*/
export default {
  middleware: 'auth',
  data () {
    return {
      uploaderState: 0,
      file: '',
      imageData: null,
      response: null
    }
  },
  methods: {
    upload () {
      this.uploaderState = 1
      const formData = new FormData()
      formData.append('image', this.file)
      this.$axios.post('/prediction', formData, { headers: formData.headers }).then((response) => {
        this.uploaderState = 2
        this.response = response.data
      }).catch((err) => {
        this.uploaderState = 3
        this.response = err.message
      })
    },
    handleFile () {
      const reader = new FileReader()
      this.file = this.$refs.file.files[0]
      /* eslint-disable */
      console.log(this.file)
      reader.onload = e => {
        this.imageData = e.target.result
      }
      reader.readAsDataURL(this.file)

    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;

  .uploaded-image {
    max-width: 250px;
  }
  .food {
    margin: 6px 0;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 32px;
  }

  .calorie {
    margin: 6px 0;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .volume {
    margin: 6px 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 32px;
  }
}
</style>
