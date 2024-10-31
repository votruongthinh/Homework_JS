const btnTinhTien = document.getElementById("btnTinhTien");
btnTinhTien.onclick = () => {
  const User = document.getElementById("TenNguoiDung").value;
  const kw = parseFloat(document.getElementById("Kw").value);

  let bill = 0;
  if (kw < 50) {
    bill = kw * 500;
  } else if (kw <= 100) {
    bill = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    bill = 50 * 500 + 50 * 650 - (kw - 100) * 850;
  } else {
    bill = 50 * 500 + 50 * 650 - 100 * 850 + (kw - 200) * 1300;
  }
  document.getElementById(
    "Result"
  ).innerHTML = `Tên:${User}\n\nTiền điện: ${bill.toLocaleString()} đồng`;
};
