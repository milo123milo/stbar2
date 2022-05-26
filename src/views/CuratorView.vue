<template>
    <div class="curatorview">
        <Menu></Menu>
           <div class="container-fluid p-0">
               <div class="row g-0 reverse">
                    <div class="col-xl-3  cA">
                        <div class="row g-0 sidebar fadein">
                             <div class="row g-0 sidetop">
                                 <dialog-component v-if="data" v-bind:content="data.kustos.data.attributes.Prozor1[$t('apiS')]" 
                                 :btnname="data.kustos.data.attributes.Prozor1[$t('apiN')]"></dialog-component>

                                 <dialog-component v-if="data" v-bind:content="data.kustos.data.attributes.Prozor2[$t('apiS')]" 
                                 :btnname="data.kustos.data.attributes.Prozor2[$t('apiN')]"></dialog-component>

                                 <dialog-component v-if="data" v-bind:content="data.kustos.data.attributes.Prozor3[$t('apiS')]" 
                                 :btnname="data.kustos.data.attributes.Prozor3[$t('apiN')]"></dialog-component>

                                 <dialog-component v-if="data" v-bind:content="data.kustos.data.attributes.Prozor4[$t('apiS')]" 
                                 :btnname="data.kustos.data.attributes.Prozor4[$t('apiN')]"></dialog-component>

                                 
                             </div>
                             <div class="row g-0 ">
                                 <img v-if="data" :src="store.baseUrl + data.kustos.data.attributes.Profilna.data.attributes.url " width="400" alt="" title="Mladen" class="img-responsive wp-image-181 profil" sizes="(max-width: 800px) 100vw, 600px">
                             </div>
                         </div>
                         <div class="linevert vert"></div>
                    </div>
                    <div class="col-xl-9 cB">
                         <div class="row g-0 rightcont ">
                             <div class="container-fluid">
                             <div id="title" class="row g-0">
                                 <div class="krug circlea"></div>
                                 <div class="kustos titleleft" v-if="data">{{ data.kustos.data.attributes[$t('apiT')] }}</div>
                                 <div v-if="data" class="name2 titleleft">Mladen Zagarčanin</div>
                                 <div class="horz2 horzlf2"></div>
                             </div>
                             <div id="text" class="row g-0">
                                 <div id="textbox" class="fadein" v-if="data">{{ data.kustos.data.attributes[$t('apiS')] }}</div>
                             </div>
                             <div id="name" class="row g-0">
                                 <div v-if="data" class="nameup">Mladen Zagarčanin</div>
                                 
                                <div class="linehorz horz"></div>
                             </div>
                             </div>
                         </div>
                        
                        
                    </div>
               </div>
           </div>
    </div>
</template>
<script>
import Menu from '../components/Menu.vue'
import store from '../store'

import { useI18n } from 'vue-i18n'
import { useQuery } from 'villus';
import DialogComponent from '../components/DialogComponent.vue'


export default {
    name: "curatorview",
    data: function(){
      return {
          
          store,
          
      }
  },
    components: {
        Menu,
        DialogComponent
        
    },
     setup() {
    const { t } = useI18n({});
    console.log(t("apiN"));
    const naslov = t('apiN');
    const sadrzaj = t('apiS');
    const title = t('apiT');
    const kustos = `
    query kustos{
  kustos {
    data {
      attributes {
        ${title}
        ${sadrzaj}
        Profilna {
          data {
            attributes {
              url
            }
          }
        }
        Prozor1 {
          ${naslov}
          ${sadrzaj}
        }
        Prozor2 {
          ${naslov}
          ${sadrzaj}
        }
        Prozor3 {
          ${naslov}
          ${sadrzaj}
        }
        Prozor4 {
          ${naslov}
          ${sadrzaj}
        }
        
      }
    }
  }
}
    `;

    const { data } = useQuery({
      query: kustos,
    });

    return { data };

    

  },
    
}

