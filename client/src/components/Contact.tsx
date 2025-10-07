import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-contact-title">
              Let's Work
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
              Ready to start a project? I respond within 24 hours.
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Contact me via your preferred platform:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    onClick={() => window.location.href = 'mailto:detgenesis@gmail.com'}
                    data-testid="button-email"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => {
                      const discordUsername = 'svet.thevet';
                      navigator.clipboard.writeText(discordUsername);
                      alert(`Discord username "${discordUsername}" copied to clipboard!`);
                    }}
                    data-testid="button-discord"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Discord
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground pt-4">
                    Lets make good music!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
