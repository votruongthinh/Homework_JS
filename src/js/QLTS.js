const kiemtraKQ = document.getElementById("btnKT");

kiemtraKQ.onclick = () => {
  const DiemMon1 = parseFloat(document.getElementById("DiemMon1").value);

  const DiemMon2 = parseFloat(document.getElementById("DiemMon2").value);

  const DiemMon3 = parseFloat(document.getElementById("DiemMon3").value);

  const DiemChuan = parseFloat(document.getElementById("DiemChuan").value);

  const KhuVuc = parseFloat(document.getElementById("KhuVuc").value);

  const DoiTuong = parseFloat(document.getElementById("DoiTuong").value);

  //kiểm tra điều kiện nếu 3 môn dưới điểm 0 thì rớt nghiệp
  if (DiemMon1 === 0 || DiemMon2 === 0 || DiemMon3 === 0) {
    document.getElementById("Result").innerHTML = "Vui Lòng nhập điểm ";
    return;
  }

  //tính tổng diểm && điểm ưu tiên && điểm điểm 2
  const TongDiem = DiemMon1 + DiemMon2 + DiemMon3;
  const DiemUuTien = KhuVuc + DoiTuong;
  const DiemTongKet = TongDiem + DiemUuTien;

  //kiểm tra ro3wst hay tốt nghiệp
  if (DiemTongKet >= DiemChuan) {
    document.getElementById(
      "Result"
    ).innerHTML = `Đậu! Tổng điểm đạt được là: ${DiemTongKet}`;
  } else {
    document.getElementById(
      "Result"
    ).innerHTML = `Rớt. Tổng điểm đạt được là: ${DiemTongKet}`;
  }
};
