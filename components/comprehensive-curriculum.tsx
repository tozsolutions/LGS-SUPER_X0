"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, BookOpen, Trophy, Brain, Zap, Play, Pause, Volume2 } from "lucide-react"

// MEB 2025-2026 Curriculum Data
const curriculumData = {
  matematik: [
    {
      hafta: 1,
      konu: "Cebirsel İfadeler",
      alexAnlatimi: "Matematik, roketi uzaya fırlatmak gibi. Her değişken bir koordinat!",
      fenerbahceAnalojisi: "x değişkeni Fenerbahçe'nin gol sayısı gibi - değişebilir ama formül aynı kalır",
      gorevler: ["Terim kavramı", "Katsayı bulma", "Benzer terimler"],
      tamamlandi: true,
      puan: 95,
    },
    {
      hafta: 2,
      konu: "Denklemler",
      alexAnlatimi: "Denklem çözmek, oyunun şifresini kırmak gibi!",
      fenerbahceAnalojisi: "Maç skoru denklemi: FB golü + rakip golü = toplam gol",
      gorevler: ["Birinci derece denklem", "Denklem kurma", "Problem çözme"],
      tamamlandi: true,
      puan: 88,
    },
    {
      hafta: 3,
      konu: "Oran-Orantı",
      alexAnlatimi: "Oran, Fenerbahçe'nin galibiyet oranı gibi - her zaman dengeli!",
      fenerbahceAnalojisi: "FB'nin gol oranı: 3 maçta 7 gol = 7/3 oranı",
      gorevler: ["Oran kavramı", "Orantı kurma", "Ters orantı"],
      tamamlandi: false,
      puan: 0,
    },
    {
      hafta: 4,
      konu: "Yüzde Hesapları",
      alexAnlatimi: "Yüzde, Fenerbahçe'nin şampiyonluk şansı gibi - %100 inanıyoruz!",
      fenerbahceAnalojisi: "FB'nin kazanma oranı %75 ise, 4 maçtan 3'ünü kazanır",
      gorevler: ["Yüzde bulma", "Artış-azalış", "Faiz hesapları"],
      tamamlandi: false,
      puan: 0,
    },
  ],
  turkce: [
    {
      hafta: 1,
      konu: "Paragraf (Ana Fikir)",
      alexAnlatimi: "Paragraf, oyunun hikayesi gibi - ana fikir oyunun amacı!",
      fenerbahceAnalojisi: "Maç raporu gibi: ana fikir 'FB kazandı', detaylar nasıl kazandığı",
      gorevler: ["Ana fikir bulma", "Başlık seçme", "Özet çıkarma"],
      tamamlandi: true,
      puan: 92,
    },
    {
      hafta: 2,
      konu: "Paragraf (Yardımcı Fikir)",
      alexAnlatimi: "Yardımcı fikirler, oyunun yan görevleri gibi - ana hikayeyi destekler",
      fenerbahceAnalojisi: "Ana fikir 'FB şampiyon', yardımcı fikirler: iyi oyun, taraftar desteği",
      gorevler: ["Yardımcı fikir ayırma", "Destekleyici cümle", "Örnek bulma"],
      tamamlandi: true,
      puan: 87,
    },
    {
      hafta: 3,
      konu: "Noktalama",
      alexAnlatimi: "Noktalama, oyunun kuralları gibi - doğru kullanım kazandırır!",
      fenerbahceAnalojisi: "Virgül = kısa pas, nokta = gol, ünlem = GOOOOL!",
      gorevler: ["Virgül kullanımı", "Nokta kuralları", "Soru işareti"],
      tamamlandi: false,
      puan: 0,
    },
    {
      hafta: 4,
      konu: "Sözcükte Anlam",
      alexAnlatimi: "Kelimeler, oyun karakterleri gibi - her birinin özel gücü var!",
      fenerbahceAnalojisi: "Forvet = gol atan, kaleci = gol engelleyen, her pozisyonun anlamı farklı",
      gorevler: ["Gerçek anlam", "Mecaz anlam", "Terim anlamı"],
      tamamlandi: false,
      puan: 0,
    },
  ],
  fen: [
    {
      hafta: 1,
      konu: "Hücre",
      alexAnlatimi: "Hücre, Fenerbahçe takımının en küçük birimi - oyuncu gibi!",
      fenerbahceAnalojisi: "Her oyuncu (hücre) takımın (vücut) bir parçası, hepsi birlikte çalışır",
      gorevler: ["Hücre yapısı", "Organeller", "Hücre türleri"],
      tamamlandi: true,
      puan: 90,
    },
    {
      hafta: 2,
      konu: "Mitoz",
      alexAnlatimi: "Mitoz, takımın kendini yenilemesi gibi - eski oyuncular gider, yenileri gelir!",
      fenerbahceAnalojisi: "FB akademisi gibi: 1 genç oyuncu → 2 profesyonel oyuncu",
      gorevler: ["Mitoz evreleri", "Kromozom davranışı", "Hücre bölünmesi"],
      tamamlandi: false,
      puan: 0,
    },
    {
      hafta: 3,
      konu: "Mayoz",
      alexAnlatimi: "Mayoz, özel turnuva gibi - sadece en iyiler katılır!",
      fenerbahceAnalojisi: "Şampiyonlar Ligi gibi: normal lig (mitoz) vs özel turnuva (mayoz)",
      gorevler: ["Mayoz evreleri", "Genetik çeşitlilik", "Gamet oluşumu"],
      tamamlandi: false,
      puan: 0,
    },
    {
      hafta: 4,
      konu: "Basınç",
      alexAnlatimi: "Basınç, stadyumdaki taraftar baskısı gibi - ne kadar çok, o kadar etkili!",
      fenerbahceAnalojisi: "Ülker Stadı'nda 50.000 taraftar = yüksek basınç, rakip zorlanır",
      gorevler: ["Basınç formülü", "Sıvı basıncı", "Gaz basıncı"],
      tamamlandi: false,
      puan: 0,
    },
  ],
}

