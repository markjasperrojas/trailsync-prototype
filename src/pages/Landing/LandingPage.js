import { Button, Card, StatusBadge } from '../../components/index.js'

export function LandingPage() {
  return `
    <main class="landing-page page-content">
      <section class="landing-hero">
        <div>
          <p class="eyebrow">Explore with confidence</p>
          <h1>Every trail, in sync.</h1>
          <p class="page-content__intro">TrailSync brings booking, guide coordination, trek safety, and local tourism insight into one connected experience.</p>
          <div class="landing-hero__actions">${Button({ label: 'Book a trek', attributes: 'onclick="location.hash=\'#/booking\'"' })}${Button({ label: 'Sign in', variant: 'secondary', attributes: 'onclick="location.hash=\'#/login\'"' })}</div>
        </div>
        ${Card({ eyebrow: 'Today on the trail', title: 'A safer way to explore', content: '<p>Keep guides, trekkers, and tourism officers connected from reservation to completion.</p>', footer: StatusBadge({ label: 'Live prototype', tone: 'success' }) })}
      </section>
    </main>
  `
}
