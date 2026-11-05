import { icon, SERVICES, faqList, faqSchema, ctaBand, B, esc, mediaImg, heroVideo, phoneHref, SITE, ORG_ID } from '../lib.mjs';
import { contactBlock } from './contact.mjs';

const ADMIN = SERVICES.filter((s) => s.group === 'admin');
const EDU = SERVICES.filter((s) => s.group === 'education');

const faqs = [
  { q: 'What does Ledgerstone do?', a: '<p>We provide administrative support and education for Solo and self-directed 401(k) plans: setup alongside your chosen provider, plan records and year-end values, Form 5500-EZ preparation, and ongoing help. You stay the plan sponsor and decision-maker.</p>' },
  { q: 'Do you meet in person?', a: `<p>Yes. We meet at your home or office in ${esc(B.serviceArea.join(' and '))}, by appointment, Monday through Friday. A first conversation can be by phone.</p>` },
  { q: 'Do you choose or recommend investments?', a: '<p>No. Investment decisions are yours. We keep the plan’s records in order and explain the rules that apply.</p>' },
  { q: 'Do you hold or move plan money?', a: '<p>Never. Plan assets stay in accounts titled to your plan with the institutions you choose.</p>' },
  { q: 'Who can have a Solo 401(k)?', a: '<p>Generally, a business with self-employment or business income and no eligible employees other than the owners and their spouses — sole proprietors, LLCs, partnerships and corporations can all qualify. Hiring can change that.</p>' },
  { q: 'When does a plan have to file Form 5500-EZ?', a: '<p>Generally in any year a one-participant plan’s total assets exceed $250,000 at year-end, and always in the plan’s final year. For calendar-year plans it’s generally due July 31, extendable with Form 5558.</p>' },
  { q: 'What can a self-directed 401(k) invest in?', a: '<p>Whatever the plan document permits and federal law doesn’t prohibit — often real estate, private loans, private company interests, qualifying bullion and public securities. Collectibles are not allowed, and transactions with “disqualified persons” such as you or close family are prohibited.</p>' },
  { q: 'Is this investment, legal or tax advice?', a: '<p>No. Our work is administrative support and general education. For individualized advice, consult a licensed financial professional, CPA or attorney — we’re glad to coordinate with yours.</p>' },
  { q: 'How do I get started?', a: `<p>Call <a href="${phoneHref()}">${esc(B.phone)}</a> or use the <a href="#contact">meeting request form</a> below.</p>` },
];

const STEPS = [
  ['Introductory call', 'A short conversation about your business, your plan and where you’d like help.'],
  ['Agree the scope', 'We set out what we handle, what your provider handles and what stays with you.'],
  ['Get current', 'New plan: setup with your provider. Existing plan: records gathered and gaps closed.'],
  ['Stay current', 'Activity recorded, reminders sent, questions answered through the year.'],
  ['Close the year', 'Values documented; Form 5500-EZ prepared for your signature when it’s required.'],
];

