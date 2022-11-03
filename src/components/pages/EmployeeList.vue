<template>
  <!-- Content Start Here -->
  <div class="content__label">
    <div
      class="content__title"
      @click="() => (this.isSelectedAll = !this.isSelectedAll)"
    >
      Nhân viên
    </div>
    <base-button
      :textButton="'Thêm mới'"
      classButton="hg--36px"
      @click="openEmployeeAdd()"
    ></base-button>
  </div>

  <!-- Content Main -->
  <div class="content__main shadow-normal">
    <!-- Cắc chức năng thêm mới tìm kiếm -->
    <div class="content__feature">
      <div class="content__feature--left">
        <div class="sticky" style="z-index: 11">
          <base-button
            :textButton="'Thực hiện'"
            classButton="button--outline flex--center"
            :showIcon="true"
            :classIcon="'icon__down5-black'"
            @click="openMultiDelete(this.isOpenMultiDelete)"
          >
          </base-button>
          <div class="button__child--sticky" v-show="isOpenMultiDelete">
            <div
              class="button__child--sticky__item"
              @click="isDeleteMultiEmployee()"
            >
              Xóa
            </div>
          </div>
        </div>
      </div>

      <div class="content__feature--right">
        <base-input
          :typeInput="'text'"
          :placeholderInput="'Tìm theo mã, tên nhân viên'"
          :classInputIcon="'icon__search--input'"
          v-model="this.paging.searchKey"
          @keyup="searchKey()"
        ></base-input>

        <base-box-icon
          :sizeIcon="'pd--0-6'"
          :classIcon="'icon__refresh'"
          title="Lấy lại dữ liệu"
          :id="'btnReload'"
          @click="pagingData()"
        ></base-box-icon>

        <base-box-icon
          :sizeIcon="'pd--0-6'"
          :classIcon="'icon__excel'"
          title="Xuất ra excel"
          @click="exportData()"
        ></base-box-icon>
      </div>
    </div>

    <!-- Content Table -->
    <div class="content__table">
      <div class="table" id="tbEmployeeList">
        <table>
          <thead>
            <th class="column--center column--25 table__checkbox">
              <base-checkbox
                :stateCheckAll="checkedAllTr(this.paging.pageNumber)"
                :ref="'checkedAll'"
                @click="selectAllTr()"
              ></base-checkbox>
            </th>
            <th class="column--150">Mã nhân viên</th>
            <th class="column--250">Tên nhân viên</th>
            <th class="column--125">Giới tính</th>
            <th class="column--center column--150">Ngày sinh</th>
            <th class="column--200" title="Số chứng minh thư nhân dân">
              Số CMND
            </th>
            <th class="column--250">Chức danh</th>
            <th class="column--250">Tên đơn vị</th>
            <th class="column--150">Số tài khoản</th>
            <th class="column--250">Tên ngân hàng</th>
            <th class="column--250" title="Chi nhánh tài khoản ngân hàng">
              Chi Nhánh TK ngân hàng
            </th>
            <th class="column--100 table__feature column--center column__fix">
              Chức năng
            </th>
            <th class="w--0"></th>
          </thead>
          <tbody>
            <tr
              v-for="(emp, index) in employee"
              :key="emp.employeeId"
              @dblclick="openEmployeeDetail(emp)"
              :class="{
                'tr--selecting': checkSelectingTr(emp.employeeId),
                'tr--selected': checkSelectedTr(emp.employeeId),
              }"
              @click="selectingTr(emp.employeeId)"
            >
              <td class="column--center table__checkbox">
                <base-checkbox
                  :ref="emp.employeeId"
                  :stateCheckAll="checkSelectedTr(emp.employeeId)"
                  @click="
                    selectedTr(emp.employeeId),
                      selectedSingleTr(index, emp.employeeId)
                  "
                ></base-checkbox>
              </td>
              <td>{{ emp.employeeCode }}</td>
              <td class="nowrap column--250">{{ emp.fullName }}</td>
              <td class="nowrap column--125">
                {{ Common.formatGender(emp.gender) }}
              </td>
              <td class="nowrap column--center column--150">
                {{ Common.formatDate(emp.dateOfBirth) }}
              </td>
              <td class="nowrap column--200">{{ emp.identityNumber }}</td>
              <td class="nowrap column--250">{{ emp.positionName }}</td>
              <td class="nowrap column--250">{{ emp.departmentName }}</td>
              <td class="nowrap column--150">{{ emp.bankAccount }}</td>
              <td class="nowrap column--250">{{ emp.bankName }}</td>
              <td class="nowrap column--250">{{ emp.bankBranch }}</td>
              <td class="table__feature column--center column__fix">
                <div class="dropdown flex--jc-end">
                  <button
                    class="dropdown__input pd--6-1-6-16 bgc--inherit"
                    @click="openEmployeeDetail(emp)"
                  >
                    <div class="clr--0075c0 fnt--w-700">Sửa</div>
                  </button>
                  <div
                    class="box__icon btn--open w--46px hg--36px btn-fix"
                    @click="toggleFeature(emp.employeeId)"
                  >
                    <div class="icon icon__down5"></div>
                  </div>
                </div>
              </td>
              <td class="w--0 column__sticky--right">
                <base-menu-context
                  :class="{ 'dp--none': !checkToggle(emp.employeeId) }"
                  @delete-employee="isDeleteEmployee(emp)"
                  @clone-employee="cloneEmployee(emp)"
                ></base-menu-context>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Content Footer -->
    <div class="content__footer">
      <!-- Tổng số bản ghi -->
      <div class="footer__left">
        <p>
          Tổng số: <span id="totalEmployee">{{ totalData }}</span> nhân viên
        </p>
      </div>

      <!-- Phân trang -->
      <div class="footer__right">
        <base-dropdown
          :typeDropdown="'dropdown__data--footer'"
          :valueDropdown="listSizePage"
          :textDropdown="'bản ghi trên 1 trang'"
          :classDropdown="'dropdown__item--footer'"
          :iconDropdown="'icon__down5-black'"
          :sizeIconDropdown="'hg--32px'"
          @select-data="pageResized"
          :selectedDropdown="this.paging.pageSize"
        ></base-dropdown>

        <div class="page__number">
          <button
            class="mgr--8 btnFrontPage"
            :class="{
              'button--disable': hidePreNextPage(this.pagePreNext.pre),
            }"
            @click="prePage()"
          >
            Trước
          </button>

          <div class="page__index__box">
            <base-page-index
              v-for="index in this.paging.pageTotal"
              :key="index"
              v-show="showPageIndex(index)"
              :pageIndex="index"
              :pageTitle="changeTitlePageIndex(index) ? '...' : index"
              @click="pageSelected(index)"
              :pageSelected="checkPageSelected(index)"
            ></base-page-index>
          </div>

          <button
            class="mgl--8 btnBehindPage"
            :class="{
              'button--disable': hidePreNextPage(this.pagePreNext.next),
            }"
            @click="nextPage()"
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Base Employee Detail -->
  <base-employee-detail
    @reload-data="pagingData"
    :modeDetail="modeDetail"
    :employeeSelectedId="selectedEmployee.employeeId"
    :employeeSelected="selectedEmployee"
    :isOpenThis="isOpenEmpDetail"
    @close-employeedetail="closeEmployeeAdd"
    @set-add-mode="setAddMode"
    @new-toast-message="openNewToast"
    @new-toast-error="openToastError"
    @toast-email-error="openToastError"
    @re-mode-add="reOpen"
    v-if="isOpenEmpDetail"
  ></base-employee-detail>

  <!-- Base Popup thông báo -->
  <base-popup
    v-if="isShowPopup"
    :classPopup="'icon__warning--regular'"
    :isDelete="true"
    @close-popup="closePopupNotification"
    :status="stausPopup"
    @delete-employee="deleteEmployee"
  ></base-popup>
  <base-loading v-if="isShowLoading"></base-loading>

  <!-- Base Toast thông báo -->
  <base-toast ref="toast"> </base-toast>
