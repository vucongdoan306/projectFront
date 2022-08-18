<template>
    <button class="page__index" :class="{'page--selected':pageSelected}" :value="pageIndex">
        {{pageTitle}}
    </button>
</template>

<script>
export default {
    props:{

        /**
         * Prop lưu chỉ số của page
         */
        pageIndex:{
            type: [Number,String],
            required: false,
        },

        /**
         * Prop set class selected cho page
         */
        pageSelected:{
            type: Boolean,
            required: false,
            default: false,
        },

        /**
         * Prop set title cho page index
         */
        pageTitle:{
            type: [Number,String],
            required: false,
        }
    }
    
}
</script>

<style lang="css">
    
</style>