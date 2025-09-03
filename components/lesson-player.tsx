"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Pause, RotateCcw, Volume2, VolumeX, ChevronLeft, ChevronRight, BookOpen, Target } from "lucide-react"

interface LessonContent {
  id: number
  title: string
  subject: string
  duration: number // in seconds
  slides: LessonSlide[]
  alexNarration: string[]
  visualElements: string[]
  fenerbahceAnalogy?: string
}

interface LessonSlide {
  id: number
  title: string
  content: string
  visualAid: string
  alexComment: string
  duration: number
}

export default function LessonPlayer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [lessonCompleted, setLessonCompleted] = useState(false)

  const lesson: LessonContent = {
    id: 1,
    title: "Cebirsel İfadeler - Katsayı ve Değişken",
    subject: "Matematik",
    duration: 90, // 1.5 minutes
    slides: [
      {
        id: 1,
        title: "Cebirsel İfade Nedir?",
        content: "3x + 5 gibi sayı ve harflerin karışımı",
        visualAid: "Fenerbahçe'nin 3 forvet + 5 defans oyuncusu gibi",
        alexComment: "Tuna, cebirsel ifade Fenerbahçe'nin kadrosu gibi! Her oyuncunun (değişkenin) bir görevi var.",
        duration: 30,
      },
      {
        id: 2,
        title: "Katsayı Nedir?",
        content: "3x'teki 3 sayısı katsayıdır",
        visualAid: "3 tane forvet oyuncusu var demek",
        alexComment: "Katsayı, kaç tane oyuncun olduğunu söyler. 3x = 3 tane x oyuncusu!",
        duration: 30,
      },
      {
        id: 3,
        title: "Değişken Nedir?",
        content: "x, y, z gibi harfler değişkendir",
        visualAid: "Oyuncuların pozisyonları gibi değişebilir",
        alexComment: "Değişken, Fenerbahçe'nin taktik değişikliği gibi! Farklı değerler alabilir.",
        duration: 30,
      },
    ],
    alexNarration: [
      "Merhaba Tuna! Bugün cebirsel ifadeleri Fenerbahçe taktiği gibi öğreneceğiz!",
      "Her katsayı, sahada kaç oyuncu olduğunu gösterir.",
      "Değişkenler ise oyuncuların pozisyonları gibi değişebilir!",
    ],
    visualElements: ["Fenerbahçe forması ile sayılar", "Saha üzerinde oyuncu dizilimi", "Taktik tahtası animasyonu"],
    fenerbahceAnalogy: "Cebirsel ifadeler, Fenerbahçe'nin saha dizilimi gibidir. 4-3-3 dizilimi gibi!",
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPlaying && !lessonCompleted) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => {
          const newTime = prev + 1

          // Check if current slide is completed
          const currentSlideDuration = lesson.slides[currentSlide]?.duration || 30
          if (newTime >= (currentSlide + 1) * currentSlideDuration && currentSlide < lesson.slides.length - 1) {
            setCurrentSlide((prev) => prev + 1)
          }

          // Check if lesson is completed
          if (newTime >= lesson.duration) {
            setLessonCompleted(true)
            setIsPlaying(false)
          }

          return newTime
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, currentSlide, lesson.slides.length, lesson.duration, lessonCompleted])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetLesson = () => {
    setCurrentSlide(0)
    setTimeElapsed(0)
    setIsPlaying(false)
    setLessonCompleted(false)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
    setTimeElapsed(slideIndex * 30) // Approximate time
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const progressPercentage = (timeElapsed / lesson.duration) * 100

  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            {lesson.title}
          </CardTitle>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">{lesson.subject}</Badge>
            <Badge variant="outline">{formatTime(lesson.duration)} dakika</Badge>
            <div className="flex-1">
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Lesson Player */}
      <Card className="border-2 border-primary">
        <CardContent className="p-6">
          {/* Current Slide Display */}
          <div className="text-center space-y-6">
            {/* Visual Aid Area */}
            <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">⚽</div>
                <div className="text-lg font-semibold text-primary">{lesson.slides[currentSlide]?.visualAid}</div>
              </div>
            </div>

            {/* Slide Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">{lesson.slides[currentSlide]?.title}</h3>
              <p className="text-lg text-muted-foreground">{lesson.slides[currentSlide]?.content}</p>
            </div>

            {/* Alex Commentary */}
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
              <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                  <AvatarFallback className="bg-primary text-primary-foreground">AX</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-medium text-sm mb-1">Alex Açıklıyor:</p>
                  <p className="text-sm text-muted-foreground">{lesson.slides[currentSlide]?.alexComment}</p>
                </div>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => goToSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button onClick={togglePlayPause} size="lg" className="px-8">
                {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isPlaying ? "Duraklat" : lessonCompleted ? "Tekrar İzle" : "Başlat"}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => goToSlide(Math.min(lesson.slides.length - 1, currentSlide + 1))}
                disabled={currentSlide === lesson.slides.length - 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              <Button variant="outline" size="icon" onClick={resetLesson}>
                <RotateCcw className="w-4 h-4" />
              </Button>

              <Button variant="outline" size="icon" onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </div>

            {/* Time Display */}
            <div className="text-sm text-muted-foreground">
              {formatTime(timeElapsed)} / {formatTime(lesson.duration)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Slide Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Ders İçeriği</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {lesson.slides.map((slide, index) => (
              <Button
                key={slide.id}
                variant={currentSlide === index ? "default" : "outline"}
                onClick={() => goToSlide(index)}
                className="h-auto p-3 text-left justify-start"
              >
                <div>
                  <div className="font-medium text-sm">
                    {index + 1}. {slide.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{formatTime(slide.duration)}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lesson Completion */}
      {lessonCompleted && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <div className="space-y-4">
              <div className="text-4xl">🎉</div>
              <h3 className="text-xl font-bold text-green-800">Ders Tamamlandı!</h3>
              <p className="text-green-700">
                Harika Tuna! Cebirsel ifadeleri Fenerbahçe taktiği gibi öğrendin. Şimdi soru çözme zamanı!
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Target className="w-4 h-4 mr-2" />
                Soru Çözmeye Geç
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
