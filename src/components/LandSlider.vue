<template>
    <div class="colo">
        
        <div class="container-fluid px-0">
            <div class="row no-padding wid g-0">
                <a class="col cuscoll1 re fig" :href="store.baseUrlWeb + curLng +'/lokacije/' + lokfland[0].attributes.Pozicija" >
                    
                    <img class="imglok shad"  :src="store.baseUrl + lokfland[0].attributes.Profilna.data.attributes.url" rel="preload" alt="randomimg">
                    <div class=" imgtext">{{ lokfland[0].attributes[naslov[0]]}}</div>
                   
                </a>
                 <a class="col cuscoll1 re fig d-none d-lg-block" :href="store.baseUrlWeb + curLng +'/lokacije/' + lokfland[1].attributes.Pozicija" >
                    
                    <img class="imglok "  :src="store.baseUrl + lokfland[1].attributes.Profilna.data.attributes.url" rel="preload" alt="randomimg">
                    <div class=" imgtext">{{lokfland[1].attributes[naslov[0]]}}</div>
                   
                </a>
                 <a class="col fig cuscoll1 d-none d-md-block" :href="store.baseUrlWeb + curLng +'/lokacije/' + lokfland[2].attributes.Pozicija">
                     <img class="imglok figimg" :src="store.baseUrl + lokfland[2].attributes.Profilna.data.attributes.url" rel="preload" alt="aaa">
                     <div class="figshd imgtext">{{lokfland[2].attributes[naslov[0]]}}</div>
                 </a>
                  <a class="col fig cuscoll1 re d-none d-sm-block" :href="store.baseUrlWeb + curLng +'/lokacije/' + lokfland[3].attributes.Pozicija" >
                       <img class="imglok figimg" :src="store.baseUrl + lokfland[3].attributes.Profilna.data.attributes.url" rel="preload" alt="aa">
                       <div class="figshd imgtext">{{lokfland[3].attributes[naslov[0]]}}</div>
                  </a>
                  <a id="btnmore" class="cuscoll2 " href="/bartimeline">
                     
                      <span id="arrow">
                      </span>
                      
                  </a>
                  
            </div>
            
        </div>


    </div>
</template>

<script>

import store from '../store'

export default {
    name: 'LandSlider',
    
    data: function(){
      return {
          store,
          curLng: "/" + this.$t("curLang"),
          naslov: Object.keys(this.lokfland[0].attributes)
          
      }
  },
    props: {
        lokfland: Array
    },


}
</script>


<style scoped>
.fig {
  position:relative;
  text-align: center;
  text-decoration: none;
}

.figimg, .figshd {
  grid-area: 1 / 1;
}
.imgtext {
    display: -webkit-box;
   line-height: 1.6;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
     bottom: 1vh;
    padding-inline: 2vh;
    /* height: 24vh; */
    width: 100%;
    position: absolute;
    opacity: 0.87;
    text-shadow: rgb(17 17 17) 2px 2px 3px;
    text-align: start;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 3.5vh;
    line-height: 122.5%;
    color: #FFFFFF;
    letter-spacing: 0.04em;
}

.imglok {
    height: 25vh;
    object-fit: cover;
    width: 100%;
}

.col:hover {
    filter: blur(0.5px);
    filter: brightness(0.7);
}
#arrow { 
    display: inline-block;
    background-size: cover;
    width: 25px;
  height: 40px;
    background-image: url(@/assets/arrow.svg);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
#arrow:hover{
    filter: contrast(0.5);
}
#btnmore {
    background-color: white;
    
}
.cuscoll1 {
    height: 25vh;
}

.cuscoll2 {
     width: 10%;
    height: 25vh;
}

.wid {
    width: 100%;
}
.re {
      
    
    background-color: rgb(255, 255, 255);
}
.colo {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
}
@media(max-width: 756px){
    #btnmore {
        
    }
    .cuscoll2 {
        width: 25%;
    }
}
@media(max-width: 575px){
    #btnmore {
        margin-left: -25%;
        background-color: transparent;
    }
    #arrow {
        
        filter: brightness(100);
        
        opacity: 0.9;
    }
    .cuscoll2 {
        width: 25%;
    }
}
</style>