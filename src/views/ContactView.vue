<template>
  <div class="contact">
   
    
     <Menu></Menu>
    <div class="container-fluid">
  <div class="row nopad">
    <div  class="col-sm-5 lokimg nopad">
     <div class="map-responsive">
       <div class="map-responsive">
         <iframe  height="100vh" id="gmap_canvas" src="https://maps.google.com/maps?q=Tvrdjava%20Stari%20Bar&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
         </div
         ></div>
    </div>
    <div class="col-sm-7 loktext nopad">
    <div class="container-fluid nopad ">
  <div class="row rooww g-0 ">
    <div id="titlediv" class="col ">
      <div class="container-fluid centering">
        <div class="row align-items-center nopad g-0">
          <div  class="col-8 boxtitle">
     {{ $t('contact') }}
    </div>
    
    <div id="pozic"  class="col-4 boxtitle">
  
    </div>

        </div>
      </div>
    
      
      
      </div>
   <div class="w-100"></div>
    <div id="textdiv" class="col ">
        
      <Markdown id="textcontent" v-if="data" :source="data.kontakt.data.attributes[$t('info')]" /> 
        
    </div>
    
  </div>
</div>
    </div>
  </div>
  </div>
  </div>
</template>
<style>
.bm-burger-bars {
  background-color: #041F30 !important;
}
</style>

<script>
import {useRoute} from "vue-router";
/* 
 <h1 v-if="data">{{ data.lokacijes.data[0].attributes[$t('apiN')] }}</h1>
    <p v-if="data">{{ data.lokacijes.data[0].attributes[$t('apiS')] }}</p>

    <div id="textcontent" v-if="data">{{data.lokacijes.data[0].attributes[$t('apiS')]}}</div>
*/
import store from '../store'
import { useI18n } from 'vue-i18n'
import { useQuery } from 'villus';
import Menu from "../components/Menu.vue"
import Markdown from 'vue3-markdown-it';


import '@/assets/img.css'

export default {

  name: 'contact',
   data: function(){
      return {
          
          store,
          
      }
  },
  computed: {
    
  },
  
   components: {
    Menu,
    Markdown
  },
  setup() {
    const { t } = useI18n({});
    console.log(t("apiN"));
    const info = t('info');
    
    const kontakt = `
    query{
  kontakt {
    data {
      attributes {
        ${info}
      }
    }
  }
}
    `;

    const { data } = useQuery({
      query: kontakt,
    });

    return { data };

    

  },
 
 
 
   
  
}
</script>
<style scoped>
.map-responsive{

       overflow: hidden;
    
    position: relative;
    
    height: 100%;

}

.map-responsive iframe{

    left:0;

    top:0;

    height:100%;

    width:100%;

    position:absolute;

}
.mapouter{
  position:relative;
  text-align:right;
  height:100%;
  width:100%;
  }
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:100%;
  width:100%;
  }

#textcontent {
    height: 100%;
    overflow-y: scroll;
    text-align: start;
    padding-inline: 4%;
    padding-block: 5%;
}
.centering {
        position: relative;
    top: 50%;
    transform: translateY(-50%);
}
#pozic {
  text-align: end;
}

.boxtitle {
    text-align: start;
    font-family: 'Helvetica';
    padding-inline: 5%;
    line-height: 100%;
    font-size: 2rem;
    
/* or 115px */
    color: #FFFFFF;
   

}
#titlediv {
  height: 20%;
  background-color: #092536;
}
#textdiv {
  height: 80%;
}
.rooww {
  height: 70vh;
}
.nopad {
  padding: 0 !important;
}
.lokviewimg {
   object-fit: cover;
    
    width: 100%;
    height: 30vh;
}
.lokimg {
  height: 30vh;
}
.loktext {
  height: 70vh;
  background-color: white;
}
@media (min-width: 576px) {
  .boxtitle {
    font-size: 3rem;
}
  .rooww {
  height: 100vh;
}
.lokimg {
  height: 100vh;
 
}
.lokviewimg {
    height: 100vh;
}
.loktext {
  height: 100vh;
  
}

}

</style>

