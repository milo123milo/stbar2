<template>
    <Slide class="indeks" >
        <a id="home" href="/">
        <span>{{$t('home')}}</span>
      </a>
      <a id="bartimeline" href="../bartimeline/">
        <span>BarTimeline</span>
      </a>
      <a id="news" href="../news/">
        <span>{{ $t('news') }}</span>
      </a>
      <a id="oldtown" href="../oldtown/">
        <span>{{ $t('oldtown') }}</span>
      </a>
      <a id="curator" href="../curator/">
        <span>{{ $t('curator') }}</span>
      </a>
      <a id="contact"  href="../contact/">
        <span>{{ $t('contact') }}</span>
      </a>

      <a id="thanks" href="../thanks/">
        <span>{{ $t('zah') }}</span>
      </a>

     <a id="oldpic" href="../article/8">
        <span>{{ $t('oldpic') }}</span>
      </a>
    </Slide>
    
</template>

<script>
import { Slide } from 'vue3-burger-menu'
import Menu from "../components/Menu.vue"

export default {
    name:"Menu",
    components: {
    Slide,
  }
}
</script>
<style scoped>
.indeks {
 
  z-index: 10000;
}
.bm-menu {
  z-index: 5000 !important;
}
.bm-burger-button {
    

   z-index: 4000 !important;
}
#thanks {
  text-align: left;
  }

</style>
