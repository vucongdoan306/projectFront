<template>

    <!-- Dialog Start -->

    <div class="dialog" id="dlgEmployeeDetail" @keydown="keyMonitor">
        <div class="employee__detail shadow-normal popup popup--add">

            <!-- Header Dialog Employee -->
            <div class="popup__header">
                <div class="popup__label">
                    <div class="popup__title">Thông tin nhân viên</div>
                </div>

                <div class="popup__close">
                    <base-box-icon :classIcon="'icon__question22'" :sizeIcon="'pdr--6'" title="Giúp"></base-box-icon>
                    <base-box-icon :classIcon="'icon__close18'" :title="'Đóng'" @click="validateCloseDialog()"></base-box-icon>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="popup__content">
                <!-- Content Up -->
                <div class="popup__content__up w--full">
                    
                    <!-- Content Up Left -->
                    <div class="popup__content__left w--50 pdr--26">
                        <div class="flex">
                            <div class="w--40 popup__row pdr--6">
                                <label for="">Mã <span>*</span></label>
                                <base-input
                                :tabIndex="1"
                                ref="focusCode"
                                :typeInput="'text'"
                                :placeholderInput="'Nhập mã'"
                                v-model="this.employee.employeeCode" 
                                :idInput="'txtEmployeeCode'"
                                @check-empty="this.isEmptyInput.employeeCode = validateBlurInput(this.employee.employeeCode)"
                                :classInput="{'border--error' : this.isEmptyInput.employeeCode}"
                                :titleInput="this.isEmptyInput.employeeCode ? Resource.Validate_EmptyCode:''"
                                @keydown.tab="preFocus($event)"
                                :maxLength="maxLength.code"
                                ></base-input>
                            </div>

                            <div class="w--60 popup__row">
                                <label for="">Tên <span>*</span></label>
                                <base-input
                                :tabIndex="2"
                                ref="focusName"
                                :typeInput="'text'"
                                :placeholderInput="'Nhập tên'"
                                :idInput="'txtFullName'"
                                v-model="this.employee.fullName"
                                @check-empty="this.isEmptyInput.employeeFullName = validateBlurInput(this.employee.fullName)"
                                :classInput="{'border--error' : this.isEmptyInput.employeeFullName}"
                                :titleInput="this.isEmptyInput.employeeFullName ? Resource.Validate_EmptyFullName : ''"
                                :maxLength="maxLength.fullname"
                                :isUpperBehindSpace="true"
                                ></base-input>
                            </div>
                        </div>

                        <div class="w--full popup__row">
                            <label for="">Đơn vị <span>*</span></label>
                            <BaseCombox
                            :tabIndex="3"
                            :controller="'Departments'"
                            :codeData="'departmentCode'"
                            :idData="'departmentId'"
                            :nameData="'departmentName'"
                            @bind-data="selectedItemCombobox"
                            @resetCombobox="resetCombobox"
                            ref="combobox"
                            :mainData="this.department"
                            :bindingData="this.departmentSelected"
                            />    
                        </div>

                        <div class="w--full popup__row">
                            <label for="">Chức danh</label>
                            <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="'txtPositionName'"
                                v-model="employee.positionName"
                                :tabIndex="4"
                                :maxLength="maxLength.default"
                                :isUppercaseFirst="true"
                            ></base-input>
                        </div>
                    </div>

                    <!-- Content Up right -->
                    <div class="popup__content__right w--50">
                        <div class="w--full flex">
                            <div class="w--40 popup__row pdr--6">
                                <label for="">Ngày sinh</label>
                                <base-datetime
                                :bindValue="employee.dateOfBirth"
                                @bind-value="(value)=>{this.employee.dateOfBirth = value}"
                                :tabIndex="5"
                                :typeDate="'date'"
                                :placeholderDate="'DD/MM/YYYY'"
                                :sizeDate="'default'"
                                :formatDate="'DD/MM/YYYY'"
                                ref="DateOfBirth"
                                >
                                </base-datetime>
                            </div>

                            <div class="w--60 popup__row pdl--10">
                                <label for="">Giới tính</label>
                                <div class="flex--spbetween pdb--6">
                                    <base-radio
                                    :tabIndex="6"
                                    :data="this.gender"
                                    :bindChecked="this.employee.gender"
                                    :spaceLabel="'radio__item__gender'"
                                    @bind-data="setEmployeeGender"
                                    >
                                    </base-radio>
                                </div>
                            </div>
                        </div>

                        <div class="w--full flex">
                            <div class="w--60 popup__row pdr--6">
                                <label for="" title="Số chứng minh thư nhân dân">Số CMND</label>
                                <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="'txtIdentityNumber'"
                                v-model="employee.identityNumber"
                                :tabIndex="9"
                                :maxLength="maxLength.identity"
                                ></base-input>
                            </div>

                            <div class="w--40 popup__row">
                                <label for="">Ngày cấp</label>
                                <base-datetime
                                :bindValue="employee.identityDate"
                                @bind-value="(value)=>{this.employee.identityDate = value}"
                                :tabIndex="10"
                                :typeDate="'date'"
                                :placeholderDate="'DD/MM/YYYY'"
                                :sizeDate="'default'"
                                :formatDate="'DD/MM/YYYY'"
                                ref="IdentityDate"
                                >
                                </base-datetime>
                            
                            </div>
                        </div>

                        <div class="w--full popup__row">
                            <label for="">Nơi cấp</label>
                            <base-input
                            :typeInput="'text'"
                            :placeholderInput="''"
                            :idInput="''"
                            v-model="employee.identityPlace"
                            :tabIndex="11"
                            :maxLength="maxLength.default"
                            :isUppercaseFirst="true"
                            ></base-input>
                        </div>
                    </div>

                </div>

                <!-- Content down -->
                <div class="popup__content__down w--full mgt--32">
                    <div class="w--full  popup__row">
                        <label for="">Địa chỉ</label>
                        <base-input
                        :typeInput="'text'"
                        :placeholderInput="''"
                        :idInput="''"
                        v-model="employee.address"
                        :tabIndex="12"
                        :maxLength="maxLength.default"
                        :isUppercaseFirst="true"
                        ></base-input>
                    </div>

                    <div class="w--full flex">
                        <div class="w--25 popup__row pdr--6">
                            <label for="" title="Điện thoại di động">ĐT di động</label>
                            <base-input
                            :typeInput="'text'"
                            :placeholderInput="''"
                            :idInput="''"
                            v-model="employee.phoneNumber"
                            :tabIndex="13"
                            :maxLength="maxLength.phone"
                            ></base-input>
                        </div>
                        <div class="w--25 popup__row pdr--6">
                            <label for="" title="Điện thoại cố định">ĐT cố định</label>
                            <base-input
                            :typeInput="'text'"
                            :placeholderInput="''"
                            :idInput="''"
                            :tabIndex="14"
                            v-model="employee.telephoneFax"
                            :maxLength="maxLength.phone"
                            ></base-input>
                        </div>
                        <div class="w--25 popup__row">
                            <label for="">Email</label>
                            <base-input
                            :typeInput="'text'"
                            :placeholderInput="''"
                            :idInput="''"
                            v-model="employee.email"
                            @check-empty="validateEmailBlur()"
                            ref="focusEmail"
                            :classInput="{'border--error' : !this.isEmptyInput.employeeEmail}"
                            :titleInput="!this.isEmptyInput.employeeEmail ? Resource.Validate_EmailNotValid :''"
                            :tabIndex="15"
                            :maxLength="maxLength.email"
                            ></base-input>
                        </div>
                    </div>

                    <div class="w--full flex">
                        <div class="w--25 popup__row pdr--6">
                            <label for="">Tài khoản ngân hàng</label>
                            <base-input
                            :typeInput="'text'"
                            :placeholderInput="''"
                            v-model="employee.bankAccount"
                            :idInput="''"
                            :tabIndex="16"
                            :maxLength="maxLength.default"
                            ></base-input>
                        </div>
                        <div class="w--25 popup__row pdr--6">
                            <label for="">Tên ngân hàng</label>
                            <base-input
                            :typeInput="'text'"
                            :placeholderInput="''"
                            :idInput="''"
                            v-model="employee.bankName"
                            :tabIndex="17"
                            :maxLength="maxLength.default"
                            ></base-input>
                        </div>
                        <div class="w--25 popup__row">
                            <label for="">Chi nhánh</label>
                            <base-input
                            :typeInput="'text'"
                            :placeholderInput="''"
                            :idInput="''"
                            v-model="employee.bankBranch"
                            :tabIndex="18"
                            :maxLength="maxLength.default"
                            ></base-input>
                        </div>
                    </div>
                </div>

                <!-- Content Line ngăn cách -->
                <div class="popup__line"></div>

                <!-- Content footer -->
                <div class="popup__footer">
                    <base-button
                    :classButton="'button--white pd--6-16'"
                    :textButton="'Hủy'"
                    @click="closeThisDialog()"
                    :tabIndex="21"
                    ></base-button>
                    <div class="footer__right">
                        <base-button
                        :classButton="'mgr--8 button--white pd--6-16'"
                        :textButton="'Lưu'"
                        :titleButton="'Lưu (Ctrl + S)'"
                        @click="btnSaveEmployee(this.modeSave.close)"
                        :tabIndex="19"
                        ></base-button>

                        <base-button
                        :classButton="'pd--6-16 button--red'"
                        :textButton="'Lưu và Thêm'"
                        @click="btnSaveEmployee(this.modeSave.add)"
                        :titleButton="'Lưu và thêm'"
                        :tabIndex="20"
                        ></base-button>

                        <base-button
                        :classButton="'w--0 pd--0'"
                        @click="btnSaveEmployee(this.modeSave.add)"
                        @keyup="reFocus()"
                        :tabIndex="22"
                        ref="buttonSaveAdd"
                        ></base-button>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <!-- Base Popup Thông báo -->
    <base-popup 
    v-if="isShowPopup" 
    :classPopup="selectedPopup" 
    :isQuestion="typePopup.question"
    :isDanger="typePopup.danger"
    :isDelete="typePopup.delete"
    :isRegular="typePopup.regular"
    :status="statusPopup"
    @close-popup="closePopupNotification"
    @close-dialog-detail="closeThisDialog(true)"
    @save-dialog-detail="btnSaveEmployee(this.modeSave.close)"
    ></base-popup>

    <!-- <base-toast ref="toasti"></base-toast> -->
