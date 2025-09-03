"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Clock,
  Target,
  BookOpen,
  Trophy,
  Heart,
  MessageCircle,
  Calendar,
  Download,
  Bell,
  Users,
  BarChart3,
} from "lucide-react"

interface WeeklyReport {
  week: string
  totalStudyHours: number
  completedSessions: number
  averageAccuracy: number
  subjectProgress: {
    subject: string
    hoursSpent: number
    accuracy: number
    improvement: number
  }[]
  behavioralNotes: string[]
  alexRecommendations: string[]
  fenerbahceRewards: number
}

interface StudentProgress {
  currentStreak: number
  totalStudyHours: number
  lgsTargetProgress: number
  motivationLevel: number
  strongSubjects: string[]
  improvementAreas: string[]
}

export default function FamilyDashboard() {
  const [selectedWeek, setSelectedWeek] = useState("Bu Hafta")

  const studentProgress: StudentProgress = {
    currentStreak: 7,
    totalStudyHours: 45,
    lgsTargetProgress: 72,
    motivationLevel: 85,
    strongSubjects: ["Matematik", "Türkçe"],
    improvementAreas: ["Fen Bilimleri", "İngilizce"],
  }

  const weeklyReport: WeeklyReport = {
    week: "16-22 Aralık 2024",
    totalStudyHours: 12.5,
    completedSessions: 18,
    averageAccuracy: 78,
    subjectProgress: [
      {
        subject: "Matematik",
        hoursSpent: 4.5,
        accuracy: 85,
        improvement: +15,
      },
      {
        subject: "Türkçe",
        hoursSpent: 3.5,
        accuracy: 82,
        improvement: +8,
      },
      {
        subject: "Fen Bilimleri",
        hoursSpent: 2.5,
        accuracy: 68,
        improvement: +5,
      },
      {
        subject: "İngilizce",
        hoursSpent: 2.0,
        accuracy: 75,
        improvement: +12,
      },
    ],
    behavioralNotes: [
      "Çalışma disiplini mükemmel, hiç aksatmadı",
      "Hata yaptığında sabırla tekrar çalışıyor",
      "Fenerbahçe maçları motivasyonunu artırıyor",
      "Alex ile etkileşimi çok pozitif",
    ],
    alexRecommendations: [
      "Fen Bilimleri'nde görsel materyaller kullanın",
      "Matematik başarısını kutlayın ve ödüllendirin",
      "Türkçe'de uzun paragraf okuma pratiği yapın",
      "Çalışma ortamını Fenerbahçe temasıyla destekleyin",
    ],
    fenerbahceRewards: 3,
  }

  const upcomingGoals = [
    {
      subject: "Matematik",
      goal: "Geometri konularında %80 başarı",
      deadline: "2 hafta",
      progress: 65,
    },
    {
      subject: "Türkçe",
      goal: "Yeni nesil sorularda hız artışı",
      deadline: "3 hafta",
      progress: 45,
    },
    {
      subject: "Genel",
      goal: "LGS deneme sınavında 450+ puan",
      deadline: "1 ay",
      progress: 72,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">AX</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold mb-2">Merhaba Özkan & Züleyha! 👋</h2>
              <p className="text-muted-foreground">
                Tuna'nın LGS yolculuğunda harika ilerliyor! Bu hafta özellikle matematik'te büyük başarı gösterdi.
                Fenerbahçe maçlarını izleme hakkını 3 kez kazandı. Devam edelim! 🏆
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{studentProgress.currentStreak}</div>
            <p className="text-xs text-muted-foreground">Günlük Çalışma Serisi</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{studentProgress.totalStudyHours}</div>
            <p className="text-xs text-muted-foreground">Bu Ay Toplam Saat</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">%{studentProgress.lgsTargetProgress}</div>
            <p className="text-xs text-muted-foreground">LGS Hedef İlerlemesi</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">%{studentProgress.motivationLevel}</div>
            <p className="text-xs text-muted-foreground">Motivasyon Seviyesi</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="haftalik" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="haftalik" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Haftalık Rapor
          </TabsTrigger>
          <TabsTrigger value="hedefler" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Hedefler
          </TabsTrigger>
          <TabsTrigger value="iletisim" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Alex ile İletişim
          </TabsTrigger>
          <TabsTrigger value="oneriler" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Aile Önerileri
          </TabsTrigger>
        </TabsList>

        <TabsContent value="haftalik" className="space-y-6">
          {/* Weekly Report Header */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Haftalık Performans Raporu
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{weeklyReport.week}</Badge>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    PDF İndir
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">{weeklyReport.totalStudyHours}</div>
                  <p className="text-sm text-muted-foreground">Toplam Çalışma Saati</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{weeklyReport.completedSessions}</div>
                  <p className="text-sm text-muted-foreground">Tamamlanan Ders</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-accent">%{weeklyReport.averageAccuracy}</div>
                  <p className="text-sm text-muted-foreground">Ortalama Başarı</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subject Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Ders Bazında İlerleme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyReport.subjectProgress.map((subject) => (
                  <div key={subject.subject} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{subject.subject}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{subject.hoursSpent} saat</Badge>
                        <Badge
                          variant={
                            subject.improvement > 10 ? "default" : subject.improvement > 0 ? "secondary" : "outline"
                          }
                        >
                          {subject.improvement > 0 ? "+" : ""}
                          {subject.improvement}%
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Başarı Oranı</span>
                        <span className="font-medium">%{subject.accuracy}</span>
                      </div>
                      <Progress value={subject.accuracy} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Behavioral Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Davranışsal Gözlemler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {weeklyReport.behavioralNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm text-green-800">{note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fenerbahçe Rewards */}
          <Card className="bg-gradient-to-r from-yellow-50 to-blue-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                Fenerbahçe Ödül Sistemi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Bu Hafta Kazanılan Maç İzleme Hakkı</p>
                  <p className="text-sm text-muted-foreground">Çalışma hedeflerini başarıyla tamamladı</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">{weeklyReport.fenerbahceRewards}</div>
                  <p className="text-xs text-muted-foreground">Maç</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hedefler" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Yaklaşan Hedefler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingGoals.map((goal, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{goal.goal}</h4>
                        <p className="text-sm text-muted-foreground">{goal.subject}</p>
                      </div>
                      <Badge variant="outline">{goal.deadline}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>İlerleme</span>
                        <span className="font-medium">%{goal.progress}</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* LGS Target Progress */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle>2026 LGS Hedef Takibi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">450-475</div>
                  <p className="text-muted-foreground">Hedef Puan Aralığı</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-green-600">26-28</div>
                    <p className="text-xs text-muted-foreground">Matematik Net</p>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">28-30</div>
                    <p className="text-xs text-muted-foreground">Türkçe Net</p>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-purple-600">25-27</div>
                    <p className="text-xs text-muted-foreground">Fen Net</p>
                  </div>
                </div>
                <Progress value={72} className="h-3" />
                <p className="text-center text-sm text-muted-foreground">
                  Genel hedef ilerlemesi: %72 (Çok iyi seviyede!)
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="iletisim" className="space-y-6">
          {/* Alex's Messages to Parents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Alex'ten Aile Mesajları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm mb-1">Bu Hafta Değerlendirmesi</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Tuna bu hafta matematik'te olağanüstü bir performans sergiledi! Cebirsel ifadelerde %85 başarı
                        oranına ulaştı. Fenerbahçe analojileri gerçekten işe yarıyor. Lütfen bu başarısını kutlayın!
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        2 gün önce
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm mb-1">Motivasyon Durumu</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Tuna'nın motivasyonu çok yüksek! Fenerbahçe maçlarını ödül olarak kullanmak harika bir strateji.
                        Bu sistemi devam ettirmenizi öneriyorum. Çalışma disiplini mükemmel!
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        4 gün önce
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm mb-1">Gelişim Alanı Önerisi</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Fen Bilimleri'nde biraz daha destek gerekebilir. Görsel materyaller ve deneyler konusunda
                        yardımcı olabilirseniz harika olur. Özellikle hücre bölünmesi konusunda pratik yapalım.
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        1 hafta önce
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communication Settings */}
          <Card>
            <CardHeader>
              <CardTitle>İletişim Ayarları</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Haftalık Rapor Bildirimi</p>
                    <p className="text-xs text-muted-foreground">Her Pazar akşamı otomatik rapor</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Bell className="w-4 h-4 mr-2" />
                    Aktif
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Önemli Gelişmeler</p>
                    <p className="text-xs text-muted-foreground">Başarı ve dikkat gereken durumlar</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Bell className="w-4 h-4 mr-2" />
                    Aktif
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Alex'in Önerileri</p>
                    <p className="text-xs text-muted-foreground">Eğitim ve motivasyon önerileri</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Bell className="w-4 h-4 mr-2" />
                    Aktif
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="oneriler" className="space-y-6">
          {/* Alex's Recommendations for Parents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Alex'ten Aile Önerileri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyReport.alexRecommendations.map((recommendation, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-muted-foreground">{recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Home Support Strategies */}
          <Card>
            <CardHeader>
              <CardTitle>Evde Destek Stratejileri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    Çalışma Ortamı
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sessiz ve düzenli çalışma alanı</li>
                    <li>• Fenerbahçe temalı motivasyon köşesi</li>
                    <li>• Başarı tablosu ve hedef takibi</li>
                    <li>• Düzenli mola alanları</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Ödül Sistemi
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fenerbahçe maçları izleme hakkı</li>
                    <li>• Başarı kutlamaları</li>
                    <li>• Küçük hediyeler ve övgüler</li>
                    <li>• Aile aktiviteleri</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    Duygusal Destek
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sabırlı ve anlayışlı yaklaşım</li>
                    <li>• Hataları öğrenme fırsatı olarak görme</li>
                    <li>• Sürekli motivasyon ve cesaret</li>
                    <li>• Başarıları kutlama</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    Zaman Yönetimi
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Düzenli çalışma saatleri</li>
                    <li>• Fenerbahçe maçlarıyla denge</li>
                    <li>• Dinlenme zamanlarına saygı</li>
                    <li>• Esnek ama disiplinli program</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <MessageCircle className="w-5 h-5" />
                Acil Durum İletişimi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-red-700 mb-3">
                Tuna'nın motivasyonunda ciddi düşüş, çalışmaya direnç veya duygusal sorunlar yaşadığında Alex ile
                doğrudan iletişime geçebilirsiniz.
              </p>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                Alex ile Acil İletişim
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
