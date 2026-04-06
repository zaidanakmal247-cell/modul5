
// DISPLAY USER INFO IN NAVBAR/HEADER
// =============================================
window.addEventListener('DOMContentLoaded', function() {
    displayUserInfo(demoUser);
});

function displayUserInfo(user) {
    // Create user info element if doesn't exist
    const navbar = document.querySelector('.navbar');
    
    // Check if user info already exists
    let userInfoDiv = document.querySelector('.user-info-display');
    
    if (!userInfoDiv && navbar) {
        userInfoDiv = document.createElement('div');
        userInfoDiv.className = 'user-info-display';
        userInfoDiv.style.cssText = `
            position: absolute;
            top: 15px;
            right: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(255, 255, 255, 0.95);
            padding: 8px 16px;
            border-radius: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        `;
        
        userInfoDiv.innerHTML = `
            <div style="text-align: right;">
                <div style="font-weight: 600; font-size: 14px; color: #1a202c;">${user.username}</div>
                <div style="font-size: 12px; color: #718096;">${user.isAnonymous ? 'Mode Anonim' : user.email}</div>
            </div>
            <button onclick="logoutUser()" style="
                background: #e53e3e;
                color: white;
                border: none;
                padding: 6px 14px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.2s;
            " onmouseover="this.style.background='#c53030'" onmouseout="this.style.background='#e53e3e'">
                Logout
            </button>
        `;
        
        navbar.appendChild(userInfoDiv);
    }
    
    // Update welcome message if exists
    const heroSection = document.querySelector('.hero h1');
    if (heroSection && !heroSection.dataset.updated) {
        heroSection.textContent = `Selamat Datang, ${user.username}!`;
        heroSection.dataset.updated = 'true';
    }
}

// =============================================
// LOGOUT FUNCTION
// =============================================
function logoutUser() {
    if (confirm('Yakin ingin logout?')) {
        alert('Logout berhasil!');
        window.location.href = '../login-register/index.html';
    }
}

// =============================================
// TRACKING LAPORAN
// =============================================
const trackingBtn = document.getElementById("btnTracking");
if (trackingBtn) {
    trackingBtn.addEventListener("click", function () {
        const kode = document.getElementById("trackingInput").value.trim();

        if (kode === "") {
            alert("Silakan masukkan kode tracking terlebih dahulu.");
            return;
        }

        // Simulasi dengan data dummy
        const dummyReports = {
            'SIM001': {
                status: 'Sedang Diproses',
                category: 'Bullying',
                date: '2025-12-20',
                school: 'SMPN 1 Bengkulu',
                description: 'Laporan Anda sedang dalam proses verifikasi oleh admin.'
            },
            'SIM002': {
                status: 'Terverifikasi',
                category: 'Fasilitas',
                date: '2025-12-21',
                school: 'SMAN 2 Bengkulu',
                description: 'Laporan telah diverifikasi dan akan segera ditindaklanjuti.'
            },
            'SIM003': {
                status: 'Selesai',
                category: 'Pungli',
                date: '2025-12-22',
                school: 'SMKN 3 Bengkulu',
                description: 'Laporan telah selesai ditangani. Terima kasih atas laporannya.'
            },
            'SIM123': {
                status: 'Sedang Diproses',
                category: 'Lainnya',
                date: '2025-12-23',
                school: 'SDN 5 Bengkulu',
                description: 'Laporan Anda sedang dalam proses penanganan oleh tim terkait.'
            }
        };

        const report = dummyReports[kode.toUpperCase()];
        
        if (report) {
            let message = `📋 DETAIL LAPORAN\n\n`;
            message += `Kode: ${kode.toUpperCase()}\n`;
            message += `Status: ${report.status}\n`;
            message += `Kategori: ${report.category}\n`;
            message += `Sekolah: ${report.school}\n`;
            message += `Tanggal: ${report.date}\n\n`;
            message += `Keterangan:\n${report.description}`;
            
            alert(message);
        } else {
            alert("❌ Kode tracking tidak ditemukan.\n\nPastikan kode yang Anda masukkan benar.\n\nContoh kode yang tersedia:\n• SIM001\n• SIM002\n• SIM003\n• SIM123");
        }
    });
}

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (nav) {
        nav.style.boxShadow =
            window.scrollY > 50 ? "0 4px 10px rgba(0,0,0,0.2)" : "none";
    }

    // Logout
function logout() {
  if (confirm('Yakin ingin logout?')) {
    sessionStorage.removeItem('currentUser');
    alert('Logout berhasil!');
    window.location.href = '../login-register/index.html';
  }
}
});


