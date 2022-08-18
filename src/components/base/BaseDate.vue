<template>
    <DxDateBox class="ms-date-box" :styling-mode="stylingMode" :label-mode="labelMode" width="100%" :value="value"
        :display-format="displayFormat" placeholder="DD/MM/YYY" label="Tiêu đề" @value-changed="onValueChanged"

         >
        <DxValidator>
            <DxRequiredRule />
        </DxValidator>
    </DxDateBox>

</template>

<script>
import {
    DxValidator,
    DxRequiredRule,
} from 'devextreme-vue/validator';
import 'devextreme/dist/css/dx.light.css';
import DxDateBox from 'devextreme-vue/date-box';
export default {
    emits: ["onValueChanged"],
    name: 'MsDate',
    components: {
        DxDateBox,
        DxValidator,
        DxRequiredRule,
    },
    watch:{
        value: function(val){
            this.date = val;
            console.log('11111');
        }
    },
    props: {
        value: {
            type: [String, Date],
            default: null,
        },
        labelMode: {
            type: String,
            required: false,
            default: 'static',
            note: 'mode hiển thị label ' // [ 'static', 'floating', 'hidden' ]
        },
        stylingMode: {
            type: String,
            required: false,
            default: 'outlined',
            note: 'mode hiển thị loại style datebox ' // [ 'outlined', 'filled', 'underlined' ]
        },


        /**
         * const date = new Date(2021, 6, 15, 20, 45, 34);
 
            format: "MM/dd/yyyy" // 07/15/2021
            format: "MM/dd/yy" // 07/15/21
            format: "dd.MM.yyyy" // 15.07.2021
            format: "MMMM dd, yyyy" // July 15, 2021
            format: "EEEE, MMMM dd" // Thursday, July 15
            format: "HH:mm:ss" // 20:45:34
            format: "hh:mm a" // 08:45 PM
            format: "MMMM dd, yyyy HH:mm:ss" // July 15, 2021 20:45:34
         */
        displayFormat: {
            type: String,
            default: 'dd/MM/yyyy',
            note: 'mode hiển thị loại ngày datebox '
        }
    },
    data() {
        return {
            date: null,
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
        /**
         * khi giá trị datebox thay đổi
         * @param {*} e event thay đổi
         */
        onValueChanged(e) {
            this.$emit('onValueChanged', e);
        },

    }
};
</script>


<style lang="css" scoped>

</style>