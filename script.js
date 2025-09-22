 document.getElementById("registerform").addEventListener("submit", function(e)
{ e.preventDefault();
  
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const tanggal = document.getElementById("tanggal").value;
  const tempat = document.getElementById("tempat").value;
  const no_telp = document.getElementById("no_telp").value;
  const alamat = document.getElementById("alamat").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const setuju = document.getElementById("setuju").value;
  
  if (!setuju){
    alert('Anda Harus Menyetujui Syarat dan Ketentuan Terlebih Dahulu');
    return;
  }
  
  const user = {
    nama: nama,
    email: email,
    password: password,
    tanggal: tanggal,
    tempat: tempat,
    gender: gender,
    no_telp: no_telp,
    alamat: alamat,
  };
  
  localStorage.setItem(email, JSON.stringify(user));
  alert("Sukses Daftar")
  
  const tableBody = document.getElementById("dataTable").getElementByTagName("tbody")[0];
  const newRow = tableBody.insertRow();
  newRow.incertCell(0).textContent = nama;
  newRow.incertCell(1).textContent = email;
  newRow.incertCell(2).textContent = tanggal;
  newRow.incertCell(3).textContent = tempat;
  newRow.incertCell(4).textContent = gender;
  newRow.incertCell(5).textContent = no_telp;
  newRow.incertCell(6).textContent = alamat;
  
  document.getElementById("registerForm").reset();
  
});