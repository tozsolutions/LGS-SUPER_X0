import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">LGS SUPER X0</h3>
            <p className="text-secondary-300 mb-4">
              Lise Giriş Sınavı hazırlık platformu. Kapsamlı sorular, 
              interaktif sınavlar ve kişiselleştirilmiş öğrenme deneyimi ile 
              hedeflerinize ulaşın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/exams" className="text-secondary-300 hover:text-white transition-colors">
                  Sınavlar
                </Link>
              </li>
              <li>
                <Link href="/questions" className="text-secondary-300 hover:text-white transition-colors">
                  Sorular
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-secondary-300 hover:text-white transition-colors">
                  Öğrenci Paneli
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Destek</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-secondary-300 hover:text-white transition-colors">
                  Yardım
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-300 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-secondary-300 hover:text-white transition-colors">
                  Kullanım Şartları
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
          <p className="text-secondary-300">
            © {new Date().getFullYear()} LGS SUPER X0. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};