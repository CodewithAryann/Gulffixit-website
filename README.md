# Gulf Fixit — Website

A Next.js 15 (App Router, TypeScript, Tailwind CSS v4) website for Gulf Fixit,
a Dubai maintenance, fit-out and MEP contractor.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/                     Pages (Next.js App Router)
  page.tsx               Homepage
  about/page.tsx         About page
  contact/page.tsx       Contact page
  get-estimate/page.tsx  Quote request page
  projects/page.tsx      Portfolio/projects page
  services/page.tsx      Services overview
  services/[slug]/       Dynamic service detail pages (one template, 8 services)
  blog/page.tsx          Blog listing
  blog/[slug]/           Dynamic blog post pages
  sitemap.ts             Auto-generated sitemap.xml
  robots.ts              Auto-generated robots.txt
  manifest.ts            Web app manifest (PWA metadata)

components/              Reusable UI components
lib/
  site.ts                ALL company info + the 8 services live here
  blog.ts                ALL blog post content lives here
public/images/brand/    Logo files (color, white, icon mark, app icons)
public/images/           All site imagery
```

## Brand assets

Your logo is processed into several versions under `public/images/brand/`:

- `logo-color.png` — full-color logo (red/black) for light backgrounds
- `logo-white.png` — white version with red accent, for dark backgrounds
  (used in the navbar and footer)
- `logo-mark.png` — the gear/G icon only, used as the app icon
- `icon-192.png` / `icon-512.png` — app icons for the web manifest
- `app/favicon.ico` — browser tab icon, generated from the logo mark

If you update your logo in future, regenerate these the same way (trim,
remove background, create a white-on-dark variant) rather than just
swapping one file, since the navbar/footer specifically need the
white-text version to stay readable on the dark header.

## Sticky widgets

Two persistent widgets appear on every page (see `app/layout.tsx`):

- **WhatsApp button** (`components/WhatsAppButton.tsx`) — bottom-left,
  links straight to a WhatsApp chat using `site.whatsapp`.
- **Chat widget** (`components/ChatWidget.tsx`) — bottom-right, a guided
  quick-reply assistant that routes visitors to the quote form, WhatsApp,
  or your phone number depending on what they need. It's not a live AI
  agent — it's a simple decision-tree widget, which is faster and more
  reliable for a contractor site than a chatbot guessing at answers.

## The two files you'll edit most

### `lib/site.ts`

This is the control center. It contains:
- Company name, phone numbers, email, address, social links (`site` object)
- All 8 services, each with its own hero image, intro copy, highlights,
  process steps, and FAQs (`services` array)

To update a phone number, email, or address anywhere on the site, change it
once in the `site` object at the top of this file — it propagates to the
footer, navbar, contact page, and structured data automatically.

To edit a service's content, find its entry in the `services` array and
edit the text fields. No need to touch any page template — the
`app/services/[slug]/page.tsx` file renders whatever is in this array.

**To add a 9th service:** add a new object to the `services` array following
the same shape as the existing ones. A new page at `/services/your-slug`
will be generated automatically, and it will appear in the navbar dropdown,
footer, services grid, and sitemap with no further changes.

### `lib/blog.ts`

Every blog post is one object in the `blogPosts` array — title, meta
description, category, date, and a `content` array of blocks (`p`, `h2`,
`h3`, `list`, `quote`).

**To add a new blog post:** copy an existing post object, change the slug,
title, dates and content blocks. It will automatically appear on `/blog`,
get its own page at `/blog/your-slug`, and be added to the sitemap.

## Contact form setup (important)

The quote/contact forms use [Web3Forms](https://web3forms.com) — a free
service that emails form submissions to you with no backend required.

**To activate the forms:**
1. Go to https://web3forms.com and sign up free with your email.
2. Copy your Access Key.
3. Open `components/LeadForm.tsx` and replace
   `"YOUR_WEB3FORMS_ACCESS_KEY"` with your real key.

Until this is done, the forms will show an error message when submitted.

## SEO notes

- Every page has unique title/description metadata (see each `page.tsx`'s
  `export const metadata`).
- Structured data (JSON-LD) is included for: LocalBusiness (every page, via
  layout), Service + FAQPage (service pages), BlogPosting (blog posts), and
  BreadcrumbList (most pages). See `components/Schema.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically — no manual maintenance needed as you add
  services or blog posts.
- Update `site.url` in `lib/site.ts` to your real production domain before
  launch — this feeds canonical URLs, the sitemap, and structured data.
- `public/images/og-banner.jpg` is the image shown when the site is shared
  on WhatsApp, Facebook, etc. Replace it with your own 1200×630 image any
  time by overwriting that file.

## Before going live — checklist

- [ ] Add your real Web3Forms access key (see above)
- [ ] Confirm `site.url` in `lib/site.ts` matches your real domain
- [ ] Double-check phone numbers, email and address in `lib/site.ts`
- [ ] Update `site.geo` latitude/longitude to your exact office location
      (currently set to a general Dubai coordinate)
- [ ] Replace testimonials in `components/Testimonials.tsx` with real
      client quotes once available
- [ ] Verify social links in `lib/site.ts` are correct
- [ ] Set up Google Search Console and submit `/sitemap.xml`

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- lucide-react + react-icons (icons)
- next/font (Inter, Oswald, JetBrains Mono — self-hosted, no external font requests)
