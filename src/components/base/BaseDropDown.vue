<template>
    <div class="dropdown">
        <input type="text" class="dropdown__input" readonly id="" :value="selectedDropdown +' '+ textDropdown">
        <base-box-icon :sizeIcon="sizeIconDropdown" :classIcon="iconDropdown" @click="isShowData(!Open)"></base-box-icon>
        <!-- <div class="box__icon hg--32px">
            <div class="icon icon__down5-black"></div>
        </div> -->
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
    props:{
        valueDropdown:{
            type: [String,Number,Array,Object],
        },
        textDropdown:{
            type: String,
        },
        iconDropdown:{
            type: String,
        },
        classDropdown:{
            type: String,
        },
        typeDropdown:{
            type: String,
        },
        sizeIconDropdown:{
            type: String,
        },
        selectedDropdown: {
            type: [String,Number]
        }
    },
    components:{
        BaseBoxIcon,
    },

    data() {
        return {
            Open: false

        }
    },
    methods: {
        isShowData(isShow){
            this.Open = isShow;
        },
        checkClick(value){
            if(value==this.selectedDropdown){
                return true;
            }
            return false;
        },
        isSelectedData(value){
            this.$emit('select-data',value);
        },
    },
    
}
</script>

<style lang="css">
    
</style>