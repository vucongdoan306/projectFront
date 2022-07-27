<template>
    <button class="button" :class="classButton">{{textButton}}</button>
</template>

<script>
export default {
    props:{
        textButton: {
            type: String,
        },
        classButton:{
            type: String,
        }
    }
}
</script>

<style lang="css">
    
</style>