<template>
    <div class="content__label">
        <div class="content__title">Nhân viên</div>
        <base-button :textButton="'Thêm mới nhân viên'" classButton="hg--36px" @click="openEmployeeAdd()"></base-button>
    </div>

    <div class="content__main">
        <div class="content__feature">
            <base-input :typeInput="'text'"
            :placeholderInput="'Tìm theo mã, tên nhân viên'"
            :classInputIcon="'icon__search--input'"
            ></base-input>


            <base-box-icon 
            :sizeIcon="'pd--0-6'"
            :classIcon="'icon__refresh'"
            title="Lấy lại dữ liệu"
            :id="'btnReload'"
            @click="loadData()"
            ></base-box-icon>
        </div>

        <div class="content__table">
            <div class="table" id="tbEmployeeList">
                <table>
                    <thead>
                        <th class="column--center column--25 table__checkbox"><base-checkbox></base-checkbox></th>
                        <th class="column--150">Mã nhân viên</th>
                        <th class="column--250">Tên nhân viên</th>
                        <th class="column--100">Giới tính</th>
                        <th class="column--center column--150">Ngày sinh</th>
                        <th class="column--200" title="Số chứng minh thư nhân dân">Số CMND</th>
                        <th class="column--250">Chức danh</th>
                        <th class="column--250">Tên đơn vị</th>
                        <th class="column--150">Số tài khoản</th>
                        <th class="column--250">Tên ngân hàng</th>
                        <th class="column--250">Chi Nhán TK ngân hàng</th>
                        <th class="column--100 table__feature column--center column__fix">Chức năng</th>
                        <th class="w--0"></th>
                    </thead>
                    <tbody>
                        <tr v-for="emp in employee" 
                        :key="emp.EmployeeId" 
                        @dblclick="openEmployeeDetail(emp)" 
                        :class="{'tr--selecting':checkSelectingTr(emp.EmployeeId),'tr--selected':checkSelectedTr(emp.EmployeeId)}" 
                        @click="selectingTr(emp.EmployeeId)">

                            <td class="column--center table__checkbox" >
                                <base-checkbox :ref="emp.EmployeeId" @click="selectedTr(emp.EmployeeId)"></base-checkbox>
                            </td>
                            <td>{{emp.EmployeeCode}}</td>
                            <td>{{emp.FullName}}</td>
                            <td>{{Common.formatGender(emp.Gender)}}</td>
                            <td class="column--center">{{Common.formatDate(emp.DateOfBirth)}}</td>
                            <td class="">{{emp.IdentityNumber}}</td>
                            <td>{{emp.PositionName}}</td>
                            <td>{{emp.DepartmentName}}</td>
                            <td>{{emp.BankNumber}}</td>
                            <td>{{emp.BankName}}</td>
                            <td>{{emp.BankBranch}}</td>
                            <td class="table__feature column--center column__fix">
                                <div class="dropdown flex--jc-end">
                                    <button class="dropdown__input pd--6-1-6-16 bgc--inherit">
                                        <div class="clr--0075c0 fnt--w-700">Sửa</div>
                                    </button>
                                    <div class="box__icon btn--open w--46px hg--36px btn-fix" @click="toggleFeature(emp.EmployeeId)">
                                        <div class="icon icon__down5 "></div>
                                    </div>
                                </div>
                                
                            </td>
                            <td class="w--0 column__sticky--right">
                                <base-menu-context :class="{'dp--none':!checkToggle(emp.EmployeeId)}"></base-menu-context>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="content__footer">
            <div class="footer__left">
                <p>Tổng số: <span id="totalEmployee">{{totalData}}</span> bản ghi</p>
            </div>

            <div class="footer__right">

                <base-dropdown 
                :typeDropdown="'dropdown__data--footer'"
                :valueDropdown="[10,20,30,50,100]"
                :textDropdown="'bản ghi trên 1 trang'"
                :classDropdown="'dropdown__item--footer'"
                :iconDropdown="'icon__down5-black'"
                :sizeIconDropdown="'hg--32px'"
                @select-data="selectDropdown"
                :selectedDropdown="selectedDropdown"
                ></base-dropdown>

                <div class="page__number">
                    <button class="mgr--8 button--disable btnFrontPage">Trước</button>

                    <div class="page__index__box">
                        <button class="page__index page--selected" value="1">
                            1
                        </button>
                        <button class="page__index" value="2">
                            2
                        </button>
                        <button class="page__index">
                            3
                        </button>
                        <button>
                            ...
                        </button>
                        <button class="page__index">
                            52
                        </button>
                    </div>
                    
                    <button class="mgl--8 btnBehindPage">Sau</button>
                </div>
            </div>
        </div>
    </div>
    <base-employee-detail
    @reload-data="loadData"
    :modeDetail="modeDetail" 
    :employeeSelectedId="selectedEmployee.EmployeeId" 
    :employeeSelected="selectedEmployee" 
    :isOpenThis="isOpenEmpDetail"
    @close-employeedetail="closeEmployeeAdd"
    v-if="isOpenEmpDetail"
    ></base-employee-detail>
    <base-loading v-if="isShowLoading"></base-loading>
