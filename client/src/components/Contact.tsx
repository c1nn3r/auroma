import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let's Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to start a project? I respond within 24 hours.
            </p>
          </div>

          {/* Optional quick contact buttons */}
          <Card>
            <CardContent className="pt-6 space-y-6 text-center">
              <p className="text-sm text-muted-foreground">
                Or reach me directly via your preferred platform:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => window.location.href = 'mailto:detgenesis@gmail.com'}
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
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Discord
                </Button>
              </div>
              <p className="text-xs text-muted-foreground pt-4">
                Let's make good music!
              </p>
            </CardContent>
          </Card>

          {/* Google Form */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Or fill out the form below with your project details:
            </p>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfFrZD71jxN47oZXbwX2Ns6ccpaa6llvxpzjdlIX-lhsc5u2A/viewform?embedded=true"
              width="100%"
              height="1523"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="max-w-3xl mx-auto"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
