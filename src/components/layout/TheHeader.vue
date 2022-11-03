<template>
  <div
    class="header shadow-bottom"
    :style="{
      marginLeft: isCloseNav ? '52px' : '178px',
      width: isCloseNav ? 'calc(100% - 52px)' : 'calc(100% - 178px)',
    }"
  >
    <div class="header__left">
      <div
        class="header__icon mg--0-10"
        :class="{ 'dp--none': isCloseNav }"
        @click="closeNav(isCloseNav)"
      >
        <div class="icon icon__toggle--header"></div>
      </div>

      <div class="dropdown">
        <div
          class="dropdown__input lh--24px pdl--10 fnt--14px fnt--w-600 tooltip"
          data_title="CÔNG TY TNHH"
        >
          CÔNG TY TNHH
        </div>
        <div class="box__icon">
          <div class="icon icon__arrow--down8"></div>
        </div>
      </div>
    </div>

    <div class="header__right relative">
      <box-icon classIcon="icon__ring"></box-icon>
      <div class="header__account">
        <box-icon classIcon="icon__avatar"></box-icon>
        <p class="fnt--14px">QLNS</p>
        <div
          class="icon icon__arrow--down5 mgl--8 pointer"
          @click="openMenuFeature()"
        ></div>
        <div
          class="menu__logout absolute pointer"
          :class="{ 'dp--none': !isShowMenu }"
          @click="openMenuFeature()"
        >
          <div class="item__logout">Đăng xuất</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxIcon from "../base/BaseBoxIcon.vue";
// import TheDropdown from "../base/TheDropdown.vue";
export default {
  emits: ["is-closenav"],
  props: {
    /**
     * Prop thực hiện đóng mở nav
     */
    isCloseNav: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    BoxIcon,
  },
  mounted() {},
  data() {
    return {
      isShowMenu: false,
    };
  },
  methods: {
    /**
     * Hàm thực hiện đóng mở Nav
     * Author: Công Đoàn
     */
    closeNav(isClose) {
      this.$emit("is-closenav", isClose);
    },

    /**
     * Hàm thực hiện openmenu account
     */
    openMenuFeature() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
};
</script>

<style lang="css" scope>
@import url(../../styles/base/header.css);
.sizeIcon {
  height: 32px !important;
  width: 32px !important;
}

.menu__logout {
  line-height: 32px;
  text-align: center;
  right: 15px;
  top: 100%;
  height: 32px;
  width: 100px;
  background-color: #fff;
  border: 1px solid #babec5;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
}

.menu__logout:hover {
  background-color: #e9ebee;
  color: #44aa37;
}
</style>