"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Trophy, Target, Star, Clock, Users } from "lucide-react"
import Image from "next/image"

interface Match {
  id: string
  opponent: string
  date: string
  time: string
  isHome: boolean
  competition: string
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  progress: number
  maxProgress: number
}

export default function FenerbahceIntegration() {
  const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([
    {
      id: "1",
      opponent: "Galatasaray",
      date: "2024-01-15",
      time: "19:00",
      isHome: true,
      competition: "Süper Lig",
    },
    {
      id: "2",
      opponent: "Beşiktaş",
      date: "2024-01-22",
      time: "20:00",
      isHome: false,
      competition: "Süper Lig",
    },
    {
      id: "3",
      opponent: "Trabzonspor",
      date: "2024-01-29",
      time: "19:00",
      isHome: true,
      competition: "Türkiye Kupası",
    },
  ])

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "1",
      title: "Gol Kralı",
      description: "10 matematik sorusunu üst üste doğru çöz",
      icon: "⚽",
      unlocked: true,
      progress: 10,
      maxProgress: 10,
    },
    {
      id: "2",
      title: "Asist Kralı",
      description: "5 arkadaşına yardım et",
      icon: "🅰️",
      unlocked: false,
      progress: 3,
      maxProgress: 5,
    },
    {
      id: "3",
      title: "Kaptanlık",
      description: "30 gün üst üste çalış",
      icon: "👑",
      unlocked: false,
      progress: 15,
      maxProgress: 30,
    },
    {
      id: "4",
      title: "Şampiyonluk",
      description: "LGS hedefine ulaş",
      icon: "🏆",
      unlocked: false,
      progress: 65,
      maxProgress: 100,
    },
  ])

  const [studyStreak, setStudyStreak] = useState(15)
  const [totalPoints, setTotalPoints] = useState(2450)

  return (
    <div className="space-y-6">
      {/* Alex Fenerbahçe Karakter */}
      <Card className="bg-gradient-to-r from-yellow-400 to-blue-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white">
              <Image src="/alex-official.jpg" alt="Alex - LGS Koçun" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Alex - Senin LGS Koçun!</h2>
              <p className="text-yellow-100">Merhaba Tuna! Fenerbahçe'nin gücüyle LGS'ye hazırlanıyoruz! 💪</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                <span className="text-sm">Çalışma Serisi: {studyStreak} gün</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Maç Takvimi */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-600">
            <Calendar className="w-5 h-5" />
            Fenerbahçe Maç Takvimi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">
                      {match.isHome ? "Fenerbahçe" : match.opponent} vs {match.isHome ? match.opponent : "Fenerbahçe"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {match.date} • {match.time} • {match.competition}
                    </p>
                  </div>
                </div>
                <Badge variant={match.isHome ? "default" : "secondary"}>{match.isHome ? "İç Saha" : "Deplasman"}</Badge>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Alex'in Tavsiyesi:</strong> Maç günlerinde ekstra motivasyon için özel çalışma planları
              hazırladım! Fenerbahçe kazandığında bonus puanlar kazanacaksın! ⚽
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Futbol Temalı Başarılar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-600">
            <Trophy className="w-5 h-5" />
            Futbol Başarıları
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 ${
                  achievement.unlocked ? "bg-yellow-50 border-yellow-300" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${achievement.unlocked ? "text-yellow-700" : "text-gray-600"}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  {achievement.unlocked && <Badge className="bg-yellow-500 text-white">Tamamlandı!</Badge>}
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>İlerleme</span>
                    <span>
                      {achievement.progress}/{achievement.maxProgress}
                    </span>
                  </div>
                  <Progress value={(achievement.progress / achievement.maxProgress) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Maç Günü Motivasyonu */}
      <Card className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Maç Günü Özel Motivasyonu!</h3>
            <p className="mb-4">
              Fenerbahçe'nin bir sonraki maçına{" "}
              {Math.ceil((new Date("2024-01-15").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} gün kaldı!
            </p>
            <div className="flex justify-center gap-4 text-center">
              <div className="bg-white/20 rounded-lg p-3">
                <Clock className="w-6 h-6 mx-auto mb-1" />
                <p className="text-sm">Çalışma Süresi</p>
                <p className="font-bold">2.5 saat</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <Target className="w-6 h-6 mx-auto mb-1" />
                <p className="text-sm">Hedef Puan</p>
                <p className="font-bold">{totalPoints}</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <Users className="w-6 h-6 mx-auto mb-1" />
                <p className="text-sm">Takım Ruhu</p>
                <p className="font-bold">%95</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alex'in Futbol Analojileri */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">Alex'in Futbol Tavsiyeleri</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="font-semibold text-yellow-800 mb-2">⚽ Matematik = Gol Atma Sanatı</p>
              <p className="text-sm text-gray-700">
                "Tuna, matematik sorularını çözmek tıpkı gol atmak gibi! Her doğru cevap bir gol, her yanlış cevap ise
                öğrenme fırsatı. Fenerbahçe'nin golcüleri gibi sen de her soru karşısında sakin ol ve hedefini şaşırma!"
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-800 mb-2">🏃‍♂️ Türkçe = Pas Verme Yeteneği</p>
              <p className="text-sm text-gray-700">
                "Türkçe dersi takım oyunu gibi! Kelimeleri doğru kullanmak, cümleleri güzel kurmak tıpkı Fenerbahçe'nin
                orta sahada yaptığı güzel paslar gibi. Her kelime bir pas, her cümle bir oyun kurma!"
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-800 mb-2">🛡️ Fen = Defans Stratejisi</p>
              <p className="text-sm text-gray-700">
                "Fen bilgisi sağlam bir defans gibi! Her konu bir savunma hattı. Fizik, kimya, biyoloji... Hepsini güçlü
                tutarsan hiçbir soru seni geçemez!"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
