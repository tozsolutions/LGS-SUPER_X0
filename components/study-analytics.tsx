"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Target, Clock, Brain, Zap, Trophy, Calendar } from "lucide-react"

interface StudyStats {
  subject: string
  weeklyHours: number
  accuracy: number
  improvement: number
  strongTopics: string[]
  weakTopics: string[]
  nextGoal: string
}

export default function StudyAnalytics() {
  const weeklyStats: StudyStats[] = [
    {
      subject: "Matematik",
      weeklyHours: 8.5,
      accuracy: 78,
      improvement: +12,
      strongTopics: ["Cebirsel İfadeler", "Denklemler"],
      weakTopics: ["Geometri", "Olasılık"],
      nextGoal: "Geometri konularında %80 başarı",
    },
    {
      subject: "Türkçe",
      weeklyHours: 6.0,
      accuracy: 85,
      improvement: +8,
      strongTopics: ["Ana Fikir", "Sözcükte Anlam"],
      weakTopics: ["Uzun Paragraflar"],
      nextGoal: "Yeni nesil sorularda hız artışı",
    },
    {
      subject: "Fen Bilimleri",
      weeklyHours: 5.5,
      accuracy: 72,
      improvement: +15,
      strongTopics: ["Hücre", "Mitoz"],
      weakTopics: ["Basınç", "Kuvvet"],
      nextGoal: "Fizik konularında pekiştirme",
    },
  ]

  const overallStats = {
    totalStudyHours: 20,
    averageAccuracy: 78,
    completedSessions: 24,
    fenerbahceMatchesEarned: 3,
    currentStreak: 7,
  }

  return (
    <div className="space-y-6">
      {/* Overall Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Bu Haftanın Genel Performansı
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{overallStats.totalStudyHours}</div>
              <p className="text-xs text-muted-foreground">Toplam Saat</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">%{overallStats.averageAccuracy}</div>
              <p className="text-xs text-muted-foreground">Ortalama Başarı</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{overallStats.completedSessions}</div>
              <p className="text-xs text-muted-foreground">Tamamlanan Ders</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{overallStats.fenerbahceMatchesEarned}</div>
              <p className="text-xs text-muted-foreground">Kazanılan Maç</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{overallStats.currentStreak}</div>
              <p className="text-xs text-muted-foreground">Günlük Seri</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weeklyStats.map((stat) => (
          <Card key={stat.subject}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{stat.subject}</span>
                <Badge variant={stat.improvement > 0 ? "default" : "secondary"} className="text-xs">
                  {stat.improvement > 0 ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {stat.improvement > 0 ? "+" : ""}
                  {stat.improvement}%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Study Time */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{stat.weeklyHours} saat/hafta</span>
              </div>

              {/* Accuracy */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Doğruluk Oranı</span>
                  <span className="font-medium">%{stat.accuracy}</span>
                </div>
                <Progress value={stat.accuracy} className="h-2" />
              </div>

              {/* Strong Topics */}
              <div>
                <p className="text-sm font-medium mb-2 flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-green-500" />
                  Güçlü Konular
                </p>
                <div className="flex flex-wrap gap-1">
                  {stat.strongTopics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs bg-green-100 text-green-700">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Weak Topics */}
              <div>
                <p className="text-sm font-medium mb-2 flex items-center gap-1">
                  <Target className="w-3 h-3 text-orange-500" />
                  Gelişim Alanları
                </p>
                <div className="flex flex-wrap gap-1">
                  {stat.weakTopics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs border-orange-200 text-orange-700">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Next Goal */}
              <div className="p-3 bg-primary/5 rounded-lg">
                <p className="text-xs font-medium text-primary mb-1">Sonraki Hedef:</p>
                <p className="text-xs text-muted-foreground">{stat.nextGoal}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alex's Weekly Insights */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Alex'in Haftalık Analizi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
              <Zap className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">Güçlü Yanların:</p>
                <p className="text-sm text-muted-foreground">
                  Matematik'te sürekli gelişim gösteriyorsun! Cebirsel ifadelerde Fenerbahçe'nin taktik disiplini gibi
                  sistematik yaklaşımın harika. Türkçe'de ana fikir bulmada çok başarılısın.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
              <Target className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">Odaklanılacak Alanlar:</p>
                <p className="text-sm text-muted-foreground">
                  Geometri konularında görsel hafıza tekniklerini kullanmalıyız. Uzun paragrafları parçalara bölerek
                  okuma hızını artırabiliriz. Fen'de fizik konularında daha fazla pratik yapalım.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
              <Calendar className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">Gelecek Hafta Planı:</p>
                <p className="text-sm text-muted-foreground">
                  Fenerbahçe'nin Avrupa maçı var! O haftaki çalışma programını maç saatine göre ayarlayacağız.
                  Geometri'ye ekstra 2 saat ayıralım ve yeni nesil sorularda hız çalışması yapalım.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
