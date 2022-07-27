<template>
    <div class="combobox" id="cbEmployeeDetail">
        <input type="text" 
        class="combobox__input input__text" 
        id="txtSearchCombox"
        :value="dataSelected.DepartmentName" 
        @blur="validateInput(dataSelected.DepartmentName)"
        :class="{'border--error' : isEmpty}"
        :title="isEmpty ? 'Thông tin không được để trống' : ''"
        >
        <div class="box__icon btnOpenCombo" @click="toggleCombobox()">
            <div class="icon icon__arrow--down8"></div>
        </div>
        <div class="combobox__data" :class="{'blk' : isShowCombobox}">
            <div class="combobox__data--title">
                <div class="combobox__data--row1">Mã đơn vị</div>
                <div class="combobox__data--row2">Tên đơn vị</div>
            </div>
            <div class="combobox__data--menu" >
                <div class="combobox__data--item" v-for="data in dataCombobox" :key="data.DepartmentCode" @click="selectedItem(data)">
                    <div class="combobox__data--row1">{{data.DepartmentCode}}</div>
                    <div class="combobox__data--row2">{{data.DepartmentName}}</div>
                    <div class="department__code" hidden>{{data.DepartmentId}}</div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props:{
        dataCombobox: {
            type: [Object,Array],
        },
        dataSelected: {
            type: [Object,Array],
        },
        isEmpty: {
            type: Boolean,
        }
    },
    data() {
        return {
            isShowCombobox: false,
        }
    },
    methods: {
        toggleCombobox(){
            this.isShowCombobox = !this.isShowCombobox;
        },
        selectedItem(data){
            this.toggleCombobox();
            this.$emit('select-item',data);
        },
        validateInput(data){
            this.$emit('blur-combobox',data);
        }
    },
    
}
</script>

<style lang="css">
    
</style>