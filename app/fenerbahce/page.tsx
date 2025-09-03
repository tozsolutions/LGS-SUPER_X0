import FenerbahceIntegration from "@/components/fenerbahce-integration"

export default function FenerbahcePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Fenerbahçe Entegrasyonu</h1>
        <p className="text-gray-600">Alex ile birlikte Fenerbahçe ruhunu taşıyarak LGS'ye hazırlan!</p>
      </div>

      <FenerbahceIntegration />
    </div>
  )
}
