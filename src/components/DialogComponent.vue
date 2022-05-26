<template>
  <div class="dialog">
    <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
      
          <svg class="xbtn" @click="showModal = false" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
        <mdi-close></mdi-close>
      
      
      <div class="modal__content">
        
             <keep-alive>
       <Markdown class="marktext" :source="content" />
        </keep-alive>
          
        
      </div>
    </vue-final-modal>
    <div class="container-fluid p-0 conte">
        <div class="">
            
                <svg class="arw" xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
            <path d="M7 2.10024e-05H14L7 7.00004L-2.10024e-05 2.10024e-05H7Z" fill="#092536"/>
        </svg>
            
            
                <v-button class="openbtn" @click="showModal = true">{{ btnname }}</v-button>
           
    
    </div>
    </div>
  </div>
</template>
<style>

</style>
<style scoped>
.marktext {
    padding-inline: 2vw;
    text-align: start;
}
.dialog {
   
    background-color: #fff;
    margin-bottom: 25px;
}
.arw {
    position: relative;
    margin-right: 10px;
    margin-bottom: 7px;
}
.conte {
   /* width: 50%; */
       background-color: #fff;

   margin-left: 18%;
    width: 170%;
   text-align: start;
   cursor: pointer;
}
.conte:hover {
    filter: opacity(0.6);
}
.openbtn {
    font-family: 'Helvetica-Light';
    font-size: 1rem;
    color: #092536;
}
.xbtn {
    cursor: pointer;
    position: absolute;
    width: 42px;
    margin-top: 1.5%;
    height: 15px;
    top: 0;
    right: 0;
}

::v-deep .modal-container {
  

  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  z-index: 2;
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  max-height: 80%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {

  margin-top: 4%;
  flex-grow: 1;
  overflow-y: auto;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
@media (min-width: 992px) { 
    ::v-deep .modal-content {
         width: 40%;
    }
 }
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import Markdown from 'vue3-markdown-it';


export default {
  name: "dialogcomponent",
  props: {
      content: String,
      btnname: String
  },
  data: () => ({
    showModal: false
  }),
  components: {
    VueFinalModal,
    ModalsContainer,
    Markdown
  }
}
</script>