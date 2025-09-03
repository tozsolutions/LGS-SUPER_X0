import StudyPlanner from "@/components/study-planner"
import StudyAnalytics from "@/components/study-analytics"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, TrendingUp, Target, Brain } from "lucide-react"

export default function PlanlamaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Çalışma Planlama</h1>
              <p className="text-sm text-muted-foreground">Alex ile birlikte günlük ve haftalık planların</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="gunluk" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gunluk" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Günlük Plan
            </TabsTrigger>
            <TabsTrigger value="analiz" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Performans Analizi
            </TabsTrigger>
            <TabsTrigger value="hedefler" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Hedefler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gunluk" className="space-y-6">
            <StudyPlanner />
          </TabsContent>

          <TabsContent value="analiz" className="space-y-6">
            <StudyAnalytics />
          </TabsContent>

          <TabsContent value="hedefler" className="space-y-6">
            <div className="text-center py-12">
              <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hedef Belirleme Sistemi</h3>
              <p className="text-muted-foreground">
                Alex ile birlikte SMART hedefler belirleyeceğiz. Yakında aktif olacak!
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
