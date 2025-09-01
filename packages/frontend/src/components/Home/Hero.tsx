import Link from 'next/link';
import { useAuth } from '@/store/authStore';

export const Hero = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-800 mb-6">
            LGS'de Başarının
            <br />
            <span className="text-primary-600">Yeni Adresi</span>
          </h1>
          <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Kapsamlı soru bankası, interaktif sınavlar ve kişiselleştirilmiş 
            öğrenme deneyimi ile Lise Giriş Sınavı'na en iyi şekilde hazırlanın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {isAuthenticated ? (
              <Link href="/dashboard" className="btn-primary text-lg px-8 py-3">
                Panele Git
              </Link>
            ) : (
              <>
                <Link href="/auth/register" className="btn-primary text-lg px-8 py-3">
                  Ücretsiz Başla
                </Link>
                <Link href="/auth/login" className="btn-secondary text-lg px-8 py-3">
                  Giriş Yap
                </Link>
              </>
            )}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-secondary-600">Özgün Soru</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-secondary-600">Deneme Sınavı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-secondary-600">Mutlu Öğrenci</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-50"></div>
      </div>
    </section>
  );
};