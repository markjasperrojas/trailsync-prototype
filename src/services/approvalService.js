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
    request.id === id ? { ...request, status: 'guide-assigned', guideName } : request,
  )
}
