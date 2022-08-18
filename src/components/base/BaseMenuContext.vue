<template>
    <div class="dropdown__data column__data">
        <div class="dropdown__item" @click="cloneEmployee()">Nhân bản</div>
        <div class="dropdown__item delete__emp" @click="deleteEmployee()">Xóa</div>
        <div class="dropdown__item">Ngừng sử dụng</div>
    </div>
</template>

<script>
export default {
    emits: ["delete-employee","clone-employee"],
    methods:{
        /**
         * Hàm gọi đến hàm xóa employee
         * Author: Công Đoàn (25/07/2022)
         */
        deleteEmployee(){
            this.$emit('delete-employee');
        },

        /**
         * Hàm thực hiện nhân bản employee
         * Author: Công Đoàn (14/08/2022)
         */
        cloneEmployee(){
            this.$emit('clone-employee');
        }
    }
}
</script>

<style lang="css">
    
</style>