</template>

<script>
import BaseDropdown from "../base/BaseDropDown.vue";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";
import BaseBoxIcon from "../base/BaseBoxIcon.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
import BaseMenuContext from "../base/BaseMenuContext.vue";
import {listSizePage,selectedMode} from "../../JS/array.js"
import BaseEmployeeDetail from "../base/BaseEmployeeDetail.vue";
import BaseLoading from "../base/BaseLoading.vue";
import axios from "axios";
import {Common} from "../../JS/common.js";

export default {
    created() {
        var emp = this;
        emp.isShowLoading = true;
        axios.get("https://cukcuk.manhnv.net/api/v1/Employees").then((respon) => {
            // console.log(respon.data);
            emp.employee = respon.data;
            this.totalData = respon.data.length;
            emp.isShowLoading = false;
        }).catch((err) => {
            console.log(err);
        });

    },
    setup(){
        return {listSizePage,Common,selectedMode};
    },
    components:{
        BaseButton,BaseInput,BaseBoxIcon,BaseCheckbox,BaseMenuContext,BaseDropdown,BaseEmployeeDetail,BaseLoading
    },
    data(){
        return {
            selectedDropdown: 10,
            isShowLoading: false,
            employee: null,
            totalData: 0,
            contextMenuSelected : "",
            trSelecting: "",

            // Mảng lưu giá trị được EmployeeId được check
            trSelected: new Array(),

            isOpenEmpDetail: false,
            selectedEmployee: {},
            modeDetail: 0,
        }
    },
    methods: {
        openEmployeeDetail(value){
            this.isOpenEmpDetail = true;
            this.selectedEmployee = value;   
            this.modeDetail = selectedMode.edit;
        },
        selectDropdown(value){
            this.selectedDropdown = value;
        },
        toggleFeature(data){
            if(this.contextMenuSelected == data){
                this.contextMenuSelected = "";
            }else{
                this.contextMenuSelected = data;
            }
        },
        checkToggle(data){
            if(this.contextMenuSelected == data){
                return true;
            }else{
                return false;
            }
        },
        toggle(data){
           return !data; 
        },
        openEmployeeAdd(){
            this.isOpenEmpDetail = !this.isOpenEmpDetail;
            this.modeDetail = selectedMode.add;
        },
        closeEmployeeAdd(){
            this.isOpenEmpDetail = !this.isOpenEmpDetail;

        },
        loadData(){
            var emp = this;
            emp.isShowLoading = true;
            axios.get("https://cukcuk.manhnv.net/api/v1/Employees").then((respon) => {
                // console.log(respon.data);
                emp.employee = respon.data;
                this.totalData = respon.data.length;
                emp.isShowLoading = false;
            }).catch((err) => {
                console.log(err);
            });

        },
        selectingTr(data){
            if(this.trSelecting == data){
                this.trSelecting = "";
            }else{
                this.trSelecting = data;
            }
        },
        checkSelectingTr(data){
            if(this.trSelecting == data){
                return true;
            }else{
                return false;
            }
        },
        //trSelected: Array 
        selectedTr(EmployeeId){
            for (const tr of this.trSelected) {
                if(EmployeeId == tr){
                    const temp = this.trSelected.filter(function(e) { return e !== EmployeeId })
                    this.trSelected = temp;
                    return;
                }
            }
            this.trSelected.push(EmployeeId);
        },
        checkSelectedTr(EmployeeId){
            for (const tr of this.trSelected){
                if(EmployeeId == tr){
                    return true;
                }
            }
            return false;
        }

    },
    
}
</script>

<style lang="css">
    .hg--36px{
        height: 36px;
    }
</style>