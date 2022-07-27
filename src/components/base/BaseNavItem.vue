<template>
    <router-link :to="routerItem"  class="navigation__item navigation__item--selected">
        <div class="navigation__icon">
            <div class="icon" :class="classIcon"></div>
        </div>
        <div class="navigation__item--title pdl--10" :class="{'dp--none': isCloseNav}" :title="text">{{text}}</div>
    </router-link>
</template>

<script>
export default {
    props:{

            classIcon:{
                type: String,
                required: true,
            },
            text:{
                type: String,
                required: true,
            },
            routerItem:{
                type: String,
                required: true,
            },
            isCloseNav: {
                type: Boolean,
                required: true,
            }


    }
}
</script>

<style lang="css">
    
</style>