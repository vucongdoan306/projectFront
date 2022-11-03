<template>
    <div class="navigation__left" :style="{width: isCloseNav ? '52px': '178px'}">
        <div class="navigation__header">
            <div class="brn--5" :class="{'navigation__icon':isCloseNav}">
                <div class="icon" :class="{'icon__toggle--header': isCloseNav, 'dp--none': !isCloseNav}" @click="openNav(isCloseNav)"></div>
            </div>
            <div class="navigation__logo">
                <!-- <img src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
                    class="logo" :class="{'dp--none':isCloseNav}"/> -->
                <div class="box-icon-header" :class="{'dp--none':isCloseNav}">
                    <div class="icon-header"></div>
                    <div>QLNS</div>
                </div>
                
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
    emits: ["is-opennav"],
    setup() {
        return {listItemNav};
    },
    props: {
        /**
         * Biến xác định đóng mở Nav
         */
        isCloseNav: {
            type: Boolean,
            required: true,
        }
    },
    components:{
        BaseNavItem,
    },
    methods: {
        /**
         * Hàm thực hiện mở nav
         * @param {boolean} val biến điều kiện thu gọn Nav
         * Author: Khải Bùi (01/11/2022)
         */
        openNav(val){
            this.$emit('is-opennav',val);
        }
    },
    
}
</script>

<style lang="css">
    @import url(../../styles/base/nav.css);
</style>