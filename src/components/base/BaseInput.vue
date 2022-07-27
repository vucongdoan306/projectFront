<template>
    <div class="input" :class="classFather">
        <input :type="typeInput" 
        :placeholder="placeholderInput" 
        :class="classInput" 
        :name="nameInput" 
        :id="idInput" 
        :value="modelValue"
        @input="updateInput"
        >

        <div class="icon input__icon" :class="classInputIcon" v-if="classInputIcon"></div>
    </div>
</template>

<script>
export default {

    props:{
        typeInput: {
            type: String,
            required: true,
        },
        placeholderInput: {
            type: String,
            required: true,
        },
        classInput: {
            type: String,
        },
        idInput: {
            type: String,
        },
        nameInput:{
            type: String,
        },
        classInputIcon:{
            type: String,
        },
        classFather: {
            type: String,
        },
        modelValue: {
            type: [String,Object,Array,Number],

        }

    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    },
    
}
</script>

<style lang="css">
    
</style>