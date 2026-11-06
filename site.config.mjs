/**
 * ============================================================================
 *  LEDGERSTONE — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Optional items are hidden until set.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://ledgerstone-sd.netlify.app', // no trailing slash
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Ledgerstone',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once registered as a DC trade name (CorpOnline)
    owner: null, // optional
    foundingYear: null,

    phone: '(771) 223-9532',
    phoneE164: '+17712239532',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed office that receives clients during the posted hours
     * (Google Business Profile storefront). Address, map and storefront schema
     * are shown. The office is in Fairmount Heights, MD, just across Eastern Ave
     * from DC — keep the locality exactly as Google lists it.
     */
    locationType: 'office',
    address: { streetAddress: '525 Eastern Ave NE', addressLocality: 'Fairmount Heights', addressRegion: 'MD', postalCode: '20743', addressCountry: 'US' },
    geo: null,
    serviceArea: ['Washington, DC'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Eastern Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  form: { name: 'consultation' },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // No verified DC video on Pexels — the hero uses a slow-zoom photo instead.
    // Pexels photo 18466744 — Potomac River, Washington, DC (Pexels License)
    heroVideo: { webm: null, mp4: null, poster: '/assets/media/hero.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      city: { src: '/assets/media/city.webp', pos: '50% 50%', alt: 'Row of colorful painted rowhouses on a Washington, DC street' },
      records: { src: '/assets/media/records.webp', pos: '50% 50%', alt: 'Close-up of a handwritten ledger with columns of figures' },
      street: { src: '/assets/media/street.webp', pos: '50% 60%', alt: 'Key Bridge over the Potomac River at dusk' },
    },
  },
};
