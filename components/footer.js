const pathFooter = window.location.pathname;
const isRootFooter = pathFooter.endsWith('index.html') || pathFooter === '/' || !pathFooter.includes('.html');
const baseFooter = isRootFooter ? '' : '../';

const footerHTML = `
    <footer class="bg-white py-12 border-t border-slate-200 font-sans mt-auto">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
                <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <i class="ph-fill ph-brain text-blue-600 text-2xl"></i>
                    <span class="font-bold text-xl text-slate-900">Nalar Etam</span>
                </div>
                <p class="text-slate-500 max-w-sm mx-auto md:mx-0">Membangun generasi logis melalui pendekatan belajar matematika visual dan konseptual.</p>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 mb-4">Navigasi</h4>
                <ul class="space-y-2 text-slate-500 list-none p-0">
                    <li><a href="${baseFooter}pages/tentang.html" class="hover:text-blue-600 no-underline text-slate-500">Tentang Kami</a></li>
                    <li><a href="${baseFooter}pages/roadmap.html" class="hover:text-blue-600 no-underline text-slate-500">Roadmap</a></li>
                    <li><a href="${baseFooter}pages/kontak.html" class="hover:text-blue-600 no-underline text-slate-500">Kontak</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 mb-4">Sosial Media</h4>
                <div class="flex justify-center md:justify-start gap-4 text-2xl text-slate-400">
                    <a href="#" class="hover:text-rose-500 transition-colors"><i class="ph-fill ph-instagram-logo"></i></a>
                    <a href="#" class="hover:text-black transition-colors"><i class="ph-fill ph-tiktok-logo"></i></a>
                    <a href="#" class="hover:text-red-600 transition-colors"><i class="ph-fill ph-youtube-logo"></i></a>
                </div>
            </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
            &copy; 2026 Nalar Etam. All rights reserved.
        </div>
    </footer>
`;

document.getElementById('footer-container').innerHTML = footerHTML;