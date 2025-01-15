'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'

const TEXT_TYPES = [
  { id: 'standard', label: 'Standard' },
  { id: 'blog', label: 'Blog' },
  { id: 'social', label: 'Social Media' },
  { id: 'academic', label: 'Akademisch' },
  { id: 'business', label: 'Geschäftlich' },
]

export function TextEditor() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [textType, setTextType] = useState('standard')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleHumanize = async () => {
    if (!inputText) return
    
    setIsLoading(true)
    setError(null)
    setOutputText('')

    try {
      const response = await fetch('/api/humanize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          textType: textType,
        }),
      })
      
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ein unerwarteter Fehler ist aufgetreten')
      }
      
      if (data.error) {
        throw new Error(data.error)
      }
      
      setOutputText(data.text)
    } catch (error) {
      console.error('Fehler beim Verarbeiten:', error)
      setError(
        error instanceof Error 
          ? error.message 
          : 'Bei der Textverarbeitung ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full space-y-4">
      <Tabs defaultValue="standard" onValueChange={setTextType}>
        <TabsList className="grid w-full grid-cols-5">
          {TEXT_TYPES.map((type) => (
            <TabsTrigger key={type.id} value={type.id}>
              {type.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Textarea
            placeholder="Fügen Sie hier Ihren Text ein..."
            className="min-h-[400px] resize-none"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="text-sm text-muted-foreground">
            {inputText.split(/\s+/).filter(Boolean).length} Wörter
          </div>
        </div>
        
        <div className="space-y-2">
          <Textarea
            placeholder="Ihr optimierter Text erscheint hier..."
            className="min-h-[400px] resize-none"
            value={outputText}
            readOnly
          />
          <div className="text-sm text-muted-foreground">
            {outputText.split(/\s+/).filter(Boolean).length} Wörter
          </div>
        </div>
      </div>

      <Button 
        onClick={handleHumanize}
        disabled={!inputText || isLoading}
        className="w-full md:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Wird optimiert...
          </>
        ) : (
          'Text optimieren'
        )}
      </Button>
    </div>
  )
}

