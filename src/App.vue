<template>
  <div id="app" style="margin: -10px -10px;">

    <span style="display: flex; justify-content: space-between; align-items: center;">
      <h1 style="padding: 8px 40px; margin: 0; font-size: 48px;">JOSEPH <span style="color: #00757b;">ROCK</span></h1>
      <b-nav pills id="nav" style="padding: 30px 24px;">
        <b-nav-item to="/" id="landing" style="font-size: 32px; cursor: pointer">Landing</b-nav-item>
        <b-nav-item to="/skills" id="skills" style="font-size: 32px; cursor: pointer">Skills</b-nav-item>
        <b-nav-item to="/experience" id="experience" style="font-size: 32px; cursor: pointer">Experience</b-nav-item>
        <b-nav-item to="/games" id="games" style="font-size: 32px; cursor: pointer">Games</b-nav-item>
        <b-nav-item to="/contact-me" id="contact-me" style="font-size: 32px; cursor: pointer; text-align: left">Contact Me</b-nav-item>
      </b-nav>
    </span>  

    <router-view/>

  </div>
</template>

<script>
import store from './store/index.js';

export default {
  data() {
    return {
      landingActiveBool: false,
      skillsActiveBool: false,
      experienceActiveBool: false,
      gamesActiveBool: false
    }
  },

  methods: {
    navigateRouter(pathName, idName) {
      /* PUSHES REPECTIVE PATH TO THE ROUTER AND INCREMENTS THE COUNT OF PAGES VISITED */
      store.dispatch('pushPathToRouter', {
        pathName: pathName
      });
      /* CHANGES THE COLOR BACK AND FORTH QUICKLY TO SHOW THE BUTTON WAS PRESSED */
      document.getElementById(idName).style.color = '#f9f9f9';
      setTimeout(function() { document.getElementById(idName).style.color = '#00757b' }, 40);
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
  padding: 15px;
}

a.nav-link {
  color: #e8ac21;
}

a.nav-link:hover {
  color: #FFFFFF;
  background-color: #e8ac21;
}

a.nav-link.router-link-exact-active {
  color: #FFFFFF;
  background-color: #e8ac21;
}
</style>
