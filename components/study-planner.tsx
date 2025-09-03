"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Target,
  Calendar,
  Trophy,
  Zap,
  Brain,
  BookOpen,
} from "lucide-react"

interface StudySession {
  id: number
  subject: string
  topic: string
  duration: number // in minutes
  completed: boolean
  score?: number
  startTime?: string
  endTime?: string
}

interface DailyPlan {
  date: string
  sessions: StudySession[]
  totalStudyTime: number
  completedSessions: number
  fenerbahceMatch?: {
    opponent: string
    time: string
    earned: boolean
  }
}

export default function StudyPlanner() {
  const [currentSession, setCurrentSession] = useState<StudySession | null>(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [sessionType, setSessionType] = useState<"study" | "break">("study")

  const todaysPlan: DailyPlan = {
    date: "2024-12-19",
    sessions: [
      {
        id: 1,
        subject: "Matematik",
        topic: "Cebirsel İfadeler - Katsayı ve Değişken",
        duration: 45,
        completed: true,
        score: 85,
        startTime: "19:30",
        endTime: "20:15",
      },
      {
        id: 2,
        subject: "Türkçe",
        topic: "Paragraf Anlama - Ana Fikir Bulma",
        duration: 30,
        completed: false,
      },
      {
        id: 3,
        subject: "Fen Bilimleri",
        topic: "Hücre Bölünmesi - Mitoz",
        duration: 25,
        completed: false,
      },
      {
        id: 4,
        subject: "İngilizce",
        topic: "Present Perfect Tense",
        duration: 20,
        completed: false,
      },
    ],
    totalStudyTime: 120,
    completedSessions: 1,
    fenerbahceMatch: {
      opponent: "Galatasaray",
      time: "Pazar 19:00",
      earned: false,
    },
  }

  // Pomodoro Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0 && isActive) {
      // Session completed
      setIsActive(false)
      if (sessionType === "study") {
        // Start break
        setSessionType("break")
        setTimeLeft(5 * 60) // 5 minute break
      } else {
        // Break completed
        setSessionType("study")
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, isPaused, timeLeft, sessionType])

  const startSession = (session: StudySession) => {
    setCurrentSession(session)
    setTimeLeft(session.duration * 60) // Convert to seconds
    setSessionType("study")
    setIsActive(true)
    setIsPaused(false)
  }

  const toggleTimer = () => {
    if (isActive) {
      setIsPaused(!isPaused)
    } else {
      setIsActive(true)
      setIsPaused(false)
    }
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsPaused(false)
    if (currentSession) {
      setTimeLeft(currentSession.duration * 60)
    }
    setSessionType("study")
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const completedPercentage = (todaysPlan.completedSessions / todaysPlan.sessions.length) * 100

  return (
    <div className="space-y-6">
      {/* Daily Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Bugünkü Çalışma Planı
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span>Günlük İlerleme</span>
                <span className="font-medium">
                  {todaysPlan.completedSessions}/{todaysPlan.sessions.length}
                </span>
              </div>
              <Progress value={completedPercentage} className="h-2" />
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {todaysPlan.totalStudyTime} dk
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Active Session Timer */}
      {currentSession && (
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Aktif Çalışma: {currentSession.subject}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">{formatTime(timeLeft)}</div>

              <div className="space-y-2">
                <Badge variant={sessionType === "study" ? "default" : "secondary"} className="text-sm">
                  {sessionType === "study" ? "📚 Çalışma Zamanı" : "☕ Mola Zamanı"}
                </Badge>
                <p className="text-sm text-muted-foreground">{currentSession.topic}</p>
              </div>

              <div className="flex justify-center gap-2">
                <Button onClick={toggleTimer} size="lg">
                  {isActive && !isPaused ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {isActive && !isPaused ? "Duraklat" : "Başlat"}
                </Button>
                <Button onClick={resetTimer} variant="outline" size="lg">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Sıfırla
                </Button>
              </div>

              {/* Alex Motivation */}
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium mb-1">Alex'ten Motivasyon:</p>
                    <p className="text-sm text-muted-foreground">
                      {sessionType === "study"
                        ? "Harika gidiyorsun Tuna! Fenerbahçe'nin taktik disiplini gibi odaklan! 🎯"
                        : "Mola zamanı! Beynin dinlensin, sonra daha güçlü döneceksin! 💪"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Study Sessions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {todaysPlan.sessions.map((session) => (
          <Card
            key={session.id}
            className={`transition-all hover:shadow-md ${
              session.completed
                ? "bg-green-50 border-green-200"
                : currentSession?.id === session.id
                  ? "border-primary border-2"
                  : ""
            }`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                {session.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                )}
                {session.subject}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">{session.topic}</p>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{session.duration} dakika</span>
                  {session.startTime && (
                    <>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm">{session.startTime}</span>
                      {session.endTime && <span className="text-sm">- {session.endTime}</span>}
                    </>
                  )}
                </div>

                {session.completed && session.score && (
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-700">Başarı: %{session.score}</span>
                  </div>
                )}

                {!session.completed && (
                  <Button
                    onClick={() => startSession(session)}
                    className="w-full"
                    disabled={currentSession?.id === session.id}
                  >
                    {currentSession?.id === session.id ? (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Aktif Çalışma
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Çalışmaya Başla
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fenerbahçe Reward */}
      {todaysPlan.fenerbahceMatch && (
        <Card className="bg-gradient-to-r from-yellow-50 to-blue-50 border-2 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" />
              Fenerbahçe Ödül Sistemi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{todaysPlan.fenerbahceMatch.opponent} Maçı</p>
                <p className="text-sm text-muted-foreground">{todaysPlan.fenerbahceMatch.time}</p>
              </div>
              <div className="text-right">
                {completedPercentage >= 75 ? (
                  <Badge className="bg-green-500 text-white">
                    <Trophy className="w-3 h-3 mr-1" />
                    Maç İzleme Hakkı Kazanıldı! 🏆
                  </Badge>
                ) : (
                  <Badge variant="outline">
                    <Target className="w-3 h-3 mr-1" />%{Math.round(completedPercentage)}/75 Tamamlandı
                  </Badge>
                )}
              </div>
            </div>

            <div className="mt-4 p-3 bg-white/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Alex:</strong> "Çalışmaların %75'ini tamamlarsan Fenerbahçe maçını kesintisiz izleyebilirsin! Şu
                an %{Math.round(completedPercentage)} tamamladın. Devam et! 💛💙"
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Weekly Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Bu Haftanın Hedefleri
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">26-28</div>
              <p className="text-sm text-muted-foreground">Matematik Net Hedefi</p>
              <Progress value={75} className="h-2 mt-2" />
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">28-30</div>
              <p className="text-sm text-muted-foreground">Türkçe Net Hedefi</p>
              <Progress value={80} className="h-2 mt-2" />
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">450-475</div>
              <p className="text-sm text-muted-foreground">Toplam LGS Puanı</p>
              <Progress value={70} className="h-2 mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
