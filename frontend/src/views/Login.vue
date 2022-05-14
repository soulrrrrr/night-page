<template>
  <div class="form">
    <img alt="Vue logo" src="../assets/night_logo.jpeg" class="mb-3" />
    <Loginla />
  </div>
</template>

<script>
// @ is an alias to /src

import Loginla from '@/components/Loginla.vue'
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
  }
}
</script>

<style scoped lang="scss">
img {
  width: 200px;
  height: 210px;
}
</style>