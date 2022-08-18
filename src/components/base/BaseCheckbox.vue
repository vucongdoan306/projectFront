<template>
    <div @click="() => isChecked = !isChecked" :class="{'checkbox':true,'checkbox--checked':stateCheckAll}">
        <div></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                /**
                 * Biến lưu giá trị checked của checkbox
                 */
                isChecked:false,
            }
        },
        props:{
            /**
             * Biến lưu giá trị checked của checkbox
             */
            stateCheckAll:Boolean
        },
        watch:{
            stateCheckAll: function(value){
                this.isChecked = value;
            }
        },
    }
</script>

<style scoped>

</style>