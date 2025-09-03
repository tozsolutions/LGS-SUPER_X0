"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Target,
  Lightbulb,
  Heart,
  Zap,
  RefreshCw,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Brain,
  Trophy,
} from "lucide-react"

interface ErrorPattern {
  id: number
  subject: string
  topic: string
  errorType: string
  frequency: number
  lastOccurrence: string
  difficulty: "easy" | "medium" | "hard"
  alexAnalysis: string
  remediation: string[]
  fenerbahceAnalogy: string
}

interface MotivationMessage {
  id: number
  type: "encouragement" | "celebration" | "guidance" | "future_whisper"
  title: string
  message: string
  alexVoiceNote: string
  emoji: string
  actionRequired?: string
}

export default function ErrorAnalysis() {
  const [selectedTab, setSelectedTab] = useState("hatalar")
  const [showVoicePlayer, setShowVoicePlayer] = useState(false)
  const [currentMessage, setCurrentMessage] = useState<MotivationMessage | null>(null)

  const errorPatterns: ErrorPattern[] = [
    {
      id: 1,
      subject: "Matematik",
      topic: "Cebirsel İfadeler",
      errorType: "Katsayı-Değişken Karışıklığı",
      frequency: 3,
      lastOccurrence: "2 gün önce",
      difficulty: "easy",
      alexAnalysis:
        "Tuna, katsayı ve değişkeni karıştırıyorsun. Fenerbahçe'nin forma numarası (katsayı) ile oyuncunun adı (değişken) farklı!",
      remediation: [
        "Görsel hafıza tekniği: Fenerbahçe forması ile sayıları ilişkilendir",
        "5 dakikalık katsayı-değişken oyunu",
        "Alex ile sesli tekrar çalışması",
      ],
      fenerbahceAnalogy: "3x = 3 numaralı Fenerbahçe oyuncusu gibi düşün!",
    },
    {
      id: 2,
      subject: "Türkçe",
      topic: "Paragraf Anlama",
      errorType: "Uzun Paragrafta Odak Kaybı",
      frequency: 5,
      lastOccurrence: "1 gün önce",
      difficulty: "medium",
      alexAnalysis:
        "Uzun paragrafları okurken dikkatini kaybediyorsun. Fenerbahçe maçını 90 dakika izlediğin gibi sabırlı ol!",
      remediation: [
        "Paragrafı 3 parçaya böl ve ara ver",
        "Ana fikir avcılığı oyunu",
        "Fenerbahçe haberleri ile pratik yap",
      ],
      fenerbahceAnalogy: "Maç 90 dakika, paragraf da sabır ister!",
    },
    {
      id: 3,
      subject: "Fen Bilimleri",
      topic: "Hücre Bölünmesi",
      errorType: "Mitoz-Mayoz Karışıklığı",
      frequency: 2,
      lastOccurrence: "3 gün önce",
      difficulty: "hard",
      alexAnalysis:
        "Mitoz ve mayoz arasındaki farkı tam kavrayamamışsın. Fenerbahçe'nin antrenman (mitoz) ve maç (mayoz) stratejisi gibi!",
      remediation: [
        "Görsel animasyon ile tekrar izle",
        "Fenerbahçe analojisi ile hafıza kartları",
        "Adım adım çizim çalışması",
      ],
      fenerbahceAnalogy: "Antrenman = Mitoz (aynı), Maç = Mayoz (farklı stratejiler)",
    },
  ]

  const motivationMessages: MotivationMessage[] = [
    {
      id: 1,
      type: "encouragement",
      title: "Hata Yapmak Normal!",
      message:
        "Tuna, Fenerbahçe'nin en büyük yıldızları bile penaltı kaçırır! Önemli olan öğrenmek ve devam etmek. Sen harikasın! 💪",
      alexVoiceNote: "Sesli mesaj: Hata yapmak öğrenmenin en güzel parçası...",
      emoji: "💪",
      actionRequired: "Kendine güven ve devam et!",
    },
    {
      id: 2,
      type: "celebration",
      title: "Matematik'te Süper İlerleme!",
      message: "Bu hafta matematik'te %15 gelişim gösterdin! Fenerbahçe'nin şampiyonluk yolundaki kararlılığı gibi! 🏆",
      alexVoiceNote: "Sesli mesaj: Tebrikler Tuna, matematik'te harika gidiyorsun...",
      emoji: "🏆",
      actionRequired: "Bu başarını kutla ve devam et!",
    },
    {
      id: 3,
      type: "future_whisper",
      title: "Gelecek Fısıltısı: Matematik Roketi",
      message:
        "Matematik sadece sınav değil, geleceğin roketini uzaya gönderecek güç! Bugün öğrendiklerin yarının teknolojisi. 🚀",
      alexVoiceNote: "Sesli mesaj: Matematik ile geleceğin kapıları açılıyor...",
      emoji: "🚀",
      actionRequired: "Hayallerini büyük tut!",
    },
    {
      id: 4,
      type: "guidance",
      title: "Türkçe'de Odaklanma Stratejisi",
      message:
        "Uzun paragrafları Fenerbahçe maçı gibi düşün: Her bölümün bir anlamı var. Sabırla oku, başarı gelecek! 📚",
      alexVoiceNote: "Sesli mesaj: Paragraf okuma teknikleri...",
      emoji: "📚",
      actionRequired: "Yeni tekniği dene!",
    },
  ]

  const playVoiceMessage = (message: MotivationMessage) => {
    setCurrentMessage(message)
    setShowVoicePlayer(true)
  }

  const overallStats = {
    totalErrors: 10,
    improvedAreas: 3,
    motivationLevel: 85,
    weeklyProgress: 12,
  }

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-500">{overallStats.totalErrors}</div>
            <p className="text-xs text-muted-foreground">Bu Hafta Hata</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">{overallStats.improvedAreas}</div>
            <p className="text-xs text-muted-foreground">Gelişen Alan</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">%{overallStats.motivationLevel}</div>
            <p className="text-xs text-muted-foreground">Motivasyon</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">+{overallStats.weeklyProgress}%</div>
            <p className="text-xs text-muted-foreground">Haftalık İlerleme</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hatalar" className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Hata Analizi
          </TabsTrigger>
          <TabsTrigger value="motivasyon" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Motivasyon
          </TabsTrigger>
          <TabsTrigger value="gelisim" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Gelişim Takibi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hatalar" className="space-y-6">
          {/* Error Patterns */}
          <div className="space-y-4">
            {errorPatterns.map((error) => (
              <Card key={error.id} className="border-l-4 border-l-red-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <span className="text-lg">{error.errorType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{error.subject}</Badge>
                      <Badge
                        variant={error.frequency > 3 ? "destructive" : error.frequency > 1 ? "secondary" : "outline"}
                      >
                        {error.frequency} kez
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-1">Konu: {error.topic}</p>
                    <p className="text-xs text-muted-foreground">Son hata: {error.lastOccurrence}</p>
                  </div>

                  {/* Alex's Analysis */}
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm mb-1">Alex'in Analizi:</p>
                        <p className="text-sm text-muted-foreground mb-2">{error.alexAnalysis}</p>
                        <div className="p-2 bg-white/50 rounded text-xs">
                          <strong>Fenerbahçe Analojisi:</strong> {error.fenerbahceAnalogy}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Remediation Steps */}
                  <div>
                    <p className="font-medium text-sm mb-2 flex items-center gap-1">
                      <Target className="w-4 h-4 text-green-500" />
                      Çözüm Önerileri:
                    </p>
                    <div className="space-y-2">
                      {error.remediation.map((step, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Tekrar Çalış
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Konu Anlatımı
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="motivasyon" className="space-y-6">
          {/* Voice Player */}
          {showVoicePlayer && currentMessage && (
            <Card className="border-2 border-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl">
                    {currentMessage.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{currentMessage.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{currentMessage.alexVoiceNote}</p>
                    <div className="flex items-center gap-2">
                      <Button size="sm">
                        <Zap className="w-4 h-4 mr-2" />
                        Sesli Mesajı Çal
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setShowVoicePlayer(false)}>
                        Kapat
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Motivation Messages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motivationMessages.map((message) => (
              <Card
                key={message.id}
                className={`hover:shadow-lg transition-all cursor-pointer ${
                  message.type === "celebration"
                    ? "border-green-200 bg-green-50"
                    : message.type === "future_whisper"
                      ? "border-blue-200 bg-blue-50"
                      : message.type === "encouragement"
                        ? "border-yellow-200 bg-yellow-50"
                        : "border-purple-200 bg-purple-50"
                }`}
                onClick={() => playVoiceMessage(message)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">{message.emoji}</span>
                    {message.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{message.message}</p>

                  {message.actionRequired && (
                    <div className="p-2 bg-white/50 rounded-lg mb-3">
                      <p className="text-xs font-medium">Eylem: {message.actionRequired}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        message.type === "celebration"
                          ? "default"
                          : message.type === "future_whisper"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {message.type === "celebration"
                        ? "🎉 Kutlama"
                        : message.type === "future_whisper"
                          ? "🔮 Gelecek Fısıltısı"
                          : message.type === "encouragement"
                            ? "💪 Cesaret"
                            : "🎯 Rehberlik"}
                    </Badge>
                    <Button size="sm" variant="ghost" className="ml-auto">
                      <Zap className="w-3 h-3 mr-1" />
                      Dinle
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Weekly Future Whisper */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                Bu Haftanın Gelecek Fısıltısı
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                  <AvatarFallback className="bg-blue-600 text-white">AX</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium mb-2">Disiplin, Başarının Anahtarı</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Tuna, disiplin sadece sınavda değil, hayatın her alanında seni zirveye taşır. Fenerbahçe'nin
                    antrenman disiplini gibi, sen de her gün biraz daha güçleniyorsun. 2 yıl sonra LGS'de, 10 yıl sonra
                    hayatta bu disiplin seni şampiyon yapacak! 🏆"
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">
                      <Zap className="w-4 h-4 mr-2" />
                      Sesli Dinle
                    </Button>
                    <Badge variant="outline">5 dakika</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gelisim" className="space-y-6">
          {/* Progress Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Matematik</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Bu Hafta</span>
                    <span className="font-medium text-green-600">+15%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    Sürekli gelişim
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Türkçe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Bu Hafta</span>
                    <span className="font-medium text-green-600">+8%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    İyi ilerleme
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Fen Bilimleri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Bu Hafta</span>
                    <span className="font-medium text-orange-600">+3%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Target className="w-3 h-3 text-orange-500" />
                    Odaklanma gerekli
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alex's Weekly Summary */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Alex'in Haftalık Değerlendirmesi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Güçlü Yanların:</p>
                    <p className="text-sm text-muted-foreground">
                      Matematik'te sürekli gelişim gösteriyorsun! Cebirsel ifadelerde Fenerbahçe'nin taktik disiplini
                      gibi sistematik yaklaşımın harika. Hatalarından hızlı öğreniyorsun.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                  <Target className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Gelişim Alanları:</p>
                    <p className="text-sm text-muted-foreground">
                      Türkçe'de uzun paragraflar konusunda sabır geliştirmeliyiz. Fen'de görsel hafıza tekniklerini daha
                      çok kullanabiliriz. Fenerbahçe maçı gibi 90 dakika odaklanma pratiği yapalım.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Gelecek Hafta İçin Plan:</p>
                    <p className="text-sm text-muted-foreground">
                      Fenerbahçe'nin Avrupa maçı var! Çalışma programını maç saatine göre ayarlayacağız. Hata yaptığın
                      konulara ekstra zaman ayıralım ve başarılarını kutlayalım!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
