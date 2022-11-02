
/**
 * Object lưu class routter và text của MenuITem
 */
export const listItemNav = [
    {classIcon:'icon__overview', text:'Nhân viên', routerItem:'/employees'},
    {classIcon:'icon__cash', text:'Lương', routerItem:'/test1'},
    {classIcon:'icon__invoice', text:'Tài khoản',routerItem:'/test5'},
]

/**
 * Mảng lưu giá trị pageSize
 */
export const listSizePage = new Array('10','20','30','50','100');

// Object kiểu giới tính
export const typeGender = {
    male: 0,
    female: 1,
    other: 2,
}

/**
 * Chế độ thực hiện (thêm, sửa, xóa, nhân bản)
 */
export const selectedMode={
    add: 1,
    edit: 2,
    delete: 3,
    clone: 4,
}

/**
 * Chế độ xóa
 */
export const deleteMode={
    single: 1,
    multi: 2,
}

/**
 * Max length của từng trường
 */

export const maxLength={
    code: 20,
    default: 255,
    phone: 50,
    fullname: 100,
    identity: 25,
    email: 100,
}
