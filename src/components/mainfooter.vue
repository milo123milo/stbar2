<template>
    <div class="mainfooter">
     <div class="container-fluid fot">
         <div class="row g-0">
             
            <div class="col-md-9 foottext">Copyright 2022 © Turistička Organizacija Bar | All Rights Reserved | 
               <a class="dvlink" href="http://diversemne.me/"> Developed by Diverse Solutions </a>
                
                </div>

             <div class="col-md-3 d-flex justify-content-center my-auto align-self-center">
                 <img class="toLogo" src="@/assets/toBarLogo.png" alt="">
             </div>
            
         </div>
         
     </div>
		
    </div>
</template>
<script>
export default {
    name: "mainfooter",
}
</script>
<style scoped>
.dvlink {
    color: #c7cfdb;
}
.foottext {
    color: white;
    font-family: 'Helvetica-Medium';
    font-size:0.9rem;
    padding-top: 32px;
    text-align: center;
    padding-left: 0;
}
.toLogo {
    padding-top: 25px;
    object-fit: cover;
    height: 100%;
    width: 40px;
}
.fot {
    position: absolute;
    background-color: rgb(4, 31, 48);
    width: 100%;
    height: 160px;
}
@media (min-width: 768px) { 
    .foottext {
        font-size: 0.9rem;
        text-align: left;
        padding-left: 90px;
    }
    .fot {
        height: 80px;
    }
    .toLogo {
        padding-top: 20px
    }
 }
</style>
