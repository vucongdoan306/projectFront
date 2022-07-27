<template>
    <div class="dialog" id="dlgEmployeeDetail">
        <div class="employee__detail popup popup--add">
            <div class="popup__header">
                <div class="popup__label">
                    <div class="popup__title">Thông tin nhân viên</div>
                    <div class="checkbox__container">
                        <base-checkbox></base-checkbox>
                        <span>Là khách hàng</span>
                    </div>

                    <div class="checkbox__container">
                        <base-checkbox></base-checkbox>
                        <span>Là nhà cung cấp</span>
                    </div>
                    
                </div>

                <div class="popup__close">
                    <base-box-icon :classIcon="'icon__question22'" :sizeIcon="'pdr--6'" title="Giúp"></base-box-icon>
                    <base-box-icon :classIcon="'icon__close18'" title="Đóng" @click="closeThisDialog()"></base-box-icon>
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

                                <base-input
                                :typeInput="'text'"
                                :placeholderInput="'Nhập mã'"
                                v-model="this.employee.EmployeeCode" 
                                :idInput="'txtEmployeeCode'"
                                ></base-input>

                            </div>

                            <div class="w--60 popup__row">
                                <label for="">Tên <span>*</span></label>

                                <base-input
                                :typeInput="'text'"
                                :placeholderInput="'Nhập tên'"
                                :idInput="'txtFullName'"
                                v-model="this.employee.FullName"

                                ></base-input>

                            </div>
                        </div>

                        <div class="w--full popup__row">
                            <label for="">Đơn vị <span>*</span></label>
                            <base-combobox 
                            :dataCombobox="department" 
                            @select-item="selectedItemCombobox" 
                            :dataSelected="departmentSelected"

                            ></base-combobox>
                            
                        </div>

                        <div class="w--full popup__row">
                            <label for="">Chức danh</label>

                            <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="'txtPositionName'"
                                v-model="employee.PositionName"
                            ></base-input>

                        </div>
                    </div>

                    <!-- right -->
                    <div class="popup__content__right w--50">
                        <div class="w--full flex">
                            <div class="w--40 popup__row pdr--6">
                                <label for="">Ngày sinh</label>
                                <base-date class="mt-16" :labelMode="'hidden'" :stylingMode="'outlined'" v-model="employee.DateOfBirth" @onValueChanged="onDateBoxChanged"></base-date>

                            </div>

                            <div class="w--60 popup__row pdl--10">
                                <label for="">Giới tính</label>
                                <div class="flex--spbetween pdb--6">
                                    <base-radiobox
                                    :label="'Nam'"
                                    :name="'Gender'"
                                    :value="typeGender.male"
                                    v-model="employee.Gender"
                                    @change="checkGender(typeGender.male)"
                                    ref="Male"
                                    :checked="true"
                                    ></base-radiobox>

                                    <base-radiobox
                                    :label="'Nữ'"
                                    :name="'Gender'"
                                    :value="typeGender.female"
                                    v-model="employee.Gender"
                                    @change="checkGender(typeGender.female)"
                                    ref="Female"
                                    ></base-radiobox>

                                    <base-radiobox
                                    :label="'Khác'"
                                    :name="'Gender'"
                                    :value="typeGender.other"
                                    v-model="employee.Gender"
                                    @change="checkGender(typeGender.other)"
                                    ref="Other"
                                    ></base-radiobox>
                                    
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
                                    v-model="employee.IdentityNumber"
                                    
                                ></base-input>
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
                            <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="''"
                            ></base-input>
                        </div>
                    </div>

                </div>

                <!-- down -->
                <div class="popup__content__down w--full mgt--32">
                    <div class="w--full  popup__row">
                        <label for="">Địa chỉ</label>
                        <base-input
                            :typeInput="'text'"
                            :placeholderInput="''"
                            :idInput="''"
                        ></base-input>
                    </div>

                    <div class="w--full flex">
                        <div class="w--25 popup__row pdr--6">
                            <label for="">ĐT di động</label>
                            <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="''"
                            ></base-input>
                        </div>
                        <div class="w--25 popup__row pdr--6">
                            <label for="">ĐT cố định</label>
                            <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="''"
                            ></base-input>
                        </div>
                        <div class="w--25 popup__row">
                            <label for="">Email</label>
                            <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="''"
                            ></base-input>
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
                            <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="''"
                            ></base-input>
                        </div>
                        <div class="w--25 popup__row">
                            <label for="">Chi nhánh</label>
                            <base-input
                                :typeInput="'text'"
                                :placeholderInput="''"
                                :idInput="''"
                            ></base-input>
                        </div>
                    </div>


                    
                </div>
                <div class="popup__line"></div>
                <!-- footer -->
                <div class="popup__footer">
                    <base-button
                    :classButton="'button--white pd--6-16'"
                    :textButton="'Hủy'"
                    ></base-button>
                    <div class="footer__right">
                        <base-button
                        :classButton="'mgr--8 button--white pd--6-16'"
                        :textButton="'Cất'"
                        @click="btnSaveEmployee()"
                        ></base-button>

                        <base-button
                        :classButton="'pd--6-16'"
                        :textButton="'Cất và Thêm'"
                        ></base-button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import BaseDate from "./BaseDate.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseBoxIcon from "./BaseBoxIcon.vue";
