<template>
    <div class="combobox">
        <input type="text" class="combobox__input input__text" 
        v-model="filterText" 
        @input="filterInputChange()"
        @keyup="keyMonitor"
        >
        <div class="box__icon btnOpenCombo" @click="showData()">
            <div class="icon icon__arrow--down8"></div>
        </div>
        <div class="combobox__data" v-show="isShowData">
            <div class="combobox__data--title">
                <div class="combobox__data--row1">Mã đơn vị</div>
                <div class="combobox__data--row2">Tên đơn vị</div>
            </div>
            <div class="combobox__data--menu" 
            v-for="(item,index) in dataFilter" 
            :key="index" 
            @click="selectedData(item,index)"
            @mousemove="selectingData(item,index)"
            @mouseout="exitSelectingData()"
            :class="{'combobox__data--selected': checkIndexSelecting(index)}"
            >
                <div class="combobox__data--item">
                    <div class="combobox__data--row1">{{item[this.codeData]}}</div>
                    <div class="combobox__data--row2">{{item[this.nameData]}}</div>
                    <div class="department__code" hidden>{{item[this.idData]}}</div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        mainData:{
            type: [String,Object,Array],
            required: false,
        },
        nameData:{
            type: String,
            required:false,
        },
        idData:{
            type: String,
            required: false,
        },
        codeData:{
            type: String,
            required: false,
        }

    },
    created(){

    },
    mounted(){
        this.data = this.mainData;
        this.dataFilter = this.mainData;
    },
    watch: {
        mainData: function(value){
            this.data = value;
            this.dataFilter = value;
        }
    },
    methods:{
        showData(){
            this.isShowData = !this.isShowData;
        },
        selectedData(item,index){
            // để lưu lại giá trị selected
            this.dataTemp = item;
            this.dataSeleted = item;
            this.filterText = this.dataSeleted[this.nameData];
            this.isShowData = false;
            this.iSelected = index;
            this.resetFilter();
            console.log(this.dataSeleted);
        },
        selectingData(item,index){
            this.dataSeleted = item;
            this.filterText = this.dataSeleted[this.nameData];
            this.iSelecting = index;

        },
        exitSelectingData(){
            this.dataSeleted = this.dataTemp;
            this.filterText = this.dataSeleted[this.nameData];
            this.iSelecting = this.iSelected;
        },
        filterInputChange(){
            var me = this;
            this.dataFilter = this.data.filter(e=>{
                return e[me.nameData].includes(me.filterText);
            })
            this.iSelecting = 0;
            this.isShowData = true;

            if(!me.filterText){
                this.dataSeleted = new Array();
                console.log(this.dataSeleted);
            }
        },

        checkIndexSelecting(index){
            if(this.iSelecting == index){
                return true;
            }else{
                return false;
            }
        },

        keyMonitor(e){
            if(e.key === "ArrowDown"){
                this.iSelecting<this.dataFilter.length -1 ? this.iSelecting++ : this.iSelecting = 0;
                this.selectingData(this.dataFilter[this.iSelecting],this.iSelecting);
                console.log(this.iSelecting);
                console.log(this.dataFilter.length);
            }

            if(e.key === "ArrowUp"){
                if(this.iSelecting >= 0){
                    this.iSelecting--;
                }
                if(this.iSelecting < 0){
                    this.iSelecting = this.dataFilter.length-1;
                }
                this.selectingData(this.dataFilter[this.iSelecting],this.iSelecting);     
                console.log(this.iSelecting);
            
            }

            if(e.key === "Enter"){
                this.selectedData(this.dataFilter[this.iSelecting],this.iSelecting);
            }
        },


        resetFilter(){
            this.dataFilter = this.data;
            this.iSelecting = this.iSelected;
            this.iSelected = this.dataFilter.indexOf(this.dataSelected);
        }

    },
    data() {
        return {
            data: [],
            dataFilter: [],
            isShowData: false,
            filterText: "",
            dataSeleted: [],
            dataTemp:[],
            iSelecting: 0,
            iSelected: 0,
        }
    },
    
}
</script>

<style lang="css">
    
</style>