</script>
<style scoped>
.horz2 {
    display: none;
}
.name2 {
    display: none;
}
.krug {
    
    border: 2px solid #2c3e50;
    border-radius: 2.5rem;
    margin-left: 3.5vw;
    
    position: absolute;
    top: 8.4vh;
    width: 60px;
    height: 60px;
    
    border-radius: 50%;
   
}
.kustos {
    padding-top: 10px;
    font-weight: 700;
    padding-right: 4vw;
    font-family: 'Helvetica-Light';
    font-size: 7rem;
    font-style: italic;
    text-align: end;
}
#textbox {
    margin-top: 19vh;
    padding-left: 10%;
    padding-right: 3%;
    margin-left: -5%;
    margin-inline: 10;
    font-size: 1.7rem;
    font-family: 'Helvetica-Light';
    font-style: 'Helvetica-Light';
    height: 49vh;
    overflow-y: scroll;
    text-align: start;
}
@keyframes horzlf2 {
   0% {
    width: 0;
  }
  100% {
    width: 83%;
  }
    
}
.horzlf2 {
    
    animation: horzlf2 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes circlea {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
    
}
@keyframes titleleft {
  0% {
    
    transform: translateX(-60px);
  }
  100% {
    
    transform: translateX(0);
  }
    
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes nameup {
  0% {
    
    transform: translateY(-30px);
  }
  100% {
    
    transform: translateY(0);
  }
    
}
@keyframes horz {
  0% {
    width: 0;
  }
  100% {
    width: 43%;
  }
}
@keyframes vert {
  0% {
    height: 0;
  }
  100% {
    height: 80%;
  }
}
.circlea {
    animation: circlea 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.titleleft {
    animation: titleleft 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.fadein {
    
    animation: fadein 1.3s ease-in-out both;
}

.nameup {
    
    animation: nameup 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.horz {
	animation: horz 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.vert {
    animation: vert 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.linehorz {
    animation-delay: 0.5s;
    height: 0.11rem;
    width: 43%;
    background-color: #092536;
    position: absolute;
    bottom: 29px;
    right: 0;
}

#title {
    height: 10%;
}
#text {
    height: 80%;
}
#name {
    width: 75%;
    color: #092536;
    bottom: 0;
    position: absolute;
    margin-left: -5px;
    text-align: start;
    font-size: 5rem;
    font-family: 'Helvetica-Thin';
}
.rightcont {
    height: 100vh;
}
.linevert {
    width: 0.11rem;
    height: 80%;
    background-color: #092536;
    position: absolute;
    top: 0;
    left: 25%;
}
.profil {
   
    bottom: 22px;
    width: 25vw;
    object-fit: cover;
    padding-inline: 36px;
    height: 52vh;
    padding-bottom: 10px;
}
.sidetop {
    margin-top: 15vh;
    padding-right: 50%;
    
    height: fit-content;
}

.sidebar {
  

    height: 100vh;
   
}
.reverse {
    flex-wrap: wrap-reverse !important;
}
.cA {
    z-index: 2;
    height: 100vh;
    background-color: #ffffff;
}
.cB {
    z-index: 1;
    height: 100vh;
    background-color: #ffffff;
}
@font-face {
  font-family: "Helvetica-Thin";
  src: local("Helvetica-Thin"),
   url(@/assets/HelveticaNowDisplay-Th.otf) format("opentype");
}
@media (max-width: 1200px) { 
    .horz2 {
        animation-delay: 0.7s;
        position: relative;
   
    margin-inline: 8.3vw;
    margin-top: 1vh;
    
    display: unset;
    width: 83%;
    height: 0.06rem;
    background-color: #3e4150;

    }
    .name2 {
    
    padding-left: 8vw;
    display: unset;
    width: 100%;
    color: #092536;
    
    text-align: start;
    font-size: 2.1rem;
    font-family: 'Helvetica-Thin';
    }
    .profil {
        margin-top: 3vh;
        height: 57vh;
        width: 100vw;
    }
    .sidebar {
        margin-top: -18vh;
    }
    .cA {
        height: 91vh;
    }
    #textbox {
        padding-left: 16%;
        padding-right: 3%;
        margin-left: -8%;
        font-size: 1.2rem;
        height: 60vh;
    }
    .nameup {
        display: none;
    }
    .krug {
    border: 2px solid #2c3e50;
    border-radius: 2.5rem;
    /* margin-left: 3.5vw; */
    position: absolute;
    top: 8.4vh;
    right: 0;
    margin-right: 11vw;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    }
    .kustos {
    position: relative;
    font-size: 1.5rem;
    text-align: start;
    padding-top: 13vh;
    padding-left: 8vw;
    }
    .linevert {
        display: none;
    }
    .linehorz {
        display: none;
    }
 }
</style>

<style>
.bm-burger-bars {
  background-color: #092536 !important;
}
</style>