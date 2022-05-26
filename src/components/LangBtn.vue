<template>
 <div class="dropdown langbt">
  <button class="dropdown-toggle btnstyle fontst" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{ $t("curLang") }}
  </button>
  <div class="dropdown-menu dropdown-menu-right boxstyle" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item elemnt fontst" :href="nxlang">{{ $t("nextLang")}}</a>
    
    
  </div>
</div>
</template>
<script>
export default {
    data: function(){
      return {
          nxlang: "/" + this.$t("nextLang") + "/"
          
      }
  }
}

</script>
<style scoped>
@font-face {
  font-family: "Helvetica-Light";
  src: local("Helvetica-Light"),
   url(@/assets/HelveticaNowDisplay-Lt.otf) format("opentype");
}
.langbt {
    position: absolute;
  
}
.langBTN {
        left: 70%;
    /* right: -224px; */
    width: 10%;
}
.btnstyle {
    background: transparent !important;
    border: transparent !important;
    color: white;

}
.boxstyle {
    transform: translate3d(-15%, 15px, 0px) !important;
    min-width: 3rem;
    background-color: transparent !important;
    border: transparent !important;
    color: transparent !important;
    border-radius: 0% !important;
}
.elemnt {
    color: white;
    margin-top: 0.7vh;
    padding-block: 0rem !important;
    
}
.elemnt:hover {
    
    background-color: #ffffff4f !important;
}
.fontst {
    font-family: 'Helvetica-Light';
    font-size: 1.3rem;
}

</style>
