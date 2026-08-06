# Nicholas Ugbala Portfolio

Personal portfolio for Nicholas Ugbala, a Lagos-based software engineer focused on backend, full-stack, and product engineering.

The site presents production experience, selected projects, technical strengths, and contact information through an evidence-led editorial design.

[View the current live portfolio](https://nicholas-ugbala-portfolio.kosinick01.chatgpt.site)

## Technology

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4 and custom CSS
- Next.js Metadata API for SEO and social previews
- Vercel for the planned long-term deployment

## Local development

### Prerequisites

- Node.js 22.13 or newer
- pnpm

Install the dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

```bash
pnpm dev      # Start the local development server
pnpm build    # Create an optimized production build
pnpm start    # Run the production build locally
pnpm lint     # Run ESLint
```

## Project structure

```text
app/
  globals.css    Global styles and responsive design
  layout.tsx     Root layout, fonts, SEO, and social metadata
  page.tsx       Portfolio content and page structure
public/
  og.png         Social link-preview image
```

## Editing the portfolio

- Update experience, projects, links, and page copy in `app/page.tsx`.
- Update colors, spacing, typography, and responsive behavior in `app/globals.css`.
- Update page metadata and social sharing in `app/layout.tsx`.
- Replace `public/og.png` to change the social link preview.

After making changes, verify the production build:

```bash
pnpm build
```

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the detected framework preset as **Next.js**.
4. Leave the project root as `./` and the output directory empty.
5. Deploy the `main` branch.

Vercel will install dependencies with pnpm when `pnpm-lock.yaml` is committed. Pushes to the production branch create new production deployments, while pull requests and other branches can receive preview deployments.

No application environment variables are currently required.

## Custom domain

The site can initially use its generated `vercel.app` address. A personal domain can be added later from the Vercel project settings by following the DNS records Vercel provides.

## Package manager

This repository uses pnpm. Keep `pnpm-lock.yaml` committed and avoid committing lockfiles from other package managers.
