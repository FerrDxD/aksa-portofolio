// js/script.js

// 1. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Ganti ikon menu
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Tutup menu jika link diklik (untuk mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// 2. Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Cek preferensi tersimpan di localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    updateDarkModeIcon(true);
} else {
    updateDarkModeIcon(false);
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateDarkModeIcon(isDark);
    });
}

function updateDarkModeIcon(isDark) {
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// 3. Form Handling (Simulasi)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulasi pengiriman (ganti dengan fetch ke backend sungguhan nanti)
        formStatus.textContent = 'Mengirim...';
        formStatus.className = 'form-status';

        // Dapatkan data form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validasi sederhana
        if (!name || !email || !message) {
            formStatus.textContent = 'Harap isi semua field.';
            formStatus.className = 'form-status error';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            formStatus.textContent = 'Email tidak valid.';
            formStatus.className = 'form-status error';
            return;
        }

        // Simulasi sukses setelah 1 detik
        setTimeout(() => {
            formStatus.textContent = 'Pesan berhasil dikirim (simulasi)! Terima kasih.';
            formStatus.className = 'form-status success';
            contactForm.reset(); // Kosongkan form
        }, 1000);
    });
}

// 4. Smooth Scroll untuk link internal (opsional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// ===== MODAL PORTFOLIO =====
// Data portfolio (bisa diganti dengan fetch dari API nanti)
const portfolioData = {
    1: {
        title: "Website E-commerce",
        image: "https://picsum.photos/800/600?random=3",
        tags: ["React", "Node.js", "MongoDB", "Redux"],
        description: "Platform e-commerce modern dengan fitur lengkap untuk UKM. Dibangun dengan performa tinggi dan user experience yang optimal.",
        features: [
            "Autentikasi pengguna dengan JWT",
            "Keranjang belanja real-time",
            "Integrasi pembayaran Midtrans",
            "Dashboard admin lengkap",
            "Manajemen produk dan inventaris",
            "Sistem review dan rating"
        ],
        liveDemo: "https://demo.com/project1",
        github: "https://github.com/aksa/ecommerce"
    },
    2: {
        title: "Aplikasi Mobile Kasir",
        image: "https://picsum.photos/800/600?random=4",
        tags: ["Flutter", "Firebase", "Bloc", "Material Design"],
        description: "Aplikasi kasir berbasis mobile yang ringan dan mudah digunakan untuk restoran dan retail kecil.",
        features: [
            "Scan barcode produk",
            "Cetak struk via Bluetooth",
            "Laporan penjualan harian",
            "Manajemen stok real-time",
            "Multi-user dengan role berbeda",
            "Backup data otomatis ke cloud"
        ],
        liveDemo: "https://demo.com/project2",
        github: "https://github.com/aksa/kasir-app"
    },
    3: {
        title: "Landing Page Startup",
        image: "https://picsum.photos/800/600?random=5",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        description: "Landing page modern dengan animasi halus untuk perusahaan startup teknologi. Optimasi SEO dan performa tinggi.",
        features: [
            "Desain responsif mobile-first",
            "Animasi scroll yang smooth",
            "Form kontak dengan validasi",
            "Integrasi Google Maps",
            "Optimasi gambar lazy loading",
            "Cross-browser compatible"
        ],
        liveDemo: "https://demo.com/project3",
        github: "https://github.com/aksa/landing-page"
    },
    4: {
        title: "Sistem Manajemen Inventaris",
        image: "https://picsum.photos/800/600?random=7",
        tags: ["Laravel", "MySQL", "Bootstrap", "Livewire"],
        description: "Sistem manajemen inventaris berbasis web untuk gudang dengan fitur lengkap tracking barang.",
        features: [
            "Manajemen barang masuk/keluar",
            "Notifikasi stok minimum",
            "Generate laporan PDF/Excel",
            "Barcode generator & scanner",
            "Histori pergerakan barang",
            "Multi-cabang support"
        ],
        liveDemo: "https://demo.com/project4",
        github: "https://github.com/aksa/inventory-system"
    },
    5: {
        title: "Aplikasi Cuaca",
        image: "https://picsum.photos/800/600?random=8",
        tags: ["Vue.js", "Vuex", "Axios", "Chart.js"],
        description: "Aplikasi cuaca real-time dengan visualisasi data dan prediksi 7 hari ke depan.",
        features: [
            "Data cuaca real-time dari OpenWeather",
            "Visualisasi grafik suhu",
            "Cari berdasarkan kota",
            "Favorit lokasi tersimpan",
            "Mode gelap/terang",
            "Notifikasi cuaca ekstrem"
        ],
        liveDemo: "https://demo.com/project5",
        github: "https://github.com/aksa/weather-app"
    },
    6: {
        title: "Company Profile",
        image: "https://picsum.photos/800/600?random=9",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        description: "Website company profile modern dengan performa super cepat dan animasi yang memukau.",
        features: [
            "Server-side rendering untuk SEO",
            "Animasi dengan Framer Motion",
            "Blog dengan Markdown",
            "Form kontak dengan Nodemailer",
            "Optimasi gambar otomatis",
            "Analytics terintegrasi"
        ],
        liveDemo: "https://demo.com/project6",
        github: "https://github.com/aksa/company-profile"
    }
};

// Ambil elemen modal
const modal = document.getElementById('portfolioModal');
const modalClose = document.querySelector('.modal-close');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalTags = document.getElementById('modalTags');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const modalLiveDemo = document.getElementById('modalLiveDemo');
const modalGithub = document.getElementById('modalGithub');

// Fungsi untuk membuka modal
function openModal(projectId) {
    const data = portfolioData[projectId];
    
    if (!data) return;
    
    // Isi data ke modal
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalTitle.textContent = data.title;
    
    // Tags
    modalTags.innerHTML = '';
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        modalTags.appendChild(span);
    });
    
    // Deskripsi
    modalDescription.innerHTML = `<p>${data.description}</p>`;
    
    // Fitur
    modalFeatures.innerHTML = '<h4>Fitur Utama:</h4><ul></ul>';
    const ul = modalFeatures.querySelector('ul');
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        ul.appendChild(li);
    });
    
    // Links
    modalLiveDemo.href = data.liveDemo;
    modalGithub.href = data.github;
    
    // Tampilkan modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Mencegah scroll di background
}

// Fungsi untuk menutup modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Kembalikan scroll
}

// Event listener untuk tombol "Lihat Detail"
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah event bubbling
        const projectId = button.getAttribute('data-id');
        openModal(projectId);
    });
});

// Event listener untuk portfolio item (klik di area mana saja)
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Jangan buka modal jika yang diklik adalah tombol (biar tombol yang handle)
        if (e.target.classList.contains('view-details') || e.target.closest('.view-details')) {
            return;
        }
        const projectId = item.getAttribute('data-id');
        openModal(projectId);
    });
});

// Event listener untuk tombol close
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Klik di luar modal untuk menutup
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Tombol ESC untuk menutup modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Prevent scroll on modal open (already handled in open/close functions)