// Gelecek Fısıltıları - Weekly Mentorship Messages
const gelecekFisiltilari = [
  {
    hafta: 1,
    mesaj: "Matematik, roketi uzaya gönderir",
    detay:
      "Bugün çalıştığın matematik, bir gün bir roketi uzaya gönderecek. SpaceX'teki mühendisler de senin yaşındayken matematik öğreniyordu.",
    ses: "/audio/gelecek-fisiltisi-1.mp3",
    gorsel: "/images/rocket-math.jpg",
  },
  {
    hafta: 2,
    mesaj: "Paragraf anlamak, kodları çözmek gibi",
    detay: "Bir paragrafı anlamak, bir oyunun kodunu çözmek gibi. İkisi de ipuçları arar, mantık kurar.",
    ses: "/audio/gelecek-fisiltisi-2.mp3",
    gorsel: "/images/code-reading.jpg",
  },
  {
    hafta: 3,
    mesaj: "Disiplin, seni hem LGS'de hem hayatta ileri taşır",
    detay: "Yüzmedeki disiplinin, LGS'deki başarının ve gelecekteki kariyerinin temeli aynı.",
    ses: "/audio/gelecek-fisiltisi-3.mp3",
    gorsel: "/images/discipline-success.jpg",
  },
  {
    hafta: 4,
    mesaj: "Futbolcu olmasan da, robotu sen yapabilirsin",
    detay: "Fenerbahçe'de oynamasan da, sahada oynayan robotları sen tasarlayabilirsin. Teknoloji senin elinde!",
    ses: "/audio/gelecek-fisiltisi-4.mp3",
    gorsel: "/images/robot-football.jpg",
  },
]

