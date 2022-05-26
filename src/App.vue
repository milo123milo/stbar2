<template>
    <!--
  <nav>
    
    <localized-link to="/">Home</localized-link> |
    <localized-link to="/about">About</localized-link>
  </nav>
 -->
  <router-view/>
  
</template>


<script>
import store from './store'
import { useClient } from 'villus';
export default {
  name: 'App',
  lang: 'en',
  setup() {
    useClient({
      url: store.baseUrl + '/graphql',
    });
  },
};

</script>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

//Hambutton Global
.bm-burger-button {
      width: 18px !important;
      height: 14px !important;
      left: 37px !important;
      top: 46px !important;
    }
.bm-burger-bars {
      background-color: #ffffff !important;
      border-radius: 25px;
    }
</style>
