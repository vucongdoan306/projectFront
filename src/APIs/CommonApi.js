import BaseAPIConfig from "./BaseApiConfig";

class CommonAPI {
   
    /**
    * Mô tả : Lấy toàn bộ dữ liệu phòng ban từ api
    */
     getAll(controller) {
        return BaseAPIConfig.get(`${controller}`);
    }

    getByID(controller,ID) {
        return BaseAPIConfig.get(`${controller}/${ID}`);
    }
}
export default new  CommonAPI();