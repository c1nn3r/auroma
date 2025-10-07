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
              I’m Auroma. I make, mix, and shape music for artists who care about sound. I’ve worked across rap, R&B, EDM,Rock and whatever else felt right at the moment. I’m down to work on anything as long as it’s interesting,I like projects that spark something in my head, make this whole thing fun for me. My whole thing is making songs feel good and polished without it costing a fortune(have you seen the price of eggs these days?). I take every project seriously, because I know what it’s like trying to get your music to sound the way it does in your head.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
