/**
 * Biến phân biệt giới tính
 */
var gender = {
    genderMale: 0,
    genderFemale: 1,
    genderOther: 2,
}

/**
 * Class gồm các hàm common
 */
export class Common {

    /**
     * Hàm thực hiện format Date
     * Author: Công Đoàn (22/07/2022)
     */
    static formatDate(date){
        // if(date != null){
        //     date = new Date(date); //mm//dd/yyyy
        //     let day = date.getDate();
        //     let month = date.getMonth() +1;
        //     let year = date.getFullYear();
        //     return `${day}/${month}/${year}`;
        // }else{
        //     return "";
        // }

        if (date != null) {
            date = new Date(date);
            // lấy ra ngày
            let day = date.getDate();
            day = day < 10 ? `0${day}` : day;
            //lấy ra tháng
            let month = date.getMonth() + 1;
            month = month < 10 ? `0${month}` : month;
            //lấy ra năm
            let year = date.getFullYear();
            // Chuyển sang dạng dữ liệu ngày tháng năm
            return `${day}/${month}/${year}`; // 18/06/2001
            } else {
            return "";
        }
    }

    /**
     * Hàm kiểm tra ngày nhập lớn hơn ngày hiện tại
     * Author: Công Đoàn (02/08/2022)
     */

    static validateDate(date){
        date = new Date(date);
        if(date != null){
            var newDate = new Date();
            if(date>newDate){
                return false;
            }else{
                return true;
            }
        }else{
            return false;
        }
    }

    /**
     * Hàm thực hiện format Gender
     * Author: Công Đoàn (22/07/2022)
     */
    static formatGender(val){
        if(val == gender.genderMale){
            return "Nam";
        }
    
        if(val == gender.genderFemale){
            return "Nữ";
        }
    
        if(val == gender.genderOther){
            return "Khác"
        }
    }
}