export default function ComprehensiveCurriculum() {
  const [activeSubject, setActiveSubject] = useState("matematik")
  const [currentWeek, setCurrentWeek] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null)

  const playAudio = (audioSrc: string) => {
    if (currentAudio) {
      currentAudio.pause()
    }
    const audio = new Audio(audioSrc)
    audio.play()
    setCurrentAudio(audio)
    setIsPlaying(true)

    audio.onended = () => {
      setIsPlaying(false)
      setCurrentAudio(null)
    }
  }

  const pauseAudio = () => {
    if (currentAudio) {
      currentAudio.pause()
      setIsPlaying(false)
    }
  }

  const getCurrentWeekData = () => {
    return curriculumData[activeSubject as keyof typeof curriculumData]?.find((item) => item.hafta === currentWeek)
  }

  const currentWeekData = getCurrentWeekData()
  const currentMentorship = gelecekFisiltilari.find((item) => item.hafta === currentWeek)

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-16 h-16 border-4 border-primary">
              <AvatarImage src="/alex-official.jpg" alt="Alex" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">AX</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground">MEB 2025-2026 Müfredatı</h1>
              <p className="text-muted-foreground">Alex ile Kapsamlı LGS Hazırlığı</p>
            </div>
          </div>

          {/* Subject Navigation */}
          <div className="flex gap-2 mb-6">
            {Object.keys(curriculumData).map((subject) => (
              <Button
                key={subject}
                variant={activeSubject === subject ? "default" : "outline"}
                onClick={() => setActiveSubject(subject)}
                className="capitalize"
              >
                {subject === "matematik" && "📊 Matematik"}
                {subject === "turkce" && "📚 Türkçe"}
                {subject === "fen" && "🔬 Fen Bilimleri"}
              </Button>
            ))}
          </div>

          {/* Week Navigation */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4].map((week) => (
              <Button
                key={week}
                variant={currentWeek === week ? "default" : "outline"}
                onClick={() => setCurrentWeek(week)}
                size="sm"
              >
                Hafta {week}
              </Button>
            ))}
          </div>
        </div>

        {/* Current Week Content */}
        {currentWeekData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Lesson Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  {currentWeekData.konu}
                </CardTitle>
                <CardDescription>
                  Hafta {currentWeek} - {activeSubject.charAt(0).toUpperCase() + activeSubject.slice(1)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Alex's Explanation */}
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/alex-official.jpg" alt="Alex" />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium mb-1">Alex'in Açıklaması:</p>
                        <p className="text-sm text-muted-foreground">{currentWeekData.alexAnlatimi}</p>
                      </div>
                    </div>
                  </div>

                  {/* Fenerbahçe Analogy */}
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-accent-foreground">FB</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Fenerbahçe Analojisi:</p>
                        <p className="text-sm text-muted-foreground">{currentWeekData.fenerbahceAnalojisi}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div>
                    <p className="text-sm font-medium mb-2">Bu Haftanın Görevleri:</p>
                    <div className="space-y-2">
                      {currentWeekData.gorevler.map((gorev, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{gorev}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">İlerleme</span>
                      <span className="text-sm text-muted-foreground">
                        {currentWeekData.tamamlandi ? `${currentWeekData.puan}/100` : "0/100"}
                      </span>
                    </div>
                    <Progress value={currentWeekData.tamamlandi ? currentWeekData.puan : 0} className="h-2" />
                  </div>

                  {/* Action Button */}
                  <Button className="w-full" disabled={currentWeekData.tamamlandi}>
                    {currentWeekData.tamamlandi ? (
                      <>
                        <Trophy className="w-4 h-4 mr-2" />
                        Tamamlandı
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Derse Başla
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Mentorship */}
            {currentMentorship && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    Gelecek Fısıltısı
                  </CardTitle>
                  <CardDescription>Hafta {currentWeek} - Alex'ten Motivasyon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Mentorship Message */}
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">{currentMentorship.mesaj}</h3>
                      <p className="text-sm text-muted-foreground">{currentMentorship.detay}</p>
                    </div>

                    {/* Audio Control */}
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => (isPlaying ? pauseAudio() : playAudio(currentMentorship.ses))}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Volume2 className="w-4 h-4 mr-2" />}
                        {isPlaying ? "Duraklat" : "Dinle"}
                      </Button>
                      <span className="text-sm text-muted-foreground">Alex'in sesli mesajı</span>
                    </div>

                    {/* Visual Element */}
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="w-12 h-12 text-accent mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Motivasyon Görseli</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Academic Calendar Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              2025-2026 Akademik Takvim
            </CardTitle>
            <CardDescription>MEB müfredatına göre planlanan yıllık program</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(curriculumData).map(([subject, weeks]) => (
                <div key={subject} className="space-y-3">
                  <h4 className="font-semibold capitalize flex items-center gap-2">
                    {subject === "matematik" && "📊"}
                    {subject === "turkce" && "📚"}
                    {subject === "fen" && "🔬"}
                    {subject.charAt(0).toUpperCase() + subject.slice(1)}
                  </h4>
                  <div className="space-y-2">
                    {weeks.map((week) => (
                      <div key={week.hafta} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div>
                          <p className="text-sm font-medium">{week.konu}</p>
                          <p className="text-xs text-muted-foreground">Hafta {week.hafta}</p>
                        </div>
                        <Badge variant={week.tamamlandi ? "default" : "secondary"}>{week.tamamlandi ? "✓" : "○"}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
