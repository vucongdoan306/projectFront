<template>
    <div @click="() => isChecked = !isChecked" :class="{'checkbox':true,'checkbox--checked':isChecked}">
        <div></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isChecked:false,
            }
        },
        props:{
            stateCheckAll:Boolean
        },
        watch:{
            stateCheckAll(newVal){
                this.isChecked = newVal;
            }
        }
    }
</script>

<style scoped>

</style>