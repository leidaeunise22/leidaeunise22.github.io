# Portfolio

A personal portfolio site built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for animation.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All the content lives in `src/data/` as plain TypeScript objects — no need to touch the components to update text:

- `src/data/profile.ts` — name, tagline, contact links, resume/photo paths
- `src/data/education.ts` — degree, GPA, coursework
- `src/data/experience.ts` — jobs, internships, projects
- `src/data/leadership.ts` — student leadership roles
- `src/data/awards.ts` — awards, honors, scholarships
- `src/data/conferences.ts` — conferences attended/presented at

Add or remove entries by editing the arrays in those files; the page updates automatically. A few `conferences.ts` entries have `"TODO: add city"` / `"TODO: add date"` placeholders — fill those in with the real details.

## Adding your photos and resume

Drop these files into `public/images/` and they'll appear automatically — no code changes needed. Until a file exists, the site shows a friendly placeholder in its place instead of a broken image:

- `public/images/headshot.jpg` — your photo in the circular frame at the top of the page
- `public/images/hero-bg.jpg` — a subtle full-bleed background behind the landing section
- `public/images/gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` — floating "polaroid" photos on the landing page (event photos, team photos, etc.) — desktop only

Your resume is already wired up at `public/docs/resume.pdf` (linked from the hero buttons and footer). Replace that file to update it.

## Adding other documents

`public/docs/` is a general drop spot for anything downloadable that isn't an image — resume, cover letters, source `.docx` files, transcripts, etc. Files there are served at `/docs/<filename>`; link to them the same way `profile.resumeUrl` links to `/docs/resume.pdf`. Nothing outside `resumeUrl` reads this folder automatically, so link new files explicitly from wherever they should appear.

## Adding supporting photos or LinkedIn posts to any entry

Every entry in `education.ts`, `experience.ts`, `leadership.ts`, `awards.ts`, and `conferences.ts` accepts two optional fields (defined once in `src/data/media.ts` and mixed into every entry type):

```ts
{
  // ...existing fields...
  image: { src: "/images/your-file.jpg", alt: "Description of the photo" },
  linkedinUrl: "https://www.linkedin.com/posts/your-post-url",
}
```

Add either or both to any entry. `image` shows a small thumbnail on the card (drop the file into `public/images/`); `linkedinUrl` adds a "View LinkedIn post" link. Leave both off and the card renders exactly as before — no empty placeholders clutter entries that don't use them.

## Theme

The site is a light, pink "scrapbook" look — grid-paper backgrounds, die-cut sticker chips, washi tape, and a numbered `(01)`-style header on every page. It's light-only by design (no dark mode) so the palette stays intentional.

- **Colors** — defined as CSS variables in `src/app/globals.css` (`--rose`, `--rose-deep`, `--blush`, `--sage`, `--sage-deep`, `--cream`, `--paper`, `--ink`, `--gold`), registered with Tailwind via `@theme inline` so they're usable as normal classes (`bg-rose`, `text-sage-deep`, etc.). Note `--sage`/`--sage-deep` are repurposed from the old business-card theme into warm caramel/coffee tones, not green.
- **Fonts** — loaded in `src/app/layout.tsx` via `next/font/google`: Fredoka (bold, rounded display headings), Nunito (body text), Caveat (handwritten script accents — used sparingly, never for body copy).
- **Icons** — `src/components/icons.tsx` has a small set of line icons (no emoji anywhere on the site) plus a couple of doodle accents (`SparkleIcon`, `FlowerIcon`).
- **Decorative primitives** — `StickerBadge.tsx` (die-cut chip with a hard drop shadow and slight rotation), `WashiTape.tsx` (diagonal-stripe tape accent), `PageHeader.tsx` (the numbered `(0N)` + squiggle-underline heading used at the top of every page).
- **Monogram** — the initials watermark and header badge pull from `profile.initials` in `src/data/profile.ts`.

To retheme, edit the color variables in `globals.css` — every component reads from those tokens rather than hardcoded colors.

## Pages

Each nav tab is its own route (not a scroll anchor):

- `/` — Hero landing (an "ID card" style intro) + a sticker-tile grid linking to the pages below
- `/about`, `/education`, `/experience`, `/leadership`, `/awards`, `/conferences`

`src/app/template.tsx` gives every page a fade/slide-in transition on navigation (respects `prefers-reduced-motion`).

## Structure

- `src/app/layout.tsx` — fonts, and the shared `Header`/`Footer` wrapping every route
- `src/app/page.tsx` — home route: `Hero` + `ExploreGrid`
- `src/components/Hero.tsx` — the ID-card hero with headshot, floating polaroids, and a sticky note
- `src/components/PhotoSlot.tsx` — reusable image component with graceful placeholder fallback
- `src/components/PageHeader.tsx` / `AnimatedCard.tsx` — shared wrappers used by every content page
- `src/components/` — one component per page (`AboutMe`, `Education`, `Experience`, `Leadership`, `Awards`, `Conferences`), rendered by the matching `src/app/<page>/page.tsx` route

## Deploying

Easiest option is [Vercel](https://vercel.com/new): push this folder to a GitHub repo and import it.
