<template>
  <div id="app" style="margin: -10px -10px;"> 

    <div id="nav" style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;">
      <span id="landing" @click="navigateRouter('/', 'landing')" style="font-size: 24px; color: #00757b; margin-right: 15px; cursor: pointer">Landing</span>
      <span id="portfolio" @click="navigateRouter('/Portfolio', 'portfolio')" style="font-size: 24px; color: #00757b; margin-right: 15px; cursor: pointer">Portfolio</span>
      <span id="services" @click="navigateRouter('/Services', 'services')" style="font-size: 24px; color: #00757b; margin-right: 15px; cursor: pointer">Services</span>
      <span id="games" @click="navigateRouter('/Games', 'games')" style="font-size: 24px; color: #00757b; margin-right: 15px; cursor: pointer">Games</span>
    </div>

    <router-view/>
  </div>
</template>

<script>
import store from './store/index.js';

export default {
  methods: {
    navigateRouter(pathName, idName) {
      /* PUSHES REPECTIVE PATH TO THE ROUTER AND INCREMENTS THE COUNT OF PAGES VISITED */
      store.dispatch('pushPathToRouter', {
        pathName: pathName
      });
      /* CHANGES THE COLOR BACK AND FORTH QUICKLY TO SHOW THE BUTTON WAS PRESSED */
      document.getElementById(idName).style.color = '#f9f9f9';
      setTimeout(function() { document.getElementById(idName).style.color = '#00757b' }, 100);
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}

#nav {
  padding: 30px 10px;
}

#page-view {
  padding: 30px;
}
</style>
