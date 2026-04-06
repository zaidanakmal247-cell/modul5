// Ambil elemen form
const form = document.getElementById('resetForm');

// Event listener untuk form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai input
    const email = document.getElementById('email').value;
    const passwordLama = document.getElementById('password-lama').value;
    const passwordBaru = document.getElementById('password-baru').value;
    
    // Validasi sederhana
    if (!email || !passwordLama || !passwordBaru) {
        alert('Semua field harus diisi!');
        return;
    }
    
    if (passwordLama === passwordBaru) {
        alert('Password baru harus berbeda dengan password lama!');
        return;
    }
    
    if (passwordBaru.length < 6) {
        alert('Password baru minimal 6 karakter!');
        return;
    }
    
    // Jika validasi berhasil
    alert('Password berhasil direset!');
    
    // Redirect ke halaman login
    window.location.href = 'login.html';
});