import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, MessageCircle, TrendingUp, CheckCircle, Calendar, Trophy, Star, Clock, Brain, Zap } from "lucide-react"

export default function AlexLGSCoach() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-card-foreground">Alex - LGS Koçum</h1>
                <p className="text-xs text-muted-foreground">Tuna için Özel Tasarlandı</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Ana Sayfa
              </a>
              <a href="/dersler" className="text-muted-foreground hover:text-foreground">
                Derslerim
              </a>
              <a href="/planlama" className="text-muted-foreground hover:text-foreground">
                Çalışma Planı
              </a>
              <a href="/fenerbahce" className="text-muted-foreground hover:text-foreground">
                Fenerbahçe
              </a>
              <a href="/motivasyon" className="text-muted-foreground hover:text-foreground">
                Motivasyon
              </a>
              <a href="/aile-paneli" className="text-muted-foreground hover:text-foreground">
                Aile Paneli
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                <Trophy className="w-3 h-3 mr-1" />
                Level 8
              </Badge>
              <Button variant="outline" size="sm">
                Profil
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Alex Karşılama Bölümü */}
      <section className="py-8 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <Avatar className="w-24 h-24 border-4 border-primary">
                <AvatarImage src="/alex-official.jpg" alt="Alex - LGS Koçu" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">AX</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-card-foreground mb-2">Merhaba Tuna! 👋</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Ben Alex, senin kişisel LGS koçun! Brezilyalı ama Fenerbahçe aşığıyım. Birlikte 2026 LGS'de harika bir
                  başarı yakalayacağız!
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline">🇧🇷 Brezilyalı</Badge>
                  <Badge variant="outline">💛💙 Fenerbahçe</Badge>
                  <Badge variant="outline">🎯 LGS Uzmanı</Badge>
                  <Badge variant="outline">🗣️ Çok Dilli</Badge>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Alex'ten Günlük Mesaj</span>
                </div>
                <p className="text-primary-foreground/90">
                  "Günaydın Tuna! Bugün matematik cebirsel ifadelerle oynayacağız. Fenerbahçe'nin forma numaraları gibi
                  düşün - her sayı bir yere işaret ediyor. Hazırsan başlıyoruz! 🚀"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Günlük Dashboard */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">Bugünkü Programın</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Günlük İlerleme */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Bugünkü İlerleme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tamamlanan</span>
                      <span className="font-medium">3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                    <p className="text-xs text-muted-foreground">Matematik ✓ Türkçe ✓ Fen ✓</p>
                  </div>
                </CardContent>
              </Card>

              {/* Hedef Takibi */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-accent" />
                    LGS Hedefi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">450-475</div>
                    <p className="text-xs text-muted-foreground">Hedef Puan</p>
                    <div className="mt-2">
                      <Badge variant="secondary" className="text-xs">
                        İlk 1000'e Gir!
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fenerbahçe Maçı */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-accent" />
                    Bu Hafta FB
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-sm font-medium">Galatasaray</div>
                    <div className="text-xs text-muted-foreground">Pazar 19:00</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      Maç İzleme Hakkı: Kazanıldı! 🏆
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Motivasyon Puanı */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-accent" />
                    Motivasyon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">⚡ 95%</div>
                    <p className="text-xs text-muted-foreground">Süper Motivasyon!</p>
                    <div className="flex justify-center mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Günlük Çalışma Planı */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Bugünkü Çalışma Programı
                  </CardTitle>
                  <CardDescription>Alex ile birlikte planlanan günlük program</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">19:30-20:15 Matematik</div>
                        <div className="text-xs text-muted-foreground">Cebirsel İfadeler - Tamamlandı</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">20:30-21:00 Türkçe</div>
                        <div className="text-xs text-muted-foreground">Paragraf Anlama - Tamamlandı</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="w-4 h-4 border-2 border-blue-500 rounded-full" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">21:15-21:30 Alex Özet</div>
                        <div className="text-xs text-muted-foreground">Günlük değerlendirme</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                      <Trophy className="w-4 h-4 text-accent" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">21:30-22:00 Ödül Zamanı</div>
                        <div className="text-xs text-muted-foreground">Fenerbahçe maç özeti izleme</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    Haftalık Gelecek Fısıltısı
                  </CardTitle>
                  <CardDescription>Alex'ten motivasyon ve gelecek rehberliği</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/alex-official.jpg" alt="Alex" />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium mb-2">Bu Haftanın Mesajı:</p>
                          <p className="text-sm text-muted-foreground">
                            "Matematik sadece formüller değil, hayallerini uzaya taşıyan roketi kontrol etmek gibidir.
                            Bugün öğrendiklerin geleceğin güzel parçası! 🚀"
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Badge variant="outline" className="justify-center py-2">
                        <Zap className="w-3 h-3 mr-1" />
                        Python Temelleri
                      </Badge>
                      <Badge variant="outline" className="justify-center py-2">
                        <Target className="w-3 h-3 mr-1" />
                        Hedef Odaklı
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ders Modülleri */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">📊 Matematik</CardTitle>
                  <CardDescription>Hedef: 26-28 net (105-115 puan)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Progress value={75} className="h-2" />
                    <div className="text-sm text-muted-foreground">
                      <div>✓ Cebirsel İfadeler</div>
                      <div>✓ Denklemler</div>
                      <div>🔄 Oran-Orantı (Devam Ediyor)</div>
                    </div>
                    <Button size="sm" className="w-full">
                      <a href="/dersler">Devam Et</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">📚 Türkçe</CardTitle>
                  <CardDescription>Hedef: 28-30 net (95-105 puan)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Progress value={80} className="h-2" />
                    <div className="text-sm text-muted-foreground">
                      <div>✓ Ana Fikir Bulma</div>
                      <div>✓ Paragraf Anlama</div>
                      <div>🔄 Yeni Nesil Sorular</div>
                    </div>
                    <Button size="sm" className="w-full">
                      <a href="/dersler">Devam Et</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">🔬 Fen Bilimleri</CardTitle>
                  <CardDescription>Hedef: 25-27 net (90-100 puan)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Progress value={65} className="h-2" />
                    <div className="text-sm text-muted-foreground">
                      <div>✓ Hücre</div>
                      <div>🔄 Mitoz-Mayoz</div>
                      <div>⏳ Basınç</div>
                    </div>
                    <Button size="sm" className="w-full">
                      <a href="/dersler">Devam Et</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">Alex ile Birlikte LGS 2026'da Zirveye!</h3>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Fenerbahçe aşkın, oyun tutkun ve Alex'in rehberliğiyle başarı garantili! 🏆
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90">
                <a href="/fenerbahce">Alex ile Sohbet Et</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <a href="/aile-paneli">Aile Paneli</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <Brain className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-card-foreground">Alex - LGS Koçum</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tuna için özel tasarlanmış AI destekli LGS hazırlık platformu
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Özellikler</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Kişisel AI Mentor</li>
                  <li>Görsel Öğrenme</li>
                  <li>Fenerbahçe Entegrasyonu</li>
                  <li>Aile Takip Paneli</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Dersler</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Matematik</li>
                  <li>Türkçe</li>
                  <li>Fen Bilimleri</li>
                  <li>Sosyal Bilgiler</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Destek</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>7/24 Alex Desteği</li>
                  <li>Aile İletişimi</li>
                  <li>Teknik Destek</li>
                  <li>Motivasyon Koçluğu</li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Alex - LGS Koçum. Tuna'nın başarısı için özel tasarlandı. 🚀
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
