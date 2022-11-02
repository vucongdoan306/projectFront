export class Resource{
    /**
     * Status thông báo mã không được để trống
     */
    static Validate_EmptyCode = "Mã không được để trống.";

    /**
     * Status thông báo tên không được để trống
     */
    static Validate_EmptyFullName = "Tên không được để trống.";

    /**
     * Status thông báo đơn vị không được để trống
     */
    static Validate_EmptyDepartment = "Đơn vị không được để trống.";

    /**
     * Status thông báo Email không đúng định dạng
     */
    static Validate_EmailNotValid = "Email không đúng định dạng";

    /**
     * Status thông báo dữ liệu đã bị thay đổi
     */
    static Data_Change = "Dữ liệu đã bị thay đổi. Bạn có muốn cất không?";

    /**
     * Status thông báo đã nhập đến kí tự cuối của input
     */
    static Validate_LengthInputLimit = "Bạn đã nhập hết số kí tự cho phép";
    
    /**
     * Status thông báo ngày nhập không được lớn hơn ngày hiện tại
     * @param {string} str Trường bị lỗi
     */
    static Validate_DateBigger(str){
        return `${str}`+ " không được lớn hơn ngày hiện tại."
    }

    /**
     * Status thông báo thêm mới thành công
     */
    static Add_Complete = "Thêm mới thành công.";

    /**
     * Status thông báo cập nhật thành công
     */
    static Update_Complete = "Cập nhật thành công.";

    /**
     * Status thông báo xóa thành công
     */
    static Delete_Complete = "Xóa thành công.";

    /**
     * Status thông báo mã trùng
     * @param {string} code mã bị trùng
     */
    static Validate_DuplicateCode(code){
        return "Mã nhân viên <" + code +"> đã tồn tại trong hệ thống. Vui lòng kiểm tra lại";
    }

    /**
     * Cảnh báo xóa 1 nhân viên
     * @param {string} code Mã của nhân viên muốn xóa
     * @returns Chuỗi thông báo
     */
    static Delete_SingleEmployee(code){
        return "Bạn có thực sự muốn xóa Nhân viên <" + code + "> không?";
    }

    /**
     * Status cảnh báo xóa nhiều nhân viên
     */
    static Delete_MultiEmployee = "Bạn có thực sự muốn xóa những nhân viên đã chọn không?";
    
}