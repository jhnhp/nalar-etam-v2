// Deteksi kedalaman folder untuk menyesuaikan path relatif
const path = window.location.pathname;
const isRoot = path.endsWith('index.html') || path === '/' || !path.includes('.html');
const basePath = isRoot ? '' : '../';

const navbarHTML = `
    <nav class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all font-sans">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <a href="${basePath}index.html" class="flex items-center gap-2 cursor-pointer no-underline">
                    <i class="ph-fill ph-brain text-blue-600 text-3xl"></i>
                    <span class="font-bold text-xl tracking-tight text-slate-900">Nalar Etam</span>
                </a>
                <div class="hidden md:flex space-x-8">
                    <a href="${basePath}pages/materi.html" class="text-slate-600 hover:text-blue-600 font-medium transition no-underline">Materi</a>
                    <a href="${basePath}pages/program.html" class="text-slate-600 hover:text-blue-600 font-medium transition no-underline">Program</a>
                    <a href="${basePath}pages/roadmap.html" class="text-slate-600 hover:text-blue-600 font-medium transition no-underline">Roadmap</a>
                </div>
                <div class="hidden md:flex items-center space-x-4">
                    <a href="${basePath}pages/donasi.html" class="text-blue-600 font-semibold hover:text-blue-700 transition no-underline">Donasi</a>
                    <a href="${basePath}pages/kelas-gratis.html" class="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline">Kelas Gratis</a>
                </div>
            </div>
        </div>
    </nav>
`;

document.getElementById('navbar-container').innerHTML = navbarHTML;