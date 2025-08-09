import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  ArrowRightLeft,
  Mail,
  Phone,
  ShieldCheck,
  Star,
  Wallet,
} from 'lucide-react';
import type React from 'react';

const services = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Crypto Recovery',
    description:
      'Specialized assistance in recovering lost or inaccessible cryptocurrency assets due to scams, hacking, or forgotten passwords.',
  },
  {
    icon: <Wallet className="h-10 w-10 text-primary" />,
    title: 'Wallet Support & Security',
    description:
      'Expert guidance on securing your digital wallets, setting up multi-signature protection, and troubleshooting wallet issues.',
  },
  {
    icon: <ArrowRightLeft className="h-10 w-10 text-primary" />,
    title: 'Transaction Assistance',
    description:
      'Support for stuck transactions, understanding network fees, and tracing transaction histories across various blockchains.',
  },
];

const testimonials = [
  {
    name: 'Alex Johnson',
    comment:
      "CBPHACKERS was a lifesaver! I thought my funds were gone forever after my wallet was compromised, but their team recovered everything. Truly professional and trustworthy.",
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    comment:
      'The team provided outstanding support when I couldn\'t access my cold storage. Their expertise and patience were incredible. Highly recommended for any crypto issues.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    comment:
      'Fantastic service. They helped me trace a complex transaction and understand what went wrong. Their knowledge is top-notch.',
    rating: 5,
  },
  {
    name: 'Emily White',
    comment:
      'I was new to crypto and very overwhelmed. CBPHACKERS helped me secure my assets and taught me the best practices. I feel so much more confident now!',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'What does a cryptocurrency support agent do?',
    answer:
      'A cryptocurrency support agent provides expert assistance for a wide range of issues related to digital assets. This includes recovering lost funds, securing wallets, troubleshooting transaction problems, and offering guidance on best security practices to protect you from scams and hacks.',
  },
  {
    question: 'How can you help me recover my stolen or lost crypto?',
    answer:
      'We use a combination of advanced blockchain analysis, forensic techniques, and coordination with exchanges and law enforcement to trace and recover stolen or lost assets. Each case is unique, and we tailor our approach to maximize the chances of a successful recovery.',
  },
  {
    question: 'Is your service secure and confidential?',
    answer:
      'Absolutely. We operate with the utmost discretion and prioritize client confidentiality. All communications and case details are encrypted and handled with strict security protocols. Your privacy and the security of your information are our top priorities.',
  },
  {
    question: 'What are your fees?',
    answer:
      'Our fees vary depending on the complexity and nature of the case. We typically work on a contingency basis for recovery services, meaning we only get paid if we successfully recover your funds. For other consulting services, we offer transparent, upfront pricing. Contact us for a free consultation to discuss your specific situation.',
  },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.75 13.96c.25.13.41.36.41.64v1.4c0 .4-.33.74-.74.74-.03 0-.06 0-.1-.01-1.5-.2-2.88-.74-4.14-1.56-1.45-.94-2.65-2.14-3.58-3.59-1.2-1.85-1.54-3.57-1.57-4.83a.75.75 0 0 1 .75-.75h1.4c.3 0 .56.18.68.45.22.48.48.95.78 1.4.15.23.15.52 0 .75l-.6 1.05c-.13.23-.06.52.14.68 1.1.92 2.33 1.53 3.69 1.53.31 0 .59-.09.82-.26l1.06-.61c.23-.13.52-.06.68.14.46.3.93.55 1.4.78Z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">CBPHACKERS</span>
          </a>
          <nav className="hidden items-center gap-4 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              FAQ
            </a>
            <a href="#contact">
              <Button size="sm">Contact Us</Button>
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Expert Cryptocurrency Support & Recovery
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Your trusted partner for resolving complex crypto issues. We
              specialize in asset recovery, wallet security, and transaction
              support.
            </p>
            <div className="flex gap-4">
              <a href="#contact">
                <Button>Get Help Now</Button>
              </a>
              <a href="#services">
                <Button variant="outline">Our Services</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/40">
          <div className="container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Comprehensive solutions for your digital asset needs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="flex flex-col items-center p-6 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-accent hover:shadow-xl"
                >
                  <div className="mb-4 rounded-full bg-accent/20 p-4">
                    {service.icon}
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle>{service.title}</CardTitle>

                  </CardHeader>
                  <CardContent className="mt-2 p-0">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Real stories from people we've helped.
              </p>
            </div>
            <Carousel
              opts={{ align: 'start', loop: true }}
              className="mx-auto w-full max-w-4xl"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="flex h-full flex-col justify-between">
                        <CardContent className="p-6">
                          <div className="mb-4 flex">
                            {Array(testimonial.rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                          </div>
                          <p className="mb-4 text-muted-foreground">
                            "{testimonial.comment}"
                          </p>
                          <p className="font-semibold">{testimonial.name}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-8" />
              <CarouselNext className="mr-8" />
            </Carousel>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-muted/40">
          <div className="container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Got questions? We've got answers.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We're here to help you 24/7. Reach out to us through your
                preferred channel.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="https://wa.me/447903492507"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary hover:shadow-xl">
                  <div className="mb-4 flex justify-center">
                    <WhatsAppIcon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                  <p className="text-muted-foreground">+44 7903 492507</p>
                </Card>
              </a>
              <a
                href="tel:+13123443771"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary hover:shadow-xl">
                  <div className="mb-4 flex justify-center">
                    <Phone className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Phone (Call/Text)</h3>
                  <p className="text-muted-foreground">+1 (312) 344-3771</p>
                </Card>
              </a>
              <a
                href="mailto:cyberpunk77220@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary hover:shadow-xl">
                  <div className="mb-4 flex justify-center">
                    <Mail className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="break-all text-muted-foreground">
                    cyberpunk77220@gmail.com
                  </p>
                </Card>
              </a>
              <a
                href="https://t.me/CBP_Hacker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary hover:shadow-xl">
                  <div className="mb-4 flex justify-center">
                    <TelegramIcon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Telegram</h3>
                  <p className="text-muted-foreground">@CBP_Hacker</p>
                </Card>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CBPHACKERS. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/447903492507"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </a>
            <a
              href="https://t.me/CBP_Hacker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <TelegramIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </a>
            <a
              href="mailto:cyberpunk77220@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </a>
            <a
              href="tel:+13123443771"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
