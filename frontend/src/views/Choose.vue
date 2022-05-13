<template>
  <div class="form">
    <img alt="Vue logo" src="../assets/night_logo.jpeg" class="mb-3" />
    <Formlala v-bind:User="User" v-bind:profile="profile" />
  </div>
</template>

<script>
// @ is an alias to /src

import Formlala from '@/components/Formlala.vue'
import liff from '@line/liff'
export default {
  name: 'About',
  components: {
    Formlala
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