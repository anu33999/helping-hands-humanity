# Helping Hands Humanity — website design concept

A demo redesign prepared by **Kreatif Atelier** to pitch to Helping Hands Humanity (helpinghandshumanity.com).
React + TypeScript + Vite + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5190
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## What's real vs. demo

- **From helpinghandshumanity.com (confirm before launch):** origin story, the seven missions, Mission Education
  figures per year (18 → 380 → 249), HHH Homes numbers (17 → 38 girls + 25 boys), Nelavancha village work,
  monthly transparency practice, Govt. Reg. No. 84/2012 (from the logo), contact details, volunteer form and
  requirements-sheet links, and the photos (colour-graded and cropped to remove watermarks).
- **Demo / placeholder (clearly labelled in the UI):** donation checkout, the forms and newsletter (nothing is sent
  or stored), donation amounts and their impact examples, cause progress bars, wish-list items and prices,
  documents, team profiles, bank details, tax-exemption status, and the two "sample update" articles.

## Where to change things

- Content: `src/data/site.ts`
- Design tokens and button styles: `src/styles.css`
- Payment integration point: `src/lib/payments.ts`
- Photos: `public/images/`
