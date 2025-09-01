# LGS SUPER X0 - Lise Giriş Sınavı Hazırlık Platformu

<div align="center">

![LGS SUPER X0 Logo](https://via.placeholder.com/300x100/3B82F6/FFFFFF?text=LGS+SUPER+X0)

**Kapsamlı LGS Hazırlık Platformu**

[![CI/CD Pipeline](https://github.com/tozsolutions/LGS-SUPER_X0/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/tozsolutions/LGS-SUPER_X0/actions/workflows/ci-cd.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

## 📚 Proje Hakkında

LGS SUPER X0, Lise Giriş Sınavı'na hazırlanan öğrenciler için geliştirilmiş kapsamlı bir eğitim platformudur. Modern web teknolojileri kullanılarak oluşturulan bu platform, öğrencilere interaktif sınavlar, detaylı analiz raporları ve kişiselleştirilmiş öğrenme deneyimi sunar.

### 🎯 Özellikler

- ✅ **Kapsamlı Soru Bankası**: 1000+ özgün LGS sorusu
- ✅ **Gerçek Zamanlı Sınavlar**: LGS formatında deneme sınavları
- ✅ **Detaylı Analiz**: Performans takibi ve raporlama
- ✅ **Kişiselleştirilmiş Öğrenme**: Adaptive learning algoritması
- ✅ **Multi-Role Sistem**: Öğrenci, Öğretmen ve Admin rolleri
- ✅ **Responsive Tasarım**: Tüm cihazlarda uyumlu
- ✅ **Güvenli Kimlik Doğrulama**: JWT tabanlı güvenlik
- ✅ **RESTful API**: Scalable backend mimarisi

## 🚀 Teknoloji Stack

### Frontend
- **Framework**: Next.js 13 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **State Management**: Zustand + React Query
- **Forms**: React Hook Form
- **Icons**: Heroicons
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Authentication**: JWT
- **Validation**: Joi + Express Validator
- **Logging**: Winston
- **Security**: Helmet, CORS, Rate Limiting

### DevOps
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Code Quality**: ESLint, Prettier
- **Testing**: Jest, Playwright

## 📦 Kurulum

### Gereksinimler

- Node.js 18+
- npm 9+
- Docker (opsiyonel)

### Yerel Geliştirme

1. **Repoyu klonlayın**
```bash
git clone https://github.com/tozsolutions/LGS-SUPER_X0.git
cd LGS-SUPER_X0
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Ortam değişkenlerini ayarlayın**
```bash
cp .env.example .env
# .env dosyasını düzenleyin
```

4. **Geliştirme sunucularını başlatın**
```bash
npm run dev
```

Bu komut hem backend (port 3001) hem de frontend (port 3000) sunucularını başlatır.

### Docker ile Kurulum

```bash
# Servisleri başlat
docker-compose up -d

# Logları takip et
docker-compose logs -f
```

## 🏗️ Proje Yapısı

```
LGS-SUPER_X0/
├── packages/
│   ├── backend/                 # Express.js API sunucusu
│   │   ├── src/
│   │   │   ├── controllers/     # İş mantığı kontrolcüleri
│   │   │   ├── middleware/      # Express middleware'leri
│   │   │   ├── routes/         # API rotaları
│   │   │   ├── utils/          # Yardımcı fonksiyonlar
│   │   │   └── index.ts        # Ana sunucu dosyası
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── frontend/               # Next.js React uygulaması
│   │   ├── src/
│   │   │   ├── app/           # Next.js 13 App Router
│   │   │   ├── components/    # React bileşenleri
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   ├── lib/           # API ve utilities
│   │   │   └── store/         # State management
│   │   ├── public/
│   │   ├── Dockerfile
│   │   └── package.json
│   └── shared/                # Ortak türler ve utilities
│       ├── src/
│       │   ├── types.ts       # TypeScript tip tanımları
│       │   └── utils.ts       # Ortak fonksiyonlar
│       └── package.json
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions pipeline
├── docker-compose.yml         # Docker servis tanımları
├── .env.example              # Ortam değişkenleri şablonu
└── README.md
```

## 🔧 Geliştirme

### Mevcut Komutlar

```bash
# Tüm projeyi çalıştır
npm run dev

# Sadece backend'i çalıştır
npm run dev:backend

# Sadece frontend'i çalıştır
npm run dev:frontend

# Projeyi derle
npm run build

# Testleri çalıştır
npm test

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Tip kontrolü
npm run typecheck
```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Kullanıcı kaydı
- `POST /api/auth/login` - Kullanıcı girişi
- `POST /api/auth/logout` - Kullanıcı çıkışı
- `POST /api/auth/refresh` - Token yenileme

#### Users
- `GET /api/users/profile` - Kullanıcı profili
- `PUT /api/users/profile` - Profil güncelleme
- `GET /api/users` - Tüm kullanıcılar (Admin)
- `DELETE /api/users/:id` - Kullanıcı silme (Admin)

#### Questions
- `POST /api/questions` - Soru ekleme (Öğretmen/Admin)
- `GET /api/questions` - Soruları listele
- `GET /api/questions/:id` - Soru detayı
- `PUT /api/questions/:id` - Soru güncelleme
- `DELETE /api/questions/:id` - Soru silme

#### Exams
- `POST /api/exams` - Sınav oluşturma (Öğretmen/Admin)
- `GET /api/exams` - Sınavları listele
- `GET /api/exams/:id` - Sınav detayı
- `POST /api/exams/:id/start` - Sınav başlatma (Öğrenci)
- `POST /api/exams/:id/submit` - Sınav gönderme (Öğrenci)
- `GET /api/exams/:id/attempts` - Sınav denemeleri

## 🧪 Test

```bash
# Unit testler
npm run test

# Watch mode
npm run test:watch

# Coverage raporu
npm run test:coverage

# E2E testler
npm run test:e2e
```

## 📊 Monitöring ve Logging

- **Health Check**: `GET /health`
- **Logs**: Winston ile yapılandırılmış logging
- **Error Tracking**: Merkezi hata yakalama
- **Performance**: Response time monitoring

## 🔐 Güvenlik

- **Authentication**: JWT token-based
- **Authorization**: Role-based access control
- **Data Validation**: Joi ve Express Validator
- **Security Headers**: Helmet middleware
- **Rate Limiting**: IP-based request limiting
- **CORS**: Configured for secure cross-origin requests

## 🚀 Deployment

### Staging Environment
```bash
# Docker ile staging deployment
docker-compose -f docker-compose.staging.yml up -d
```

### Production Environment
```bash
# Production optimized build
npm run build
npm start
```

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

### Geliştirme Standartları

- TypeScript kullanın
- ESLint kurallarına uyun
- Test yazın
- Commit mesajları açıklayıcı olsun
- PR'da değişiklikleri detaylandırın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Proje**: [LGS SUPER X0](https://github.com/tozsolutions/LGS-SUPER_X0)
- **Geliştirici**: Toz Solutions
- **E-posta**: info@tozsolutions.com

## 🙏 Teşekkürler

Bu projeyi mümkün kılan tüm açık kaynak projelerine ve katkıda bulunanlara teşekkürler.

---

<div align="center">
Made with ❤️ by <strong>Toz Solutions</strong>
</div>