<template>

<div>
    <Menu></Menu>
    <div class="boxer">
    <div class="zahv" v-if="data" >
        {{  data.zahvlanice.data.attributes['zahvalnice' + $t('apiZ')]  }}
    </div>
    <img v-if="data" :src="'https://starigradbar.com/strapi' + data.zahvlanice.data.attributes.image.data.attributes.url" alt="">
</div>
    <div>
        
    </div>
    

</div>

</template>

<style>
.zahv {
    width: 80%;
    font-size: 2rem;
}
.boxer {
    display: flex;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
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



export default {
  name: 'thanks',
  components: {
    Menu,
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