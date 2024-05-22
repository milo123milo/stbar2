<template>

<div>
    <Menu></Menu>
    <div class="boxer">
    
       <!-- {{  data.zahvlanice.data.attributes['zahvalnice' + $t('apiZ')]  }} -->
        <keep-alive>
       <Markdown class="zahv" id="textcontent" v-if="data" :source="data.zahvlanice.data.attributes['zahvalnice' + $t('apiZ')]" />
        </keep-alive>
    
    <img class="logoim" v-if="data" :src="'https://starigradbar.com/strapi' + data.zahvlanice.data.attributes.image.data.attributes.url" alt="">
</div>
    <div>
        
    </div>
    

</div>

</template>

<style>
.logoim {
  margin-bottom: 30px;
    margin-top: 30px;
    width: 300px;
}
.zahv {
    width: 80%;
    font-size: 2rem;
}
.boxer {
    display: flex;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.bm-burger-bars {
  background-color: #092536 !important;
}
</style>
<style scoped>

#backtime {
    object-fit: cover;
    height: 110vh;
    width: 100%;
    margin-top: -80px;
    filter: blur(2px);
    opacity: 0.04;
}
</style>

<script>
import {useRoute} from "vue-router";
import Menu from "../components/Menu.vue"
import { useI18n } from 'vue-i18n'
import { useQuery } from 'villus';
import { ref, computed } from 'vue'
import Markdown from 'vue3-markdown-it';



export default {
  name: 'thanks',
  components: {
    Menu,
    Markdown
  }, 
  setup() {
    const { t } = useI18n({});
    const route = useRoute();
    const id = route.params.id;
    const zahv = "zahvalnice" + t('apiZ');
    
    const zahvalnice = computed(() => { 
      return `
      query zahvlanices {
  zahvlanice {
    data {
      attributes {
        ${zahv}, 
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `; });

    const { data } = useQuery({
      query: zahvalnice,
    });

    return { data };

    

  }
}
</script>