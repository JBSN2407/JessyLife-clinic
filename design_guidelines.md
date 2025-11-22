# JessyLife Clinic Design Guidelines

## Design Approach
**Reference-Based: Luxury Healthcare Aesthetic**
Drawing inspiration from premium healthcare brands like One Medical, Forward Health, and luxury spa/wellness websites. The design balances medical professionalism with spa-like tranquility, emphasizing trust, comfort, and premium service delivery.

## Typography System
- **Headings**: Poppins (600-700 weight) - modern, approachable, professional
  - H1: text-5xl to text-6xl 
  - H2: text-4xl
  - H3: text-2xl to text-3xl
  - H4: text-xl
- **Body**: Open Sans (400 regular, 600 semibold for emphasis)
  - Base: text-base (16px)
  - Large: text-lg for hero subheadlines
  - Small: text-sm for labels/captions

## Layout & Spacing System
**Tailwind Units**: Consistently use 4, 6, 8, 12, 16, 20, 24, 32 for spacing
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl with px-6 md:px-8
- Card/component gaps: gap-6 to gap-12
- Element margins: mb-4, mb-6, mb-8, mb-12

## Section Layouts

### Hero Section
- Full viewport height (min-h-screen) with large hero image background
- Centered content overlay with gradient overlay (dark to transparent) for text readability
- Headline, subheadline, dual CTAs stacked vertically
- CTAs with blurred glass-morphism background (backdrop-blur-sm bg-white/10)
- Subtle parallax scroll effect on background image

### How We Help
- 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Icon-topped cards with title and description
- Soft shadows and hover lift effect (translate-y)
- Icons from Heroicons (outline style)

### Why JessyLife
- 2-column alternating image/text layout (zigzag pattern)
- Each point gets full-width treatment with supporting imagery
- Large, impactful statements with supporting body text

### Services
- 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card-based design with subtle borders
- Icon, service name, brief description
- Hover state reveals more detail or accent color border

### Process (4-Step)
- Horizontal stepper layout on desktop, vertical on mobile
- Numbered circles connected by lines
- Title and description for each step
- Progress line uses accent color

### Testimonials
- 2-column card layout (grid-cols-1 md:grid-cols-2)
- Quote marks, testimonial text, client name/treatment type
- Soft background cards with subtle shadows

### Contact Section
- Split layout: Contact form (60%) | Contact info/map placeholder (40%)
- Form fields with floating labels
- Address, phone, email stacked with icons
- Prominent Call/WhatsApp CTAs

## Component Specifications

### Navigation
- Sticky top navigation with backdrop blur (backdrop-blur-md bg-white/90)
- Logo left, navigation links center/right, CTA button far right
- Smooth scroll behavior to section anchors
- Mobile: Hamburger menu with slide-in drawer

### Buttons
- Primary: Solid teal (#00b1a9) with white text, rounded-lg, px-8 py-3
- Secondary: Outlined teal border with teal text
- Accent: Gold (#d4af37) for special CTAs
- All buttons: font-semibold, transform transition, hover:scale-105

### Cards
- Rounded corners (rounded-xl)
- Soft shadows (shadow-lg on hover)
- White background with subtle border
- Padding: p-6 to p-8

### Floating WhatsApp Button
- Fixed bottom-right (fixed bottom-6 right-6)
- Circular button with WhatsApp icon
- Green background (#25D366)
- Pulse animation to draw attention
- z-50 to stay above all content

### Form Elements
- Input fields: border, rounded-lg, px-4 py-3
- Focus states: teal border, ring effect
- Validation states: red for error, green for success
- Submit button uses primary button style

## Animations
- **Scroll Animations**: Fade-in and slide-up using Intersection Observer
- **Hover Effects**: Scale (1.05), shadow changes, color transitions
- **Page Load**: Stagger animation for hero elements
- **Smooth Scroll**: Native CSS scroll-behavior: smooth
- Minimize distracting motion - keep subtle and purposeful

## Images Section

**Hero Image**: 
Large, high-quality hero image showing bright, modern clinic interior with therapy equipment and natural light. Image should convey luxury, cleanliness, and professionalism. Full-width background with subtle parallax effect.

**Why JessyLife Section**:
- Image 1: Physiotherapist providing home-based therapy in comfortable living room setting
- Image 2: Modern rehabilitation facility gym with equipment
- Image 3: Compassionate therapist with elderly patient
- Image 4: Pediatric therapy session with child

**Services Cards**:
Supporting icons (not photos) for each service type using Heroicons

**Process Section**:
Illustrative icons or simple graphics for each step - not photographs

**Testimonials**:
Optional small circular profile photos (can use placeholder initials in colored circles if photos unavailable)

**Contact Section**:
Placeholder for Google Maps embed or location illustration

All images should maintain luxury healthcare aesthetic - bright, clean, professional photography with natural lighting and modern environments.