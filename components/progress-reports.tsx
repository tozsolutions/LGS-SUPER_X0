"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Download, TrendingUp, TrendingDown, Target, Trophy, Clock, BookOpen } from "lucide-react"

interface MonthlyReport {
  month: string
  totalStudyHours: number
  averageDaily: number
  completedLessons: number
  averageAccuracy: number
  subjectBreakdown: {
    subject: string
    hours: number
    accuracy: number
    improvement: number
    topicsCompleted: number
    totalTopics: number
  }[]
  achievements: string[]
  challenges: string[]
  nextMonthGoals: string[]
}

export default function ProgressReports() {
  const [selectedPeriod, setSelectedPeriod] = useState("Aralık 2024")

  const monthlyReport: MonthlyReport = {
    month: "Aralık 2024",
    totalStudyHours: 52,
    averageDaily: 1.7,
    completedLessons: 45,
    averageAccuracy: 76,
    subjectBreakdown: [
      {
        subject: "Matematik",
        hours: 18,
        accuracy: 82,
        improvement: +18,
        topicsCompleted: 8,
        totalTopics: 12,
      },
      {
        subject: "Türkçe",
        hours: 15,
        accuracy: 79,
        improvement: +12,
        topicsCompleted: 6,
        totalTopics: 10,
      },
      {
        subject: "Fen Bilimleri",
        hours: 12,
        accuracy: 68,
        improvement: +8,
        topicsCompleted: 4,
        totalTopics: 8,
      },
      {
        subject: "Sosyal Bilgiler",
        hours: 7,
        accuracy: 74,
        improvement: +15,
        topicsCompleted: 3,
        totalTopics: 6,
      },
    ],
    achievements: [
      "Matematik'te cebirsel ifadelerde uzmanlaştı",
      "Günlük çalışma disiplinini hiç bozmadı",
      "Fenerbahçe maç izleme hakkını 12 kez kazandı",
      "Türkçe paragraf anlamada büyük gelişim",
      "Alex ile etkileşimde sürekli pozitif",
    ],
    challenges: [
      "Fen Bilimleri'nde hücre bölünmesi konusu",
      "Uzun paragrafları okumada sabır",
      "Geometri problemlerinde görselleştirme",
    ],
    nextMonthGoals: [
      "Fen Bilimleri'nde %75+ başarı oranı",
      "Geometri konularında temel seviye",
      "İlk deneme sınavına katılım",
      "Yeni nesil sorularda hız artışı",
    ],
  }

  const generatePDFReport = () => {
    // PDF generation logic would go here
    console.log("Generating PDF report for", selectedPeriod)
  }

  return (
    <div className="space-y-6">
      {/* Report Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Detaylı İlerleme Raporu
            </div>
            <div className="flex items-center gap-2">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aralık 2024">Aralık 2024</SelectItem>
                  <SelectItem value="Kasım 2024">Kasım 2024</SelectItem>
                  <SelectItem value="Ekim 2024">Ekim 2024</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={generatePDFReport} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                PDF İndir
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Monthly Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{monthlyReport.totalStudyHours}</div>
            <p className="text-xs text-muted-foreground">Toplam Çalışma Saati</p>
            <p className="text-xs text-green-600">Günlük ort: {monthlyReport.averageDaily}h</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-500">{monthlyReport.completedLessons}</div>
            <p className="text-xs text-muted-foreground">Tamamlanan Ders</p>
            <p className="text-xs text-green-600">Hedefin üzerinde</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-500">%{monthlyReport.averageAccuracy}</div>
            <p className="text-xs text-muted-foreground">Ortalama Başarı</p>
            <p className="text-xs text-green-600">+8% gelişim</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-500">12</div>
            <p className="text-xs text-muted-foreground">FB Maç Hakkı</p>
            <p className="text-xs text-green-600">Tümü kazanıldı!</p>
          </CardContent>
        </Card>
      </div>

      {/* Subject Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Ders Bazında Detaylı Analiz</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {monthlyReport.subjectBreakdown.map((subject) => (
              <div key={subject.subject} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">{subject.subject}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{subject.hours} saat</Badge>
                    <Badge
                      variant={subject.improvement > 15 ? "default" : subject.improvement > 5 ? "secondary" : "outline"}
                      className="flex items-center gap-1"
                    >
                      {subject.improvement > 0 ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {subject.improvement > 0 ? "+" : ""}
                      {subject.improvement}%
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Başarı Oranı</span>
                      <span className="font-medium">%{subject.accuracy}</span>
                    </div>
                    <Progress value={subject.accuracy} className="h-2 mb-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Konu Tamamlama</span>
                      <span className="font-medium">
                        {subject.topicsCompleted}/{subject.totalTopics}
                      </span>
                    </div>
                    <Progress value={(subject.topicsCompleted / subject.totalTopics) * 100} className="h-2 mb-3" />
                  </div>
                </div>

                <div className="mt-3 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Bu ay odaklanılan konular:</strong>{" "}
                    {subject.subject === "Matematik"
                      ? "Cebirsel İfadeler, Denklemler, Oran-Orantı"
                      : subject.subject === "Türkçe"
                        ? "Ana Fikir, Paragraf Anlama, Sözcükte Anlam"
                        : subject.subject === "Fen Bilimleri"
                          ? "Hücre, Mitoz-Mayoz, Basınç"
                          : "T.C. İnkılap Tarihi, Coğrafya Temelleri"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements and Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Trophy className="w-5 h-5" />
              Bu Ayki Başarılar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {monthlyReport.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 p-2 bg-white/50 rounded">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-800">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <Target className="w-5 h-5" />
              Gelişim Alanları
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {monthlyReport.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-2 p-2 bg-white/50 rounded">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-sm text-orange-800">{challenge}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Month Goals */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Target className="w-5 h-5" />
            Gelecek Ay Hedefleri
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {monthlyReport.nextMonthGoals.map((goal, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>
                <p className="text-sm text-blue-800">{goal}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alex's Monthly Summary */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
              AX
            </div>
            Alex'in Aylık Değerlendirmesi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Genel Değerlendirme:</strong> Tuna bu ay gerçekten olağanüstü bir performans sergiledi!
                Matematik'teki gelişimi Fenerbahçe'nin şampiyonluk yolundaki kararlılığı gibi. Çalışma disiplinini hiç
                bozmadı ve her gün biraz daha güçlendi. Fenerbahçe maçlarını ödül olarak kullanmak motivasyonunu sürekli
                yüksek tuttu.
              </p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Aile İçin Öneriler:</strong> Tuna'nın matematik başarısını kutlamaya devam edin. Fen
                Bilimleri'nde görsel materyaller kullanarak destek olun. Fenerbahçe temalı çalışma ortamı harika
                çalışıyor, bu sistemi sürdürün. En önemlisi, sabırlı ve destekleyici yaklaşımınızı koruyun.
              </p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Gelecek Ay Odak:</strong> Fen Bilimleri'ne ekstra zaman ayıracağız. Geometri konularında görsel
                hafıza tekniklerini kullanacağız. İlk deneme sınavına hazırlık başlayacak. Tuna'nın motivasyonunu
                koruyarak LGS hedefine emin adımlarla ilerleyeceğiz!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
