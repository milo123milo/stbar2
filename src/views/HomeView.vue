<template>
  <div class="home">
   
    
    <Menu v-if="data"></Menu>
   
    <landing v-if="data" v-bind:lokfhome="data"> </landing>
  
    <news-view v-if="data" class="padd"></news-view>
   
   
         
       
    
 
  
 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import '@/assets/global.css'
import Menu from "../components/Menu.vue"

import { useQuery } from 'villus';

import Landing from '../components/Landing.vue'
import { useI18n } from 'vue-i18n'
import LangBtn from '../components/LangBtn.vue';
import NewsView from './NewsView.vue';
import Mainfooter from '../components/mainfooter.vue';


    



export default {
  name: 'HomeView',
  props: {
    lang: String
  },
  components: {
    HelloWorld,
    Menu,
    Landing,
    LangBtn,
    NewsView,
    Mainfooter,
    
    
   
  },
  data () {
    return {
      header:  this.$t("hello")
    }
  },

  setup() {
    const { t } = useI18n({});
    console.log(t("apiN"));
    const naslov = t('apiN');
    const lokacije = `
    query lokacijes {
 lokacijes(pagination: {start: 0, limit: 5}) {
  data {
    attributes {
      ${naslov}
      Profilna {
        data {
          attributes {
            url
          }
        }
      }
      Pozicija
    }
  }
}
}
    `;

    const { data } = useQuery({
      query: lokacije,
    });

    return { data };

    

  },
  
 
};
 
</script>

<style lang="scss">

  .full {
    height: 100vh;
  }
  .btnn {
    
    top: 36px;
    position: relative;
  }
  .padd {
    position: absolute;
    padding-inline: 5vh;
    margin-block: 2vh;
  }

</style>
