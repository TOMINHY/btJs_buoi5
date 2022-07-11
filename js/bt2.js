/**
 * Author: To Minh Y
 * Function: Tính tiền điện
 * Release: 11/7/2022
 */

/**
 *
 * Khối 1: input
 * + hoTen
 * + soKW
 * 
 * Khối 2: các bước cần xử lý
 * B1: tạo các biến hoTen và soKW cho người dùng nhập vào và gán giá trị
 * B2: Lập công thức tính toán
 * tongTienDien = soKW * 500 ; (0 < soKW && soKW <= 50)
 * tongTienDien = (50 * 500) + (soKW - 50) * 650; //(soKW > 1 &&  <= 100)
 * tongTienDien = (50 * 500) + (100 - 50) * 650 +(soKW - 100) * 850 ; //(soKW > 100 && soKW <= 200)
 * tongTienDien = (50 * 500)+ (soKW - 50) * 650 + (soKW - 100) * 850 + (soKW - 200) ; //( soKW > 200 && soKW <= 350)
 * tongTienDien = gia1 + (100-50) * 650 + (200 - 100) * 850 + (350 - 200) * 1100 + (soKW - 350) * 1300; //(soKW > 350)
 * 
 * B3: in kết quả ra màn hình
 * 
 * Khối 3: output
 * tongTienDien
 * 
 */

/**
 * Bảng giá tiền điện
 * 50 = 500/kw;
 * 50 (51 -> 100) = 650/kw = 
 * 100 kế = 850/kw;
 * 150 kế = 1100/kw;
 * > con lại = 1300/kw
 */

function tinhTienDien(){
    var hoTen = document.getElementById("hoTen").value;
    var soKW = Number(document.getElementById("kwDien").value);
    const GIA_1 = 500;
    const GIA_2 = 650;
    const GIA_3 = 850;
    const GIA_4 = 1100;
    const GIA_5 = 1300;
    var tongTienDien;

    if(0 < soKW && soKW <= 50){
        tongTienDien = soKW * 500;
    }else if(soKW > 1 && soKW <= 100){
        tongTienDien = ( 50 * 500) + (soKW - 50) * 650;
    }else if(soKW > 100 && soKW <= 200){
        tongTienDien = (50 * 500) + (100-50) * 650 + (soKW - 100)* 850;
    }else if(soKW > 200 && soKW <= 350){
        tongTienDien = (50 * 500) + (100-50) * 650 + (200 - 100) * 850 + (soKW - 200) * 1100;
    }else if(soKW > 350){
         tongTienDien = (50 * 500) + (100-50) * 650 + (200 - 100) * 850 + (350 - 200) * 1100 + (soKW - 350) * 1300;
    }else{
        alert("vui lòng nhập số kw");
    }

    document.getElementById("ketQua2").innerHTML = "Họ tên: " + hoTen + ";" + " Tiền điện: " + tongTienDien.toLocaleString();
}
document.getElementById("btnTinhTienDien").onclick = tinhTienDien;
