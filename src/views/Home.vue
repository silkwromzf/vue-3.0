<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Teamplate msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Teamplate from '@/components/Teamplate.vue'

export default {
  name: 'Home',
  components: {
    Teamplate
  }
}
</script>
