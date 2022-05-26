<template>
    <div class="articlecomponent">
        <a  :href="'/article/'">
        <img  rel="preload" class="profileImg cardt" alt="">
        </a>

    </div>
</template>
<script>
import store from '../store'

export default {
    name: "articlecomponent",
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
.profileImg {
    object-fit: cover;
}
.profileImg:hover {
   filter: brightness(0.7);
   
}
.cardt {
    margin: 10px;
    background-color: white;
    border-style: solid;
    border-width: 7px;
    border-color: white;
    width: 100%;
    height: 25vh;
}


</style>