import FamilyDashboard from "@/components/family-dashboard"
import ProgressReports from "@/components/progress-reports"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, BarChart3, MessageCircle } from "lucide-react"

export default function AilePaneliPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-card-foreground">Aile Paneli</h1>
              <p className="text-sm text-muted-foreground">Tuna'nın LGS yolculuğunu takip edin</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Ana Panel
            </TabsTrigger>
            <TabsTrigger value="raporlar" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Detaylı Raporlar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <FamilyDashboard />
          </TabsContent>

          <TabsContent value="raporlar" className="space-y-6">
            <ProgressReports />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
