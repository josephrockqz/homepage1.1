<template>
  <div id="app">

    <div id="nav" style="display: flex; justify-content: space-between;">
      <span><h4 style="margin: 0; font-size: 24px; color: ">Developer</h4></span>

      <span>
        <span @click="navigateRouter('/')" style="font-size: 24px; color: #9be2e6; margin-right: 10px; cursor: pointer">Landing</span>
        <span @click="navigateRouter('/Me')" style="font-size: 24px; color: #9be2e6; margin-right: 10px; cursor: pointer">Me</span>
        <span @click="navigateRouter('/Portfolio')" style="font-size: 24px; color: #9be2e6; margin-right: 10px; cursor: pointer">Portfolio</span>
        <span @click="navigateRouter('/Services')" style="font-size: 24px; color: #9be2e6; margin-right: 10px; cursor: pointer">Services</span>
        <span @click="navigateRouter('/Games')" style="font-size: 24px; color: #9be2e6; margin-right: 10px; cursor: pointer">Games</span>
      </span>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    navigateRouter(pathName) {
      this.$router.push({
        path: pathName
      })
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
