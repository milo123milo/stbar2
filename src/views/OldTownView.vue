<template>
<div>
    <Menu></Menu>
    <old-town-landing @autosc="scrollnext" class="land"></old-town-landing>
    <old-town-content></old-town-content>
</div>
</template>

<style scoped>
.land {
    overflow: hidden;
}
</style>
<script>
import Menu from "../components/Menu.vue"
import OldTownContent from '../components/OldTownContent.vue'

import OldTownLanding from '../components/OldTownLanding.vue'
export default {
    name: "oldtown",
    methods: {
        scrollnext: function() {
            window.scrollTo({ top:window.innerHeight, behavior: 'smooth'});
            console.log("skrol");
        }
    },
    components: {
        OldTownLanding,
        Menu,
        OldTownContent
        
    }
}
</script>