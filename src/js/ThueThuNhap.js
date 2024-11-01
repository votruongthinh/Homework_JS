const btnKQ = (document.getElementById("btnTinh").onclick = () => {
  const TenNguoiNhan = document.getElementById("User").value;
  const TienLuong = document.getElementById("Salary").value;
  const NguoiPhuThuoc = document.getElementById("UserDependent").value;

  //khấu trừ thuế người phụ thuộc
  const KhauTruThue = 1600000;
  const TongKhauTru = NguoiPhuThuoc * KhauTruThue;

  const TongThuNhap = TienLuong - TongKhauTru;

  let bill = 0;
  if (TongThuNhap <= 60000000) {
    bill = TongThuNhap * 0.05;
  } else if (TongThuNhap <= 120000000) {
    bill = 60000000 * 0.05 + (TongThuNhap - 60000000) * 0.1;
  } else if (TongThuNhap <= 210000000) {
    bill = 60000000 * 0.05 + 60000000 * 0.1 + (TongThuNhap - 120000000) * 0.15;
  } else if (TongThuNhap <= 384000000) {
    bill =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      (TongThuNhap - 210000000) * 0.2;
  } else if (TongThuNhap <= 624000000) {
    bill =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      (TongThuNhap - 384000000) * 0.25;
  } else if (TongThuNhap <= 960000000) {
    bill =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      (TongThuNhap - 624000000) * 0.3;
  } else {
    bill =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (TongThuNhap - 960000000) * 0.35;
  }

  // Hiển thị kết quả
  document.getElementById(
    "Result"
  ).innerHTML = `Tên:${TenNguoiNhan},\n Thuế thu nhập cá nhân phải nộp:${bill.toLocaleString(
    "vi-VN"
  )} VNĐ`;
});
