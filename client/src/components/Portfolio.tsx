import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioItem {
  id: string;
  caption: string;
  genre: string;
  soundcloudUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  { 
    id: "1", 
    caption: "The Jacks (Jackboys Type Beat)", 
    genre: "Rap",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1977842636&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  { 
    id: "2", 
    caption: "Lonely", 
    genre: "R&B",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1977848034&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  { 
    id: "3", 
    caption: "Can't Get Enough", 
    genre: "EDM",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1977848016&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  { 
    id: "4", 
    caption: "Billie Eilish - Chihiro (Auroma Remix)", 
    genre: "EDM",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1977848049&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  { 
    id: "5", 
    caption: "Dettune - Madonna", 
    genre: "Sync",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1977848121&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  { 
    id: "6", 
    caption: "Scent of You (Fragrance Ad)", 
    genre: "Commercial",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1977850023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  { 
    id: "7", 
    caption: "Party Prince - Better", 
    genre: "Rap",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1977847866&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" data-testid="text-portfolio-title">
              Selected Work
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden" data-testid={`card-portfolio-${item.id}`}>
                <div className="aspect-video border-b">
                  <iframe
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={item.soundcloudUrl}
                    title={item.caption}
                  ></iframe>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-genre-${item.id}`}>
                      {item.genre}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-center" data-testid={`text-caption-${item.id}`}>
                    {item.caption}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
