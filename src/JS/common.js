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
            return `${day}/${month}/${year}`;
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

    /**
     * Hàm thực hiện xóa dấu ra khỏi chuỗi
     * @param {string} str Chuỗi đầu vào
     * @returns Chuỗi đầu ra không có dấu
     */
    static removeAccent(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }

    /**
     * Hàm thực hiện viết hoa chữ cái đầu tiên trong chuỗi
     * @param {string} str Chuỗi đầu vào
     * @returns Chuỗi đầu ra với kí tự đầu tiên viết hoa
     */
    static uppercaseFirstLetter(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * Viết hoa chữ cái đầu tiên sau dấu cách
     * @param {string} string Chuỗi đầu vào
     * @returns Chuỗi đầu ra với chữ cái sau dấu cách được viết hoa
     */
    static upppercaseBehindSpace(string) {
        //1. Tách các từ, cụm từ trong chuỗi ban đầu
        let sentence = string.toLowerCase().split(" ");
    
        //2. Tạo vòng lặp và viết hoa chữ cái đầu tiên của các từ, cụm từ trên
        for(var i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        //3. Nối các từ, cụm từ đã xử lý ở trên và trả về kết quả
        return sentence.join(" ");
    }
}

