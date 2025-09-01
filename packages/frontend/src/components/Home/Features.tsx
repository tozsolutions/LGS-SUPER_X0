import { 
  BookOpenIcon, 
  ChartBarIcon, 
  ClockIcon, 
  AcademicCapIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: BookOpenIcon,
    title: 'Kapsamlı Soru Bankası',
    description: 'Tüm LGS konularını kapsayan 1000+ özgün soru ile pratik yapın.',
  },
  {
    icon: ChartBarIcon,
    title: 'Detaylı Analiz',
    description: 'Performansınızı takip edin, güçlü ve zayıf yönlerinizi keşfedin.',
  },
  {
    icon: ClockIcon,
    title: 'Gerçek Zamanlı Sınavlar',
    description: 'LGS formatında deneme sınavları ile gerçek sınav deneyimi yaşayın.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Uzman Eğitmenler',
    description: 'Alanında uzman öğretmenler tarafından hazırlanan kaliteli içerik.',
  },
  {
    icon: SparklesIcon,
    title: 'Kişiselleştirilmiş Öğrenme',
    description: 'Size özel öğrenme planı ile hedeflerinize daha hızlı ulaşın.',
  },
  {
    icon: UserGroupIcon,
    title: 'Topluluk Desteği',
    description: 'Diğer öğrencilerle etkileşim kurun, birlikte öğrenin.',
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            Neden LGS SUPER X0?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Modern öğrenme teknolojileri ve kanıtlanmış eğitim metodları ile 
            LGS başarınızı garanti ediyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};