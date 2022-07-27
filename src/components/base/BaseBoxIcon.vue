<template>
    <div class="box__icon" :class="sizeIcon" :id="idBoxIcon">
        <div class="icon" :class="classIcon"></div>
    </div>
</template>

<script>
export default {
    props: {
        classIcon: {
            type: String,
            required: true,
        },
        sizeIcon: {
            type: String,
        },
        idBoxIcon: {
            type: String,
        }
    }
}
</script>

<style lang="css">
    
</style>