</template>

<script>
import BaseCombox from "./BaseCombox.vue";
import BaseBoxIcon from "./BaseBoxIcon.vue";
import BaseInput from "./BaseInput.vue";
import BaseButton from "../base/BaseButton.vue";
import EmployeeApi from "@/APIs/EmployeeApi.js";
import {typeGender,selectedMode,maxLength} from "../../JS/array.js";
import {Common} from "../../JS/common.js";
import {Resource} from "../../JS/resource.js";
import BasePopup from "./BasePopup.vue";
import CommonAPI from "../../APIs/CommonApi.js";
import BaseRadio from "../base/BaseRadio.vue";
import BaseDatetime from "../base/BaseDatetime.vue";
// import BaseToast from "../base/BaseToast.vue";
// import axios from "axios";


export default {
    emits: ["re-mode-add","reModeAdd","close-employeedetail","reload-data","set-mode-add","setAddMode","new-toast-message","new-toast-error","toast-email-error"],
    setup() {
        return {Resource,typeGender,Common,selectedMode,maxLength};
    },
    components:{
        BaseDatetime,BaseBoxIcon,BaseInput,BaseButton,BasePopup,BaseCombox,BaseRadio,
    },
    async created() {
        var me = this;
        await CommonAPI.getAll("Departments").then((respon)=>{
            me.department = respon.data;
        });
        // Thực hiện bind data nếu là edit còn không là thêm mới 
        if(this.modeDetail == selectedMode.edit){
            await this.setEditEmployee(this.employeeSelectedId);
        }else if(this.modeDetail == selectedMode.add){
            await this.getNewEmployee();
        }else if(this.modeDetail == selectedMode.clone){
            await this.cloneEmployee(this.employeeSelectedId);
        }
    },
    mounted() {
        // Đưa focus về ô input đầu tiên
        this.$nextTick(() => {
            this.$refs.focusCode.setFocus();
        })
    },
    watch:{

        /**
         * Hàm theo dõi sự thay đổi của EmployeeId được chọn và thực hiện nếu đang ở edit
         * Author: Công Đoàn (20/07/2022)
         */
        employeeSelectedId: function(value){
            if(this.modeDetail == selectedMode.edit){
                this.setEditEmployee(value);
            }

            if(this.modeDetail == selectedMode.clone){
                this.cloneEmployee(value);
            }
        },

        /**
         * Hàm theo dõi sự thay đổi của mode được chọn và tạo mới code nếu đang ở add
         * Author: Công Đoàn (20/07/2022)
         */
        modeDetail: function(value){
            var me = this;
            if(value == selectedMode.add){
                EmployeeApi.getNewEmployeeCode().then((respon)=>{
                    me.employee.employeeCode = respon.data;
                    me.$refs.Male.isChecked = true;
                }).catch((err)=>{
                    console.log(err);
                    me.$refs.Male.isChecked = true;
                })
            }
        },

    },

    props:{
        isOpenThis:{
            type: Boolean,
            default: false,
        },
        employeeSelectedId: {
            type: String,
        },
        employeeSelected:{
            type: Object,
        },
        modeDetail: {
            type: [String, Number],
        }

    },
    methods: {
        /**
         * Hàm theo lấy ra data được chọn trong combobox
         * @param {object} data lưu danh department
         * Author: Công Đoàn (22/07/2022)
         */
        selectedItemCombobox(data){
            this.departmentSelected = data;
            this.employee.departmentId = data.departmentId;
        },

        /**
         * Hàm thực hiện chọn gender 
         * @param {number} value giá trị phân biệt giới tính
         * Author: Công Đoàn (29/07/2022)
         */
        setEmployeeGender(value){
            this.employee.Gender = value;
        },

        /**
         * Hàm thực hiện reset lại combobox
         * Author: Công Đoàn (29/07/2022)
         */
        resetCombobox(){
            this.employee.departmentId = "";
        },

        /**
         * Hàm thực hiện đóng dialog này
         * Author: Công Đoàn (22/07/2022)
         */
        closeThis(){
            this.$emit('close-employeedetail');
        },

        /**
         * Hàm thực hiện Lưu hoặc thêm mới nhân viên khi theo chế độ add hoặc edit
         * @param {number} mode biến xác định chế độ lưu
         * Author: Công Đoàn (22/07/2022)
         */
        btnSaveEmployee(mode){
            try{
                var me = this;
                // 1.Thực hiện validate và hiển thị popup thông báo nếu có lỗi xảy ra
                me.validateAllInput();
                if (this.employee.dateOfBirth)
                    this.employee.dateOfBirth = Common.formatYMD(
                    this.employee.dateOfBirth
                );
                if (this.employee.identityDate)
                    this.employee.identityDate = Common.formatYMD(
                    this.employee.identityDate
                );
                // 2. Nếu không có lỗi thì thực hiện Lưu hoặc thêm mới theo chế được
                if(me.validateComplete == true){
                    // Thực hiện thêm mới nếu ở chế độ thêm
                    if(me.modeDetail == selectedMode.add || me.modeDetail == selectedMode.clone){
                        EmployeeApi.saveEmployee(me.employee).then(function(){
                                 // Đóng form nếu chọn Lưu
                            if(mode==me.modeSave.close){
                                me.closeThisDialog(true);
                            }else{
                                // Giữ lại form nếu chọn Lưu và thêm mới
                                me.resetDetail();
                                me.$emit('re-mode-add');
                            }
                            me.$emit('reload-data');
                            let status = Resource.Add_Complete;
                            me.$emit('new-toast-message',status);

                        }).catch((err) => {
                            me.validateComplete = false;
                            switch(err.response.status) {
                                
                                case 400:
                                    me.resetPopupNotification();
                                    me.statusPopup = Resource.Validate_DuplicateCode(me.employee.employeeCode);
                                    me.typePopup.regular = true;
                                    me.selectedPopup = me.iconPopup.regular;
                                    me.isShowPopup = true;
                                    // me.$emit('new-toast-error',"Mã nhân viên <" + me.employee.employeeCode +"> đã tồn tại!");
                                    break;
                            }
                            console.log(err);
                        });

                    }else{
                        // Thực hiện cập nhật dữ liệu nếu ở chế độ edit
                        EmployeeApi.editEmployee(me.employeeSelectedId,me.employee).then(function(){
                            me.$emit('reload-data');
                            me.$emit('new-toast-message',Resource.Update_Complete);
                            if(mode==me.modeSave.close){
                                me.closeThisDialog(true);
                            }else{
                                me.resetDetail();
                                // me.$emit('set-mode-add');
                                me.$emit('re-mode-add');
                            }


                        }).catch((err) => {
                            console.log(err);
                            switch(err.response.status) {
                                case 400:
                                    me.resetPopupNotification();
                                    me.statusPopup = Resource.Validate_DuplicateCode(me.employee.employeeCode);
                                    me.typePopup.regular = true;
                                    me.selectedPopup = me.iconPopup.regular;
                                    me.isShowPopup = true;
                                    // me.$emit('new-toast-error',"Mã nhân viên <" + me.employee.employeeCode +"> đã tồn tại!");
                                    break;
                            }
                            console.log(err);
                        });
                        
                    }
                }
            }catch(err){
                console.log(err);
            }           
        },

        /**
         * Hàm thực hiện checked radio Gender khi người dùng chọn sửa
         * @param {number} value biến phân biệt giới tính
         * Author: Công Đoàn (25/07/2022)
         */
        checkBindGender(value){
            if(value == typeGender.male){
                this.$refs.Male.isChecked = true;
            }else if(value == typeGender.female){
                 this.$refs.Female.isChecked = true;
            } else if(value == typeGender.other){
                 this.$refs.Other.isChecked = true;
            } 
        },

        /**
         * Hàm thực hiện đổi dữ liệu trong employee.Gender (giới tính) khi người dùng chọn radio box 
         *  @param {number} value biến phân biệt giới tính
         * Author: Công Đoàn (25/07/2022)
         */
        checkGender(value){
            this.employee.Gender = value;
        },

        /**
         * Hàm thực hiện reset lại form
         * Author: Công Đoàn (25/07/2022)
         */
        resetDetail(){
            this.employee = {};
        },

        /**
         * Hàm thực hiện dóng dialog chi tiết nhân viên
         * @param {boolean} isShowDialog biến xác định đóng mở dialog
         * Author: Công Đoàn (25/07/2022)
         */
        closeThisDialog(isShowDialog){
            this.resetDetail();
            this.$emit('close-employeedetail',isShowDialog);
        },

        /**
         * Hàm gọi API lấy ra mã nhân viên mới
         * Author: Công Đoàn (25/07/2022)
         */
        async getNewEmployee(){
            var me = this;
            if(me.modeDetail == selectedMode.add){
                await EmployeeApi.getNewEmployeeCode().then((respon)=>{
                    me.employee.employeeCode = respon.data;
                    me.employee.gender = typeGender.male;
                }).catch((err)=>{
                    console.log(err);
                    me.employee.gender = typeGender.male;
                })
            }

            if(me.modeDetail == selectedMode.clone){
                await EmployeeApi.getNewEmployeeCode().then((respon)=>{
                    me.employee.employeeCode = respon.data;
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },

        /**
         * Hàm thực hiện binding dữ liệu lên form khi chọn edit từ bảng
         * @param {string} empId biến lưu id của nhân viên 
         * Author: Công Đoàn (25/07/2022)
         */
        async setEditEmployee(empId){
            var me = this;
            if(empId){
                await EmployeeApi.getEmployeeByID(empId).then((respon)=>{
                    me.employee = respon.data[0];
                    if(me.employee.departmentId){
                        CommonAPI.getByID("Departments",me.employee.departmentId).then((res)=>{
                            me.departmentSelected = res.data[0];
                        }).catch((er)=>{
                            console.log(er);
                        });
                    }
                    // Ép kiểu JSON để so sánh sư thay đổi
                    const jsonBind = JSON.stringify(me.employee)
                    me.bindEmployee = jsonBind;
                    if(me.modeDetail == selectedMode.clone){
                        me.getNewEmployee();
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }else{
                me.employee={};
            }
        },

        /**
         * Hàm thực hiện nhân bản employee được chọn
         * @param {string} empId biến lưu id của nhân viên 
         * Author: Công Đoàn (15/08/2022)
         */
        cloneEmployee(empId){
            this.setEditEmployee(empId);
            // this.getNewEmployee();
        },

        /**
         * Hàm thực hiện reset object + status popup thông báo được các tham số về mặc định
         * Author: Công Đoàn (25/07/2022)
         */
        resetPopupNotification(){
            this.typePopup.danger = false;
            this.typePopup.question = false;
            this.typePopup.regular = false;
            this.typePopup.delete = false;
            this.selectedPopup = "";
            this.statusPopup = "";
        },

        /**
         * Hàm thực hiện đóng popup thông báo
         * Author: Công Đoàn(25/07/2022)
         */
        closePopupNotification(){
            this.resetPopupNotification()
            this.isShowPopup = false;
            this.$refs[this.focusEnd].setFocus();
        },

        /**
         * Hàm thực hiện validate kiểm tra ô input trống khi blur
         * @param {string} value text trong thẻ input
         * Author: Công Đoàn (25/07/2022)
         */
        validateBlurInput(value){
            if(!value){
                return true;
            }else{
                return false;
            }
        },



        /**
         * Hàm validate tất cả sau khi thực hiện Lưu
         * Author: Công Đoàn (25/07/2022)
         */

        validateAllInput(){
            try{
                // set validate trả true mặc định
                this.validateComplete = true;
                // Nếu mã hoặc tên hoặc đơn vị trống thì validate trả vê false và hiển thị thông báo cho người dùng
                if(!this.employee.employeeCode){
                    this.isEmptyInput.employeeCode = true;
                    this.validateComplete = false;
                }else{
                    this.isEmptyInput.employeeCode = false;
                }

                if(!this.employee.fullName){
                    this.isEmptyInput.employeeFullName = true;
                    this.validateComplete = false;
                }else{
                    this.isEmptyInput.employeeFullName = false;
                }

                if(!this.employee.departmentId){
                    this.$refs.combobox.validateBlur();
                    this.validateComplete = false;
                }

                if(this.employee.dateOfBirth){
                    if(!Common.validateDate(this.employee.dateOfBirth)){
                        this.isEmptyInput.employeeDateOfBirth = false;
                        this.validateComplete = false;
                    }else{
                        this.isEmptyInput.employeeDateOfBirth = true;
                    }
                }

                if(this.employee.identityDate){
                    if(!Common.validateDate(this.employee.identityDate)){
                        this.validateComplete = false;
                    }
                }

                if(this.employee.email){
                    if(!this.validateEmail(this.employee.email)){
                        this.isEmptyInput.employeeEmail = false;
                        this.validateComplete = false;
                    }else{
                        this.isEmptyInput.employeeEmail = true;
                    }
                }



                // HIển thị thông báo nếu có lỗi xảy ra (khi mã hoặc tên hoặc đơn vị trống)
                // 1. Nếu employeeCode trống thì hiển thị thông báo
                // 2. Nếu tên để trống thì hiển thị thông báo
                // 3. Nếu departmentID trống thì hiển thị thông báo
                // 4. Nếu Email không đúng định dạng thì hiển thị thông báo
                if(!this.employee.employeeCode == true){
                    this.showPopupDanger("focusCode",Resource.Validate_EmptyCode);
                }else if(!this.employee.fullName == true){
                    this.showPopupDanger("focusName",Resource.Validate_EmptyFullName);
                }else if(!this.employee.departmentId){
                    this.showPopupDanger("combobox",Resource.Validate_EmptyDepartment);
                }else if(!Common.validateDate(this.employee.dateOfBirth) && this.employee.dateOfBirth){
                    this.showPopupDanger("DateOfBirth",Resource.Validate_DateBigger("Ngày sinh"));
                }else if(!Common.validateDate(this.employee.identityDate) && this.employee.identityDate){
                    this.showPopupDanger("IdentityDate",Resource.Validate_DateBigger("Ngày cấp"));
                }else if(this.employee.email && !this.validateEmail(this.employee.email)){
                    this.showPopupDanger("focusEmail",Resource.Validate_EmailNotValid);
                }
            }catch(err){
                console.log(err);
            }          
        },

        /**
         * Hàm show popup cảnh báo
         * @param {string} ref refs của ô bị lỗi 
         * @param {string} status thông báo lỗi
         * Author: Công Đoàn (28/07/2022)
         */
        showPopupDanger(ref,status){
            this.focusEnd = ref;
            this.resetPopupNotification();
            this.typePopup.danger = true;
            this.selectedPopup = this.iconPopup.danger;
            this.statusPopup = status;
            this.isShowPopup = true;
        },

        /**
         * Hàm show popup hỏi
         * Author: Công Đoàn (28/07/2022)
         */
        showPopupQuestion(status){
            this.isValidateClose = false;
            this.typePopup.question = true;
            this.selectedPopup = this.iconPopup.question;
            this.statusPopup = status;
            this.isShowPopup = true;
        },



        /**
         * Hàm thực hiện kiểm tra có tồn tại dữ liệu khi thực hiện event đóng form
         * Author: Công Đoàn (25/07/2022)
         */

        validateCloseDialog(){
            // 1.Set giá trị validate close là true mặc định
            this.isValidateClose = true;

            // 2.Nếu mode là edit thì kiểm tra xem dữ liệu có khác với dữ liệu ban đầu được bind lên form không nếu khác thì thông báo có muốn Lưu không 
            if(this.modeDetail == selectedMode.edit){

                if( JSON.stringify(this.employee) != this.bindEmployee){
                    this.showPopupQuestion(Resource.Data_Change);
                }
            }else if(this.employee.employeeCode||this.employee.fullName || this.employee.departmentId){
                // 3. Kiểm tra nếu mode là add thì xem dữ liệu có rỗng không nếu không thì thông báo có muốn Lưu không
                this.showPopupQuestion(Resource.Data_Change);

            }
            // 4. Nếu không có data hoặc data không bị thay đổi thì đóng dialog
            if(this.isValidateClose == true){
                this.closeThisDialog(true);
            }
        },    


        /**
         * Hàm thực hiện vòng lặp focus
         * Author: Công Đoàn (02/08/2022)
         */
        reFocus(){
            this.$nextTick(() => {
                this.$refs.focusCode.setFocus();
            })
                
        },

        /**
         * Thực hiện ngược vòng lặp focus
         * Author: Công Đoàn (02/08/2022)
         */
        preFocus(e){
            if(e.shiftKey){
                this.$refs.buttonSaveAdd.setFocus();
            }
        },

        /**
         * Mô tả: Sự kiện thay đổi khi chọn ngày sinh
         * Author: Công Đoàn (25/07/2022)
         */

        onDateBoxChanged(e){
            this.employee.dateOfBirth = e.value;
        },

        /**
         * Hàm thực hiện validateEmail
         * @param {string} email Email của employee
         * Author: Công Đoàn (30/07/2022)
         */

        validateEmail(email) {
            if(!email){
                return true;
            }
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {// eslint-disable-line
                return true;
            } else {
                return false;
            }
        },

        /**
         * Hàm thực hiện validate email khi blur
         * Author: Công Đoàn (14/08/2022)
         */
        validateEmailBlur(){
            this.isEmptyInput.employeeEmail = this.validateEmail(this.employee.email);
        },

        /**
         * Hàm thực hiện validate date
         * @param {date} date biến lưu giá trị ngày tháng của employee
         * @returns Giá trị đúng sai khi validate ngày đúng định dạng
         * Author: Công Đoàn (14/08/2022)
         */

        checkDate(date){
            console.log(this.$refs.date.value);
            if(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(Common.formatDate(date))){// eslint-disable-line
               console.log(true);
               console.log(this.employee.dateOfBirth);
               return true;
            }else{
                console.log(false);
               console.log(date);

                return false;
            }
        }, 

        /**
         * Hàm thực hiện các sự kiện của form
         * Author: Công Đoàn (18/08/2022)
         */
        keyMonitor(e){
            if(e.key === "Escape"){
                console.log(1000);
                this.validateCloseDialog();
            }
            if(e.keyCode===83 && e.ctrlKey){
                e.preventDefault();
                this.btnSaveEmployee(this.modeSave.close);
            }
        }
        
    },
    data(){
        return {

            /**
             * Object lưu data đơn vị được chọn
             */
            departmentSelected: [],

            /**
             * Biến chứa data của toàn bộ đơn vị
             */
            department: [],

            /**
             * Object lưu data employee được chọn
             */
            employee: {},

            /**
             * Biến lưu giá trị validate
             */
            validateComplete: false,

            /**
             * Biến đóng mở popup
             */
            isShowPopup: false,
            
            /**
             * Object phân biệt loại popup
             */
            typePopup:{
                danger: false,
                question: false,
                regular: false,
                delete: false,
            },

            /**
             * Object chứa class icon popup
             */
            iconPopup:{
                danger: "icon__warning--danger",
                question: "icon__warning--question",
                regular: "icon__warning--regular",
                delete: "icon__warning--regular",
            },

            /**
             * Object chứa loại popup đang được chọn
             */
            selectedPopup: "",

            /**
             * Status của popup thông báo
             */
            statusPopup: "",

            /**
             * Object lưu giá trị sau khi validate blur input
             */
            isEmptyInput:{
                employeeCode: false,
                employeeFullName: false,
                employeeDepartment: false,
                employeeEmail: true,
                employeeDateOfBirth: false,
                employeeIdentityDate: false,
            },

            /**
             * Object lựa chọn Lưu hoặc Lưu và thêm
             */
            modeSave:{
                close: 1,
                add: 2,
            },

            /**
             * Biến lưu sự lựa chọn Lưu hoặc Lưu và thêm
             */
            modeSaveSelected: 1,

            /**
             * Biến lưu giá trị validate đóng form
             */
            isValidateClose: true,

            /**
             * Biến lưu ref input cần được focus
             */
            focusEnd: "focusCode",

            /**
             * Array lưu object giá trị của giới tính
             */
            gender: [{value: 0, name: "Nam"},{value: 1, name: "Nữ"},{value: 2, name: "Khác"}],

            /**
             * Biến lưu giá trị đầu tiên data được đẩy lên
             */
            bindEmployee: {},
        }
    }
}
</script>

<style lang="css">
    
</style>