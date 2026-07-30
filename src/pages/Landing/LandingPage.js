import { Button, Card, StatusBadge } from '../../components/index.js'

const trails = [
  {
    name: 'Alto Peak',
    location: 'Benguet',
    level: 'Moderate',
    tone: 'warning',
    className: 'trail-card--pulag',
  },
  {
    name: 'Sulfatara',
    location: 'Itogon, Benguet',
    level: 'Beginner friendly',
    tone: 'success',
    className: 'trail-card--ulap',
  },
  {
    name: 'Mount Janagdan',
    location: 'Zambales',
    level: 'Moderate',
    tone: 'warning',
    className: 'trail-card--pinatubo',
  },
]

function Feature({ number, title, description }) {
  return `<article class="feature"><span class="feature__number">${number}</span><h3>${title}</h3><p>${description}</p></article>`
}

export function LandingPage() {
  const trailCards = trails
    .map((trail) =>
      Card({
        className: `trail-card ${trail.className}`,
        eyebrow: trail.location,
        title: trail.name,
        content:
          '<p>Guided route, prepared logistics, and a clear trail plan from start to finish.</p>',
        footer: StatusBadge({ label: trail.level, tone: trail.tone }),
      }),
    )
    .join('')

  return `
    <main class="landing-page page-content">
      <section class="landing-hero">
        <div class="landing-hero__copy">
          <p class="eyebrow">A better way to trek</p>
          <h1>Every trail,<br><em>in sync.</em></h1>
          <p class="page-content__intro">Plan with confidence, trek with clarity, and stay connected to the people who keep every journey safe.</p>
          <div class="landing-hero__actions">
            ${Button({ label: 'Book a trek', attributes: 'onclick="location.hash=\'#/booking\'"' })}
            ${Button({ label: 'Sign in', variant: 'secondary', attributes: 'onclick="location.hash=\'#/login\'"' })}
          </div>
          <div class="landing-hero__trust"><span aria-hidden="true">●</span> Built for trekkers, guides, and local tourism offices</div>
        </div>
        <div class="trail-visual" aria-label="Stylized mountain trail map illustration" role="img">
          <div class="trail-visual__sun"></div><div class="trail-visual__mountain trail-visual__mountain--back"></div><div class="trail-visual__mountain trail-visual__mountain--front"></div><div class="trail-visual__path"></div><div class="trail-visual__marker trail-visual__marker--start">Start</div><div class="trail-visual__marker trail-visual__marker--summit">Summit</div>
          <div class="trail-visual__card"><span>Trail status</span><strong>Good to go</strong><small>Clear skies · 18°C</small></div>
        </div>
      </section>

      <section class="landing-section landing-about" aria-labelledby="about-title">
        <div><p class="eyebrow">One connected journey</p><h2 id="about-title">From the first plan to the final step.</h2></div>
        <p>TrailSync helps visitors discover and book local experiences while giving guides and tourism officers the information they need to coordinate a safer, more memorable trek.</p>
      </section>

      <section class="landing-section" aria-labelledby="features-title">
        <div class="landing-section__heading"><p class="eyebrow">Made for the whole trail community</p><h2 id="features-title">Everything a journey needs.</h2></div>
        <div class="features-grid">
          ${Feature({ number: '01', title: 'Plan simply', description: 'Choose a trail, schedule, package, and guide in one straightforward booking flow.' })}
          ${Feature({ number: '02', title: 'Trek confidently', description: 'Live trek updates, weather intelligence, and SOS tools keep every group informed.' })}
          ${Feature({ number: '03', title: 'Manage clearly', description: 'Coordinated dispatching and tourism insights make daily operations easier to run.' })}
        </div>
      </section>

      <section class="landing-section" aria-labelledby="trails-title">
        <div class="landing-section__heading landing-section__heading--row"><div><p class="eyebrow">Start exploring</p><h2 id="trails-title">Popular trails.</h2></div><a class="text-link" href="#/booking">View all trails <span aria-hidden="true">→</span></a></div>
        <div class="trails-grid">${trailCards}</div>
      </section>

      <section class="landing-cta">
        <div><p class="eyebrow">Your next trail is waiting</p><h2>Ready when you are.</h2><p>Find your route, meet your guide, and make the most of every mile.</p></div>
        ${Button({ label: 'Book your trek', attributes: 'onclick="location.hash=\'#/booking\'"' })}
      </section>
    </main>
  `
}
