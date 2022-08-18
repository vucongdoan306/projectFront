<template>
    <div class="dialog" id="popupQuestion">
        <div class="popup__warning">
            <div class="pd--32">
                <div class="popup__warning--content">
                    <div class="box__icon">
                        <div class="icon" :class="classPopup"></div>
                    </div>

                    <div class="popup__warning--title">
                        <span>
                            {{status}}
                        </span>
                    </div>
                </div>

                <div class="popup__warning--line">

                </div>

                <div class="popup__warning--footer flex--spbetween" v-if="isQuestion">
                    <div>
                        <button class="button button--white pd--6-16 hg--34px" @click="closeThisPopup()">Hủy</button>
                    </div>

                    <div>
                        <button class="button button--white pd--6-16 hg--34px" @click="closeDialogDetail()">Không</button>
                        <button class="button pd--6-16 hg--34px mgl--8 btnYes" @click="saveDialogDetail()">Có</button>
                    </div>
                </div>

                <div class="popup__warning--footer flex--center" v-if="isDanger">
                    <button class="button pd--6-16 hg--34px btnNoKeep" @click="closeThisPopup()">Đóng</button>
                </div>

                <div class="popup__warning--footer flex--spbetween" v-if="isDelete">
                    <div>
                        <button class="button button--white pd--6-16 hg--34px" @click="closeThisPopup()">Không</button>
                    </div>

                    <div>
                        <button class="button pd--6-16 hg--34px mgl--8 btnYes" @click="deleteEmployee()">Có</button>
                    </div>
                </div>

                <div class="popup__warning--footer flex--jc-end" v-if="isRegular">
                    <div>
                        <button class="button pd--6-16 hg--34px" @click="closeThisPopup()">Đồng ý</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["close-popup","save-dialog-detail","close-dialog-detail","delete-employee"],
    props:{
        status: {
            type: String,
        },
        classPopup: {
            type: String,
        },
        isQuestion: {
            type: Boolean,
            default: false
        },
        isRegular: {
            type: Boolean,
            default: false
        },
        isDelete: {
            type: Boolean,
            default: false
        },
        isDanger: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        /**
         * Hàm gọi đến hàm đóng popup
         * Author: Công Đoàn (25/07/2022)
         */
        closeThisPopup(){
            this.$emit("close-popup","");
        },

        /**
         * Hàm gọi đến hàm xóa nhân viên 
         * Author: Công Đoàn (25/07/2022)
         */
        deleteEmployee(){
            this.$emit("delete-employee");
        },

        /**
         * Hàm gọi đến hàm đóng dialog detail 
         * Author: Công Đoàn (25/07/2022)
         */
        closeDialogDetail(){
            this.$emit("close-dialog-detail");
        },

        /**
         * Hàm gọi đến hàm cất dialog detail
         * Author: Công Đoàn (25/07/2022)
         */
        saveDialogDetail(){
            this.$emit("save-dialog-detail");
        }
    },
    
}
</script>

<style lang="css">
    
</style>