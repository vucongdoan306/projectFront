<template>
    <div class="dialog" id="dlgEmployeeDetail">
        <div class="employee__detail popup popup--add">
            <div class="popup__header">
                <div class="popup__label">
                    <div class="popup__title">Thông tin nhân viên</div>
                    <div class="checkbox__container">
                        <div class="checkbox">
                            <input type="checkbox" name="" id="">
                        </div>
                        <span>Là khách hàng</span>
                    </div>

                    <div class="checkbox__container">
                        <div class="checkbox">
                            <input type="checkbox" name="" id="">
                        </div>
                        <span>Là nhà cung cấp</span>
                    </div>
                    
                </div>

                <div class="popup__close">
                    <div class="box__icon pdr--6" title="Giúp">
                        <icon class="icon icon__question22"></icon>
                    </div>

                    <div class="box__icon">
                        <icon class="icon icon__close18 btn--close"></icon>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="popup__content">
                <!-- up -->
                <div class="popup__content__up w--full">
                    
                    <!-- left -->
                    <div class="popup__content__left w--50 pdr--26">
                        <div class="flex">
                            <div class="w--40 popup__row pdr--6">
                                <label for="">Mã <span>*</span></label>

                                <div class="input">
                                    <input type="text" class="required input__text NotEmpty" placeholder="Nhập mã" name="" id="txtEmployeeCode">
                                </div>

                            </div>
                            <div class="w--60 popup__row">
                                <label for="">Tên <span>*</span></label>

                                <div class="input">
                                    <input type="text" placeholder="Nhập tên" name="" class="input__text NotEmpty" id="txtFullName">
                                </div>

                            </div>
                        </div>

                        <div class="w--full popup__row">
                            <label for="">Đơn vị <span>*</span></label>
                            <div class="combobox" id="cbEmployeeDetail">
                                <input type="text" class="combobox__input input__text NotEmpty" id="txtSearchCombox"
                                    value="" >
                                <div class="box__icon btnOpenCombo">
                                    <div class="icon icon__arrow--down8"></div>
                                </div>
                                <div class="combobox__data">
                                    <div class="combobox__data--title">
                                        <div class="combobox__data--row1">Mã đơn vị</div>
                                        <div class="combobox__data--row2">Tên đơn vị</div>
                                    </div>
                                    <div class="combobox__data--menu">
                                        <div class="combobox__data--item">
                                            <div class="combobox__data--row1">VT66</div>
                                            <div class="combobox__data--row2">Phòng hành chính</div>
                                            <div class="department__code" hidden>45ac3d26-18f2-18a9-3031-644313fbb055</div>
                                        </div>
                                        <div class="combobox__data--item">
                                            <div class="combobox__data--row1">NL20</div>
                                            <div class="combobox__data--row2">Phòng Công Nghệ Thông Tin</div>
                                            <div class="department__code" hidden>3f8e6896-4c7d-15f5-a018-75d8bd200d7c</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>

                        <div class="w--full popup__row">
                            <label for="">Chức danh</label>

                            <div class="input">
                                <input type="text" placeholder="" name="" class="input__text NotEmpty" id="txtPositionName">
                            </div>

                        </div>
                    </div>

                    <!-- right -->
                    <div class="popup__content__right w--50">
                        <div class="w--full flex">
                            <div class="w--40 popup__row pdr--6">
                                <label for="">Ngày sinh</label>
                                <div class="input pd--0">
                                    <input type="text" class="celendar input__text NotEmpty" placeholder="DD/MM/YYYY" id="dtDateOfBirth" name="checkin"  value="" >
                                </div>
                            </div>

                            <div class="w--60 popup__row pdl--10">
                                <label for="">Giới tính</label>
                                <div class="flex--spbetween pdb--6">
                                    <div><input type="radio" name="gender" id="" value="0" checked> <span class="mgr--20 mgl--10"> Nam</span></div>
                                    <div><input type="radio" name="gender" id="" value="1"> <span class="mgr--20 mgl--10"> Nữ</span></div>
                                    <div><input type="radio" name="gender" id="" value="2"> <span class="mgr--20 mgl--10"> Khác</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="w--full flex">
                            <div class="w--60 popup__row pdr--6">
                                <label for="" title="Số chứng minh thư nhân dân">Số CMND</label>
                                <div class="input">
                                    <input type="text" name="" id="txtIdentityNumber" class="input__text NotEmpty">
                                </div>
                            </div>

                            <div class="w--40 popup__row">
                                <label for="">Ngày cấp</label>
                                <div class="input pd--0">
                                    <input type="text" class="celendar input__text" placeholder="DD/MM/YYYY" name="checkin"  value="" >
                                </div>
                            </div>
                        </div>

                        <div class="w--full popup__row">
                            <label for="">Nơi cấp</label>
                            <div class="input">
                                <input type="text" name="" id="" class="input__text">
                            </div>
                        </div>
                    </div>

                </div>

                <!-- down -->
                <div class="popup__content__down w--full mgt--32">
                    <div class="w--full  popup__row">
                        <label for="">Địa chỉ</label>
                        <div class="input">
                            <input type="text" name="" id="" class="input__text">
                        </div>
                    </div>

                    <div class="w--full flex">
                        <div class="w--25 popup__row pdr--6">
                            <label for="">ĐT di động</label>
                            <div class="input">
                                <input type="text" name="" id="" class="input__text">
                            </div>
                        </div>
                        <div class="w--25 popup__row pdr--6">
                            <label for="">ĐT cố định</label>
                            <div class="input">
                                <input type="text" name="" id="" class="input__text">
                            </div>
                        </div>
                        <div class="w--25 popup__row">
                            <label for="">Email</label>
                            <div class="input">
                                <input type="text" name="" id="" class="input__text">
                            </div>
                        </div>
                    </div>

                    <div class="w--full flex">
                        <div class="w--25 popup__row pdr--6">
                            <label for="">Tài khoản ngân hàng</label>
                            <div class="input">
                                <input type="text" name="" id="" class="input__text">
                            </div>
                        </div>
                        <div class="w--25 popup__row pdr--6">
                            <label for="">Tên ngân hàng</label>
                            <div class="input">
                                <input type="text" name="" id="" class="input__text">
                            </div>
                        </div>
                        <div class="w--25 popup__row">
                            <label for="">Chi nhánh</label>
                            <div class="input">
                                <input type="text" name="" id="" class="input__text">
                            </div>
                        </div>
                    </div>


                    
                </div>
                <div class="popup__line"></div>
                <!-- footer -->
                <div class="popup__footer">
                    <button class="button button--white pd--6-16 hg--34px btnNo">Hủy</button>
                    <div class="footer__right">
                        <button class="button mgr--8 button--white pd--6-16 hg--34px" id="btnSave">Cất</button>
                        <button class="button hg--34px pd--6-16" id="btnSaveAndAdd">Cất và Thêm</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    <div class="dialog" id="popupDanger">
        <div class="popup__warning">
            <div class="pd--32">
                <div class="popup__warning--content">
                    <div class="box__icon">
                        <div class="icon icon__warning--danger"></div>
                    </div>

                    <div class="popup__warning--title">
                        <span>
                            Thông tin không được để trống
                        </span>
                    </div>
                </div>

                <div class="popup__warning--line">

                </div>

                <div class="popup__warning--footer flex--center">
                    <button class="button pd--6-16 hg--34px btnNoKeep">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <div class="dialog" id="popupQuestion">
        <div class="popup__warning">
            <div class="pd--32">
                <div class="popup__warning--content">
                    <div class="box__icon">
                        <div class="icon icon__warning--question"></div>
                    </div>

                    <div class="popup__warning--title">
                        <span>
                            Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
                        </span>
                    </div>
                </div>

                <div class="popup__warning--line">

                </div>

                <div class="popup__warning--footer flex--spbetween">
                    <div>
                        <button class="button button--white pd--6-16 hg--34px btnNoKeep">Hủy</button>
                    </div>

                    <div>
                        <button class="button button--white pd--6-16 hg--34px btnCancel">Không</button>
                        <button class="button pd--6-16 hg--34px mgl--8 btnYes">Có</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="dialog" id="popupRegular">
        <div class="popup__warning">
            <div class="pd--32">
                <div class="popup__warning--content">
                    <div class="box__icon">
                        <div class="icon icon__warning--regular"></div>
                    </div>

                    <div class="popup__warning--title">
                        <span>
                            Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
                        </span>
                    </div>
                </div>

                <div class="popup__warning--line">

                </div>

                <div class="popup__warning--footer flex--jc-end">
                    <div>
                        <button class="button pd--6-16 hg--34px btnNo">Đồng ý</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="dialog" id="popupDelete">
        <div class="popup__warning">
            <div class="pd--32">
                <div class="popup__warning--content">
                    <div class="box__icon">
                        <div class="icon icon__warning--regular"></div>
                    </div>

                    <div class="popup__warning--title">
                        <span>
                            
                        </span>
                    </div>
                </div>

                <div class="popup__warning--line">

                </div>

                <div class="popup__warning--footer flex--spbetween">
                    <div>
                        <button class="button button--white pd--6-16 hg--34px btnNo">Không</button>
                    </div>

                    <div>
                        <button class="button pd--6-16 hg--34px mgl--8 btnYes">Có</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="loading dialog dialog--opened">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
    
</style>