import BaseInput from "./BaseInput.vue";
import BaseRadiobox from "../base/BaseRadiobox.vue";
import BaseButton from "../base/BaseButton.vue";
import BaseCombobox from "../base/BaseCombobox.vue";
import {typeGender,selectedMode} from "../../JS/array.js";
import {Common} from "../../JS/common.js";
import axios from "axios";
// import BaseTest from "../base/BaseTest.vue";

export default {
    setup() {
        return {typeGender,Common,selectedMode};
    },
    created() {
        var depart = this;
        axios.get("https://cukcuk.manhnv.net/api/v1/Departments").then((respon) => {
            // console.log(respon.data);
            depart.department = respon.data;
            // this.totalEmployee = respon.data.length;
            // console.log(this.totalEmployee);
        }).catch((err) => {
            console.log(err);
        });

    },
    mounted() {
        if(this.modeDetail == selectedMode.edit){
            this.setEditEmployee(this.employeeSelectedId);
        }else{
            this.getNewEmployee();
        }
    },
    watch:{
        employeeSelectedId: function(value){
            // var me = this;
            // if(value){
            //     console.log(value);
            //     axios.get(`https://cukcuk.manhnv.net/api/v1/Employees/${me.employeeSelectedId}`).then((respon) => {
            //         me.employee = respon.data;
            //         // console.log(me.employee.FullName);
            //         // me.employee.DateOfBirth = formatDate(me.employee.DateOfBirth);
            //         // me.employee.PositionName = me.employeeDetail.PositionName;
            //         me.checkBindGender(me.employee.Gender)
            //         me.employee.DepartmentName = me.employeeSelected.DepartmentName;
            //         me.departmentSelected.DepartmentName = me.employee.DepartmentName;
            //         me.departmentSelected.DepartmentId = me.employee.DepartmentId;
            //         me.departmentSelected.DepartmentCode = me.employee.DepartmentCode;
            //     }).catch((err) => {
            //         console.log(err);
            //     });
            // }else{
            //     // me.$refs.Male.isChecked = true;
            //     me.employee={};
            // }
            this.setEditEmployee(value);
        },
        modeDetail: function(value){
            var me = this;
            // console.log(10);
            if(value == selectedMode.add){
                axios.get(`https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode`).then((respon) => {
                    me.employee.EmployeeCode = respon.data;
                    me.$refs.Male.isChecked = true;
                }).catch((err) => {
                    console.log(err);
                    me.$refs.Male.isChecked = true;
                });
            }
        }
    },
    components:{
        BaseCheckbox,BaseBoxIcon,BaseInput,BaseRadiobox,BaseButton,BaseDate,BaseCombobox
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
        selectedItemCombobox(data){
            this.departmentSelected = data;
        },
        closeThis(){
            this.$emit('close-employeedetail');
        },
        btnSaveEmployee(){
            try{
                var me = this;
                me.employee.DepartmentId = this.departmentSelected.DepartmentId;
                // this.validateData();
                if(this.validateComplete == true){
                    if(this.modeDetail == selectedMode.add){
                        axios.post(`https://cukcuk.manhnv.net/api/v1/Employees`,me.employee).then(function () {
                            me.closeThisDialog(true);
                            me.$emit('reload-data');
                        }).catch((err) => {
                            // switch(err.response.status) {
                            //     case 500:
                            //        me.checkDuplicate = "Mã nhân viên <" + me.employee.EmployeeCode +"> đã tồn tại trong hệ thống. Vui lòng kiểm tra lại";
                            //        me.isShowPopup.regular = true;
                            //        break;
                            // }
                            console.log(err);
                        });
                    }else{
                        axios.put(`https://cukcuk.manhnv.net/api/v1/Employees/${me.employeeSelectedId}`,me.employee).then(function () {
                            me.closeThisDialog(true);
                            me.$emit('reload-data');
                        }).catch((err) => {
                            console.log(err);
                        });
                    }
                }
            }catch(err){
                console.log(err);
            }           
        },

        checkBindGender(value){
            if(value == typeGender.male){
                this.$refs.Male.isChecked = true;
            }else if(value == typeGender.female){
                 this.$refs.Female.isChecked = true;
            } else if(value == typeGender.other){
                 this.$refs.Other.isChecked = true;
            } 
        },

        checkGenderDefault(){
            setTimeout(() => {
                this.$refs.Male.isChecked = true;
            }, 2000);
        },

        checkGender(value){
            this.employee.Gender = value;
        },

        resetDetail(){
            this.employee = {};
            // this.isEmptyInput.code = false;
            // this.isEmptyInput.name = false;
            // this.isEmptyInput.department = false;
        },
        closeThisDialog(isShowDialog){
            this.resetDetail();
            this.$emit('close-employeedetail',isShowDialog);
        },

        getNewEmployee(){
            var me = this;
            if(me.modeDetail == selectedMode.add){
                console.log(me.modeDetail );
                axios.get(`https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode`).then((respon) => {
                    me.employee.EmployeeCode = respon.data;
                    me.$refs.Male.isChecked = true;
                }).catch((err) => {
                    console.log(err);
                    me.$refs.Male.isChecked = true;

                });
            }
        },
        setEditEmployee(empId){
            var me = this;
            if(empId){
                console.log(empId);
                axios.get(`https://cukcuk.manhnv.net/api/v1/Employees/${empId}`).then((respon) => {
                    me.employee = respon.data;
                    // console.log(me.employee.FullName);
                    // me.employee.DateOfBirth = formatDate(me.employee.DateOfBirth);
                    // me.employee.PositionName = me.employeeDetail.PositionName;
                    me.checkBindGender(me.employee.Gender)
                    me.employee.DepartmentName = me.employeeSelected.DepartmentName;
                    me.departmentSelected.DepartmentName = me.employee.DepartmentName;
                    me.departmentSelected.DepartmentId = me.employee.DepartmentId;
                    me.departmentSelected.DepartmentCode = me.employee.DepartmentCode;
                }).catch((err) => {
                    console.log(err);
                });
            }else{
                // me.$refs.Male.isChecked = true;
                me.employee={};
            }
        }
    },
    data(){
        return {
                departmentSelected: {
                DepartmentName: "",
                DepartmentCode: "",
                DepartmentId: "",
            },
            employee: {},
            department: {},
            validateComplete: true,

        }
    }
}
</script>

<style lang="css">
    
</style>