export default {
  path: '/',
  title: 'Ledgerstone | Solo & Self-Directed 401(k) Support in Washington, DC',
  description:
    'Ledgerstone helps Washington, DC business owners with Solo and self-directed 401(k) plans: plan setup, records and valuations, Form 5500-EZ preparation and ongoing support.',
  schema: [
    faqSchema(faqs),
    ...SERVICES.map((s) => ({
      '@type': 'Service',
      '@id': `${SITE}/#${s.id}`,
      name: s.title,
      description: s.short,
      provider: { '@id': ORG_ID },
      areaServed: B.serviceArea.map((n) => ({ '@type': 'City', name: n })),
    })),
  ],
  bodyClass: 'is-home',
  body: () => `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero__bg" aria-hidden="true">${heroVideo()}<div class="hero__fallback"></div></div>
  <div class="container hero__inner">
    <div class="hero__copy">
      <p class="kicker kicker--light">Washington, DC · ${esc(B.tagline)}</p>
      <h1 id="hero-h">Your 401(k), kept in <em>good order.</em></h1>
      <p class="hero__lead">Ledgerstone helps business owners and self-employed professionals in Washington, DC set up and maintain Solo and self-directed 401(k) plans — accurate records, filings on time, and clear answers. We meet you at your home or office.</p>
      <div class="btn-row">
        <a class="btn btn--accent btn--lg" href="#contact">Request a Meeting</a>
        <a class="btn btn--glass btn--lg" href="${phoneHref()}">${icon('phone')} ${esc(B.phone)}</a>
      </div>
    </div>
    <div class="ledger-card" aria-label="What Ledgerstone keeps in order">
      <p class="ledger-card__k">The plan ledger</p>
      <ul>
        <li><span>Plan set up with your provider</span><b>${icon('check')}</b></li>
        <li><span>Contributions logged by type &amp; date</span><b>${icon('check')}</b></li>
        <li><span>Year-end values documented</span><b>${icon('check')}</b></li>
        <li><span>Form 5500-EZ prepared when due</span><b>${icon('check')}</b></li>
      </ul>
      <p class="ledger-card__foot">You stay in charge of every decision.</p>
    </div>
  </div>
</section>

<nav class="jump" aria-label="Sections on this page">
  <div class="container jump__inner">
    <a href="#services">Services</a><a href="#process">How it works</a><a href="#roles">Who does what</a><a href="#learn">401(k) basics</a><a href="#faq">FAQ</a><a href="#about">About</a><a href="#contact">Contact</a>
  </div>
</nav>

<section class="section" id="services" aria-labelledby="services-h">
  <div class="container">
    <div class="head head--split">
      <div><p class="kicker">Services</p><h2 id="services-h">Four ways we keep your plan in order</h2></div>
      <p>Hands-on administrative support for owner-only and self-directed 401(k) plans — at your direction, and alongside the plan provider you choose.</p>
    </div>
    <div class="ledger">
      ${ADMIN.map((s, i) => `<article class="ledger__row" id="${s.id}"><span class="ledger__n">0${i + 1}</span>${icon(s.icon, 'ledger__icon')}<h3>${s.title}</h3><p>${s.short}</p></article>`).join('')}
    </div>
    <div class="edu-strip">
      <p class="edu-strip__k">Also included</p>
      ${EDU.map((s) => `<div id="${s.id}">${icon(s.icon)}<span><strong>${s.title}</strong> — ${s.short}</span></div>`).join('')}
    </div>
  </div>
</section>

<section class="section section--sand" id="process" aria-labelledby="process-h">
  <div class="container split">
    <div class="split__text">
      <p class="kicker">How it works</p>
      <h2 id="process-h">Five steps, start to year-end</h2>
      <ol class="steps">${STEPS.map(([t, d], i) => `<li><span class="steps__n">${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol>
    </div>
    <figure class="split__media">${mediaImg('records', { cls: 'split__img', label: 'Plan records' })}</figure>
  </div>
</section>

<section class="section section--ink" id="roles" aria-labelledby="roles-h">
  <div class="container">
    <div class="head head--split"><div><p class="kicker kicker--light">Who does what</p><h2 id="roles-h">Clear roles keep a plan out of trouble</h2></div><p>A self-directed plan has three parties. Each has its own job.</p></div>
    <div class="resp">
      <div class="resp__col"><h3>You decide</h3><ul><li>Whether to adopt a plan, and with which provider</li><li>Contribution amounts and timing</li><li>Every investment the plan makes</li><li>Reviewing, signing and filing returns</li></ul></div>
      <div class="resp__col resp__col--us"><h3>Ledgerstone handles</h3><ul><li>Setup assistance and checklists</li><li>Plan records and year-end values</li><li>Form 5500-EZ preparation</li><li>Reminders and answers all year</li></ul></div>
      <div class="resp__col"><h3>Your provider supplies</h3><ul><li>The plan document and amendments</li><li>Plan accounts or custody, as applicable</li><li>Its own statements and notices</li></ul></div>
    </div>
    <p class="roles-note">${icon('shield')} Ledgerstone never holds or invests plan money, doesn’t recommend investments, and isn’t a plan trustee, custodian or fiduciary.</p>
  </div>
</section>

<section class="section" id="learn" aria-labelledby="learn-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">401(k) basics</p><h2 id="learn-h">What every owner should know first</h2><p>A short primer. It’s general education, not advice — your CPA or attorney can apply it to your situation.</p></div>
    <div class="basics">
      <article class="basic">
        <h3>Solo 401(k)</h3>
        <p>A 401(k) covering only business owners and their spouses. You contribute in two roles:</p>
        <ul class="ticks">
          <li><strong>As employee:</strong> elective deferrals, pre-tax or Roth, up to the annual limit, plus catch-ups from age 50.</li>
          <li><strong>As employer:</strong> profit-sharing contributions, generally up to 25% of W-2 pay (or a similar share of net self-employment earnings).</li>
          <li>Hire an eligible employee and the plan usually stops being “solo.”</li>
        </ul>
      </article>
      <article class="basic">
        <h3>Self-directed 401(k)</h3>
        <p>A 401(k) whose plan document lets you direct investments beyond a fund menu.</p>
        <ul class="ticks">
          <li>May hold real estate, private loans, private company interests, qualifying bullion and securities — if the plan allows.</li>
          <li>Can’t hold collectibles such as art, gems or most coins.</li>
          <li>Assets are titled to the plan; income and expenses flow only through plan accounts.</li>
        </ul>
      </article>
      <article class="basic basic--warn">
        <h3>The rules that matter most</h3>
        <ul class="crosses">
          <li><strong>No self-dealing.</strong> You, close family and businesses you control generally can’t buy from, sell to, borrow from or use plan assets.</li>
          <li><strong>Penalties are steep.</strong> Prohibited transactions generally trigger a 15% excise tax per year, rising to 100% if not corrected.</li>
          <li><strong>File when required.</strong> Form 5500-EZ is generally due once plan assets pass $250,000 at year-end.</li>
        </ul>
      </article>
    </div>
    <p class="source">Official sources: <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS — One-Participant 401(k) Plans</a>; <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" rel="noopener" target="_blank">IRS — Prohibited Transactions</a>. Limits change most years — confirm current figures at IRS.gov. See our <a href="/disclosures/">disclosures</a>.</p>
  </div>
</section>

<section class="section section--sand" id="faq" aria-labelledby="faq-h">
  <div class="container faq-wrap">
    <div class="faq-wrap__head"><p class="kicker">FAQ</p><h2 id="faq-h">Questions owners ask us</h2><p>Don’t see yours? <a href="#contact">Ask us directly.</a></p></div>
    ${faqList(faqs)}
  </div>
</section>

<section class="section" id="about" aria-labelledby="about-h">
  <div class="container split">
    <figure class="split__media">${mediaImg('city', { cls: 'split__img', label: 'Washington, DC' })}</figure>
    <div class="split__text">
      <p class="kicker">About Ledgerstone</p>
      <h2 id="about-h">Named for the record that holds everything together</h2>
      <p class="lead">A ledger is where every entry is kept; stone is what lasts. Ledgerstone exists to keep owner-run retirement plans accurately recorded and dependably maintained.</p>
      <p>We serve consultants, contractors, attorneys, clinicians, independent professionals and small firms across Washington, DC — meeting at their homes and offices, by appointment.</p>
      <ul class="standards">
        <li><strong>Defined scope.</strong> We agree up front what we handle and what stays with you and your provider.</li>
        <li><strong>Your decisions stay yours.</strong> We aren’t a fiduciary, trustee, custodian, registered investment adviser or broker-dealer, and we don’t give legal or tax advice.</li>
        <li><strong>Privacy.</strong> Your information is handled as described in our <a href="/privacy-policy/">Privacy Policy</a>.</li>
      </ul>
    </div>
  </div>
</section>

${ctaBand({ heading: 'Let’s put your plan’s records in order.', text: 'Request a meeting at your home or office in Washington, DC — new plan or existing one.', button: 'Request a Meeting' })}

<section class="section" id="contact" aria-labelledby="contact-h">
  <div class="container">
    <div class="head"><p class="kicker">Contact</p><h2 id="contact-h">Request a meeting</h2><p>Share a few details and we’ll call to set a time at your home or office.</p></div>
  </div>
  ${contactBlock()}
</section>
`,
};
