import BaseAPIConfig from "./BaseApiConfig";

class DepartmentAPI {
    controller = "Departments";
   
    /**
    * Mô tả : Lấy toàn bộ dữ liệu phòng ban từ api
    */
     getAll() {
        return BaseAPIConfig.get(`${this.controller}`);
    }
}
export default new  DepartmentAPI();