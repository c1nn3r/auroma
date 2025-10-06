import { Link } from "wouter";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md"
          data-testid="link-home"
        >
          Auroma
        </button>
        
        <nav className="flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground/80 hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
            data-testid="link-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-foreground/80 hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
            data-testid="link-work"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-foreground/80 hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
            data-testid="link-pricing"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground/80 hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
            data-testid="link-contact"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
