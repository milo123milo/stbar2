<template>
    <div  class="oldtowncontent">
        <div   class="quote">
            
            <img class="marks left"  src="@/assets/quote.png" alt="">
            <img class="marks right" src="@/assets/quote.png" alt="">
            <div class="box textup">
            <div  v-if="data" id="textbox" class="text ">
                {{ data.stariGrad.data.attributes.Citat[$t('apiS')] }}
                <div v-if="data" class="autor">
                    {{ data.stariGrad.data.attributes.Citat[$t('apiAut')] }}
                </div>
            </div>
            
            <div  v-else class="text">
              ****
            </div>
            </div>
        </div>
        <div class="breaker"></div>
        <div class="contents">
            <div class="c">
                <div v-if="data" class="naslov">
                    {{ data.stariGrad.data.attributes.Stavka1[$t('apiN')]}}
                </div>
                <Markdown v-if="data" class="sadrzaj" :source="data.stariGrad.data.attributes.Stavka1[$t('apiS')]"/>

                <div v-if="data" class="naslov">
                    {{ data.stariGrad.data.attributes.Stavka2[$t('apiN')] }}
                </div>
                <Markdown v-if="data" class="sadrzaj" :source="data.stariGrad.data.attributes.Stavka2[$t('apiS')]"/>

                <div v-if="data" class="naslov">
                    {{ data.stariGrad.data.attributes.Stavka3[$t('apiN')]}}
                </div>
                <Markdown v-if="data" class="sadrzaj" :source="data.stariGrad.data.attributes.Stavka3[$t('apiS')]"/>

            </div>
           
        </div>
    </div>
</template>

<style scoped>

.box {
top: 32%;
    width: 40%;
    position: absolute;
}
@keyframes opas{
   0% {
   opacity: 0;
   }
  100% {
opacity: 1;
}
   }

.opas {
    animation: opas 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.sadrzaj {
    font-family: 'Helvetica-Lt';
}
.naslov {
    margin-top: 5%;
    font-size: 1.5rem;
    padding-bottom: 10px;
}
.contents {
    animation-delay: 0.3s;
    padding-bottom: 50px;
    display: flex;
    position: absolute;
    margin-top: 5%;
    justify-content: center;
}

.c {
    width: 75%;
    text-align: left;
}
@keyframes line{
   0% {
    width: 0;
  }
  100% {
    width: 80%;
  }
    
}
.line {
    animation: line 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.breaker {
    transform: translateX(-50%);
    position: absolute;
    margin-top: 4.5%;
   
    left: 50%;
    opacity: 0.1;
    width: 70%;
    background-color: #041F30;
    height: 2px;
}
@keyframes textup{
   0% {
    opacity: 0;
    transform: translateY(50px) ;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
    
}
.textup {
    animation: textup 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes quoteL{
   0% {
    transform: translateX(50px) ;
  }
  100% {
    transform: translateX(0px);
  }
    
}
.quoteL {
    animation: quoteL 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes quoteR{
   0% {
    transform: translateX(-50px) rotate(180deg);;
  }
  100% {
    transform: translateX(0px) rotate(180deg);;
  }
    
}
.quoteR {
    animation: quoteR 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.autor {
    font-style: normal;
    font-family: 'Helvetica';
    padding-top: 10px;
    font-size: 1.3rem;
}
.text {
    font-weight: bold;
    animation-delay: 0.1s;
    font-family: "Helvetica-Lt";
    color: #041F30;
    top: 32%;
       /* margin-left: 54px; */
    position: absolute;
    /* width: 40%; */
    line-height: 1.2;
    text-align: left;
    font-size: 1.3rem;
    font-style: italic;
}
.right {
    transform: rotate(180deg);
    margin-top: 243px !important;
}
.left {

}
.marks {
    margin-inline: 17%;
    margin-top: 80px;
    object-fit: cover;
    width: fit-content;
    height: 80px;
}
.quote {
    display: flex;
    position: relative;
    justify-content: center;
}
.oldtowncontent {
    background-color: rgb(255, 255, 255);
    width: 100%;
    
    height: fit-content;
   
}

@font-face {
  font-family: "Helvetica-Md";
  src: local("Helvetica-md"),
   url(@/assets/HelveticaNowDisplay-Md.otf) format("opentype");
}
@font-face {
  font-family: "Helvetica-Lt";
  src: local("Helvetica-lt"),
   url(@/assets/HelveticaNowDisplay-Lt.otf) format("opentype");
}
@media (max-width: 992px) { 
    .text {
        font-size: 0.8rem;
    }
    .box {
        width: 70%;
    }
    .autor {
        font-size: 1rem;
    }
    
}
</style>
<script>
import { useI18n } from 'vue-i18n'
import { useQuery } from 'villus';

import Markdown from 'vue3-markdown-it';

export default {
    name: "oldtowncontent",
    components: {
    
    Markdown
  },
    setup() {
    const { t } = useI18n({});
    
    const naslov = t('apiN');
    const sadrzaj = t('apiS');
    const autor = t('apiAut');
    
    const stbar = `
    query{
  stariGrad {
    data {
      attributes {
        Citat {
          ${autor}
          ${sadrzaj}
        }
        Stavka1 {
          ${naslov}
          ${sadrzaj}
        }
        Stavka2 {
          ${naslov}
          ${sadrzaj}
        }
        Stavka3 {
          ${naslov}
          ${sadrzaj}
        }
        
      }
    }
  }
}
    `;

    const { data } = useQuery({
      query: stbar,
    });

    return { data };

    

  },
    mounted() {
        const { t } = useI18n({});
 if(t('curLang') == 'en') {
     const stari = document.body.querySelector('.stari');
     stari.classList.add('starien');

     const grad = document.body.querySelector('.grad');
     grad.classList.add('graden');
 }
        
    const observer1 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('quoteL');
    }
  });
});
observer1.observe(document.querySelector('.left'));

const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('quoteR');
    }
  });
});
observer2.observe(document.querySelector('.right'));

const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('textup');
    }
  });
});
observer3.observe(document.querySelector('.text'));

const observer4 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('line');
    }
  });
});
observer4.observe(document.querySelector('.breaker'));

const observer5 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('opas');
    }
  });
});
observer5.observe(document.querySelector('.contents'));

const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.text');

    if (entry.isIntersecting) {
      square.classList.add('textup');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('textup');
  });
});

observer6.observe(document.querySelector('.box'));



 
        
    },
    
}
</script>