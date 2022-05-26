<template>
  <div class="lokacije">
     <Menu></Menu>
    <div class="container-fluid">
  <div class="row nopad">
    <div  class="col-sm-5 lokimg nopad">
      <img class="lokviewimg nopad" v-if="data" :src="store.baseUrl + data.lokacijes.data[0].attributes.Profilna.data.attributes.url" alt="">
    </div>
    <div class="col-sm-7 loktext nopad">
    <div class="container-fluid nopad ">
  <div class="row rooww g-0 ">
    <div id="titlediv" class="col ">
      <div class="container-fluid centering">
        <div class="row align-items-center nopad g-0">
          <div v-if="data" class="col-8 boxtitle">
      {{ data.lokacijes.data[0].attributes[$t('apiN')] }}
    </div>
    
    <div id="pozic" v-if="data" class="col-4 boxtitle">
      {{ data.lokacijes.data[0].attributes.Pozicija }}
    </div>

        </div>
      </div>
    
      
      
      </div>
   <div class="w-100"></div>
    <div id="textdiv" class="col ">
      <div id="textcontent" v-if="data">{{data.lokacijes.data[0].attributes[$t('apiS')]}}</div>
    </div>
    
  </div>
</div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
/* 
 <h1 v-if="data">{{ data.lokacijes.data[0].attributes[$t('apiN')] }}</h1>
    <p v-if="data">{{ data.lokacijes.data[0].attributes[$t('apiS')] }}</p>
*/
import store from '../store'
import { useI18n } from 'vue-i18n'
import { useQuery } from 'villus';
import Menu from "../components/Menu.vue"

export default {
   data: function(){
      return {
          store,
          
      }
  },
   components: {
    Menu,
  },
 
   setup() {
    const { t } = useI18n({});
    const route = useRoute();
    const id = route.params.id;
    const naslov = t('apiN');
    const sadrzaj = t('apiS');
    const lokacije = `
      query lokacijes {
 lokacijes(filters: { Pozicija: {eq: ${id}}}) {
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
      ${sadrzaj}
    }
  }
}
}
    `;

    const { data } = useQuery({
      query: lokacije,
    });

    return { data };

    

  }
  
}
</script>
<style scoped>
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
    padding-inline: 6%;
    line-height: 100%;
    font-size: 4vmin;
    
/* or 115px */
    color: #FFFFFF;
   

}
#titlediv {
  height: 20%;
  background-color: #AF9A36;
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
    font-size: 4vmin;
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

