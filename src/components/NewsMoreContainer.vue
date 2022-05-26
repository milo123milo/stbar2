<template>
    <div class="newsmorecontainer">
        <div class="container-fluid mainbox">
            <div class="row w-100  pads">
                 <div class="newsmoretitle">{{ $t('newsTitle') }}</div>
                 <div class="w-100"></div>
                <div class="col-lg slide-up">
                    <news v-if="btapiitem[0]"  v-bind:aitem="btapiitem[0]"></news>
                    
                </div>
                <div class="col-lg slide-up">
                                        <news v-if="btapiitem[1]" v-bind:aitem="btapiitem[1]"></news>

                </div>
                <div class="col-lg slide-up">
                                        <news v-if="btapiitem[2]" v-bind:aitem="btapiitem[2]"></news>

                </div>
                <div class="w-100"></div>
                <div class="col-lg slide-up">
                                        <news v-if="btapiitem[3]" v-bind:aitem="btapiitem[3]"></news>

                </div>
                <div  class="col-lg slide-up">
                                       <news v-if="btapiitem[4]" v-bind:aitem="btapiitem[4]"></news>

                </div>
                <div class="col-lg slide-up">
                                       <news v-if="btapiitem[5]" v-bind:aitem="btapiitem[5]"></news>

                </div>
            </div>

        </div>
    </div>
</template>

<script>

import News from '../components/News.vue'


export default {
     name: "newsmorecontainer",
     components: {
    News,
    
          
  },
  props: {
      btapiitem: Array
  }
  
}
</script>
<style>
.bm-burger-button {
    left: 27px !important;
}
@media (min-width: 576px) { 
    .bm-burger-button {
        left: 37px !important;
    }
}
</style>
<style scoped>
.pads {
   --bs-gutter-x: 0rem !important;
}
.newsmoretitle {
    text-align: start;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 00;
    font-size: 2rem;
    line-height: 120%;
    color: #041F30;
    padding-top: 10vh;
        padding-bottom: 4vh;
       

}
#logoTime{
    
    position: absolute;
    object-fit: cover;
    width: 300px;
    left: 0;
    margin: auto;
    top: 10vh;
    right: 0;
}
.mainbox {
    width: 95%;
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
@media (min-width: 576px) {
    #logoTime{
     width: 400px;
     top: 6vh;
     }
     .mainbox {
         width: 80%;
     }
     .newsmoretitle {
         margin-inline: 0vw;
         text-align: center;
         font-size: 3rem;
         padding-top: 0vh;
     }
     .pads {
         padding: 0% !important;
         --bs-gutter-x: 1.5rem !important;
     }
}
</style>

