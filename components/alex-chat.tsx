"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Mic, Volume2, Heart, Zap } from "lucide-react"

interface Message {
  id: number
  sender: "alex" | "tuna"
  content: string
  timestamp: string
  type: "text" | "motivation" | "lesson"
}

export default function AlexChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "alex",
      content: "Merhaba Tuna! Bugün nasılsın? Matematik çalışmaya hazır mısın? 🚀",
      timestamp: "14:30",
      type: "text",
    },
    {
      id: 2,
      sender: "alex",
      content: "Fenerbahçe'nin bu haftaki maçını izlemek için önce 5 soru çözelim. Anlaştık mı? 💛💙",
      timestamp: "14:31",
      type: "motivation",
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isListening, setIsListening] = useState(false)

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        sender: "tuna",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
        type: "text",
      }
      setMessages([...messages, message])
      setNewMessage("")

      // Alex'in otomatik cevabı
      setTimeout(() => {
        const alexResponse: Message = {
          id: messages.length + 2,
          sender: "alex",
          content: "Harika! Bu konuyu birlikte çözelim. Görsel anlatımla başlayalım! 🎯",
          timestamp: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
          type: "lesson",
        }
        setMessages((prev) => [...prev, alexResponse])
      }, 1000)
    }
  }

  const quickResponses = ["Anladım! 👍", "Tekrar anlatır mısın?", "Fenerbahçe maçı ne zaman?", "Motivasyon lazım! 💪"]

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/brazilian-teacher-fenerbahce.png" alt="Alex" />
            <AvatarFallback className="bg-primary text-primary-foreground">AX</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span>Alex - LGS Koçun</span>
              <Badge variant="secondary" className="text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Çevrimiçi
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">Brezilyalı • Fenerbahçe Aşığı • Matematik Uzmanı</p>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Mesajlar */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.sender === "tuna" ? "flex-row-reverse" : ""}`}>
              {message.sender === "alex" && (
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-lnmp8.png" alt="Alex" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">AX</AvatarFallback>
                </Avatar>
              )}

              <div className={`max-w-[80%] ${message.sender === "tuna" ? "text-right" : ""}`}>
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "alex"
                      ? message.type === "motivation"
                        ? "bg-accent text-accent-foreground"
                        : message.type === "lesson"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  {message.sender === "alex" && message.type === "motivation" && (
                    <div className="flex items-center gap-1 mt-2">
                      <Heart className="w-3 h-3" />
                      <span className="text-xs">Motivasyon Mesajı</span>
                    </div>
                  )}
                  {message.sender === "alex" && message.type === "lesson" && (
                    <div className="flex items-center gap-1 mt-2">
                      <Zap className="w-3 h-3" />
                      <span className="text-xs">Ders Anlatımı</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
              </div>

              {message.sender === "tuna" && (
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">TU</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>

        {/* Hızlı Cevaplar */}
        <div className="flex flex-wrap gap-2">
          {quickResponses.map((response, index) => (
            <Button key={index} variant="outline" size="sm" onClick={() => setNewMessage(response)} className="text-xs">
              {response}
            </Button>
          ))}
        </div>

        {/* Mesaj Gönderme */}
        <div className="flex gap-2">
          <div className="flex-1 flex gap-2">
            <Input
              placeholder="Alex'e mesaj yaz..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsListening(!isListening)}
              className={isListening ? "bg-red-100 text-red-600" : ""}
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Volume2 className="w-4 h-4" />
            </Button>
          </div>
          <Button onClick={sendMessage} disabled={!newMessage.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {isListening && (
          <div className="text-center">
            <Badge variant="secondary" className="animate-pulse">
              <Mic className="w-3 h-3 mr-1" />
              Dinliyorum... Konuşabilirsin!
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
