<template>
<div class="relative">
    <div class="input" :data-title="titleInput" :class="{classFather:true,'tooltip__input':titleInput}">
        <input :type="typeInput" 
        :placeholder="placeholderInput" 
        :class="classInput" 
        :name="nameInput" 
        :id="idInput" 
        :value="modelValue"
        @blur="checkEmpty()"
        @input="updateInput"
        :tabindex="tabIndex"
        :maxlength="maxLength"
        ref="focus"     
        >

        <div class="icon input__icon" :class="classInputIcon" v-if="classInputIcon"></div>
    </div>
</div>
</template>

<script>

export default {
    emits: ["check-empty","update:modelValue"],
    props:{

        /**
         *  Prop lưu class loại input
         */
        typeInput: {
            type: String,
            required: true,
        },

        /**
         * Prop lưu placeholder của input
         */
        placeholderInput: {
            type: String,
            required: true,
        },
        
        /**
         * Prop lưu class của input
         */
        classInput: {
            type: [String,Object],
            required: false,
        },
        
        /**
         * Prop lưu id của input
         */
        idInput: {
            type: String,
        },

        /**
         * Prop lưu name của input
         */
        nameInput:{
            type: String,
        },

        /**
         * Prop xác định icon
         */
        classInputIcon:{
            type: String,
        },

        /**
         * Prop lưu class của thẻ div ngoài
         */
        classFather: {
            type: String,
        },

        /**
         * Prop lưu title của input
         */
        titleInput:{
            type: String,
        },

        /**
         * Biến model
         */
        modelValue: {
            type: [String,Object,Array,Number],
        },

        /**
         * Prop lưu giá trị tab index
         */
        tabIndex:{
            type: Number,
        },

        /**
         * Max length của input
         */
        maxLength:{
            type: Number,
            required: false,
        }


    },
    methods: {
        /**
         * Hàm thực hiện binding 2 chiều update lại data trong input
         * Author: Công Đoàn (25/07/2022)
         */
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },

        /**
         * Hàm kiểm tra input rỗng
         * Author: Công Đoàn (25/07/2022)
         */
        checkEmpty(){ 
            this.$emit('check-empty');

        },
        /**
         * Hàm focus vào ô input
         * Author: Công Đoàn (25/07/2022)
         */
        setFocus(){
            this.$refs.focus.focus();
        }
    },
    
}
</script>

<style lang="css">
    
</style>