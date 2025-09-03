"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, CheckCircle, Play, Trophy, Calendar } from "lucide-react"

interface ScheduleItem {
  id: number
  time: string
  subject: string
  topic: string
  status: "completed" | "current" | "upcoming"
  type: "study" | "break" | "reward" | "summary"
}

export default function DailySchedule() {
  const schedule: ScheduleItem[] = [
    {
      id: 1,
      time: "19:30-20:15",
      subject: "Matematik",
      topic: "Cebirsel İfadeler",
      status: "completed",
      type: "study",
    },
    {
      id: 2,
      time: "20:15-20:30",
      subject: "Mola",
      topic: "15 dakika oyun izni",
      status: "completed",
      type: "break",
    },
    {
      id: 3,
      time: "20:30-21:00",
      subject: "Türkçe",
      topic: "Paragraf Anlama",
      status: "current",
      type: "study",
    },
    {
      id: 4,
      time: "21:00-21:15",
      subject: "Alex Özet",
      topic: "Günlük değerlendirme",
      status: "upcoming",
      type: "summary",
    },
    {
      id: 5,
      time: "21:15-22:00",
      subject: "Ödül Zamanı",
      topic: "Fenerbahçe maç özeti",
      status: "upcoming",
      type: "reward",
    },
  ]

  const completedTasks = schedule.filter((item) => item.status === "completed").length
  const totalTasks = schedule.length
  const progressPercentage = (completedTasks / totalTasks) * 100

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-50 border-green-200"
      case "current":
        return "bg-blue-50 border-blue-200"
      case "upcoming":
        return "bg-gray-50 border-gray-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "current":
        return <Play className="w-4 h-4 text-blue-500" />
      case "upcoming":
        return <Clock className="w-4 h-4 text-gray-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "reward":
        return <Trophy className="w-4 h-4 text-accent" />
      case "break":
        return <Calendar className="w-4 h-4 text-muted-foreground" />
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          Bugünkü Çalışma Programı
        </CardTitle>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Günlük İlerleme</span>
            <span className="font-medium">
              {completedTasks}/{totalTasks}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {schedule.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg border-2 transition-all ${getStatusColor(item.status)} ${
                item.status === "current" ? "ring-2 ring-blue-200" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(item.status)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{item.time}</span>
                    <span className="font-semibold">{item.subject}</span>
                    {getTypeIcon(item.type)}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.topic}</p>
                </div>

                {item.status === "current" && (
                  <Button size="sm" className="ml-auto">
                    Başla
                  </Button>
                )}

                {item.status === "upcoming" && item.type === "reward" && (
                  <Badge variant="secondary" className="ml-auto">
                    Kazanıldı! 🏆
                  </Badge>
                )}
              </div>

              {item.status === "current" && (
                <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Alex:</strong> "Hadi Tuna! Şimdi paragraf okuma zamanı. Fenerbahçe'nin taktik analizini okur
                    gibi dikkatli ol! 📚"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="font-medium text-sm">Bugünkü Hedef</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Tüm dersleri tamamla ve Fenerbahçe maç özetini izleme hakkını kazan! 💛💙
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
