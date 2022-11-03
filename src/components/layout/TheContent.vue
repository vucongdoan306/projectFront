<template>
    <div class="content" :style="{marginLeft: isCloseNav ? '52px' : '178px' }">
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    props:{
        /**
         * Prop thực hiện đóng mở nav
         */
        isCloseNav: { 
            type: Boolean,
            required: true,
        }
    },
    components: {
        
    }
}
</script>

<style lang="css">
    
</style>