import LessonPlayer from "@/components/lesson-player"
import QuestionSolver from "@/components/question-solver"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, Brain, Trophy, Play, CheckCircle } from "lucide-react"

export default function DerslerPage() {
  const subjects = [
    {
      name: "Matematik",
      icon: "📊",
      progress: 75,
      topics: ["Cebirsel İfadeler", "Denklemler", "Oran-Orantı", "Geometri"],
      nextLesson: "Cebirsel İfadeler - Katsayı ve Değişken",
    },
    {
      name: "Türkçe",
      icon: "📚",
      progress: 80,
      topics: ["Ana Fikir", "Paragraf Anlama", "Sözcükte Anlam", "Yeni Nesil Sorular"],
      nextLesson: "Paragraf Anlama - Ana Fikir Bulma",
    },
    {
      name: "Fen Bilimleri",
      icon: "🔬",
      progress: 65,
      topics: ["Hücre", "Mitoz-Mayoz", "Basınç", "Kuvvet"],
      nextLesson: "Hücre Bölünmesi - Mitoz",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Dersler</h1>
              <p className="text-sm text-muted-foreground">Alex ile görsel ve sesli ders anlatımları</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="konular" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="konular" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Konu Anlatımı
            </TabsTrigger>
            <TabsTrigger value="sorular" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Soru Çözümü
            </TabsTrigger>
            <TabsTrigger value="dersler" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Ders Listesi
            </TabsTrigger>
          </TabsList>

          <TabsContent value="konular" className="space-y-6">
            <LessonPlayer />
          </TabsContent>

          <TabsContent value="sorular" className="space-y-6">
            <QuestionSolver />
          </TabsContent>

          <TabsContent value="dersler" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <Card key={subject.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{subject.icon}</span>
                      {subject.name}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>İlerleme</span>
                        <span className="font-medium">%{subject.progress}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${subject.progress}%` }}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Konular:</p>
                      <div className="flex flex-wrap gap-1">
                        {subject.topics.map((topic, index) => (
                          <Badge key={topic} variant={index < 2 ? "default" : "outline"} className="text-xs">
                            {index < 2 && <CheckCircle className="w-3 h-3 mr-1" />}
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium mb-1">Sonraki Ders:</p>
                      <p className="text-xs text-muted-foreground">{subject.nextLesson}</p>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" />
                        Derse Başla
                      </button>
                      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        <Target className="w-4 h-4" />
                        Soru Çöz
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Alex's Recommendation */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Alex'in Önerisi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    AX
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Bugün İçin Önerim:</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Tuna, matematik'te cebirsel ifadeleri Fenerbahçe taktiği gibi öğrenelim! Önce konu anlatımını
                      izle, sonra 5 soru çöz. Fenerbahçe maçından önce bitirelim! ⚽
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">🎯 Öncelikli</Badge>
                      <Badge variant="outline">⏱️ 30 dakika</Badge>
                      <Badge variant="outline">🏆 Maç izleme hakkı</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
