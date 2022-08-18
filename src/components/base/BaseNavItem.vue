<template>
    <router-link :to="routerItem" class="navigation__item navigation__item--selected tooltip">
        <div class="navigation__icon">
            <div class="icon" :class="classIcon"></div>
        </div>
        <div class="navigation__item--title pdl--10" :class="{'dp--none': isCloseNav}" >{{text}}</div>
        <span :class="{'tooltiptext':text}">{{text}}</span>
    </router-link>
</template>

<script>
export default {
    props:{
        /**
         * Class icon nav
         */
        classIcon:{
            type: String,
            required: true,
        },
        /**
         * Text item nav
         */
        text:{
            type: String,
            required: true,
        },
        /**
         * Đường dẫn router
         */
        routerItem:{
            type: String,
            required: true,
        },
        /**
         * Prop đóng mở nav
         */
        isCloseNav: {
            type: Boolean,
            required: true,
        }
    }
}
</script>

<style lang="css">
    
</style>