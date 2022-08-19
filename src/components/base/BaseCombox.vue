<template>
    <div class="combobox" :data-title="'Thông tin này không được để trống'" :class="{'tooltip__combobox':this.validateEmpty}">
        <div ></div>
        <input type="text" 
        class="combobox__input" 
        v-model="textName" 
        @input="filterInputChange()" 
        @keyup="keyMonitor"
        @blur="validateBlur(this.dataSelected)"
        :class="{'border--error': this.validateEmpty}"
        :title="this.validateEmpty ? 'Thông tin này không được để trống': ''"
        :tabindex="tabIndex"
        ref="focus"
        >
        <div class="box__icon" @click="showData()">
            <div class="icon icon__down5-black"></div>
        </div>
        <div class="combobox__data" v-show="this.isShowData">
            <div class="combobox__data--title">
                <div class="combobox__data--row1">Mã đơn vị</div>
                <div class="combobox__data--row2">Tên đơn vị</div>
            </div>
            <div class="combobox__data--menu">
                <div class="combobox__data--item" 
                v-for="(item,index) in dataFilter" 
                :key="index" 
                @mousemove="selectingData(item,index)"
                @click="selectedData(item,index)" 
                @mouseout="exitSelectingData()"
                :class="{'combobox__data--selected': checkIndexSelecting(index)}"
                >
                    <div class="combobox__data--row1">{{item[this.codeData]}}</div>
                    <div class="combobox__data--row2">{{item[this.nameData]}}</div>
                    <div class="department__code" hidden>{{item[this.idData]}}</div>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
// import CommonAPI from "../../APIs/CommonApi.js";

