<template>
    <div class="radio__group">
        <div class="radio" @click="checkedItem(item.value)" v-for="(item,index) in data" :key="index" @keydown.enter="checkedItem(item.value)">
            <div class="radio__item" :tabindex="tabIndex + index">
                <div :class="{'radio__item--checked':isCheckedItem(item.value)}"></div>
            </div>
            <span :class="spaceLabel">{{item.name}}</span>
        </div>
    </div>

</template>

<script>
export default {
    emits: ["bindData","bind-data"],
    props:{
        /**
         *  Prop lưu data truyền vào radio
         */
        data:{
            type: [Array,String,Object],
            required: false,
        },

        /**
         * Prop xác định data nào được check khi bind
         */
        bindChecked: {
            type: [Number,String]
        },

        /**
         * Biến lưu class khoảng cách giữu các label
         */
        spaceLabel: {
            type: String,
            required: false,
        },

        /**
         * Tabindex
         */
        tabIndex: {
            type: Number,
            required: false,
        }
    },

    mounted(){
        // Thực hiện checked biến được chọn khi bind
        this.isChecked = this.bindChecked;
    },

    watch:{
        // Thực hiện theo dõi checked biến được chọn khi bind
        bindChecked: function(value){
            this.isChecked = value;
        },
    },
    data() {
        return {
            /**
             *  Biến checked 
             */
            isChecked: 0,
        }
    },
    methods: {
        /**
         * Hàm thực hiện checked radio
         * Author: Công Đoàn (01/08/2022)
         */
        checkedItem(item){
            this.isChecked = item;
            this.$emit('bind-data',this.isChecked);
        },

        /**
         * Hàm thực hiện xác định ô được check
         * Author: Công Đoàn (02/08/2022)
         */
        isCheckedItem(item){
            if(this.isChecked == item){
                return true;
            }else{
                return false;
            }
        }


    },
}
</script>

<style lang="css" scope>
    .radio__group{
        display: flex;
    }
    .radio{
        display: flex;
        padding-top: 5px;
    }

    .radio__item{
        box-sizing: border-box;
        height: 18px;
        width: 18px;
        border: 1px solid #767676;
        border-radius: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .radio__item:focus-visible{
        outline: 1px solid #2CA01C;
    }

    .radio__item--checked{
        height: 12px;
        width: 12px;
        border-radius: 45px;
        background-color: #2CA01C;
    }

    .radio__item__gender{
        margin: 0px 20px 0px 10px;

    }
</style>