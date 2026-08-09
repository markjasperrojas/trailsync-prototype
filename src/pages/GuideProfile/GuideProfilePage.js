import { Button, Input, StatusBadge } from '../../components/index.js'
import { getCurrentUser } from '../../services/authService.js'
import { getGuideProfile, getGuideProfileFeedback } from '../../services/guideService.js'

export function GuideProfilePage() {
  const user = getCurrentUser()
  const guide = getGuideProfile(user?.guideId)
  const feedback = getGuideProfileFeedback()

  return `<main class="page-content guide-profile-page"><div class="guide-profile-page__heading"><div><p class="eyebrow">Guide workspace</p><h1>My profile.</h1><p class="page-content__intro">Keep the details used by the Tourism Office accurate and up to date.</p></div><div class="guide-profile-avatar" aria-hidden="true">${guide.initials}</div></div><form id="guide-profile-form" class="guide-profile-form"><section><p class="eyebrow">Contact details</p><div class="guide-profile-form__grid">${Input({ id: 'name', label: 'Full name', value: guide.name, required: true })}${Input({ id: 'phone', label: 'Mobile number', type: 'tel', value: guide.phone, required: true })}${Input({ id: 'email', label: 'Email address', type: 'email', value: guide.email, hint: 'Demo account email cannot be changed.', readOnly: true })}</div></section><section><p class="eyebrow">Guide details</p><div class="guide-profile-form__grid">${Input({ id: 'experience', label: 'Guiding experience', value: guide.experience, required: true })}${Input({ id: 'specialty', label: 'Trail specialties', value: guide.specialty, required: true })}${Input({ id: 'certifications', label: 'Certifications', value: guide.certifications })}</div><label class="field" for="bio"><span class="field__label">Guide bio</span><textarea class="field__input guide-profile-form__bio" id="bio" name="bio" rows="4">${guide.bio}</textarea></label></section>${feedback ? `<div class="guide-profile-feedback">${StatusBadge({ label: feedback, tone: feedback.startsWith('Profile saved') ? 'success' : 'danger' })}</div>` : ''}<footer>${Button({ label: 'Cancel changes', variant: 'ghost', attributes: 'data-guide-profile-action="cancel"' })}${Button({ label: 'Save profile', attributes: 'data-guide-profile-action="save"' })}</footer></form></main>`
}
