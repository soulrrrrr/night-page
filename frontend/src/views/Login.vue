<template>
  <div class="form">
    <img alt="Vue logo" src="../assets/night_logo.jpeg" class="mb-3" />
    <Loginla v-bind:User="User" v-bind:profile="profile" />
  </div>
</template>

<script>
// @ is an alias to /src

import Loginla from '@/components/Loginla.vue'
import liff from '@line/liff'
export default {
  name: 'Login',
  components: {
    Loginla
  },
  data() {
    return {
      User: '',
      profile: {}
    }
  },

  methods: {
    getProfile: function () {
      liff.getProfile().then((profile) => {
        this.profile = profile
        this.User = profile.displayName
      })
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 200px;
  height: 210px;
}
</style>