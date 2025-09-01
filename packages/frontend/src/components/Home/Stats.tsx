const stats = [
  {
    number: '98%',
    label: 'Başarı Oranı',
    description: 'Öğrencilerimizin %98\'i hedefledikleri liseye yerleşti',
  },
  {
    number: '450+',
    label: 'Ortalama Puan',
    description: 'Öğrencilerimizin LGS\'deki ortalama net puanı',
  },
  {
    number: '2.5 Milyon',
    label: 'Çözülen Soru',
    description: 'Platformumuzda bugüne kadar çözülen toplam soru sayısı',
  },
  {
    number: '24/7',
    label: 'Destek',
    description: 'Kesintisiz eğitim için 7/24 teknik ve eğitim desteği',
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rakamlarla Başarımız
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Binlerce öğrencinin güvendiği platform ile siz de başarıya ulaşın.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-primary-100 mb-2">
                {stat.label}
              </div>
              <div className="text-primary-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};