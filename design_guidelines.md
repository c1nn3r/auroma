# Design Guidelines for Auroma Portfolio Website

## Design Approach
**Reference-Based Approach**: Professional music/audio industry portfolio sites (similar to industry standards like SoundBetter, Fiverr Pro audio engineers)

## Core Design Principles
- Sleek, modern, and professional aesthetic
- Trust-focused: strong typography, clean spacing, no clutter
- Think modern tech/startup design, not flashy artist page
- Structured, minimal layout with clarity at the forefront

## Color Palette

**Background & Base**
- Primary background: Dark slate/charcoal tones for professional studio aesthetic
- Text: Light gray and white for high contrast
- Sophisticated, moody color scheme

**Accent Colors**
- Vibrant blue/cyan accents for CTAs and interactive elements
- Purple/violet secondary accents for visual interest
- Professional and modern color combinations

## Typography
- Strong, professional typography that conveys trust
- Clean, readable fonts suitable for professional services
- Clear hierarchy between headlines, body text, and captions

## Layout System

**Spacing**
- Clean, generous spacing throughout
- No clutter - focus on breathing room
- Tailwind units: Consistent use of spacing primitives (4, 6, 8, 12, 16 units)

**Structure**
Single-page layout with smooth scroll navigation in this exact order:
1. Header with navigation
2. Hero section
3. Portfolio section  
4. About section
5. Pricing section
6. Contact section

## Component Library

**Header**
- Brand name: "Auroma"
- Navigation links: Work | About | Pricing | Contact
- Smooth scroll behavior to corresponding sections

**Hero Section**
- Centered layout
- Headline: "Industry-Quality Music for Independent Artists"
- Subtext: Professional production, mixing, and mastering at accessible rates
- Clean "Get Started" CTA button (mailto:detgenesis@gmail.com)
- SEO optimized with terms like "cheap production", "affordable mixing", "professional sound"

**Portfolio Section**
- Title: "Selected Work"
- Grid layout: 6 SoundCloud embed placeholders (2x3 or 3x2 responsive grid)
- Diverse portfolio showcasing:
  - 1 Rap track
  - 1 R&B track
  - 2 EDM examples
  - 1 Sync/licensing work
  - 1 Product advertisement
- Each embed with descriptive caption and genre tag

**About Section**
- Professional bio emphasizing:
  - Versatility across multiple genres (Rap, R&B, EDM, Sync, Commercial)
  - Professional quality at affordable rates
  - Experience and dedication to helping independent artists
- Studio photo placement (real photo, no stock images)
- Optional small logo/signature mark beside text

**Pricing Section**
- Clean 3-column layout (responsive to single column on mobile)
- $20 — Mastering (1 revision, MP3/WAV delivered)
- $35 — Mix + Master (1 mix revision, 1 master revision)
- $50 — Full Production (depends on project scope)
- Small note: "3–5 day turnaround. Payment accepted via PayPal or cryptocurrency."

**Contact Section**
- Title: "Let's Work"
- Text: "Ready to start a project? I respond within 24 hours."
- Contact details displayed clearly:
  - Email: detgenesis@gmail.com
  - Secondary: bartakdanilef@gmail.com
  - Discord: @svet.thevet
- "Contact Auroma" CTA button (mailto:detgenesis@gmail.com)

## Images

**Required Image Placements** (Real photos only - NO stock images):
- About section: Studio photo showing professional workspace
- Optional: Producer portrait or logo/signature mark
- All images should be high-quality placeholders ready for client's actual photos

**No Hero Background Image**: Hero section uses clean background with typography focus

## Technical Requirements
- Semantic HTML5 structure
- Mobile-first responsive design
- Smooth scrolling navigation
- Clean, production-ready code for GitHub Pages deployment
- No frameworks (HTML + CSS only as specified)

## Accessibility
- High contrast text for readability
- Clear focus states on interactive elements
- Semantic structure for screen readers