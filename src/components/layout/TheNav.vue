<template>
    <div class="navigation__left" :style="{width: isCloseNav ? '52px': '178px'}">
        <div class="navigation__header">
            <div class="navigation__icon brn--5" :class="{'pdr--10':!isCloseNav}">
                <div class="icon" :class="{'icon__toggle--header': isCloseNav, 'icon__toggle': !isCloseNav}" @click="openNav(isCloseNav)"></div>
            </div>
            <div class="navigation__logo">
                <img src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
                    class="logo" :class="{'dp--none':isCloseNav}">
            </div>
        </div>
        <div class="navigation__menu">
            <BaseNavItem v-for="(navItem,index) in listItemNav" :key="index" :classIcon="navItem.classIcon" :routerItem="navItem.routerItem" :text="navItem.text" :isCloseNav="isCloseNav"/>
        </div>
    </div>
</template>

<script>
import {listItemNav} from "../../JS/array.js";
import BaseNavItem from "../base/BaseNavItem.vue";
export default {
    setup() {
        return {listItemNav};
    },
    props: {
        isCloseNav: {
            type: Boolean,
            required: true,
        }
    },
    components:{
        BaseNavItem,
    },
    methods: {
        openNav(val){
            this.$emit('is-opennav',val);
        }
    },
    
}
</script>

<style lang="css">
    @import url(../../styles/base/nav.css);


</style>