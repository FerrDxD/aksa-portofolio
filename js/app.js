// js/app.js

// ==========================================
// 1. DATA & KONTEN HALAMAN
// ==========================================

const pages = {
    blog: `
        <div class="text-center py-16 mb-12 bg-white dark:bg-darker rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Arsip Raksasa</h1>
            <p class="text-lg text-gray-500 dark:text-gray-400">Catatan, opini, dan eksperimen dari seorang AKSA.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
            <article class="group bg-white dark:bg-darker rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col cursor-pointer" onclick="navigateTo('artikel')">
                <div class="aspect-w-16 aspect-h-10 overflow-hidden">
                    <img src="https://picsum.photos/600/400?random=1" alt="Thumbnail" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span><i class="far fa-calendar-alt mr-2 text-primary"></i> 19 Feb 2026</span>
                        <span><i class="far fa-folder mr-2 text-primary"></i> Teknologi</span>
                    </div>
                    <h2 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Memulai Petualangan Digital</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">Ini adalah artikel pertama di arsip raksasa. Cerita tentang bagaimana semuanya dimulai, dan apa yang mendorong saya untuk terus menulis...</p>
                    <span class="inline-flex items-center font-semibold text-primary group-hover:text-yellow-600 transition-colors mt-auto">Baca Selengkapnya <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i></span>
                </div>
            </article>

            <article class="group bg-white dark:bg-darker rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col">
                <div class="aspect-w-16 aspect-h-10 overflow-hidden">
                    <img src="https://picsum.photos/600/400?random=2" alt="Thumbnail" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span><i class="far fa-calendar-alt mr-2 text-primary"></i> 10 Feb 2026</span>
                        <span><i class="far fa-folder mr-2 text-primary"></i> Review</span>
                    </div>
                    <h2 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Review: Framework CSS 2025</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">Mana yang paling cepat dan fleksibel? Sebuah perbandingan singkat berdasarkan pengalaman mengerjakan proyek klien.</p>
                    <span class="inline-flex items-center font-semibold text-gray-400 cursor-not-allowed mt-auto">Belum tersedia <i class="fas fa-lock ml-2"></i></span>
                </div>
            </article>
        </div>
    `,
    
    // Ini dia halaman artikel yang baru kita tambahkan!
    artikel: `
        <div class="max-w-3xl mx-auto fade-in bg-white dark:bg-darker p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <button onclick="navigateTo('blog')" class="text-primary font-semibold hover:text-yellow-600 transition-colors mb-8 flex items-center group">
                <i class="fas fa-arrow-left mr-2 transform group-hover:-translate-x-1 transition-transform"></i> Kembali ke Blog
            </button>

            <header class="text-center mb-10">
                <h1 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">Memulai Petualangan Digital</h1>
                <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 py-3 px-6 rounded-full inline-flex">
                    <span><i class="far fa-calendar-alt mr-2 text-primary"></i> 19 Feb 2026</span>
                    <span><i class="far fa-folder mr-2 text-primary"></i> Teknologi</span>
                    <span><i class="far fa-clock mr-2 text-primary"></i> 5 menit</span>
                </div>
            </header>

            <div class="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                <img src="https://picsum.photos/800/400?random=1" alt="Hero Image" class="w-full h-auto rounded-2xl shadow-md mb-10 object-cover">
                
                <p class="mb-6 text-lg">Ini adalah paragraf pembuka dari artikel pertama. Menceritakan bagaimana ide untuk membuat arsip raksasa ini muncul. Dimulai dari kegelisahan karena sering lupa dengan proyek-proyek kecil yang sudah dibuat. Akhirnya, saya memutuskan untuk menulis semuanya di sini.</p>

                <h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">Mengapa Harus Menulis?</h2>
                <p class="mb-6">Menulis membantu kita berpikir lebih jernih. Dengan menulis, ide-ide abstrak menjadi konkret. Saya percaya bahwa <em class="text-primary font-medium">arsip raksasa</em> ini akan menjadi dokumentasi perjalanan saya di dunia digital.</p>

                <blockquote class="my-8 border-l-4 border-primary bg-primary/5 p-6 rounded-r-xl italic text-gray-800 dark:text-gray-200 text-xl font-medium shadow-sm">
                    "Menulis adalah cara terbaik untuk berbicara tanpa diganggu." <br>
                    <span class="text-sm text-gray-500 mt-2 block not-italic">- Jules Renard</span>
                </blockquote>

                <h3 class="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Apa yang Akan Dibahas?</h3>
                <p class="mb-4">Di blog ini, saya akan membahas:</p>
                <ul class="list-disc pl-6 mb-8 space-y-2 marker:text-primary">
                    <li>Tips dan trik seputar web development</li>
                    <li>Review tools dan teknologi terbaru</li>
                    <li>Cerita di balik proyek-proyek saya</li>
                    <li>Opini tentang industri teknologi</li>
                </ul>

                <h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">Contoh Kode</h2>
                <p class="mb-4">Kadang saya juga akan berbagi cuplikan kode seperti ini:</p>

                <div class="bg-gray-900 rounded-xl overflow-hidden mb-8 shadow-lg">
                    <div class="flex items-center px-4 py-2 bg-gray-800 text-xs text-gray-400 border-b border-gray-700">
                        <span class="flex gap-1.5 mr-4">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </span>
                        script.js
                    </div>
                    <pre class="p-4 text-gray-100 text-sm font-mono overflow-x-auto"><code>// Fungsi sederhana untuk menyapa
function sapa(nama) {
    return \`Halo, \${nama}! Selamat datang di AKSA.\`;
}

console.log(sapa('pengunjung'));</code></pre>
                </div>
                
                <p class="mb-6">Kesimpulannya, memulai petualangan digital ini adalah keputusan terbaik. Semoga tulisan-tulisan di sini bisa bermanfaat untuk siapa saja yang membacanya.</p>
            </div>
            
            <hr class="my-10 border-gray-200 dark:border-gray-800">
            
            <div class="mt-10">
                <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Komentar (1)</h3>
                <div class="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl flex gap-4">
                    <img src="https://picsum.photos/60/60?random=5" class="w-12 h-12 rounded-full object-cover shadow-sm">
                    <div>
                        <h4 class="font-bold text-gray-900 dark:text-white">Budi Santoso</h4>
                        <span class="text-xs text-gray-500 mb-2 block">19 Februari 2026</span>
                        <p class="text-gray-700 dark:text-gray-300">Artikelnya bagus banget! Sangat menginspirasi untuk mulai menulis juga.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    portfolio: `
        <div class="text-center py-12 fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Portfolio</h1>
            <p class="text-lg text-gray-500 dark:text-gray-400">Beberapa proyek yang pernah saya kerjakan. Klik untuk detailnya.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in" id="portfolioGrid">
            </div>
    `,
    about: `
        <div class="text-center py-12 fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Tentang Gweh</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 fade-in bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div class="md:col-span-1 flex justify-center">
                <img src="assets/pp.png" onerror="this.src='https://ui-avatars.com/api/?name=Ferdi&background=B88E2F&color=fff&size=256'" alt="Profil" class="w-64 h-64 object-cover rounded-full border-4 border-primary shadow-lg">
            </div>
            <div class="md:col-span-2 flex flex-col justify-center">
                <h2 class="text-3xl font-bold mb-2">Maulana Ferdi Irawan</h2>
                <p class="text-xl text-primary font-medium mb-4">Seorang penjelajah kode dan kata yang tinggal di dunia digital.</p>
                <div class="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                    <p>Halo! Saya biasa dipanggil Ferdi. Mulai menulis kode sejak 2020 dan menulis blog sejak 2026 (iya, baru sekarang!). Saya percaya teknologi harusnya mempermudah hidup, bukan mempersulit. Di blog ini, saya mendokumentasikan perjalanan belajar, proyek sampingan, dan oponi tentang dunia teknologi terkini.</p>
                    <p>Selain ngoding, saya suka kopi hitam, jalan-jalan naik motor, dan main game indie.</p>
                </div>
                
                <h3 class="text-xl font-bold mb-4">My Tools Favorit Guwej</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">Photoshop</span>
                    <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">Figma</span>
                    <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">VS Code</span>
                    <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700 text-primary">Jiwa dan Raga</span>
                    <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">ChatGPT</span>
                </div>
            </div>
        </div>
    `,
    contact: `
        <div class="text-center py-12 fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Hubungi Saya</h1>
            <p class="text-lg text-gray-500 dark:text-gray-400">Ada pertanyaan atau mau ngobrol? Kirim pesan saja!</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 fade-in">
            <div class="md:col-span-1 bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 class="text-2xl font-bold mb-6">Informasi Kontak</h2>
                <ul class="space-y-6 mb-8">
                    <li class="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><i class="fas fa-envelope"></i></div>
                        <span>maulanaferdi0678@gmail.com</span>
                    </li>
                    <li class="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><i class="fas fa-phone-alt"></i></div>
                        <span>+62 822-9923-4269</span>
                    </li>
                    <li class="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><i class="fas fa-map-marker-alt"></i></div>
                        <span>Bogor, Indonesia</span>
                    </li>
                </ul>
            </div>
            
            <div class="md:col-span-2 bg-white dark:bg-darker p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                <form id="contactForm" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium mb-2">Nama</label>
                            <input type="text" id="name" required class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" required class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Pesan</label>
                        <textarea id="message" rows="5" required class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-primary hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-primary/30">Kirim Pesan</button>
                    <div id="formStatus" class="mt-4 text-center font-medium rounded-lg p-3 hidden"></div>
                </form>
            </div>
        </div>
    `
};

const portfolioData = [
    { id: 1, title: "Website E-commerce", tech: "React, Node.js", img: "https://picsum.photos/600/400?random=3", desc: "Platform e-commerce modern dengan fitur lengkap." },
    { id: 2, title: "Aplikasi Mobile Kasir", tech: "Flutter, Firebase", img: "https://picsum.photos/600/400?random=4", desc: "Aplikasi kasir berbasis mobile yang ringan dan mudah digunakan." },
    { id: 3, title: "Landing Page Startup", tech: "HTML, Tailwind", img: "https://picsum.photos/600/400?random=5", desc: "Landing page modern dengan animasi halus." },
    { id: 4, title: "Sistem Inventaris", tech: "Laravel, MySQL", img: "https://picsum.photos/600/400?random=7", desc: "Sistem manajemen inventaris berbasis web." }
];

// ==========================================
// 2. LOGIKA ROUTING SPA
// ==========================================
const appContainer = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-item');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function navigateTo(pageId) {
    // 1. Ganti konten HTML
    appContainer.innerHTML = pages[pageId];
    
    // 2. Eksekusi fungsi khusus berdasarkan halaman
    if(pageId === 'portfolio') renderPortfolioItems();
    if(pageId === 'contact') setupContactForm();

    // 3. Update warna tombol menu aktif
    // (Jika membuka 'artikel', tetap tandai 'blog' sebagai aktif)
    const activeLinkID = pageId === 'artikel' ? 'blog' : pageId;
    
    navLinks.forEach(link => {
        if(link.dataset.link === activeLinkID) {
            link.classList.add('text-primary', 'font-bold');
            link.classList.remove('text-gray-800', 'dark:text-gray-200');
        } else {
            link.classList.remove('text-primary', 'font-bold');
        }
    });

    // 4. Tutup menu mobile dan scroll ke atas
    mobileMenu.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listener menu navbar
document.querySelectorAll('[data-link]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(btn.dataset.link);
    });
});

// Toggle Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// ==========================================
// 3. LOGIKA PORTFOLIO & MODAL
// ==========================================
function renderPortfolioItems() {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = portfolioData.map(item => `
        <div class="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800" onclick="openModal(${item.id})">
            <img src="${item.img}" alt="${item.title}" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 class="text-white text-xl font-bold">${item.title}</h3>
                <p class="text-primary text-sm font-medium mb-3">${item.tech}</p>
                <button class="bg-primary text-white text-sm py-2 px-4 rounded-lg w-max">Lihat Detail</button>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    const item = portfolioData.find(p => p.id === id);
    const modalContainer = document.getElementById('modalContainer');
    
    modalContainer.innerHTML = `
        <div class="bg-white dark:bg-darker rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl transform scale-95 transition-transform">
            <div class="relative h-64 md:h-80 w-full">
                <img src="${item.img}" class="w-full h-full object-cover">
                <button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="p-8">
                <div class="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-3">${item.tech}</div>
                <h2 class="text-3xl font-bold mb-4">${item.title}</h2>
                <p class="text-gray-600 dark:text-gray-300 mb-8">${item.desc}</p>
                <div class="flex gap-4">
                    <a href="#" class="bg-primary hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"><i class="fas fa-external-link-alt mr-2"></i>Live Demo</a>
                    <a href="#" class="border-2 border-gray-200 dark:border-gray-700 hover:border-primary text-gray-700 dark:text-gray-200 font-bold py-2 px-6 rounded-lg transition-colors"><i class="fab fa-github mr-2"></i>GitHub</a>
                </div>
            </div>
        </div>
    `;
    modalContainer.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    document.getElementById('modalContainer').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

document.getElementById('modalContainer').addEventListener('click', (e) => {
    if(e.target.id === 'modalContainer') closeModal();
});

// ==========================================
// 4. LOGIKA FORM KONTAK
// ==========================================
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if(!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('formStatus');
        
        status.classList.remove('hidden', 'bg-red-100', 'text-red-700');
        status.classList.add('bg-green-100', 'text-green-700', 'dark:bg-green-900/30', 'dark:text-green-400');
        status.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Pesan berhasil dikirim (Simulasi)!';
        
        form.reset();
        setTimeout(() => status.classList.add('hidden'), 3000);
    });
}

// ==========================================
// 5. DARK MODE TOGGLE
// ==========================================
const htmlTag = document.documentElement;
const toggleBtns = [document.getElementById('darkModeToggle'), document.getElementById('darkModeToggleMobile')];

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlTag.classList.add('dark');
    updateIcons(true);
}

function toggleDarkMode() {
    htmlTag.classList.toggle('dark');
    const isDark = htmlTag.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
}

function updateIcons(isDark) {
    toggleBtns.forEach(btn => {
        if(!btn) return;
        btn.innerHTML = isDark ? '<i class="fas fa-sun text-yellow-400"></i>' : '<i class="fas fa-moon text-gray-600"></i>';
    });
}

toggleBtns.forEach(btn => btn?.addEventListener('click', toggleDarkMode));

// Tampilkan halaman Blog pertama kali dimuat
navigateTo('blog');