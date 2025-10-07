import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let's Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start a project? I respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfFrZD71jxN47oZXbwX2Ns6ccpaa6llvxpzjdlIX-lhsc5u2A/viewform?usp=dialog",
                  "_blank"
                )
              }
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Fill Out Form
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                const discordUsername = 'svet.thevet';
                navigator.clipboard.writeText(discordUsername);
                alert(`Discord username "${discordUsername}" copied to clipboard!`);
              }}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Discord
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Let's make good music!
          </p>
        </div>
      </div>
    </section>
  );
}
