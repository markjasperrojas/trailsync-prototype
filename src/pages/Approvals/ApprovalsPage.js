import { Button, StatusBadge } from '../../components/index.js'
import { getBookingRequests } from '../../services/approvalService.js'

const statusTone = { pending: 'warning', approved: 'success', rejected: 'danger' }

export function ApprovalsPage() {
  const requests = getBookingRequests()
  const pending = requests.filter((request) => request.status === 'pending')
  return `
    <main class="page-content approvals-page">
      <div class="approvals-page__heading"><div><p class="eyebrow">Tourism office</p><h1>Booking approvals.</h1><p class="page-content__intro">Review incoming requests before they enter the guide-dispatch queue.</p></div>${StatusBadge({ label: `${pending.length} pending`, tone: pending.length ? 'warning' : 'success' })}</div>
      <section class="approval-summary"><span>Pending <strong>${pending.length}</strong></span><span>Approved <strong>${requests.filter((request) => request.status === 'approved').length}</strong></span><span>Rejected <strong>${requests.filter((request) => request.status === 'rejected').length}</strong></span></section>
      <section class="approval-list" aria-label="Booking requests">${requests.map((request) => `<article class="approval-request"><div><p class="approval-request__id">${request.id} · ${request.submittedAt}</p><h2>${request.hiker}</h2><p>${request.trail} · ${request.schedule}</p><small>${request.packageName} · ${request.groupSize} ${request.groupSize === 1 ? 'trekker' : 'trekkers'}</small></div><div class="approval-request__actions">${StatusBadge({ label: request.status, tone: statusTone[request.status] })}${request.status === 'pending' ? `${Button({ label: 'Reject', variant: 'ghost', size: 'sm', attributes: `data-approval-action="reject" data-request-id="${request.id}"` })}${Button({ label: 'Approve', size: 'sm', attributes: `data-approval-action="approve" data-request-id="${request.id}"` })}` : ''}</div></article>`).join('')}</section>
    </main>
  `
}
