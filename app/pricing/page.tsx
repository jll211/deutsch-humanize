import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Kostenlos',
    price: '0€',
    description: 'Ideal zum Testen und für gelegentliche Nutzung',
    features: [
      'Bis zu 5 Texte pro Tag',
      'Maximale Textlänge: 500 Wörter',
      'Standard-Optimierung',
      'Community-Support',
    ],
  },
  {
    name: 'Professional',
    price: '29€',
    period: '/Monat',
    description: 'Perfekt für Content Creator und Freelancer',
    features: [
      'Unbegrenzte Texte',
      'Maximale Textlänge: 2.000 Wörter',
      'Alle Textarten verfügbar',
      'Vorrangiger Support',
      'API-Zugang',
    ],
  },
  {
    name: 'Business',
    price: '99€',
    period: '/Monat',
    description: 'Für Teams und Unternehmen',
    features: [
      'Alles aus Professional',
      'Unbegrenzte Textlänge',
      'Team-Verwaltung',
      'Eigene Textvorlagen',
      'Premium Support',
      'Service Level Agreement',
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Wählen Sie Ihren Plan
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed">
            Flexible Preise für Ihre individuellen Bedürfnisse. Jederzeit kündbar.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between rounded-lg border p-6 shadow-sm"
            >
              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="mt-2 text-gray-500">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-6 w-full">
                {plan.name === 'Kostenlos' ? 'Jetzt starten' : 'Auswählen'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

