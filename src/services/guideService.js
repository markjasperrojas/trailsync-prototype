import { dispatchGuides } from '../data/dispatchData.js'

let guideProfiles = dispatchGuides.map((guide) => ({ ...guide }))

export const getGuideProfiles = () => guideProfiles
export const getGuideProfile = (id) => guideProfiles.find((guide) => guide.id === id)

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
