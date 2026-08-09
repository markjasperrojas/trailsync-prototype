import { dispatchGuides } from '../data/dispatchData.js'

let guideProfiles = dispatchGuides.map((guide) => ({
  ...guide,
  phone: guide.id === 'daniel' ? '0917 555 0101' : '0917 555 0100',
  email: `${guide.id}@trailsync.ph`,
  certifications:
    guide.id === 'daniel' ? 'First Aid and Basic Life Support' : 'First Aid certified',
  bio:
    guide.id === 'daniel'
      ? 'A local guide focused on safe, well-coordinated trail experiences.'
      : 'An experienced TrailSync guide.',
}))
let profileFeedback = ''

export const getGuideProfiles = () => guideProfiles
export const getGuideProfile = (id) => guideProfiles.find((guide) => guide.id === id)
export const getGuideProfileFeedback = () => profileFeedback

export function saveGuideProfile(id, values) {
  const phone = values.phone?.trim() ?? ''
  if (!values.name?.trim() || !values.experience?.trim() || !values.specialty?.trim()) {
    profileFeedback = 'Complete your name, experience, and trail specialties before saving.'
    return false
  }
  if (!/^[0-9+()\s-]{7,}$/.test(phone)) {
    profileFeedback = 'Enter a valid mobile number before saving.'
    return false
  }

  guideProfiles = guideProfiles.map((guide) =>
    guide.id === id
      ? {
          ...guide,
          name: values.name.trim(),
          phone,
          experience: values.experience.trim(),
          specialty: values.specialty.trim(),
          certifications: values.certifications?.trim() ?? '',
          bio: values.bio?.trim() ?? '',
          initials: values.name
            .trim()
            .split(/\s+/)
            .map((part) => part[0])
            .slice(0, 2)
            .join('')
            .toUpperCase(),
        }
      : guide,
  )
  profileFeedback = 'Profile saved. Your updated details are now visible in Tour Guide Management.'
  return true
}

export function clearGuideProfileFeedback() {
  profileFeedback = ''
}

export function toggleGuideAvailability(id) {
  guideProfiles = guideProfiles.map((guide) =>
    guide.id === id
      ? {
          ...guide,
          availability: guide.availability === 'Available' ? 'Unavailable' : 'Available',
          status:
            guide.availability === 'Available'
              ? 'Not accepting new assignments'
              : 'Ready for assignment',
        }
      : guide,
  )
}
