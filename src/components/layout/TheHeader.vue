<template>
    <div class="header" :style="{marginLeft: isCloseNav ? '52px' : '178px', width: isCloseNav ? 'calc(100% - 52px)':'calc(100% - 178px)'}">
        <div class="header__left">
            <div class="header__icon mg--0-10" :class="{'dp--none': isCloseNav}" @click="closeNav(isCloseNav)">
                <div class="icon icon__toggle--header"></div>
            </div>

            <div class="dropdown">
                <!-- <input type="text" class="dropdown__input" readonly id=""
                    value="CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC"> -->
                <div class="dropdown__input lh--24px pdl--10 fnt--14px fnt--w-600" title="CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC</div>
                <div class="box__icon">
                    <div class="icon icon__arrow--down8"></div>
                </div>
            </div>
        </div>

        <div class="header__right">
            <box-icon classIcon="icon__ring"></box-icon>
            <div class="header__account">
                <box-icon classIcon="icon__avatar"></box-icon>
                <p class="fnt--14px">Nguyễn Văn Mạnh </p>
                <div class="icon icon__arrow--down5 mgl--8"></div>
            </div>
        </div>



    </div>


</template>

<script>
import BoxIcon from "../base/BaseBoxIcon.vue";
// import TheDropdown from "../base/TheDropdown.vue";
export default {
    props: {
        isCloseNav: {
            type: Boolean,
            required: true,
        }
    },
    components: {
        BoxIcon,
    },
    mounted() {
        // console.log(this.$refs.dropdowndata);
        // this.$refs.dropdowndata.isShowData = true;
        // this.$refs.dropdowndata.isShowItem = true;
    },
    methods: {
        closeNav(isClose){
            this.$emit('is-closenav',isClose);
        }
    },
    
}
</script>

<style lang="css">
    @import url(../../styles/base/header.css);
</style>