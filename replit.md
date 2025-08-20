# Overview

This is a full-stack web application for Genius Classes, a coaching center in Mumbai. The application serves as a marketing website featuring information about the coaching center, courses offered, testimonials, contact forms, and location details. Built with React on the frontend and Express.js on the backend, it uses modern web technologies including TypeScript, Tailwind CSS, and shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: wouter for client-side routing with a simple single-page application structure
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API endpoints for contact form submissions and inquiry management
- **Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for request validation and type safety
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Layer
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Schema Management**: Shared schema definitions between frontend and backend using Zod
- **Database Configuration**: Drizzle Kit for migrations and schema management
- **Connection**: Configured for Neon serverless PostgreSQL database

## Development Setup
- **Monorepo Structure**: Client and server code in separate directories with shared schemas
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development Tools**: TypeScript strict mode, ESM modules, hot module replacement
- **Path Aliases**: Configured import aliases for clean code organization

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database operations and schema management

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: External font loading for typography (Inter, DM Sans, etc.)

## Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Development Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing library for React

## External APIs and Services
- **Google Maps**: Embedded maps for location display
- **WhatsApp Business**: Direct messaging integration for customer inquiries
- **Unsplash**: Image hosting for gallery and hero sections (via CDN)