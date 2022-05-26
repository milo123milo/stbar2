<template>
    <div class="timelinecontainer">
        <div class="container-fluid mainbox">
            <div class="row w-100   ">
                 <img id="logoTime" class="slide-up col" src="@/assets/logoTimeline.svg" rel="preload" alt="">
                 <div class="w-100"></div>
                <div class="col-lg slide-up">
                    
                    <timeline-component v-bind:apiitem="btapiitem[0]"></timeline-component>
                </div>
                <div class="col-lg slide-up">
                    <timeline-component v-bind:apiitem="btapiitem[1]"></timeline-component>
                </div>
                <div class="col-lg slide-up">
                    <timeline-component v-bind:apiitem="btapiitem[2]"></timeline-component>
                </div>
                <div class="w-100"></div>
                <div class="col-lg slide-up">
                    <timeline-component v-bind:apiitem="btapiitem[3]"></timeline-component>
                </div>
                <div  class="col-lg slide-up">
                    <timeline-component v-bind:apiitem="btapiitem[4]"></timeline-component>
                </div>
                <div class="col-lg slide-up">
                    <timeline-component v-bind:apiitem="btapiitem[5]"></timeline-component>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import TimelineComponent from "./TimelineComponent.vue"


export default {
     name: "timelinecontainer",
     components: {
    
    TimelineComponent,
          
  },
  props: {
      btapiitem: Array
  }
  
}
</script>

<style scoped>
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
}
</style>

