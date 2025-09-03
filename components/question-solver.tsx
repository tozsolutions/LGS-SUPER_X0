"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, XCircle, Target, Lightbulb, RotateCcw, Trophy, Zap } from "lucide-react"

interface Question {
  id: number
  subject: string
  topic: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  alexHint: string
  fenerbahceConnection?: string
  difficulty: "easy" | "medium" | "hard"
}

interface QuestionResult {
  questionId: number
  selectedAnswer: number
  isCorrect: boolean
  timeSpent: number
}

export default function QuestionSolver() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [results, setResults] = useState<QuestionResult[]>([])
  const [showHint, setShowHint] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions: Question[] = [
    {
      id: 1,
      subject: "Matematik",
      topic: "Cebirsel İfadeler",
      question: "3x + 5 ifadesinde katsayı hangisidir?",
      options: ["x", "3", "5", "3x"],
      correctAnswer: 1,
      explanation: "Katsayı, değişkenin önündeki sayıdır. 3x'te katsayı 3'tür.",
      alexHint: "Fenerbahçe'de 3 forvet oyuncusu var gibi düşün. 3 sayısı kaç tane olduğunu gösterir!",
      fenerbahceConnection: "3 forvet oyuncusu = 3x (3 tane x oyuncusu)",
      difficulty: "easy",
    },
    {
      id: 2,
      subject: "Matematik",
      topic: "Cebirsel İfadeler",
      question: "2a + 3b - 4c ifadesinde kaç tane terim vardır?",
      options: ["2", "3", "4", "9"],
      correctAnswer: 1,
      explanation: "Terimler: 2a, 3b, -4c olmak üzere 3 tanedir.",
      alexHint: "Fenerbahçe'nin 3 farklı pozisyonu gibi: forvet, orta saha, defans!",
      difficulty: "medium",
    },
    {
      id: 3,
      subject: "Matematik",
      topic: "Cebirsel İfadeler",
      question: "x = 2 iken, 4x - 3 ifadesinin değeri kaçtır?",
      options: ["5", "6", "8", "11"],
      correctAnswer: 0,
      explanation: "x = 2 yerine koyarsak: 4(2) - 3 = 8 - 3 = 5",
      alexHint: "Fenerbahçe'nin 2 numaralı oyuncusu gibi, x yerine 2 koy!",
      difficulty: "medium",
    },
    {
      id: 4,
      subject: "Matematik",
      topic: "Cebirsel İfadeler",
      question: "3x + 2x ifadesi hangi şekilde sadeleştirilir?",
      options: ["5x", "6x", "5x²", "3x²"],
      correctAnswer: 0,
      explanation: "Aynı değişkenli terimler toplanır: 3x + 2x = 5x",
      alexHint: "3 forvet + 2 forvet = 5 forvet oyuncusu gibi!",
      difficulty: "easy",
    },
    {
      id: 5,
      subject: "Matematik",
      topic: "Cebirsel İfadeler",
      question: "2(x + 3) ifadesi açık halde nasıl yazılır?",
      options: ["2x + 3", "2x + 6", "x + 6", "2x + 5"],
      correctAnswer: 1,
      explanation: "Dağılma özelliği: 2(x + 3) = 2x + 2(3) = 2x + 6",
      alexHint: "Fenerbahçe'nin 2 takımı var, her takımda x+3 oyuncu var gibi düşün!",
      difficulty: "hard",
    },
  ]

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return

    setSelectedAnswer(answerIndex)
    setShowResult(true)

    const isCorrect = answerIndex === currentQuestion.correctAnswer
    const result: QuestionResult = {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      timeSpent: 30, // Mock time
    }

    setResults([...results, result])
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setShowHint(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setResults([])
    setShowHint(false)
    setQuizCompleted(false)
  }

  const correctAnswers = results.filter((r) => r.isCorrect).length
  const accuracy = results.length > 0 ? Math.round((correctAnswers / results.length) * 100) : 0

  if (quizCompleted) {
    return (
      <Card className="border-2 border-primary">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div className="text-6xl">{accuracy >= 80 ? "🏆" : accuracy >= 60 ? "👏" : "💪"}</div>

            <h2 className="text-2xl font-bold">
              {accuracy >= 80 ? "Mükemmel!" : accuracy >= 60 ? "İyi İş!" : "Devam Et!"}
            </h2>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {correctAnswers}/{questions.length}
                </div>
                <p className="text-sm text-muted-foreground">Doğru Cevap</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">%{accuracy}</div>
                <p className="text-sm text-muted-foreground">Başarı Oranı</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2.5</div>
                <p className="text-sm text-muted-foreground">Ortalama Süre</p>
              </div>
            </div>

            {/* Alex's Feedback */}
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
              <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                  <AvatarFallback className="bg-primary text-primary-foreground">AX</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-medium text-sm mb-1">Alex'ten Değerlendirme:</p>
                  <p className="text-sm text-muted-foreground">
                    {accuracy >= 80
                      ? "Harika Tuna! Fenerbahçe'nin şampiyonluk performansı gibi mükemmel! 🏆"
                      : accuracy >= 60
                        ? "İyi gidiyorsun! Birkaç konuyu daha pekiştirip zirveye çıkacaksın! 💪"
                        : "Sorun yok Tuna! Fenerbahçe de bazen zorlanır ama asla pes etmez. Tekrar deneyelim! ⚽"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button onClick={resetQuiz} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Tekrar Çöz
              </Button>
              <Button>
                <Target className="w-4 h-4 mr-2" />
                Sonraki Konu
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Soru Çözümü - {currentQuestion.subject}
          </CardTitle>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">{currentQuestion.topic}</Badge>
            <Badge
              variant={
                currentQuestion.difficulty === "easy"
                  ? "secondary"
                  : currentQuestion.difficulty === "medium"
                    ? "default"
                    : "destructive"
              }
            >
              {currentQuestion.difficulty === "easy"
                ? "Kolay"
                : currentQuestion.difficulty === "medium"
                  ? "Orta"
                  : "Zor"}
            </Badge>
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span>İlerleme</span>
                <span>
                  {currentQuestionIndex + 1}/{questions.length}
                </span>
              </div>
              <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="h-2" />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Question Card */}
      <Card className="border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-xl">Soru {currentQuestionIndex + 1}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Question Text */}
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-lg font-medium">{currentQuestion.question}</p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={
                  showResult
                    ? index === currentQuestion.correctAnswer
                      ? "default"
                      : selectedAnswer === index
                        ? "destructive"
                        : "outline"
                    : selectedAnswer === index
                      ? "secondary"
                      : "outline"
                }
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className="h-auto p-4 text-left justify-start relative"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                  {showResult && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                  )}
                  {showResult && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                  )}
                </div>
              </Button>
            ))}
          </div>

          {/* Hint Button */}
          {!showResult && (
            <div className="text-center">
              <Button variant="outline" onClick={() => setShowHint(!showHint)} className="text-accent">
                <Lightbulb className="w-4 h-4 mr-2" />
                {showHint ? "İpucunu Gizle" : "Alex'ten İpucu Al"}
              </Button>
            </div>
          )}

          {/* Hint Display */}
          {showHint && !showResult && (
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-start gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                  <AvatarFallback className="bg-accent text-accent-foreground text-xs">AX</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm mb-1 text-accent">Alex'ten İpucu:</p>
                  <p className="text-sm text-muted-foreground">{currentQuestion.alexHint}</p>
                </div>
              </div>
            </div>
          )}

          {/* Result Display */}
          {showResult && (
            <div className="space-y-4">
              <div
                className={`p-4 rounded-lg border-2 ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium">
                    {selectedAnswer === currentQuestion.correctAnswer ? "Doğru!" : "Yanlış!"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{currentQuestion.explanation}</p>

                {currentQuestion.fenerbahceConnection && (
                  <div className="p-3 bg-white/50 rounded-lg">
                    <p className="text-sm">
                      <strong>Fenerbahçe Bağlantısı:</strong> {currentQuestion.fenerbahceConnection}
                    </p>
                  </div>
                )}
              </div>

              {/* Alex's Comment */}
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm mb-1">Alex:</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedAnswer === currentQuestion.correctAnswer
                        ? "Harika Tuna! Fenerbahçe'nin gol sevinci gibi kutlayalım! ⚽🎉"
                        : "Sorun yok Tuna! Fenerbahçe de bazen kaçırır ama önemli olan öğrenmek. Tekrar deneyelim! 💪"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button onClick={nextQuestion} size="lg">
                  {currentQuestionIndex < questions.length - 1 ? (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Sonraki Soru
                    </>
                  ) : (
                    <>
                      <Trophy className="w-4 h-4 mr-2" />
                      Sonuçları Gör
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Current Stats */}
      {results.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Şu ana kadar: {correctAnswers}/{results.length} doğru (%{accuracy})
              </div>
              <Badge variant="secondary">
                {accuracy >= 80 ? "🏆 Mükemmel" : accuracy >= 60 ? "👍 İyi" : "💪 Devam Et"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
