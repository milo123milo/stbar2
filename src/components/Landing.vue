<template>

<div>
<lang-btn id="btnSec" class=""></lang-btn>
<div class="container-fluid px-0">
        <div class="herobox ">
        <img class="line slide-right" src="@/assets/line.svg" alt="">
        <div id="landtxbox" class="slide-later">
            <div id="landtext">{{ $t("landTitle.frs")}}<br>{{ $t("landTitle.sec")}}</div>
        </div>
        </div>
  <div class="row no-padding ">
      
    <div class="col-2 cuscol1 d-none d-md-block  back1 wid1 ">
        
    
         <figure class="fig">
            
         <img class="imgss figimg" src="@/assets/banner.png" rel="preload" alt="">
          <lang-btn class="btnn langBTN figshd"></lang-btn>
         
         
        </figure>
     
     
     
     
    </div>
    
    <div id="bbar" class="col-10 cuscol2  back2 wid1 ">
        <figure class="fig">
            
      <img v-if="lokfhome" src="https://i.ibb.co/47B6NNv/backgroudn-MAin.jpg" rel="preload" class="imgss figimg" alt="">
      <div class="shad figshd"></div>
      <a class="figshd gplay" href="https://play.google.com/store/apps/details?id=com.diverse.bartimeline">
      <img class="" src="@/assets/gplay.svg" alt="">
      </a>
      
      </figure>
    </div>
    <div class="w-100"></div>
  
    <div class="col back3 cuscol1 wid2">
              <div class="row w-100 center-col">
    <div class="col ">
        <a href="">
            <img class="icons" src="@/assets/1.svg" alt="">
        </a>
     
    </div>
    <div class="col ">
        <a href="">
            <img class="icons" src="@/assets/2.svg" alt="">
        </a>
    </div>
    <div class="col ">
      <a href="">
            <img class="icons" src="@/assets/3.svg" alt="">
        </a>
    </div>
    <div class="col ">
      <a href="">
            <img class="icons" src="@/assets/4.svg" alt="">
        </a>
    </div>
  </div>
       
 
    </div>
    <div class="col-10 back4 cuscol2 wid2">
      <land-slider  v-if="lokfhome" v-bind:lokfland="lokfhome.lokacijes.data"></land-slider>
    </div>
  </div>
</div>
  
</div>

</template>

<script>
import LandSlider from './LandSlider.vue'
import LangBtn from './LangBtn.vue'


export default {
    props: {
        lokfhome: Object
    },
    
    name: 'Landing',
    components: {
        LandSlider,
        LangBtn
    }
 
}
</script>


<style scoped>
.langBTN {
    position: relative !important;
        left: 70%;
    /* right: -224px; */
    width: 10%;
}
#btnSec {
    display: none;
    right: 44px;
    top: 35px;
    position: absolute;
}
.gplay {
    position: absolute;
    right: 3vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    bottom: 26.5%;
}
.langbtn {
    top: 36px;
    position: relative;
    left: 30%;
}
.fig {
  display: grid;
}

.figimg, .figshd {
  grid-area: 1 / 1;
}
@keyframes slide-right {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    
    transform: translateX(0);
  }
}
@keyframes slide-later {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
}




@font-face {
  font-family: "Helvetica";
  src: local("Helvetica"),
   url(@/assets/HelveticaNowDisplay-Bd.otf) format("opentype");
}
#landtxbox {
    animation-delay: 0.4s;
    padding-inline: 3.1vh;
    width: 90vw;

}
#landtext {
    text-shadow: rgba(17, 17, 17, 0.62) 1px 0 10px;
    text-align: start;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 11vh;
    line-height: 122.5%;
/* or 115px */
    color: #FFFFFF;
    letter-spacing: 0.04em;
}
.herobox {
       justify-content: flex-start;
    display: flex;
    width: 100%;
    
    bottom: 27vh;
    position: absolute;
    padding-inline: 5vh;
}
.line {
      
    object-fit: cover;
    filter: drop-shadow(3px 5px 2px rgba(31, 31, 31, 0.524));
    padding-block: 2vh;
    width: 1.5vh;
    height: auto;
    
}
.slide-right {
	animation: slide-right 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.slide-later {
	animation: slide-later 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}




.icons {
    height: 5.5vh;
    width: 5.5vh;
}
.center-col {
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
.iconsAll {
    float: none;
    margin: 0 auto;
}
.imgss {
    object-fit: cover;
    
    width: 100%;
    height: 75vh;
}
.row {
  --bs-gutter-x: 0rem !important;
}
.back1 {
    background:  linear-gradient(33.92deg, #766411 -49.39%, #AE9935 67.42%);
   
}
.shad, .overlay {
    grid-area: 1 / 1;
    height: 100%;
    width: 100%;
    
   
}

.back2 {
    background-color: rgb(156, 156, 156);
    
}
.back3 {
    background-color: rgb(255, 255, 255);
   
}
.back4 {
    background-color: rgb(26, 22, 31);
    
}
.wid1 {
    height: 75vh;
}
.wid2 {
    height: 25vh;
    
}

.cuscol1 {
    
    width: 20%;
}
.cuscol2 {
    width: 80%;
}
@media(min-width: 1300px){
   
    #landtext {
        
        
      /*  font-size: 11vh;*/
    }
    
}
@media(max-width: 516px){
    .cuscol1 {
        width: 1%;
    }
    
}

@media(max-width: 768px){
    #btnSec {
       display: block;
    width: 10%;
    height: 10vh;
    }
    .langbtn {
        left: 86%
    }
    .gplay {
        background-color: rgba(0, 0, 0, 0.11);
    }
    
    .shad {
        background: linear-gradient(0deg, rgba(17, 16, 1, 0.758) 0%, rgba(0,212,255,0) 100%);
    }
   .herobox {
       padding-inline: 3vh;
       bottom: 25%;
    }
    #landtext {
        padding-block: 1vh;
        text-shadow: rgb(0, 0, 0)10px;
        
        
    }
    #bbar {
        width: 100%;
    }
}

     
@media(max-height: 600px){
    .herobox {
        bottom: 25%;
    }
}

@media(max-width: 1300px) and (min-width: 1000px){
    .langbtn {
        
    }
    .herobox {
     
    padding-inline: 3vh;
}
   .cuscol1 {
    width: 25%;
}
.cuscol2 {
    width: 75%;
}
}
@media(max-width: 1000px) and (min-width: 516px){
    .langbtn {
         
        
        
    }
   .cuscol1 {
    width: 35%;
}
.cuscol2 {
    width: 65%;
}
}
@media (max-width: 416px) and (min-height: 450px){
 #landtext {
    
    font-size: 7vh !important;
    
}
.line {
    width: 1.2vh;
}
}
</style>
