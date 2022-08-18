<template>
    <div class="combobox" id="cbEmployeeDetail">
        <input type="text" 
        :tabindex="tabIndex"
        class="combobox__input input__text" 
        id="txtSearchCombox"
        :value="modelValue.DepartmentName" 

        @blur="validateInput(modelValue)"
        @keydown.esc="closeComboboxData()"
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
    emits: ["blur-combobox","select-item"],
    props:{
        // prop load data
        dataCombobox: {
            type: [Object,Array],
        },

        // prop trả về data được chọn
        dataSelected: {
            type: [Object,Array],
        },
        modelValue: {
            type: [String,Object,Array,Number],
        },

        // prop tabindex
        tabIndex:{
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            // Biến hiển thị combobox
            isShowCombobox: false,

            // Biến kiểm tra combobox trống hay không
            isEmpty: false,
        }
    },
    methods: {

        /**
         * hàm thực hiện binding 2 chiều update lại data trong input
         * Author: Công Đoàn (25/07/2022)
         */
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },

        /**
         * Hàm đóng mở combobox data
         * Author: Công Đoàn (20/07/2022)
         */
        toggleCombobox(){
            this.isShowCombobox = !this.isShowCombobox;
        },

        /**
         * Hàm chọn data trong combobox data
         * Author: Công Đoàn (20/07/2022)
         */
        selectedItem(data){
            this.toggleCombobox();
            this.$emit('select-item',data);
        },

        /**
         * Hàm thực hiện validate rỗng trong combobox input
         * Author: Công Đoàn (20/07/2022)
         */
        validateInput(data){
            if(!data){
                this.isEmpty = true;
            }else{
                this.isEmpty = false;
            }
            this.$emit('blur-combobox',this.isEmpty);
        },

        /**
         * Hàm thực hiện đóng combobox
         * Author: Công Đoàn
         */
        closeComboboxData(){
            this.this.isShowCombobox = false;
            console.log(1);
        }
 
    },
    
}
</script>

<style lang="css">
    
</style>