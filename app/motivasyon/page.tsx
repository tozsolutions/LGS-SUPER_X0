import ErrorAnalysis from "@/components/error-analysis"
import MotivationCenter from "@/components/motivation-center"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, AlertTriangle, Zap } from "lucide-react"

export default function MotivasyonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Motivasyon ve Hata Analizi</h1>
              <p className="text-sm text-muted-foreground">Alex ile birlikte hatalardan öğren ve motive ol</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="analiz" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="analiz" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Hata Analizi
            </TabsTrigger>
            <TabsTrigger value="motivasyon" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Motivasyon Merkezi
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analiz" className="space-y-6">
            <ErrorAnalysis />
          </TabsContent>

          <TabsContent value="motivasyon" className="space-y-6">
            <MotivationCenter />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
