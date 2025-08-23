# Overview

This is a React/Express.js nutritionist landing page application for selling a digital product called "Cardápio da Nutri: 200 Receitas de Café da Manhã (Com Sabor)". The application is a single-page marketing website designed to convert visitors into customers through strategic UI/UX elements and clear calls-to-action.

The project uses a full-stack TypeScript architecture with React frontend and Express backend, though the current implementation focuses primarily on the frontend landing page with minimal backend functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **Storage Interface**: Abstract storage layer with in-memory implementation (designed for future database integration)

## Design System
- **Typography**: Poppins font family from Google Fonts
- **Color Palette**: Green-focused theme with custom CSS variables
  - Primary green (`#6b8e5c`) for backgrounds
  - Dark green (`#2e7d32`) for buttons and emphasis
  - Alert red (`#d32f2f`) for pricing highlights
- **Component Library**: Comprehensive UI component system using Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL with Neon serverless configuration
- **Schema**: Basic user schema defined with UUID primary keys
- **Migrations**: Drizzle Kit for schema migrations

## Landing Page Structure
The application implements a conversion-focused landing page with these sections:
- Hero section with product introduction and image gallery
- Benefits section highlighting product differentiators
- Recipe gallery showcasing product samples
- Nutritionist credentials and social proof
- Bonus materials section
- Customer testimonials
- Pricing offer with clear call-to-action
- Money-back guarantee
- FAQ section addressing common objections
- Footer with legal links

## External Dependencies

- **Neon Database**: Serverless PostgreSQL database hosting
- **Yampi Payment Gateway**: Brazilian payment processor for checkout (`nucleosaudavel.pay.yampi.com.br`)
- **Image Hosting**: External CDN for product images (`nucleosaudavel.com`, `i.postimg.cc`)
- **Google Fonts**: Poppins font family delivery
- **Replit Development Tools**: Development environment integrations and error overlay

The application uses a comprehensive UI component library including accordions, dialogs, forms, navigation menus, and other interactive elements. The architecture supports easy scaling to add backend functionality, user authentication, and database operations through the existing abstraction layers.