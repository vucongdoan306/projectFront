<template>
    <div class="relative" :data-title="titleButton" :class="{'tooltip__button':titleButton}">
        <button
        class="button" 
        ref="button" 
        :class="classButton" 
        :tabindex="tabIndex" 
        :data_title="titleButton">
        {{textButton}}
        <div class="box__icon" v-if="showIcon">
            <div class="icon" :class="classIcon"></div>
        </div>
        </button>
    </div>
</template>

<script>
export default {
    props:{

        /**
         * Text của button
         */
        textButton: {
            type: String,
            default: "",
            required: false,

        },

        /**
         * Class của button
         */
        classButton:{
            type: String,
            default: "",
            required: false,
        },

        /** 
         * Tabindex của button
        */
        tabIndex:{
            type: Number,
            default: 0, 
        },

        /**
         * Title của button
         */
        titleButton: {
            type: String,
            default: "",
            required: false,
        },

        /**
         * Prop xác định button có icon không
         */
        showIcon:{
            type: Boolean,
            required: false,
            default: false,
        },

        /**
         * Class của icon
         */
        classIcon:{
            type: String,
            required: false,
            default: "",
        }

    },
    methods: {
        /**
         * Hàm thực hiện đặt focus lại vào button
         * Author: Khải Bùi
         */
        setFocus(){
            this.$refs.button.focus();
        }
    },
}
</script>

<style lang="css">
    
</style>