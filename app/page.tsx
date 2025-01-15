import { TextEditor } from '@/components/text-editor'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4">
      <div className="w-full max-w-5xl space-y-8 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Der beste KI-Text-Optimierer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Verwandeln Sie KI-generierten Text in natürlich klingende Sprache. Optimieren Sie Ihre Texte für verschiedene Anwendungsbereiche.
          </p>
        </div>
        <TextEditor />
      </div>
    </main>
  )
}

