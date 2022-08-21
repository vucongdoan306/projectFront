<template> 
    <div class="relative datetime">
        <div :class="{'tooltip__input':this.titleInput}" :data-title="this.titleInput">
            <el-date-picker
            v-model="modelValue"
            :type="typeDate"
            :format="formatDate"
            :placeholder="placeholderDate"
            :size="sizeDate"
            @change="updateData"
            :tabindex="tabIndex"
            :class="{'error':this.isNotValid}"
            ref="inputDate"
            />
        </div>
    </div>      

</template>

<script>
export default {
    props:{
        /**
         * Prop truyền value đầu vào
         */
        bindValue:{
            type: [String,Number,Date],
            required: false,
        },
        /**
         * Tabindex
         */
        tabIndex:{
            type: Number,
            required: false,
        },
        /**
         * Kiểu ngày tháng
         */
        typeDate:{
            type: String,
            required: false,
            default: "date",
        },
        /**
         * Định dạng ngày hiển thị
         */
        formatDate:{
            type: String,
            required: false,
            default: "DD/MM/YYYY",
        },
        /**
         * Placeholder
         */
        placeholderDate:{
            type: String,
            required: false,
            default: "DD/MM/YYYY",
        },
        /**
         * Size của thẻ input
         */
        sizeDate:{
            type: String,
            required: false,
            default: "default"
        }

    },
    watch:{
        /** Theo dõi sự thay đổi của prop đầu vào và gắn lại cho biến model */
        bindValue: function(value){
            this.modelValue = value;
        },
    },
    data(){
        return{
            /**
             * Biến model lưu dữ liệu thay đổi
             */
            modelValue:"",

            /**
             * Biến kiểm tra tính hợp lệ của date
             */
            isNotValid: false,

            /**
             * biến lưu title
             */
            titleInput: "",
        }
    },
    methods:{
        /**
         * Thực hiện truyền dữ liệu thay đổi khi dữ liệu bị thay đổi
         * Author: Công Đoàn (18/08/2022)
         */
        updateData(){
            this.$emit("bind-value",this.modelValue);
            this.$nextTick(()=>this.$refs.inputDate.focus());
            let newDate = new Date();
            if(this.modelValue>newDate){
                this.isNotValid = true;
                this.titleInput = "Ngày nhập không được lớn hơn ngày hiện tại"
            }else{
                this.isNotValid = false;
                this.titleInput = "";
            }
        },

        /**
         * Hàm set focus tại input date
         * Author: Công Đoàn (18/08/2022)
         */
        setFocus(){
            this.$refs.inputDate.focus();
        }
    }
    
}
</script>

<style lang="css">
    
</style>