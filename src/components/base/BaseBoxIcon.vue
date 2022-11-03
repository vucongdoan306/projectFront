<template>
    <div class="relative">
        <div class="box__icon" :data-title="title" :class="{sizeIcon:true,'dropdown__hover':hoverIcon,'tooltip__icon':title}" :id="idBoxIcon">
            <div class="icon" :class="classIcon"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * prop chứa class icon
         */
        classIcon: {
            type: String,
            required: true,
        },

        /**
         *  prop class tùy chỉnh size icon
         */
        sizeIcon: {
            type: String,
        },

        /**
         * prop id icon
         */
        idBoxIcon: {
            type: String,
        },

        /**
         *  Prop title của icon
         */
        title:{
            type: String,
        },

        /**
         * Prop hover của icon
         */
        hoverIcon:{
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="css" scope>

</style>