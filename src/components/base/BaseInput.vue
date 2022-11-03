<template>
<!-- <base-toast
ref="toast"
>
</base-toast> -->
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
import { Common } from '@/JS/common';
import { Resource } from '@/JS/resource';
import { toast } from '../../JS/toast';

export default {
    emits: ["check-empty","update:modelValue"],
    setup(){
        return {toast}
    },
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
        },
        
        /**
         * Prop xác định chuỗi nhập vào có viết hoa chữ đầu không
         */
        isUppercaseFirst:{
            type: Boolean,
            default: false,
            required: false,
        },

        /**
         * Prop xác định chuỗi nhập vào có viết hoa sau dấu cách không
         */
        isUpperBehindSpace:{
            type: Boolean,
            default: false,
            required: false,
        }
    },
    methods: {
        /**
         * Hàm thực hiện binding 2 chiều update lại data trong input và kiểm tra số lượng kí tự cho phép
         * Author: Công Đoàn
         */
        updateInput(event) {
            if(event.target.value.length == 1 && this.isUppercaseFirst){
                event.target.value = Common.uppercaseFirstLetter(event.target.value);
            }
            if(this.isUpperBehindSpace){
                event.target.value = Common.uppercaseFirstLetter(event.target.value);
            }
            this.$emit("update:modelValue", event.target.value);
            if( event.target.value.length >= this.maxLength){
                toast({message: Resource.Validate_LengthInputLimit,type: "error",duration: 2000})
            }
        },

        /**
         * Hàm kiểm tra input rỗng
         * Author: Công Đoàn
         */
        checkEmpty(){ 
            this.$emit('check-empty');
        },

        /**
         * Hàm focus vào ô input
         * Author: Công Đoàn
         */
        setFocus(){
            this.$refs.focus.focus();
        }
    },
    
}
</script>

<style lang="css">
    
</style>