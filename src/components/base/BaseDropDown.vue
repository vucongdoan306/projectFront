<template>
    <div class="dropdown" :class="dropdown">
        <input type="text"  class="dropdown__input" readonly id="" :value="selectedDropdown +' '+ textDropdown">
        <base-box-icon 
        :class="{'rotate':Open}" 
        :sizeIcon="sizeIconDropdown" 
        :classIcon="iconDropdown" 
        @click="isShowData(!Open)"
        :hoverIcon="true"
        ></base-box-icon>
        <div class="dropdown__data" :class="typeDropdown" v-show="Open">
            <div v-for="value in valueDropdown" :key="value"
            :title="value +' '+ textDropdown" 
            class="dropdown__item" :class="{classDropdown:true , 'dropdown__item--selected':checkClick(value)}"
            @click="isShowData(false); isSelectedData(value)"
            >
            {{value +' '+ textDropdown}}
            <input type="text" :value="value" hidden></div>
        </div>
    </div>
</template>

<script>
import BaseBoxIcon from "./BaseBoxIcon.vue";
export default {
    emits:["select-data"],
    props:{
        /**
         * Loại dropdown 
         * Bùi Văn Kiên
         */
        dropdown:{
            type: String,
            required: false,
            default: "",
        },
        /**
         * Load data trong dropdown
         * Bùi Văn Kiên
         */
        valueDropdown:{
            type: [String,Number,Array,Object],
        },

        /**
         * Nội dung trong dropdown
         * Bùi Văn Kiên
         */
        textDropdown:{
            type: String,
        },

        /**
         * Icon của Dropdown
         * Bùi Văn Kiên
         */
        iconDropdown:{
            type: String,
        },

        /**
         * Class của dropdowm
         * Bùi Văn Kiên
         */
        classDropdown:{
            type: String,
        },

        /**
         * Kiểu dropdown
         * Bùi Văn Kiên
         */
        typeDropdown:{
            type: String,
        },

        /**
         * Size icon Dropdown
         * Bùi Văn Kiên
         */
        sizeIconDropdown:{
            type: String,
        },

        /**
         * Dropdown data đang được chọn
         * Bùi Văn Kiên
         */
        selectedDropdown: {
            type: [String,Number]
        }
    },
    components:{
        BaseBoxIcon,
    },

    data() {
        return {
            /**
             * Biến đóng mở dropdown data
             */
            Open: false
        }
    },
    methods: {
        /**
         * Hàm thực hiện đóng mở dropdown data
         * @param {boolean} isShow biến xác định đóng mở dropdown
         * Bùi Văn Kiên
         */
        isShowData(isShow){
            this.Open = isShow;
        },

        /**
         * Hàm đánh dâu item data được chọn
         * @param {string, number, object} value lưu giá trị đang được chọn trong dropdown
         * Bùi Văn Kiên
         */
        checkClick(value){
            if(value==this.selectedDropdown){
                return true;
            }
            return false;
        },

        /**
         * Hàm chuyển data được chọn lên phân trang
         * Bùi Văn Kiên
         */
        isSelectedData(value){
            this.$emit('select-data',value);
        },
    },
    
}
</script>

<style lang="css" scope>
    .rotate{
        transform: rotate(180deg);
    }


</style>