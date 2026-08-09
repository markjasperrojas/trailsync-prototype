import { initialBookingRequests } from '../data/approvalData.js'

let requests = initialBookingRequests.map((request) => ({ ...request }))
let nextId = 13

export const getBookingRequests = () => requests
export const getApprovedRequests = () => requests.filter((request) => request.status === 'approved')
export const getLatestRequestForHiker = (hiker) =>
  requests.find((request) => request.hiker === hiker)
export const getBookingRequestById = (id) => requests.find((request) => request.id === id)

export function createBookingRequest(request) {
  const record = {
    id: `BK-2026-${String(nextId++).padStart(4, '0')}`,
    status: 'pending',
    submittedAt: 'Just now',
    ...request,
  }
  requests = [record, ...requests]
  return record
}

export function approveBookingRequest(id) {
  requests = requests.map((request) =>
    request.id === id ? { ...request, status: 'approved' } : request,
  )
}

export function rejectBookingRequest(id) {
  requests = requests.map((request) =>
    request.id === id ? { ...request, status: 'rejected' } : request,
  )
}

export function assignGuideToBooking(id, guideName) {
  requests = requests.map((request) =>
    request.id === id
      ? {
          ...request,
          status: 'pending-guide-response',
          guideName,
          guideId: guideName.toLowerCase().split(' ')[0],
        }
      : request,
  )
}

export const getGuideAssignments = (guideId) =>
  requests.filter(
    (request) =>
      request.guideId === guideId &&
      ['pending-guide-response', 'guide-confirmed'].includes(request.status),
  )

export const getGuideSchedule = (guideId) =>
  requests
    .filter((request) => request.guideId === guideId && request.status === 'guide-confirmed')
    .sort((first, second) => new Date(first.schedule) - new Date(second.schedule))

export function getGuideAssignmentSummary(guideId) {
  const assignments = requests.filter((request) => request.guideId === guideId)
  return {
    awaitingResponse: assignments.filter((request) => request.status === 'pending-guide-response')
      .length,
    confirmed: assignments.filter((request) => request.status === 'guide-confirmed').length,
  }
}

export function respondToGuideAssignment(id, guideId, response) {
  requests = requests.map((request) => {
    if (request.id !== id || request.guideId !== guideId) return request
    if (response === 'accept') return { ...request, status: 'guide-confirmed' }
    return { ...request, status: 'approved', guideId: undefined, guideName: undefined }
  })
}
