
/**
 * Object lưu class routter và text của MenuITem
 */
export const listItemNav = [
    {classIcon:'icon__overview', text:'Tổng quan', routerItem:'/employees'},
    {classIcon:'icon__cash', text:'Tiền mặt', routerItem:'/test1'},
    {classIcon:'icon__deposits', text:'Tiền gửi',routerItem:'/test2'},
    {classIcon:'icon__purchase', text:'Mua hàng',routerItem:'/test3'},
    {classIcon:'icon__sell', text:'Bán hàng',routerItem:'/test4'},
    {classIcon:'icon__invoice', text:'Quản lý hóa đơn',routerItem:'/test5'},
    {classIcon:'icon__bunker', text:'Kho',routerItem:'/test6'},
    {classIcon:'icon__tool', text:'Công cụ dụng cụ',routerItem:'/test7'},
    {classIcon:'icon__asset', text:'Tài sản cố định',routerItem:'/test8'},
    {classIcon:'icon__tax', text:'Thuế',routerItem:'/test9'},
    {classIcon:'icon__price', text:'Giá thành',routerItem:'/test10'},
    {classIcon:'icon__synthetic', text:'Tổng hợp',routerItem:'/test11'},
    {classIcon:'icon__budget', text:'Ngân sách',routerItem:'/test12'},
    {classIcon:'icon__report', text:'Báo cáo',routerItem:'/test13'},
    {classIcon:'icon__analysis', text:'Phân tích tài chính',routerItem:'/test14'},
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

