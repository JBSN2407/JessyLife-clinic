# JessyLife Physiotherapy & Rehabilitation Clinic

## Overview

JessyLife is a luxury healthcare website for a physiotherapy and rehabilitation clinic based in Accra, Ghana. The application is a single-page marketing site that showcases the clinic's services, including home-based therapy, facility rehabilitation, and specialized care. The site emphasizes a premium, spa-like aesthetic while maintaining medical professionalism, designed to drive bookings and establish trust with potential patients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18+** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (currently single-page, but extensible)
- **TanStack Query** for server state management and API interactions

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with extensive customization
- Custom design system based on luxury healthcare aesthetics (Poppins for headings, Open Sans for body text)
- Responsive design with mobile-first approach using Tailwind breakpoints

**State & Form Management**
- **React Hook Form** for performant form handling with minimal re-renders
- **Zod** for runtime schema validation, shared between client and server
- **@hookform/resolvers** for integrating Zod validation with React Hook Form

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- Dual server setup: development mode (with Vite integration) and production mode (serving static assets)
- RESTful API design pattern for contact form submissions

**Development vs Production**
- Development: Vite middleware integration for HMR and SSR of React components
- Production: Pre-built static assets served via Express static middleware
- Environment-specific entry points (`index-dev.ts` vs `index-prod.ts`)

**Storage Layer**
- Currently using **in-memory storage** (`MemStorage` class) for contact form submissions
- Interface-based design (`IStorage`) allows easy migration to persistent database
- Data includes contact submissions with UUID generation and timestamp tracking

### Data Validation

**Schema-First Approach**
- Shared validation schemas between client and server using Zod
- Contact form schema validates: name (min 2 chars), email, phone (min 10 chars), message (min 10 chars), optional service type
- Type safety through TypeScript inference from Zod schemas

### Design System

**Color Palette**
- Primary: Teal (`#00b1a9` / `hsl(174 100% 35%)`)
- Secondary: Dark navy (`#0f1724`)
- Accent: Gold (`#d4af37` / `hsl(45 90% 55%)`)
- Background: Soft mint (`#f6fbfa` / `hsl(165 45% 98%)`)

**Spacing & Layout**
- Consistent Tailwind spacing scale: 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl` with responsive horizontal padding

**Component Patterns**
- Grid-based layouts (4-column for features, 3-column for services, 2-column zigzag for benefits)
- Card-based UI with hover effects and elevation
- Glass-morphism effects for hero CTAs (`backdrop-blur-sm`)
- Smooth scroll behavior and scroll-triggered animations

## External Dependencies

### UI Libraries
- **@radix-ui/react-*** - Headless UI primitives for accessible components (dialogs, dropdowns, tooltips, etc.)
- **lucide-react** - Icon library for consistent iconography
- **react-icons** - Additional icons (specifically WhatsApp icon)
- **embla-carousel-react** - Carousel/slider functionality (installed but not currently used)

### Database & ORM
- **Drizzle ORM** (`drizzle-orm`, `drizzle-kit`) - TypeScript-first ORM ready for PostgreSQL integration
- **@neondatabase/serverless** - Serverless PostgreSQL driver (configured but not actively used)
- Database configuration points to PostgreSQL via `DATABASE_URL` environment variable
- Migration setup in `drizzle.config.ts` targeting `./migrations` directory

### Development Tools
- **@replit/vite-plugin-*** - Replit-specific development plugins for error handling, cartographer, and dev banner
- **tsx** - TypeScript execution for development server
- **esbuild** - Fast bundler for production server build

### Third-Party Services
- **WhatsApp Integration** - Floating button linking to WhatsApp business number (233201300716)
- Contact form data currently stored in-memory (ready for database persistence)

### Asset Management
- Static images stored in `attached_assets/generated_images/` directory
- Vite alias `@assets` for clean imports
- Hero background, therapy sessions, facility images, and patient care photos

### Form & Validation
- **zod** - Runtime type validation and schema definition
- **@hookform/resolvers** - Bridge between React Hook Form and Zod
- Shared schemas in `shared/schema.ts` for client-server consistency

### Styling Dependencies
- **tailwindcss** with **autoprefixer** via PostCSS
- **class-variance-authority** - Type-safe variant-based component styling
- **clsx** + **tailwind-merge** - Utility for conditional and merged class names