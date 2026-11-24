# Homecare – Product Requirements Document (PRD v1)

## 1. Project Overview
Homecare is a multi-city home services subscription platform connecting customers with approved service professionals.

Customers can purchase subscriptions, book home services, track bookings, make dummy payments, and provide ratings and feedback.

The platform has three roles:
- Customer
- Professional
- Admin

## 2. Supported Cities
- Delhi
- Agra
- Lucknow

## 3. Subscription Plans

| Plan | Price | Billing |
|---|---:|---|
| Basic | ₹499 | Monthly |
| Standard | ₹999 | Monthly |
| Standard | ₹2,699 | Quarterly |
| Premium | ₹9,999 | Yearly |

### Entitlement Rules
Each subscription entitlement must support:
- limit: Maximum permitted usage (null means unlimited).
- fairUseCap: Fair usage restriction.
- period: month, quarter, or cycle.

### Fair Usage
- Standard plumbing: 4 bookings per month.
- Premium cleaning: 8 bookings per month.

## 4. Services and Professionals
The platform supports five home services.

AC and appliance services must be assigned to an Electrical professional.

Only approved and available professionals can receive bookings.

## 5. Payments and Tax
Supported dummy payment methods:
- UPI
- Card
- Net Banking

Payment rules:
- Commission: 15%, configurable by admin.
- GST: 18%, displayed only in the order summary.
- Never store card numbers or CVV.
- Store only the last four card digits when applicable.

## 6. Refund Policy
When an eligible payment is refunded:
- Payment status changes to refunded.
- The related subscription is cancelled.
- Subscription access and future bookings are handled according to cancellation status.

## 7. Booking Management
Customers can:
- Select a service.
- Select an available time slot.
- Book services according to subscription entitlement.
- Mark eligible bookings as emergency.
- Track booking progress.
- Reschedule or cancel bookings.
- Rate and review completed services.

### Emergency Rules
- Premium customers receive priority.
- Other eligible customers receive a discount.

## 8. Professional Management
Professionals can:
- Register and select category and city.
- Upload required documents.
- Set availability.
- Accept or reject assigned jobs.
- Update job status.
- View earnings and commission.
- View customer ratings and reviews.

## 9. Admin Management
Admin can:
- Approve or reject professionals.
- Manage plans and pricing.
- Configure commission.
- Manage customers and bookings.
- Handle disputes and refunds.
- Assign service managers.
- View analytics and platform settings.

## 10. Analytics and KPI Formulas
The admin dashboard must include:

- MRR: Monthly Recurring Revenue.
- Retention: Percentage of customers retained over a defined period.
- Renewal Rate: Renewed eligible subscriptions / subscriptions due for renewal × 100.
- CAC: Total customer acquisition cost / New customers acquired.
- Average Rating.
- Completion Rate.

Definitions and reporting periods must remain consistent throughout the application.

## 11. Renewal Management
- Renewal reminder banner 7 days before expiry.
- Auto-renew toggle.
- Daily renewal cron job.
- Admin option to run renewals manually.

## 12. Security
- Passwords hashed using bcrypt.
- JWT-based authentication.
- Role-based access control.
- Input validation and error handling.
- Never store card numbers or CVV.
- Protect customer and professional data.

## 13. Technology Stack
- Frontend: React, Vite, Tailwind CSS, shadcn/ui.
- Backend: Node.js, Express.js.
- Database: MongoDB Atlas.
- Authentication: JWT and bcrypt.
- Deployment: Vercel and Render.

## 14. Final Deliverables
- Responsive multi-role web application.
- Customer, Professional and Admin dashboards.
- Dummy payment integration.
- Subscription and booking management.
- Analytics dashboard.
- Live deployment.
- README and setup instructions.
- Technical documentation and ER diagram.
- Postman collection and tests.