export default {
    props:{

        /**
         * Tên của bảng dữ liệu muốn đẩy vào combobox
         */
        controller: {
            type: String,
            default: "",
            required: false,
        },

        /**
         * Tên của data name
         */
        nameData: {
            type: String,
            required: false,
            default: "",
        },

        /**
         * Mã của data code
         */
        codeData:{
            type: String,
            required: false,
            default: "",
        },

        /**
         * Id của data Id
         */
        idData:{
            type: String,
            required: false,
        },

        /**
         * Dữ liệu được truyền vào combobox
         */
        mainData:{
            type: [String,Object,Array],
            required: false,
        },

        /**
         * Dữ liệu được bind lên combobox
         */
        bindingData:{
            type: [Array,Object],
            required: false,
        },

        /**
         * Index của tabindex
         */
        tabIndex:{
            type: Number,
            required: false,
        }
    },
    created() {
        // Thực hiện khởi tạo Combobox => gán data cho combobox
        this.data = this.mainData;
        this.dataFilter = this.mainData;
        this.maxIndex = this.mainData.length;
    },
    mounted() {
        // var me = this;
    },
    watch:{
        /**
         * Theo dõi sự thay đổi của data truyền vào và load lại combobox
         */
        mainData: function(value){
            this.data = value;
            this.dataFilter = value;
            this.maxIndex = value.length;
        },

        /**
         * Chọn data được bind vào 
         */
        bindingData: function(value){
            this.selectedData(value,0);
        }
    },
    data() {
        return {
            /**
             * Biến data lưu giá toàn giá combobox lúc gọi API không biến đổi
             */
            data: [],

            /**
             * Biến data lưu toàn bộ giá trị combobox khi tìm kiếm 
             */
            dataFilter: [],

            /**
             * Biến tạm lưu data đang được chọn
             */
            dataTemp: [],

            /**
             * Biến lưa data được chọn
             */
            dataSelected: [],

            /**
             * Biến lưu tên được hiển thị trong combobox
             */
            textName: "",

            /**
             *  Biến xác định đóng mở data
             */
            isShowData: false,

            /**
             * Lưu chỉ số của data đang được chọn
             */
            iSelecting: 0,

            /**
             * Lưu chỉ số của data đã dược chọn
             */
            iSelected: 0,

            /**
             * Số bản ghi combobox
             */
            maxIndex: 0,

            /**
             * Biến kiểm tra validate Empty (true: Trống, false: có data)
             */
            validateEmpty: false,
        }
    },
    methods: {
        /**
         * Hàm thực hiện hiển thị data của combobox 
         * Author: Công Đoàn (27/07/2022)
         */

        showData(){
            this.isShowData = !this.isShowData;
            this.setFocus();
            this.exitSelectingData();
        },

        /**
         * Hàm thực hiện chọn data trong combobox
         * @param {object} data data đang được chọn của array
         * @param {number} index chỉ số của data đang được chọn trong mảng
         * Author: Công Đoàn (27/07/2022)
         */
        selectedData(data,index){
            if(data){
                this.dataTemp = data;
                this.textName = this.dataTemp[this.nameData];
                this.dataSelected = this.dataTemp;
                this.isShowData = false;
                this.iSelected = index;
                this.iSelecting = this.iSelected;
                this.resetFilter();
                this.$emit('bind-data',this.dataSelected);
            }

        },

        /**
         * Hàm thực hiện chọn data khi đưa con trỏ chuột qua
         * @param {object} data data đang được chọn của array
         * @param {number} index chỉ số của data đang được chọn trong mảng
         * Author: Công Đoàn (27/07/2022)
         */

        selectingData(data,index){
            this.textName = data[this.nameData];
            this.dataSelected = data;
            this.iSelecting = index;
        },

        /**
         * Hàm thực hiện autocomplete filter cho combobox
         * Author: Công Đoàn (27/07/2022)
         */
        filterInputChange(){
            var me = this;
            this.dataFilter = this.data.filter(e=>{
                return e[me.nameData].includes(me.textName);
            })
            this.maxIndex = this.dataFilter.length;
            this.iSelecting = 0;
            this.isShowData = true;

            if(!me.textName){
                this.dataSelected = new Array();
                this.dataTemp = [];
                this.$emit('resetCombobox');
            }

        },

        /**
         * Hàm thực hiện reset filter
         * Author: Công Đoàn (27/07/2022)
         */

        resetFilter(){
            this.dataFilter = this.data;
            this.maxIndex = this.data.length;
            this.iSelected = this.dataFilter.indexOf(this.dataSelected);

        },

        /**
         * Hàm thực hiện xóa tham số data đang được selecting và đưa data về giá trị đang được selected
         * Author: Công Đoàn (27/07/2022)
         */

        exitSelectingData(){
            this.textName = this.dataTemp[this.nameData];
            this.dataSelected = this.dataTemp;
            this.iSelecting = this.iSelected;
        },

        /**
         * Hàm dánh dấu combobox data đang được chọn
         * @param {object} key object đang được chọn của array
         * Author: Công Đoàn (27/07/2022)
         * 
         */

        checkDataSelected(key){
            if(this.dataTemp[this.idData] == key){
                return true;
            }else{
                return false;
            }
        },

        /**
         * Hàm xác định data selecting qua event mouse
         * @param {number} index chỉ số của data đang được chọn trong mảng
         * Author: Công Đoàn (27/07/2022)
         */

        checkIndexSelecting(index){
            if(this.iSelecting == index){
                return true;
            }else{
                return false;
            }
        },


        /**
         * Hàm thực hiện xác định data selecting qua event keyup và chọn data selected qua event enter
         * Author: Công Đoàn (27/07/2022)
         */
        keyMonitor(e){
            if(e.key === "ArrowDown"){
                if(this.iSelecting <= this.maxIndex - 1){
                    this.iSelecting++;
                }

                if(this.iSelecting > this.maxIndex-1){
                    this.iSelecting = 0;
                }
                this.selectingData(this.dataFilter[this.iSelecting],this.iSelecting);
            }

            if(e.key === "ArrowUp"){
                if(this.iSelecting >= 0){
                    this.iSelecting--;
                }

                if(this.iSelecting < 0){
                    this.iSelecting = this.maxIndex-1;
                }
                this.selectingData(this.dataFilter[this.iSelecting],this.iSelecting);
            }

            if(e.key === "Enter"){
                this.selectedData(this.dataFilter[this.iSelecting],this.iSelecting);
            }

            if(e.key === "Escape"){
                this.isShowData = false;
            }
        },

        /**
         * Hàm thực hiện focus input
         * Author: Công Đoàn (27/07/2022)
         */
        setFocus(){
            this.$refs.focus.focus();
        },

        /**
         * Hàm thực hiện vaidate rỗng 
         * Author: Công Đoàn (29/07/2022)
         */

        validateBlur(){
            if(!this.dataSelected.departmentId){
                this.validateEmpty = true;
            }else{
                this.validateEmpty = false;
            }
        },
    },
}
</script>

<style lang="css">
    
</style>