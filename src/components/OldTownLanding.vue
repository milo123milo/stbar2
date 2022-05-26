<template>
    <div class="oldtownlanding">

        <img rel="preload" class="background" src="@/assets/backtwn.jpg" alt="">

        <div class="logo">
            <div class="line top line-wid"></div>
            <div class="line bot line-wid"></div>
            <div class="stari left-to-right">{{ $t('old') }}</div>
            <div class="grad bot-to-top">{{ $t('town') }}</div>
            <div class="bar right-to-left">{{ $t('bar') }}</div>
        </div>

        <div class="arwcont top-to-bot">
        <img class="arrow" @click="$emit('autosc')" src="@/assets/arwdwn.png">
        </div>

    </div>
</template>
<style scoped>
.graden {
        margin-top: 5px;
    }
.starien {
    z-index: 1;
    margin-top: -26px;

    
}
.bot {
    position: absolute;
    bottom: 66px;
}
.top {
    position: absolute;
    right: -30px;
    top: 20px;
}
.line {
    background-color: #ffffff;
    height: 2px;
    width: 369px;
}
.bar {
    filter: drop-shadow(-1px -1px 4px rgba(36, 36, 36, 0.586));
        margin-left: -77px;
    margin-top: 52px;
    font-family: 'Helvetica-Md';
    font-size: 10rem;
    font-style: italic;
    color: transparent;
    -webkit-text-stroke: 2px #ffffff;
    letter-spacing: 5px;
}
.grad {
    font-family: 'Helvetica-Md';
    font-size: 10rem;
    color: white;
}
.stari {
    filter: drop-shadow(3px 4px 2px rgba(36, 36, 36, 0.586));
   margin-right: -118px;
    margin-top: -72px;
    font-family: 'Helvetica-Md';
    font-size: 10rem;
    font-style: italic;
    color: transparent;
    -webkit-text-stroke: 2px #ffffff;
    letter-spacing: 5px;
}
@keyframes line-wid {
   0% {
       width: 0;
  }
  100% {
       width: 369px;
  }
    
}
.line-wid {
    animation: line-wid 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes bot-to-top {
   0% {
       opacity: 0;
    transform: translateY(50px);
  }
  100% {
      opacity: 1;
    transform: translateY(0);
  }
    
}
.bot-to-top {
    animation: bot-to-top 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes top-to-bot {
   0% {
       opacity: 0;
    transform: translateY(-50px);
  }
  100% {
      opacity: 1;
    transform: translateY(0);
  }
    
}
.top-to-bot {
    animation: top-to-bot 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes left-to-right {
   0% {
       opacity: 0;
    transform: translateX(-150px);
  }
  100% {
      opacity: 1;
    transform: translateX(0);
  }
    
}
.left-to-right {
    animation: left-to-right 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes right-to-left {
   0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
    
}
.right-to-left {
    animation: right-to-left 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@font-face {
  font-family: "Helvetica-Md";
  src: local("Helvetica-md"),
   url(@/assets/HelveticaNowDisplay-Md.otf) format("opentype");
}
.logo {
    display: flex;
    left: 50%;
    transform: translateX(-53%);
    position: absolute;
    top: 20vh;
}
.arwcont {
    cursor: pointer;
    animation-delay: 0.1s;
    position: relative;
    display: flex;
    justify-content: center;
    
}
.arrow {
    width: 70px;
    height: 70px;
    bottom: 0;
    margin-left: 6px;
    margin-bottom: 40px;
    position: absolute;
   
}
.background {
    filter: brightness(0.9);
    position: relative;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
}
.oldtownlanding {
    background-color: #010e16;
}
@media (max-width: 992px) { 
    .graden {
        margin-top: 5px;
    }
    .starien {
       margin-right: -44px !important;
}
    .logo {
        transform: translateX(-52%);
    }
    .stari {
        z-index: 1;
    filter: drop-shadow(-5px -1px 3px black);
       margin-right: -70px;
    margin-top: -31px;
    font-size: 4rem;
    -webkit-text-stroke: 1px #ffffff;
    }
    .grad {
        font-size: 4rem;
        
    }
    .bar {
           margin-left: -29px;
    margin-top: 29px;
    filter: drop-shadow(-2px -3px 2px black);
    font-size: 4rem;
    -webkit-text-stroke: 1px #ffffff;
    }
    .line {
        width: 142px;
    }
    @keyframes line-wid {
        0% {
            width: 0;
        }
        100% {
            width: 142px;
        }
    
    }
    .top {
        right: -19px;
        top: 7px;
    }
    .bot {
        bottom: 26px;
    }
}
</style>
<script>
export default {
    name: "oldtownlanding",
    emits: ['autosc'],
    
    
}
</script>