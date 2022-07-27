var gender = {
    genderMale: 0,
    genderFemale: 1,
    genderOther: 2,
}

export class Common {
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



    static formatGender(val){
        if(val == gender.genderMale){
            return "Nam";
        }
    
        if(val == gender.genderFemale){
            return "Nữ";
        }
    
        if(val == gender.genderOther){
            return "(Chưa xác định)"
        }
    }
}

