import BaseAPIConfig from "./BaseApiConfig";

class EmployeeAPI {
    controller = "Employees";
    /**
    * Mô tả : Lấy nhân viên theo ID
    * Author: Công Đoàn 
    */
    getEmployeeByID(empID) {
        return BaseAPIConfig.get(`${this.controller}/${empID}`);
    }
    /**
    * Mô tả : Xóa nhân viên theo ID
    * Author: Công Đoàn 
    */
    deleteEmployeeById(empID) {
        return BaseAPIConfig.delete(`${this.controller}/${empID}`);
    }

    /**
    * Mô tả : Cất thông tin nhân viên
    * Author: Công Đoàn 
    */
    saveEmployee(emp) {
        return BaseAPIConfig.post(`${this.controller}`, emp);
    }
    /**
    * Mô tả : Sửa Employee
    * Author: Công Đoàn 
    */
    editEmployee(id, emp) {
        return BaseAPIConfig.put(`${this.controller}/${id}`, emp);
    }
    /**
    * Mô tả : Mô tả code
    * Author: Công Đoàn 
    */
    async getAll() {
        return await BaseAPIConfig.get(`${this.controller}`);
    }
    /**
    * Mô tả : Api filter
    * Author: Công Đoàn 
    */
    getEmployeeFilter(pageSize, pageNumber, employeeFilter) {
        if (employeeFilter == "")
            return BaseAPIConfig.get(`${this.controller}/Filter?pageSize=${pageSize}&pageNumber=${pageNumber}`);
        else
            return BaseAPIConfig.get(`${this.controller}/Filter?searchText=${employeeFilter}&pageSize=${pageSize}&pageNumber=${pageNumber}`);


    }
    /**
    * Mô tả : Hàm lấy mã nhân viên mới
    * Author: Công Đoàn 
    */
    async getNewEmployeeCode() {
        return await BaseAPIConfig.get(`${this.controller}/NewEmployeeCode`);
    }

}
export default new EmployeeAPI();