"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Trophy, Star, Volume2, Play, Pause, RotateCcw } from "lucide-react"

interface MotivationSession {
  id: number
  type: "daily" | "weekly" | "achievement" | "support"
  title: string
  duration: number
  content: string
  voiceNote: string
  mood: "energetic" | "calm" | "inspiring" | "supportive"
  fenerbahceConnection: string
}

export default function MotivationCenter() {
  const [currentSession, setCurrentSession] = useState<MotivationSession | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackTime, setPlaybackTime] = useState(0)

  const motivationSessions: MotivationSession[] = [
    {
      id: 1,
      type: "daily",
      title: "Günaydın Motivasyonu",
      duration: 60,
      content:
        "Günaydın Tuna! Bugün yeni bir başlangıç. Her adımın seni LGS hedefine biraz daha yaklaştırıyor. Fenerbahçe'nin şampiyonluk azmi gibi kararlı ol!",
      voiceNote: "Enerjik ve pozitif ton ile günaydın mesajı",
      mood: "energetic",
      fenerbahceConnection: "Fenerbahçe'nin her maça çıkış azmi gibi!",
    },
    {
      id: 2,
      type: "weekly",
      title: "Gelecek Fısıltısı: Matematik Roketi",
      duration: 300,
      content:
        "Matematik sadece formüller değil, hayallerini uzaya taşıyan roketi kontrol etmek gibidir. Bugün öğrendiklerin geleceğin güzel parçası. Python kodlama, mühendislik, teknoloji... Hepsi matematik ile başlar!",
      voiceNote: "İlham verici ve geleceğe odaklı ton",
      mood: "inspiring",
      fenerbahceConnection: "Fenerbahçe'nin stratejik planlaması gibi, matematik da geleceğin planı!",
    },
    {
      id: 3,
      type: "achievement",
      title: "Matematik Başarısı Kutlaması",
      duration: 90,
      content:
        "Harika Tuna! Bu hafta matematik'te %15 gelişim gösterdin. Fenerbahçe'nin gol sevinci gibi kutlayalım! Sen gerçekten harikasın!",
      voiceNote: "Coşkulu kutlama tonu",
      mood: "energetic",
      fenerbahceConnection: "Fenerbahçe'nin gol sevinci gibi kutlayalım!",
    },
    {
      id: 4,
      type: "support",
      title: "Hata Yapmak Normal",
      duration: 120,
      content:
        "Tuna, unutma ki hata yapmak öğrenmenin en önemli parçası. Fenerbahçe'nin en büyük yıldızları bile penaltı kaçırır. Önemli olan tekrar denemek ve öğrenmek!",
      voiceNote: "Destekleyici ve anlayışlı ton",
      mood: "supportive",
      fenerbahceConnection: "Fenerbahçe yıldızları da hata yapar ama pes etmez!",
    },
  ]

  const playSession = (session: MotivationSession) => {
    setCurrentSession(session)
    setIsPlaying(true)
    setPlaybackTime(0)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const resetSession = () => {
    setPlaybackTime(0)
    setIsPlaying(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case "energetic":
        return "text-orange-500"
      case "inspiring":
        return "text-blue-500"
      case "supportive":
        return "text-green-500"
      case "calm":
        return "text-purple-500"
      default:
        return "text-primary"
    }
  }

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case "energetic":
        return "⚡"
      case "inspiring":
        return "🚀"
      case "supportive":
        return "🤗"
      case "calm":
        return "🧘"
      default:
        return "💫"
    }
  }

  return (
    <div className="space-y-6">
      {/* Current Session Player */}
      {currentSession && (
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              {currentSession.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Alex Avatar and Content */}
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">AX</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className={getMoodColor(currentSession.mood)}>
                    {getMoodEmoji(currentSession.mood)} {currentSession.mood}
                  </Badge>
                  <Badge variant="outline">{formatTime(currentSession.duration)}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{currentSession.content}</p>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <p className="text-xs font-medium text-accent">Fenerbahçe Bağlantısı:</p>
                  <p className="text-xs text-muted-foreground">{currentSession.fenerbahceConnection}</p>
                </div>
              </div>
            </div>

            {/* Audio Player Controls */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button onClick={togglePlayback} size="lg">
                  {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                  {isPlaying ? "Duraklat" : "Dinle"}
                </Button>
                <Button onClick={resetSession} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Baştan
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-sm text-muted-foreground">
                    {formatTime(playbackTime)} / {formatTime(currentSession.duration)}
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${(playbackTime / currentSession.duration) * 100}%` }}
                />
              </div>
            </div>

            {/* Voice Note Info */}
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-xs font-medium mb-1">Sesli Not:</p>
              <p className="text-xs text-muted-foreground">{currentSession.voiceNote}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Motivation Sessions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {motivationSessions.map((session) => (
          <Card
            key={session.id}
            className={`hover:shadow-lg transition-all cursor-pointer ${
              currentSession?.id === session.id ? "border-primary border-2" : ""
            }`}
            onClick={() => playSession(session)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getMoodEmoji(session.mood)}</span>
                  <span className="text-lg">{session.title}</span>
                </div>
                <Badge
                  variant={
                    session.type === "daily"
                      ? "default"
                      : session.type === "weekly"
                        ? "secondary"
                        : session.type === "achievement"
                          ? "outline"
                          : "destructive"
                  }
                  className="text-xs"
                >
                  {session.type === "daily"
                    ? "📅 Günlük"
                    : session.type === "weekly"
                      ? "🔮 Haftalık"
                      : session.type === "achievement"
                        ? "🏆 Başarı"
                        : "🤗 Destek"}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{session.content}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {formatTime(session.duration)}
                  </Badge>
                  <Badge variant="outline" className={`text-xs ${getMoodColor(session.mood)}`}>
                    {session.mood}
                  </Badge>
                </div>
                <Button size="sm" variant="ghost">
                  <Play className="w-3 h-3 mr-1" />
                  Dinle
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Daily Motivation Stats */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Bugünkü Motivasyon Durumu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">95%</div>
              <p className="text-xs text-muted-foreground">Motivasyon Seviyesi</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">3</div>
              <p className="text-xs text-muted-foreground">Dinlenen Mesaj</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">7</div>
              <p className="text-xs text-muted-foreground">Günlük Seri</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white/50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="font-medium text-sm">Alex'in Bugünkü Mesajı:</span>
            </div>
            <p className="text-sm text-muted-foreground">
              "Tuna, bugün süper motivasyondasın! Fenerbahçe'nin şampiyonluk ruhunu taşıyorsun. Bu enerjiyle LGS'de de
              şampiyon olacaksın! 🏆"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
