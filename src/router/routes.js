import { AnalyticsPage } from '../pages/Analytics/AnalyticsPage.js'
import { ApprovalsPage } from '../pages/Approvals/ApprovalsPage.js'
import { BookingPage } from '../pages/Booking/BookingPage.js'
import { CertificatePage } from '../pages/Certificate/CertificatePage.js'
import { DispatchPage } from '../pages/Dispatch/DispatchPage.js'
import { DashboardPage } from '../pages/Dashboard/DashboardPage.js'
import { LandingPage } from '../pages/Landing/LandingPage.js'
import { LoginPage } from '../pages/Login/LoginPage.js'
import { SosPage } from '../pages/SOS/SosPage.js'
import { TrackingPage } from '../pages/Tracking/TrackingPage.js'
import { WeatherPage } from '../pages/Weather/WeatherPage.js'

export const routes = {
  '/': { title: 'Explore TrailSync', page: LandingPage },
  '/login': { title: 'Sign in', page: LoginPage },
  '/tourist': { title: 'Tourist dashboard', page: DashboardPage, allowedRoles: ['tourist'] },
  '/guide': { title: 'Guide dashboard', page: DashboardPage, allowedRoles: ['guide'] },
  '/admin': { title: 'Tourism office dashboard', page: DashboardPage, allowedRoles: ['officer'] },
  '/admin/bookings': { title: 'Booking approvals', page: ApprovalsPage, allowedRoles: ['officer'] },
  '/booking': { title: 'Book a trek', page: BookingPage, allowedRoles: ['tourist'] },
  '/dispatch': { title: 'Guide dispatch', page: DispatchPage, allowedRoles: ['guide', 'officer'] },
  '/tracking': { title: 'Live tracking', page: TrackingPage, allowedRoles: ['guide', 'officer'] },
  '/weather': {
    title: 'Weather conditions',
    page: WeatherPage,
    allowedRoles: ['tourist', 'guide', 'officer'],
  },
  '/sos': { title: 'SOS assistance', page: SosPage, allowedRoles: ['tourist', 'guide', 'officer'] },
  '/certificate': {
    title: 'Digital certificates',
    page: CertificatePage,
    allowedRoles: ['tourist'],
  },
  '/analytics': { title: 'Tourism analytics', page: AnalyticsPage, allowedRoles: ['officer'] },
}
