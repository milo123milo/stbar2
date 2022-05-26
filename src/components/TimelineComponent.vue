<template>
    <div class="timelinecomponent">
        <a v-if="apiitem" :href="'/lokacije/' + apiitem.attributes.Pozicija">
        <img v-if="apiitem" :src="store.baseUrl + apiitem.attributes.Profilna.data.attributes.url" rel="preload" class="profileImg cardt" alt="">
        </a>
        <div v-if="apiitem" class="frtext carousel-caption p-0">{{apiitem.attributes[$t('apiN')]}}</div>

    </div>
</template>
<script>
import store from '../store'

export default {
    name: "timelinecomponent",
    data: function(){
      return {
          store,
          
      }
  },
    props: {
        apiitem: Object,
    }
}
</script>

<style scoped>
.frtext {
   display: -webkit-box;
   line-height: 1.6;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
   overflow: hidden;
   
    position: absolute;
    padding-inline: 10px !important;
    left: 8% !important;
    right: 0% !important;
    text-align: left;
    font-size: 1.5rem;
    filter: drop-shadow(-1px -1px 5px black);
}
.profileImg {
    object-fit: cover;
}
.profileImg:hover {
   filter: brightness(0.7);
   
}
.cardt {
    outline-offset: -10px;
    filter: drop-shadow(2px 4px 6px black);
    margin: 10px;
    background-color: white;
    border-style: solid;
    border-width: 8px;
    outline-color: white;
    /* outline: thick; */
    outline-style: solid;
    border-color: white;
    width: 100%;
    height: 25vh;

}


</style>