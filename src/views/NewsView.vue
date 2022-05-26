<template>
    <div class="news">
        <div style="width: 100%; height: 3vh;"></div>
        <div class="container-fluid newscont no-padding">
            <div class="row g-0">
                <div class="col-xl d-flex justify-content-center">
                    <div id="npcontain">
                    <h1 id="nptitle">{{ $t("newsTitle") }}</h1>
                    <h1 id="npsubtitle">{{ $t("newsSubTitle") }}</h1>
                    <div id="endline"></div>
                    <a class="mainarticle" v-if="data" :href="'/article/' + data.vijestis.data[0].id">
                    <div id="frpost">
                        <div id="frimg">
                    
                        <img class="frimgs" v-if="data" :src="store.baseUrl + data.vijestis.data[0].attributes.VijestiProfilna.data.attributes.url" alt="">
                    
                        </div>
                        <div class="frtext carousel-caption" v-if="data">{{  data.vijestis.data[0].attributes['Vijesti' + $t('apiN')] }}</div>
                    </div>
                    </a>
                    </div>
                </div>
                
                <div class="col-xl rightbar">
                    <div class="container-fluid containerpadding" >
                        <div class="hedr">
                                <div id="semititle" style="font-size: 2.4rem; color: #041F30; width:100%">{{ $t("latestNews") }}</div>
                                <a class="a" href="/news">
                                <div class="btnmore" style="">{{ $t("readMoreNews") }}</div>
                                </a>
                            </div>
                        <div class="row">
                            <div class="col-xl"><news v-if="data" v-bind:aitem="data.vijestis.data[1]"></news></div>
                            <div class="col-xl"><news v-if="data" v-bind:aitem="data.vijestis.data[2]"></news></div>
                        </div>
                        <div class="row">
                            
                            <div class="col-xl"><news v-if="data" v-bind:aitem="data.vijestis.data[3]"></news></div>
                            <div class="col-xl"><news v-if="data" v-bind:aitem="data.vijestis.data[4]"></news></div>
                        </div>
                        <a class="a" href="/news">
                        <div class="btnmore2" style="">{{ $t("readMoreNews") }}</div>
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>
        

    <mainfooter class="d-flex justify-content-center"></mainfooter>
    </div>
</template>

<script>
import News from '../components/News.vue'
import { useI18n } from 'vue-i18n'
import store from '../store'
import { useQuery } from 'villus';
import { ref, computed } from 'vue'
import {useRoute} from "vue-router";
import Mainfooter from '../components/mainfooter.vue';

export default {
    data: function(){
      return {
          store,
          
      }
  },
    components: {
        News,
        Mainfooter

    },
    setup() {
    const { t } = useI18n({});
    const route = useRoute();
    const id = route.params.id;
    const naslov = "Vijesti" + t('apiN');
    const sadrzaj = "Vijesti" + t('apiS');
    const vijestis = computed(() => { 
      return `
      query vijestis {
 vijestis(pagination: {start: 0, limit: 5}, sort: "id:desc") {
  data {
    id
    attributes {
       createdAt
       VijestiProfilna {
        data {
          attributes {
            url
          }
        }
      }
      ${naslov}
      ${sadrzaj}
      
    }
  }
}
}
    `; });

    const { data } = useQuery({
      query: vijestis,
    });

    return { data };

    

  }
}
</script>

<style scoped>
.mainarticle {
  width: 100vw;
}
.a {
    text-decoration: none;
}
.frtext {
    position: absolute;
        margin-bottom: 3%;
    left: 8% !important;
    right: 0% !important;
    text-align: left;
    font-size: 2rem;
    filter: drop-shadow(-1px -1px 5px black);
}
.frimgs {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.95);
}

.containerpadding {
    padding-left: 0vh;
}
.rightbar {
        align-items: flex-end;
        margin-block: 3vh;
}
.btnmore {
    font-size: 1.2rem; 
    color:#b5b3b3;
    cursor: pointer;
    display: none;
}
.btnmore2 {
    margin-top: 1vh;
    font-weight: 600;
    font-family: 'Helvetica-Medium';
    padding-block: 2vh;
    font-size: 1.3rem; 
    color:#696969;
    cursor: pointer;
    display: block;
}
.btnmore:hover {
    
    color:#d8d8d87e;
    
}
.hedr {
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0%;
    align-items: center;
    padding-bottom: 4vh;
}
    #frpost {
        
        height: 64vh;
       
        position:relative;
    }
    #frpost:hover {
        filter: contrast(0.9);
    }
    #frimg {
        background-color:blue;
        
        width: 100%;
        height: 58vh;
        margin-block: 3vh;
    }
    #endline {
    margin-top: 0.5%;
    display: none;
    position: absolute;
    left: 50%;
    bottom: 10;
    background-color: #041F30;
    height: 20vh;
    width: 1.3vh;
    }
@font-face {
  font-family: "Helvetica-Medium";
  src: local("Helvetica-Medium"),
   url(@/assets/HelveticaNowDisplay-Lt.otf) format("opentype");
}
    #npcontain {
        display: grid;
    }
    #nptitle {
               

    text-align: start;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 00;
    font-size: 9vh;
    line-height: 120%;
    color: #041F30;
    margin-inline: 10vw;

    }
    #npsubtitle {
    padding-right: 10%;
    text-align: start;
    font-family: 'Helvetica-Medium';
    font-style: italic;
    font-weight: 600;
    font-size: 3.4vh;
    line-height: 120%;
    color: #C1C1C1;
    margin-inline: 10vw;
    }
    .newscont {
        padding-block: 3vh;
        padding-inline: 0 !important;
       
        width: 95%;
        height: 100%;
    }
    .col {
       
        width: 100%;
        height: 100%;
    }
    
     .news {
         
        width: 100%;
        height: auto;
        
        position: absolute;
    }
    @media (min-width: 1200px) {
         #endline {
             display: block;
        }
    }
    @media (min-width: 992px) {
        #nptitle {
            margin-inline: 0;
        }
        #npsubtitle {
            margin-inline: 0;
        }
        
        .containerpadding {
            padding-left: 3vh;
        }
        .hedr {
            
            margin-top: 0vh;
            padding-left: 2%;
        }
        .btnmore {
            display: block;
            
        }
        .btnmore2 {
            display: none;
            
        }
        #frpost {
                margin-left: 0%;
                width: 100%;
        }
        #semititle {
            width: auto !important;
        }
        .frtext {
    
    left: 4% !important;
    
}
    .mainarticle {
        width: 100%;
    }
       
      
    }
   
</style>
