import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold">
            Deutsch Humanizer
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/features" className="text-muted-foreground hover:text-foreground">
              Funktionen
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
              Preise
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Kontakt
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Anmelden</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Kostenlos testen</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

