
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    name: "Cleaning",
    description: "Keep your home clean, fresh and hygienic.",
    icon: "🧹",
  },
  {
    name: "Plumbing",
    description: "Get help with taps, pipes and water leaks.",
    icon: "🔧",
  },
  {
    name: "Electrical",
    description: "Professional help for electrical problems.",
    icon: "⚡",
  },
  {
    name: "AC Service",
    description: "AC maintenance, repair and servicing.",
    icon: "❄️",
  },
  {
    name: "Appliance Repair",
    description: "Repair and maintain your home appliances.",
    icon: "🛠️",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    review:
      "The cleaning service was excellent. The professional was punctual and did a great job.",
    rating: "★★★★★",
  },
  {
    name: "Priya Verma",
    city: "Agra",
    review:
      "Booking was simple and the plumbing service was very reliable. Highly recommended!",
    rating: "★★★★★",
  },
  {
    name: "Amit Kumar",
    city: "Lucknow",
    review:
      "Great experience with Homecare. The service was professional and hassle-free.",
    rating: "★★★★★",
  },
];

const trustFeatures = [
  {
    icon: "✓",
    title: "Verified Professionals",
    description: "Reliable professionals for your home service needs.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description: "Your payment information is handled securely.",
  },
  {
    icon: "⭐",
    title: "Quality Service",
    description: "We focus on delivering a quality service experience.",
  },
  {
    icon: "☎️",
    title: "Customer Support",
    description: "Support to help you with your service queries.",
  },
];

const faqs = [
  {
    question: "How can I book a home service?",
    answer:
      "You can choose your required service, select a convenient date and time slot, and complete the booking process.",
  },
  {
    question: "Which cities does Homecare serve?",
    answer: "Homecare currently serves Delhi, Agra and Lucknow.",
  },
  {
    question: "What subscription plans are available?",
    answer:
      "Homecare offers Basic, Standard and Premium subscription plans with different billing periods and service benefits.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, bookings can be cancelled according to the applicable cancellation policy.",
  },
  {
    question: "How can I get help with my booking?",
    answer:
      "You can contact the Homecare customer support team for assistance with your booking and services.",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Your Home, Our Care
        </h1>

        <p className="max-w-xl text-lg text-muted-foreground">
          Book trusted professionals for all your home service needs.
          Quality service, right at your doorstep.
        </p>

        <Button size="lg">
          Book a Service
        </Button>
      </section>

      {/* How It Works Section */}
      <section className="bg-secondary/40 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold">
            How It Works
          </h2>

          <p className="mb-12 text-center text-muted-foreground">
            Get your home services in three simple steps.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 text-center shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                01. Choose a Service
              </h3>
              <p className="text-muted-foreground">
                Select the home service you need.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 text-center shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                02. Book a Slot
              </h3>
              <p className="text-muted-foreground">
                Choose a convenient date and time.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 text-center shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                03. Get Service
              </h3>
              <p className="text-muted-foreground">
                Get professional service at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">
              Our Home Services
            </h2>

            <p className="text-muted-foreground">
              Everything your home needs, all in one place.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.name}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 text-4xl">
                    {service.icon}
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-5 text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  <Button variant="outline" className="w-full">
                    Explore Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">
              What Our Customers Say
            </h2>

            <p className="text-muted-foreground">
              Customer satisfaction is our priority.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="space-y-4 pt-6">
                  <p className="text-lg text-yellow-500">
                    {testimonial.rating}
                  </p>

                  <p className="text-muted-foreground">
                    "{testimonial.review}"
                  </p>

                  <div>
                    <h3 className="font-semibold">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {testimonial.city}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">
              Why Choose Homecare?
            </h2>

            <p className="text-muted-foreground">
              Your comfort, safety and satisfaction matter to us.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="space-y-3 pt-6">
                  <div className="text-4xl text-primary">
                    {feature.icon}
                  </div>

                  <h3 className="font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-secondary/40 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="text-muted-foreground">
              Find answers to common questions about Homecare.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold">
                    {faq.question}
                  </span>

                  <span className="text-xl text-primary">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-foreground px-6 py-12 text-background">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Homecare
            </h2>

            <p className="text-sm leading-6 opacity-80">
              Your trusted partner for cleaning, plumbing, electrical
              and other home services. We care for your home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link to="/" className="hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:opacity-100">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:opacity-100">
                  Register
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:opacity-100">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm opacity-80">
              {services.map((service) => (
                <li key={service.name}>
                  <a href="#services" className="hover:opacity-100">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact Us
            </h3>

            <p className="mb-3 text-sm opacity-80">
              Need help with a booking or service?
            </p>

            <Link
              to="/login"
              className="text-sm underline underline-offset-4 hover:opacity-80"
            >
              Customer Support
            </Link>

            <p className="mt-4 text-sm opacity-80">
              Serving Delhi, Agra and Lucknow.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-background/20 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Homecare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
