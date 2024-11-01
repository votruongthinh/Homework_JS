function Change() {
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const nhomSoKetNoi = document.getElementById("nhomSoKetNoi");

  if (loaiKhachHang === "doanhnghiep") {
    nhomSoKetNoi.style.display = "block"; // Hiển thị ô nhập số kết nối
  } else {
    nhomSoKetNoi.style.display = "none"; // Ẩn ô nhập số kết nối
  }
}

// Hàm tính tiền cáp
function btnTinhTienCap() {
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
  const maKH = document.getElementById("maKhachHang").value;
  const soKenhCaoCap =
    parseInt(document.getElementById("soKenhCaoCap").value) || 0;
  let tienCap = 0;

  if (loaiKhachHang === "nhadan") {
    // Tính tiền cho khách hàng Nhà dân
    tienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else if (loaiKhachHang === "doanhnghiep") {
    // Tính tiền cho khách hàng Doanh nghiệp
    tienCap = 15 + 75; // Phí xử lý hóa đơn và dịch vụ cơ bản cho 10 kết nối đầu
    if (soKetNoi > 10) {
      tienCap += (soKetNoi - 10) * 5; // Mỗi kết nối thêm 5$ cho kết nối vượt quá 10
    }
    tienCap += 50 * soKenhCaoCap; // Tính thêm phí kênh cao cấp
  }

  // Hiển thị kết quả
  document.getElementById(
    "Result"
  ).innerHTML = `ID: ${maKH} & Tổng tiền cáp: $${tienCap.toFixed(2)}`;
}
