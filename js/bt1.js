/**
 * Author: To Minh Y
 * Function: Quản lý tuyển sinh
 * Release: 11/7/2022
 */

/**
 * Khối 1: input
 * Bảng điểm khu vực : A = 2 ; B = 1; C = 0.5; 
 * Bảng điểm đối tượng : 1 = 2.5 ; 2 = 1.5; 3 = 1;
 * + diemChuan
 * + diemKV
 * + diemDT
 * + diem1
 * + diem2
 * + diem3
 * + dtb 
 * + dut (điểm ưu tiên )
 * + diemTong
 * 
 * Khối 2: các bước xử lý
 * B1: tạo các biến cho người dùng nhập vào và gán giá trị 
 * B2: Lập công thức tính dtb , dut , diemTong
 *  dtb = (Number(diem1) + Number(diem2) + Number(diem3));
 *  dut = diemKV + diemDT (Nếu không thuộc đối tượng hoặc khu vực dut = 0)
 *  diemTong = dtb + dut;
 * B4: xét điều kiện :
 *          Nếu  diem1 == 0 || diem2 == 0 || diem3 == 0 ==> thông báo rớt có điểm == 0  
 *               diemTong >= diemChuan ==> thông báo đậu + điểm
 * Khối 3: output
 * ketQua
 */

function tuyenSinh(){
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var diemKV = document.getElementById("khuVuc").value;
    var diemDT = document.getElementById("doiTuong").value;
    var diem1 = document.getElementById("diem1").value;
    var diem2 = document.getElementById("diem2").value;
    var diem3 = document.getElementById("diem3").value;
    var dut = Number(diemKV) + Number(diemDT);
    var dtb = tinhDTB(diem1,diem2,diem3);
    var diemTong = dtb + dut;
    var ketQua = "";
        if( diemTong < diemChuan && diem1 <= 0|| diemTong < diemChuan && diem2 <= 0 || diemTong < diemChuan && diem3 <= 0){
            ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
        }else if(diemTong < diemChuan){
            ketQua = "Bạn đã rớt. Tổng điểm " + diemTong.toFixed(1);
        }else{
            ketQua = "Bạn đã đậu. Tổng điểm: " + diemTong.toFixed(1);
        }

    document.getElementById("ketQua").innerHTML = ketQua;
}
document.getElementById("btnKetQua").onclick = tuyenSinh;














function tinhDTB(diem1,diem2,diem3){
    var dtb = 0;
    dtb = (Number(diem1) + Number(diem2) + Number(diem3));
    return dtb;
}