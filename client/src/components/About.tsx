import { Card } from "@/components/ui/card";
import studioImage from "@assets/IMG_8882_1759775219117.jpg";

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="aspect-[4/3] overflow-hidden">
              <img 
                src={studioImage} 
                alt="Auroma working in the studio" 
                className="w-full h-full object-cover"
                data-testid="img-studio"
              />
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-about-title">
              About
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed" data-testid="text-about-bio">
              I'm Auroma — a professional music producer, mixing engineer, and sound designer specializing in creating industry-quality music at affordable rates. With extensive experience across Rap, R&B, EDM, sync licensing, and commercial production, I help independent artists achieve the professional sound they deserve without breaking the budget. Every project gets the same attention to detail and sonic quality as major label releases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
