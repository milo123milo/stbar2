<template>
    <div class="newsel">
        <a v-if="aitem" :href="'/article/' + aitem.id ">
        <div class="imgcont">
        <img class="newsimage" v-if="aitem" :src="store.baseUrl + aitem.attributes.VijestiProfilna.data.attributes.url" alt="">
        <div class="container-fluid p-0" style="height: fit-content;">
        <div id="newsdate" class="row g-0" v-if="aitem">{{ formatDate(aitem.attributes.createdAt) }}</div>
        <div id="newsnaslov" class="row g-0" v-if="aitem">{{ aitem.attributes['Vijesti' + $t('apiN')] }}</div>
        <div id="newscont" class="row g-0" v-if="aitem">{{ removeMarks(aitem.attributes['Vijesti' + $t('apiS')]) }}</div>
        </div>
        </div>
        
        <div id="endline"></div>
        </a>
    </div>
</template>
<script>
import store from '../store'
import ArticleComponent from './ArticleComponent.vue'
import { useI18n } from 'vue-i18n'
import removeMarkdown from "markdown-to-text";
export default {
  components: { 
      ArticleComponent,
      
      },
    name: "NewsElement",
    data: function(){
      return {
          store,
          
      }
  },
    props: {
        aitem: Object
    },
    methods: {
        formatDate(dateString) {
            const { t } = useI18n({});
            const date = new Date(dateString);
            return new Intl.DateTimeFormat(t('datelang'), {dateStyle: 'long'}).format(date);
        },
        removeMarks(contString) {
            const conte = contString
            return removeMarkdown(conte)
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
}
#newscont {
   display: -webkit-box;
   margin-top: 0.2vw;
   line-height: 1;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
   font-size: 1rem;
   color: rgb(4, 31, 48);
       font-weight: 600;
    font-family: 'Helvetica-Medium';
   text-align: left;
   
}
#newsnaslov {
        height: max-content;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
    line-height: 1.2;
    font-size: 1.5rem;
    color: rgb(4, 31, 48);
}
#newsdate {
    margin-top: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: 'Helvetica-Medium';
    color: #696969;
}
#endline {
    width: 100%;
    height: 2px;
    background-color: #E0E0E0;
}
.newsimage {
    width: 100%;
    height: 60%;
    object-fit: cover;
}
.newsel {
    height: 35vh;
    width: 100%;
    margin: 0;
    margin-block: 5px;
    
}
.newsel:hover {
    filter: contrast(0.85);
}
.imgcont {
    height: 35vh;
    width: 100%;
    
    
}
@media (min-width: 992px) {
        .newsel {
            margin-inline: 1vh;
            margin-block: 2.3vh;

        }
       
      
    }
</style>