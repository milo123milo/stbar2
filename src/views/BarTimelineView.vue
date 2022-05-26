<template>

    <div class="bartimeline">
      
         <Menu class="menue"></Menu>
         
        <div id="conter container-fluid">
           
    <img v-if="data" id="backtime" src="@/assets/backtimeline.jpg" alt="">
   
     <timeline-container v-if="data" v-bind:btapiitem="pagein" class="timecontainer"></timeline-container>
   
    <div class="arrowscont">
      <img id="arrowright" class="arrowpage" v-show="showup" v-if="data" @click="pageup(data.lokacijes.data)" src="@/assets/arrow.svg">
      <img id="arrowleft" class="arrowpage" v-show="showdown" v-if="data" @click="pagedown(data.lokacijes.data)" src="@/assets/arrow.svg">
      </div>

        </div>
    
        
    </div>

</template>

<script>
import Menu from "../components/Menu.vue"
import TimelineContainer from '../components/TimelineContainer.vue'
import { useQuery } from 'villus';
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import {useRoute} from "vue-router";



export default {
     components: {
    Menu,
    TimelineContainer,
          
  },
  data(){
    return {
      showup: true,
      showdown: false
    }
  },
  computed: {
    pagein: function() {
      if(this.count >= 6){
        this.showdown = true;
      }else{
        this.showdown = false;
      }
      if(this.data.lokacijes.data == 0){
        this.count = 0;
        return this.data.lokacijes.data
      } else {
        return this.data.lokacijes.data
      };
    }
  }
  ,
  methods: {
    pageup: function() {
      this.count += 6;
    },
    pagedown: function() {
      if(this.count >= 6){
        
        this.count -= 6;
      }
    }
  },
  setup() {
    const { t } = useI18n({});  
    const naslov = t('apiN');
    const count = ref(0);
    const lokacije = computed(() => { 
      return `
    query lokacijes {
 lokacijes(pagination: {start: ${count.value}, limit: 6}) {
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
    `; });

    
    const { data } = useQuery({
      query: lokacije,
    });

   
    


    return { 
      data,
      count,
      
       };

  }
}
</script>

<style scoped>
.arrowscont {
   padding-top: 10%;
  position: relative;
  
}
.arrowpage {
  cursor: pointer;
  filter: brightness(100);
  position: absolute;
   bottom: 35%;
    z-index: 9000;
    height: 60px;
    
}
#arrowright {
  right: 0;
  padding-right: 3vw;
}
#arrowleft {
  left: 0;
  padding-right: 3vw;
  transform: rotate(180deg);
  
}

.timecontainer {
    position: relative;
        padding-top: 35vh;
        z-index: 1050;
}
@keyframes slide-up {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  100% {
    
    transform: translateY(0);
  }
}
.slide-up {
	animation: slide-up 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
#backtime {
    filter: brightness(0.8);
    position: fixed;
    object-fit: cover;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -50;
}
#logoTime{
    position: absolute;
    object-fit: cover;
    width: 300px;
    left: 0;
    margin: auto;
    padding-top: 8vh;
    right: 0;
}
#conter {
    height: 100%;
    width: 100%;
    position: relative;
}
@media (min-width: 576px) {
    #logoTime{
     padding-top: 5vh;
     }
     .arrowscont {
    padding-top: 0%;
    position: unset;
  }
}
@media (max-width: 1000px){
  
  .arrowpage {
    bottom: -115%;
    padding-block: 20px;
    height: 90px;
  }
  #arrowright, #arrowleft {
    padding-right: 21vw;
  }
}
</style>