</template>

<script>
import BasePopup from "../base/BasePopup.vue";
import BaseDropdown from "../base/BaseDropDown.vue";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";
import BaseBoxIcon from "../base/BaseBoxIcon.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
import BaseMenuContext from "../base/BaseMenuContext.vue";
import BasePageIndex from "../base/BasePageIndex.vue";
import { listSizePage, selectedMode, deleteMode } from "../../JS/array.js";
import BaseEmployeeDetail from "../base/BaseEmployeeDetail.vue";
import BaseLoading from "../base/BaseLoading.vue";
import axios from "axios";
import { Common } from "../../JS/common.js";
import { Resource } from "../../JS/resource.js";
// import BaseToast from "../base/BaseToast.vue";

import EmployeeApi from "@/APIs/EmployeeApi.js";

export default {
  created() {
    // Hàm thực hiện load data mặc định
    this.pagingData();
  },
  setup() {
    return { Resource, listSizePage, Common, selectedMode, deleteMode };
  },
  components: {
    BasePageIndex,
    BasePopup,
    BaseButton,
    BaseInput,
    BaseBoxIcon,
    BaseCheckbox,
    BaseMenuContext,
    BaseDropdown,
    BaseEmployeeDetail,
    BaseLoading,
  },
  watch: {},
  data() {
    return {
      /**
       * Giá trị mặc định của pageSize = 10
       */
      selectedDropdown: 10,

      /**
       * Biến hiển thị loading
       */
      isShowLoading: false,

      /**
       * BIến lưu trữ danh sách nhân viên
       */
      employee: null,

      /**
       * Tổng số bản ghi
       */
      totalData: 0,

      /**
       * Xác định context menu đang được chọn
       */
      contextMenuSelected: "",

      /**
       * Xác định hàng đang được chọn trong bản
       */
      trSelecting: "",

      /**
       * Mảng lưu employeeId được chọn
       */
      trSelected: new Array(),

      /**
       * Biến đóng mở dialog
       */
      isOpenEmpDetail: false,

      /**
       * Biến lưu data của employee đang được chọn
       */
      selectedEmployee: {},

      /**
       * Biến xác định chế độ đang được chọn
       */
      modeDetail: 0,

      /**
       * Biến hiện thị thông báo, cảnh báo
       */
      isShowPopup: false,

      /**
       * Nội dung của thông báo, cảnh báo
       */
      stausPopup: "",

      /**
       * Biến lưu id của employee đang được xóa
       */
      idDeleteEmployee: "",

      /**
       * Biến lưu các giá trị của phân trang
       * (Số bản ghi trên 1 trang, chỉ số trang, tổng số trang, từ khóa tìm kiếm)
       */
      paging: {
        pageSize: 10,
        pageNumber: 1,
        pageTotal: 1,
        searchKey: "",
      },

      /**
       * Biến phân biệt nút chuyển trang trước hoặc sau
       */
      pagePreNext: {
        pre: 1,
        next: 2,
      },

      /**
       * Biến delay time khi thực hiện tìm kiếm
       */
      timeSearchDelay: null,

      /**
       * Biến lưu giá trị đóng mở context menu
       */
      isOpenMultiDelete: false,

      /**
       * Array lưu giá trị nhân viên được chọn theo list
       */
      listArrayTrSelected: new Array(),

      /**
       * Biến lưu chế độ xóa
       * (xóa đơn :1, xóa nhiều: 2)
       */
      deleteOption: deleteMode.single,

      /**
       * Biến lưu mảng 1 chiều lưu data nhân viên
       */
      singleTrSelected: [],
    };
  },
  methods: {
    /**
     * Hàm thực hiện mở EmployeeDetail
     * AUthor: Công Đoàn
     */
    openEmployeeDetail(value) {
      this.isOpenEmpDetail = true;
      this.selectedEmployee = value;
      this.modeDetail = selectedMode.edit;
    },

    /**
     * Hàm thực hiện clone Employee
     * Author: Công Đoàn
     */
    cloneEmployee(emp) {
      this.isOpenEmpDetail = true;
      this.selectedEmployee = emp;
      this.modeDetail = selectedMode.clone;
    },

    /**
     * Hàm thực hiện mở lại Employee Detail
     * Author: Công Đoàn
     */

    reOpen() {
      this.isOpenEmpDetail = false;
      this.modeDetail = selectedMode.add;
      setTimeout(() => {
        this.pagingData();
        this.openEmployeeAdd();
      }, 200);
    }, 

    /**
     * Hàm thực hiện đóng mở context menu
     * Author: Vũ Công Đoàn
     */
    toggleFeature(data) {
      if (this.contextMenuSelected == data) {
        this.contextMenuSelected = "";
      } else {
        this.contextMenuSelected = data;
      }
    },

    /**
     * Hàm thực hiện kiểm tra context menu đang đóng hay mở
     * Author: Công Đoàn
     */
    checkToggle(data) {
      if (this.contextMenuSelected == data) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Hàm thực hiện mở form thêm mới
     * Author: Công Đoàn
     */
    openEmployeeAdd() {
      this.isOpenEmpDetail = !this.isOpenEmpDetail;
      this.modeDetail = selectedMode.add;
    },

    /**
     * Hàm đóng form thêm mới
     * Author: Công Đoàn
     */
    closeEmployeeAdd() {
      this.isOpenEmpDetail = !this.isOpenEmpDetail;
    },

    /**
     * Hàm load lại toàn bộ data
     * Author: Công Đoàn
     */
    loadData() {
      var emp = this;
      emp.isShowLoading = true;
      axios
        .get("https://cukcuk.manhnv.net/api/v1/Employees")
        .then((respon) => {
          // console.log(respon.data);
          emp.employee = respon.data;
          this.totalData = respon.data.length;
          emp.isShowLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    /**
     * Hàm thực hiện xác định hàng đang được chọn
     * @param {string} data id của nhân viên đang được chọn
     * Author: Công Đoàn
     */
    selectingTr(data) {
      if (this.trSelecting == data) {
        this.trSelecting = "";
      } else {
        this.trSelecting = data;
      }
    },

    /**
     * Hàm thực hiện chọn hàng đang được chọn hoặc bỏ chọn
     * @param {string} data id của nhân viên đang được chọn
     * Author: Công Đoàn
     */
    checkSelectingTr(data) {
      if (this.trSelecting == data) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Hàm thực hiện nạp id data vào mảng 1 chiều
     * @param {number} index chỉ số của mảng 2 chiều đang được chọn
     * @param {string} employeeId id của nhân viên đang được chọn
     * Author: Công Đoàn
     */
    selectedSingleTr(index, employeeId) {
      index = index + (this.paging.pageNumber - 1) * this.paging.pageSize;
      this.singleTrSelected[index] = employeeId;
    },

    /**
     * Hàm thực hiện nap tất cả id data vào mảng 1 chiều
     * @param {number} index chỉ số của mảng 2 chiều đang được chọn
     * @param {string} data mảng id của nahan viên đang được chọn
     * Author: Công Đoàn
     */
    selectedAllSingeTr(index, data) {
      let i = (index - 1) * this.paging.pageSize;
      for (let dt of data) {
        this.singleTrSelected[i] = dt;
        i++;
      }
    },

    /**
     * Hàm thực hiện xóa tất cả id data khỏi mảng 1 chiều
     * @param {number} index chỉ số của mảng 2 chiều đang được chọn
     * Author: Công Doàn (17/08/2022)
     */
    deleteAllSingleTr(index) {
      let i = (index - 1) * this.paging.pageSize;
      let end = index * this.paging.pageSize;
      if (end > this.totalRecord) {
        end = this.totalRecord - 1;
      }
      for (i; i < end; i++) {
        this.singleTrSelected[i] = undefined;
      }
    },

    /**
     * Hàm thực hiện convert 1 chiều thành 2 chiều
     * Author: Công Đoàn
     */
    convertArraySingleToDouble() {
      let arrayLength = this.singleTrSelected.length;
      let index = 1;
      this.trSelected[index] = [];
      for (let i = 0; i <= arrayLength; i++) {
        if (i >= index * this.paging.pageSize) {
          index++;
          this.trSelected[index] = [];
        }
        if (this.singleTrSelected[i]) {
          this.trSelected[index].push(this.singleTrSelected[i]);
        }
      }
    },

    /**
     * Hàm thực hiện xác định các hàng đang được chon
     * @param {string} EmployeeId id của nhân viên đang được chọn
     * Author: Công Đoàn
     */
    selectedTr(EmployeeId) {
      let index = this.paging.pageNumber; // trang 1 là trang đang được chọn

      if (!this.trSelected[index]) {
        this.trSelected[index] = [];
      }

      for (const tr of this.trSelected[index]) {
        // a[1][array]
        if (EmployeeId == tr) {
          const temp = this.trSelected[index].filter(function (e) {
            return e !== EmployeeId;
          });
          this.trSelected[index] = temp;
          return;
        }
      }

      this.trSelected[1].push(EmployeeId);
    },

    /**
     * Hàm thực hiện chọn hoặc bỏ chọn các hàng đang được chọn
     * @param {string} EmployeeId id của nhân viên đang được chọn
     * Author: Công Đoàn
     */
    checkSelectedTr(EmployeeId) {
      let index = this.paging.pageNumber;
      if (!this.trSelected[index]) {
        this.trSelected[index] = [];
      }

      for (const tr of this.trSelected[index]) {
        if (EmployeeId == tr) {
          return true;
        }
      }
      return false;
    },

    /**
     * Hàm thực hiện chọn tất cả nhân viên trong bảng
     * Author: Công Đoàn
     */
    selectAllTr() {
      let index = this.paging.pageNumber;
      if (index == this.paging.pageTotal) {
        let maxSizeLastPage =
          this.totalData - (index - 1) * this.paging.pageSize;
        if (this.trSelected[index].length == maxSizeLastPage) {
          this.trSelected[index] = new Array();
          this.deleteAllSingleTr(index);
          return;
        }
      }
      if (this.trSelected[index].length != this.paging.pageSize) {
        this.trSelected[index] = [];
        for (const item of this.employee) {
          this.trSelected[index].push(item.employeeId);
        }
        this.selectedAllSingeTr(index, this.trSelected[index]);
        this.convertArraySingleToDouble();
      } else {
        this.trSelected[index] = new Array();
        this.deleteAllSingleTr(index);
        console.log(this.singleTrSelected);
      }
    },

    /**
     * Hàm thực hiện checked tất cả các ô checkox trong bảng
     * @param {number} index chỉ số của pagenumber đang được chọn
     * Author: Công Đoàn
     */
    checkedAllTr(index) {
      if (!this.trSelected[index]) {
        this.trSelected[index] = [];
      }

      let i = this.paging.pageNumber;
      if (index == i) {
        if (this.trSelected[i].length == this.paging.pageSize) {
          console.log(this.trSelected[i].length);
          return true;
        }
      }

      if (index == this.paging.pageTotal) {
        let maxSizeLastPage =
          this.totalData - (index - 1) * this.paging.pageSize;
        if (this.trSelected[i].length == maxSizeLastPage) {
          return true;
        }
      }
      return false;
    },

    /**
     * Hàm thực hiện hiển thị popup xóa một bản ghi
     * @param {Object} emp lớp nhân viên
     * Author: Công Đoàn
     */
    isDeleteEmployee(emp) {
      this.deleteOption = deleteMode.single;
      this.stausPopup = Resource.Delete_SingleEmployee(emp.employeeCode);
      this.idDeleteEmployee = emp.employeeId;

      // Hiển thị popup xóa
      this.isShowPopup = true;
    },

    /**
     * Hàm hiển thị popup yêu cầu xóa nhiều nhân viên
     * Author: Công Đoàn
     */
    isDeleteMultiEmployee() {
      this.deleteOption = deleteMode.multi;
      this.stausPopup = Resource.Delete_MultiEmployee;
      this.isShowPopup = true;
    },

    /**
     * Hàm thực hiện xóa một bản ghi đang được chọn
     * Author: Công Đoàn
     */
    async deleteSingleEmployee() {
      var me = this;
      await EmployeeApi.deleteEmployeeById(me.idDeleteEmployee)
        .then(function () {
          me.trSelected[me.paging.pageNumber] = me.trSelected[
            me.paging.pageNumber
          ].filter((item) => item !== me.idDeleteEmployee);
          setTimeout(() => {
            me.pagingData();
          }, 200);
          me.openNewToast(Resource.Delete_Complete);
          me.idDeleteEmployee = "";
        })
        .catch(function (err) {
          console.log(err);
        });
      me.isShowPopup = false;
    },

    /**
     * Hàm thực hiện xóa nhiều nhân viên đang được chọn
     * Author: Công Đoàn
     */
    async deleteMulti() {
      try {
        let me = this;
        await axios({
          headers: {
            "Content-type": "application/json",
          },
          method: "delete",
          url: `http://localhost:5281/api/v2/Employees/DeleteMulti`,
          data: JSON.stringify(me.trSelected[me.paging.pageNumber]),
        })
          .then(function () {
            me.isOpenMultiDelete = false;
            me.trSelected[me.paging.pageNumber] = [];
            me.pagingData();
            me.openNewToast(Resource.Delete_Complete);
          })
          .catch(function (err) {
            console.log(err);
          });
        me.isShowPopup = false;
      } catch (err) {
        console.log(err);
      }
    },

    deleteEmployee() {
      if (this.deleteOption == deleteMode.single) {
        this.deleteSingleEmployee();
      } else {
        this.deleteMulti();
      }
    },

    /**
     * Hàm thực hiện đóng popup thông báo
     * Author: Công Đoàn
     */
    closePopupNotification() {
      this.idDeleteEmployee = "";
      this.isShowPopup = false;
    },

    /**
     * Hàm set modeDetail về chế độ thêm
     * Author: Công Đoàn
     */

    setAddMode() {
      this.modeDetail = selectedMode.add;
    },

    /**
     * Hàm thực hiện phân trang
     * Author: Công Đoàn
     */

    async pagingData() {
      var emp = this;
      emp.isShowLoading = true;
      await EmployeeApi.getEmployeeFilter(
        emp.paging.pageSize,
        emp.paging.pageNumber,
        emp.paging.searchKey
      )
        .then((respon) => {
          emp.employee = respon.data.data;
          emp.paging.pageTotal = respon.data.totalPage;
          emp.totalData = respon.data.totalRecord;
          emp.isShowLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    /**
     * Hàm reset lại phân trang (chỉ mục, số bản ghi)
     * Author: Công Đoà
     */

    resetPaging() {
      this.paging.pageNumber = 1;
    },

    /**
     * Hàm thực hiện chuyển phân trang theo pageNumber
     * @param {number} data giá trị của pagenumber đang được chọn
     * Author: Công Đoàn
     */
    pageSelected(data) {
      this.paging.pageNumber = data;
      this.pagingData();
    },

    /**
     * Hàm thực hiện làm rõ page đang được chọn
     * @param {number} index giá trị của pagenumber đang được chọn
     * Author: Công Đoàn
     */
    checkPageSelected(index) {
      if (index == this.paging.pageNumber) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Hàm thực hiện chuyển phân trang theo số bản ghi
     * @param {number} value số bản ghi trên một trang
     * Author: Công Đoàn
     */

    pageResized(value) {
      this.resetPaging();
      this.paging.pageSize = value;
      this.pagingData();
      this.convertArraySingleToDouble();
      console.log(this.trSelected[1]);
    },

    /**
     * Hàm thực hiện chuyển sang trang tiếp theo
     * Author: Công Đoàn
     */

    nextPage() {
      if (this.paging.pageNumber < this.paging.pageTotal) {
        this.paging.pageNumber += 1;
        this.pagingData();
      }
    },

    /**
     * Hàm thực hiện chuyển về trang trước đó
     * Author: Công Đoàn
     */

    prePage() {
      if (this.paging.pageNumber > 1) {
        this.paging.pageNumber -= 1;
        this.pagingData();
      }
    },

    /**
     * Hàm thực hiện ẩn hiện nút trước và sau
     * @param {number} data 1|2 phân biệt nút trước và sau
     * Author: Công Đoàn
     */

    hidePreNextPage(data) {
      if (data == this.pagePreNext.pre) {
        if (this.paging.pageNumber == 1) {
          return true;
        }
      }
      if (data == this.pagePreNext.next) {
        if (this.paging.pageNumber == this.paging.pageTotal) {
          return true;
        }
      }
      return false;
    },

    /**
     * Hàm thực hiện thu gọn PageIndex
     * @param {number} index giá trị pagenumber đang được chọn
     * Author: Công Đoàn
     */

    showPageIndex(index) {
      let pageNumber = this.paging.pageNumber;
      let pageTotal = this.paging.pageTotal;

      if (index == 1 || index == pageTotal) {
        return true;
      }

      if (index >= pageNumber - 2 && index <= Number(pageNumber) + 2) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Hàm thực hiện đổi title PageIndex
     * @param {number} index giá trị của pagenumber đang được chọn
     * Author: Công Đoàn
     */

    changeTitlePageIndex(index) {
      let pageNumber = this.paging.pageNumber;

      let pageTotal = this.paging.pageTotal;
      if (index == 1 || index == pageTotal) {
        return false;
      }

      if (index == Number(pageNumber) + 2 || index == pageNumber - 2) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Hàm thực hiện tìm kiếm và phân trang theo tìm kiếm
     * Author: Công Đoàn
     */
    searchKey() {
      clearTimeout(this.timeSearchDelay);
      var self = this;
      this.timeSearchDelay = setTimeout(function () {
        self.resetPaging();
        self.pagingData();
      }, 1000);
    },

    /**
     * Hàm thực hiện mở toast message (value: status của toast)
     * @param {string} value status của toast
     * Author: Công Đoàn
     */

    openNewToast(value) {
      this.$refs.toast.showSuccessToast(value);
    },

    /**
     * Hàm thực hiện toast message thất bại
     * @param {string} value status của toast
     * Author: Công Đoàn
     */
    openToastError(value) {
      this.$refs.toast.showErrorToast(value);
    },

    /**
     * Hàm thực hiện xuất ra file excel
     * Author: Công Đoàn
     */
    exportData() {
      // fetch.open( `http://localhost:5281/api/v2/Employees/Export`, "Download");
      axios({
        url: "http://localhost:5281/api/v2/Employees/Export", //your url
        method: "GET",
        responseType: "blob", // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Danh_sach_nhan_vien.xlsx"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    },

    /**
     * Hàm thực hiên xóa mở context xóa nhiều
     * @param {boolean} value true, false điều kiện để nút xóa nhiều
     * Author: Công Đoàn
     */
    openMultiDelete(value) {
      if (this.trSelected[this.paging.pageNumber].length < 1) {
        return;
      } else {
        this.isOpenMultiDelete = !value;
      }
    },
  },
};
</script>

<style lang="css">
.hg--36px {
  height: 36px;
}
</style>