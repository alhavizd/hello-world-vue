<template lang="html">
  <v-app>
    <navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">

</style>
