import { AdminLayout } from '../layouts/AdminLayout.js'
import { GuideLayout } from '../layouts/GuideLayout.js'
import { PublicLayout } from '../layouts/PublicLayout.js'
import { TouristLayout } from '../layouts/TouristLayout.js'
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
  '/': { title: 'Explore TrailSync', page: LandingPage, layout: PublicLayout },
  '/login': { title: 'Sign in', page: LoginPage, layout: PublicLayout },
  '/tourist': { title: 'Tourist dashboard', page: DashboardPage, layout: TouristLayout },
  '/guide': { title: 'Guide dashboard', page: DashboardPage, layout: GuideLayout },
  '/admin': { title: 'Tourism office dashboard', page: DashboardPage, layout: AdminLayout },
  '/admin/bookings': { title: 'Booking approvals', page: ApprovalsPage, layout: AdminLayout },
  '/booking': { title: 'Book a trek', page: BookingPage, layout: TouristLayout },
  '/dispatch': { title: 'Guide dispatch', page: DispatchPage, layout: GuideLayout },
  '/tracking': { title: 'Live tracking', page: TrackingPage, layout: GuideLayout },
  '/weather': { title: 'Weather conditions', page: WeatherPage, layout: TouristLayout },
  '/sos': { title: 'SOS assistance', page: SosPage, layout: GuideLayout },
  '/certificate': { title: 'Digital certificates', page: CertificatePage, layout: TouristLayout },
  '/analytics': { title: 'Tourism analytics', page: AnalyticsPage, layout: AdminLayout },
}
