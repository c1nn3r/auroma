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
    caption: "Can't Get Enough", 
    genre: "EDM",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/2183309023&color=%23312e29&auto_play=false&show_comments=true&visual=true"
  },
  { 
    id: "2", 
    caption: "Lonely", 
    genre: "Sync",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/2183309347&color=%23312e29&auto_play=false&show_comments=true&visual=true"
  },
  { 
    id: "3", 
    caption: "Billie Eilish - CHIHIRO (Auroma Remix)", 
    genre: "EDM",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/2183314331&color=%23312e29&auto_play=false&show_comments=true&visual=true"
  },
  { 
    id: "4", 
    caption: "Dettune - Madonna (Official Audio)", 
    genre: "Trap",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/2183314551&color=%23312e29&auto_play=false&show_comments=true&visual=true"
  },
  { 
    id: "5", 
    caption: "The Jacks (Jackboys Type Beat)", 
    genre: "Rap",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/2183314951&color=%23312e29&auto_play=false&show_comments=true&visual=true"
  },
  { 
    id: "6", 
    caption: "Scent of You (A Fragrance Ad)", 
    genre: "Commercial",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/2183315779&color=%23312e29&auto_play=false&show_comments=true&visual=true"
  },
  { 
    id: "7", 
    caption: "Party Prince - Better", 
    genre: "RnB",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/2183308775&color=%23312e29&auto_play=false&show_comments=true&visual=true"
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Selected Work
            </h2>
          </div>

          {/* Grid of portfolio items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
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
                    <Badge variant="secondary" className="text-xs">
                      {item.genre}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-center">
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
