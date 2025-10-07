import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  license: string;
}

const pricingTiers: PricingTier[] = [
  {
    title: "Starter Track",
    price: "$25",
    description: "For artists on the grind — clean, simple, and ready to drop.",
    features: [
      "1 Beat from the Auroma library",
      "Basic vocal-over-beat mix",
      "Single stereo master",
      "MP3 delivery"
    ],
    license: "No strings attached — just credit Auroma."
  },
  {
    title: "Pro Demo",
    price: "$50",
    description: "For serious artists who want pro quality without breaking the bank.",
    features: [
      "1 Pre-mixed Beat with EQ & balance",
      "Full 2-Track Mix & Master",
      "Vocal and beat fine-tuning",
      "1 round of revisions",
      "WAV delivery"
    ],
    license: "Use it anywhere — just credit Auroma."
  },
  {
    title: "Radio Ready",
    price: "$100",
    description: "For artists who want to sound major. Full control. Full quality.",
    features: [
      "1 Custom-tweaked Beat (tempo or melody)",
      "Full Stem Mix & Master (up to 8 vocal stems)",
      "Light tuning & de-essing",
      "2 rounds of revisions",
      "WAV + Trackouts delivery"
    ],
    license: "Unlimited use — just credit Auroma."
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-pricing-title">
              Pricing
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Affordable beats. Real quality. No contracts. Just credit <span className="font-semibold">Auroma</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card key={tier.title} className="flex flex-col border border-border hover:border-primary/50 transition-all" data-testid={`card-pricing-${tier.title.toLowerCase().replace(/\s/g, '-')}`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2" data-testid={`text-tier-${tier.title.toLowerCase().replace(/\s/g, '-')}`}>
                    {tier.title}
                  </CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold" data-testid={`text-price-${tier.title.toLowerCase().replace(/\s/g, '-')}`}>
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {tier.license}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground" data-testid="text-pricing-note">
              Pay securely via PayPal or crypto. No subscriptions, no hidden fees — just the music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
