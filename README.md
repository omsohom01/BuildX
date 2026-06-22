# OutreachX

OutreachX is an Agentic AI-driven campaign automation platform that autonomously launches, manages, and analyzes digital outreach campaigns.

---

Live Demo: https://build-x-sigma.vercel.app/
## Shift Log & Updates (June 20, 2026)

We completed a major codebase refactor, resolved initial compilation errors, set up authentication, and refined the core user workflows.


### Week 0
* **Landing Page UI:** Designed and built a responsive landing page featuring a hero section, feature overview, and call-to-action buttons, using Tailwind CSS and modern web aesthetics.
* **Initial Project Scaffold:** Set up Next.js project structure, routing, and global styles to serve as a foundation for future features.
* **Design Foundations:** Established a basic design system with color palette, typography, and reusable UI components.
* **Responsive Layout:** Implemented fluid grid and responsive breakpoints ensuring optimal display across devices.
* **Accessibility Basics:** Added ARIA attributes and keyboard navigation support for core components.
* **Missing Project Dependencies:** Essential packages required by components (e.g., `lucide-react`, `@radix-ui/react-tooltip`, `@radix-ui/react-dialog`, `class-variance-authority`, `@radix-ui/react-slot`) were not declared in `package.json`.
* **Broken Build Environments:** Unused modules (like an unconfigured client-side Firebase client script) threw severe TypeScript compile-time errors.
* **No Authentication Scaffold:** The application had onboarding steps and campaign pages referencing Clerk features (`useUser`, `useAuth`) without the Clerk dependency installed or initialized in the application layout.
* **Navigation Inconsistencies:** The layout included non-functional "Inbox" hooks that triggered build blocks.

---

###  Week 1

#### 1. Core Authentication Infrastructure
* **Clerk SDK Integration:** Installed and configured `@clerk/nextjs`.
* **Root Provider Setup:** Wrapped the entire application tree inside the `ClerkProvider` in `app/layout.tsx` for state propagation.
* **Interactive Navbar:** Rewrote `components/Navbar.tsx` using Clerk's `useAuth` hook:
  * **Logged Out State:** Renders modal-based `Login` and `Sign Up` buttons.
  * **Logged In State:** Shows the `Get Started` button and renders the interactive `UserButton` avatar dropdown.
* **Hook Restorations:** Re-enabled Clerk integrations in onboarding contexts, onboarding flows, and the messaging inbox page.

#### 2.  Campaign Builder Workflow Refinement
* **Redirection Flow:** Changed completed campaign submission redirection from the non-functional `/inbox` route to the homepage (`/`).
* **Header Streamlining:** Removed the unused `Inbox` button links from headers in both `app/campaign/layout.tsx` and `app/campaign/page.tsx` as requested.

#### 3. Build System & Dependency Engineering
* **Import Mapping Fix:** Aligned path mappings in `tsconfig.json` (`@/components/*` ➜ `./components/*`, `@/lib/*` ➜ `./app/lib/*`).
* **Dependency Upgrades:** Added `class-variance-authority`, `@radix-ui/react-tooltip`, `@radix-ui/react-dialog`, `@radix-ui/react-slot`, and `lucide-react`.
* **Utility creation:** Created `app/lib/utils.ts` and defined the `cn(...)` utility helper to bind conditional tailwind classes.
* **TS Build Clearance:** Temporarily commented out unused Firebase imports and fixed mock arguments in contexts, allowing Next.js compilation and TypeScript checks to complete with zero errors.

---

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing pages by modifying `app/page.tsx`.
## Founders

- Ankur Bag
- Sohom Roy
- Samrit Mukherjee
