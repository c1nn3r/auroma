import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import heroBackground from "@assets/IMG_8890_1759775219117.jpg";

export default function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Studio background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" data-testid="text-hero-headline">
              Industry-Quality Music for Independent Artists
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-subtext">
              Professional production, mixing, and mastering. Affordable rates without compromising quality.
            </p>
          </div>
          
          <Button
            size="lg"
            className="text-base"
            onClick={() => window.location.href = 'mailto:detgenesis@gmail.com'}
            data-testid="button-get-started"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
