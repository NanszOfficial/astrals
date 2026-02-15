// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll untuk semua link (opsional)
    const allLinks = document.querySelectorAll('a[href="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Ini hanya contoh, nanti bisa diganti dengan link asli
            alert('Link demo: ' + this.innerText.trim() + ' (ganti dengan URL asli)');
        });
    });

    // Efek tambahan: console log bahwa JS terpisah berjalan
    console.log('✨ astralshopid LinkTree — JS terpisah siap!');
    
    // Bisa ditambahkan interaksi ringan: animasi saat hover card (opsional)
    const cards = document.querySelectorAll('.social-card, .mini-card, .wa-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.2s ease';
        });
    });

    // Tambahan: klik pada logo menampilkan pesan (hanya untuk showoff)
    const logo = document.querySelector('.logo-container');
    if (logo) {
        logo.addEventListener('click', () => {
            console.log('👑 astralshopid — by akndwkjandjnb');
        });
    }

    // Cek apakah gambar logo ada, jika tidak tampilkan fallback
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.onerror = function() {
            this.style.display = 'none';
            console.log('Logo image tidak ditemukan, menggunakan fallback icon');
        };
    }
});