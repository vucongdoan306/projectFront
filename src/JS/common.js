var gender = {
    genderMale: 0,
    genderFemale: 1,
    genderOther: 2,
}

export class Common {

    /**
     * Hàm thực hiện format Date
     * Author: Công Đoàn (22/07/2022)
     */
    static formatDate(date){
        if(date != null){
            date = new Date(date); //mm//dd/yyyy
            let day = date.getDate();
            let month = date.getMonth() +1;
            let year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }else{
            return "";
        }
    }

    /**
     * Hàm kiểm tra ngày nhập lớn hơn ngày hiện tại
     * Author: Công Đoàn (02/08/2022)
     */

    static validateDate(date){
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

