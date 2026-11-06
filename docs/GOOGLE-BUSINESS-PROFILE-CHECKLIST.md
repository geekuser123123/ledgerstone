# Google Business Profile Readiness Checklist

Use this **after** the website is live and Search Console is verified.

> **Eligibility first.** A Google Business Profile is only for businesses that make
> **in-person contact with customers during their stated hours**. An online-only
> business is **not eligible**, so don't create a profile for one. Don't use a virtual
> office, mailbox or unstaffed coworking address. Google may suspend the profile, and
> it can damage trust.

## Ledgerstone notes

- **Name:** **Ledgerstone**, exactly as on the website. The office is in **Maryland**, so register
  the trade name with the Maryland State Department of Assessments and Taxation (SDAT, via
  Maryland Business Express) before creating the profile. Ask your attorney or accountant whether
  you also need a DC registration for work done in DC.
- **Business type:** **Local store / storefront**: clients visit the office during the posted hours.
- **Address:** **525 Eastern Ave NE, Fairmount Heights, MD 20743**, entered in GBP exactly as on the
  website. Add any suite or unit number to both. Google shows the location as Fairmount Heights,
  not Washington, DC; that's correct, and the site matches it. The office must be staffed during
  the posted hours, and virtual offices or mailboxes can get the profile suspended.
- **Service area (optional):** you may add Washington, DC as a service area as well.
- **Phone:** **(771) 223-9532**.
- **Hours:** Monday–Friday, 9:00 AM – 5:00 PM.
- **Primary category:** **Financial consultant**.
- **Secondary category:** **Business administration service**.

## Step 1: Verify the website
- [ ] Search Console Domain property verified (see `SEARCH-CONSOLE-SETUP.md`)
- [ ] Sitemap submitted, and the homepage is indexed or indexing has been requested

## Step 2: Check the website for consistency
- [ ] `STRICT=1 node build.mjs` passes, so no placeholders remain
- [ ] The **business name** in `site.config.mjs` is the real-world name, set with `publicNameConfirmed: true`
- [ ] The **phone number** is correct, answered during business hours, and identical everywhere
- [ ] The **address**, if shown, is genuine, staffed and receives customers
- [ ] **Hours** are genuine
- [ ] The Contact page, footer and structured data all show the same name, address and phone
- [ ] Services are described accurately, and only services you actually offer are enabled
- [ ] The contact form delivers a test submission to the business inbox

## Step 3: Decide your eligibility and profile type

| Your situation | What to do |
|---|---|
| Staffed office where clients visit during posted hours | Storefront profile with the address shown. Set `locationType: 'office'` and fill in `address`, `hours` and optionally `geo`. The site will then show the address and map and output `ProfessionalService` schema. |
| You meet clients in person at **their** location or elsewhere, and don't receive them at your address | **Service-area business.** Hide the address in GBP and list your service areas (Washington, DC plus nearby cities, staying within about a 2-hour drive). Set `locationType: 'service-area'`. |
| Phone, video or email only, with no in-person contact | **Not eligible.** Don't create a profile. Focus on Search Console and organic SEO. Set `locationType: 'online-only'`. |

## Step 4: Create the profile
- [ ] Sign in with the **same Google account** that owns the Search Console property, where practical
- [ ] **Business name:** exactly the real-world name, with **no added keywords or city names** unless they are part of the legal or registered name
- [ ] **Primary category:** the most accurate available category for the services you actually provide (search the category list in GBP). Don't choose an unrelated category to get a different verification method.
- [ ] Address or service area, as decided in Step 3
- [ ] Phone, matching the website exactly
- [ ] Website: `https://ledgerstone-sd.netlify.app/` (the current `site.url`). Keep the GBP website field aligned with this URL whenever the site address changes.
- [ ] Hours, matching the website
- [ ] Description: factual and educational, with no promises of returns or tax savings, and no URLs or promotional language
- [ ] Services: only the services enabled on the website

## Step 5: Verification
- Google decides which verification methods are offered. These can include instant
  verification through Search Console, video verification, phone, text or email.
- Search Console ownership **may** make instant verification available. It is **not guaranteed**.
- If Google asks for video verification, be ready to show the business location or vehicle,
  your business management tools or equipment, and proof of management (for example, a
  utility bill or business registration), as Google instructs.
- Approval timing varies, so don't promise same-day approval.

## After verification
- [ ] Add the GBP URL to `business.sameAs` in `site.config.mjs` and rebuild
- [ ] Keep name, address, phone and hours consistent everywhere, including any directories
  (BBB, Yelp, industry directories) you choose to list on
- [ ] Never post fake reviews or offer incentives for reviews, and never add review markup to the website
