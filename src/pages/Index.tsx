import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  MessageCircle, 
  Award, 
  Users, 
  Sparkles, 
  Heart, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook
} from "lucide-react";
import heroImage from "@/assets/hero-ballroom.jpg";

const Index = () => {
  const [language, setLanguage] = useState<"id" | "en">("id");
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const content = {
    id: {
      hero: {
        title: "Topeng Event Organizer",
        tagline: "Menciptakan Momen Mewah untuk Acara Istimewa Anda",
        subtitle: "Wedding & Event Organizer Premium yang Megah, Elegan, Glamor, dan Luxury",
        ctaPrimary: "Konsultasi via WhatsApp",
        ctaSecondary: "Lihat Portfolio Kami"
      },
      about: {
        title: "Tentang Topeng EO",
        description: "Topeng Event Organizer adalah wedding & event organizer premium yang berfokus pada detail, pengalaman, dan pelayanan profesional. Kami menghadirkan hasil event yang megah dan istimewa untuk momen berharga Anda.",
        features: [
          "Tim Profesional Berpengalaman",
          "Konsep Event yang Elegan & Terkurasi",
          "Eksekusi Hari-H yang Rapi & Minim Stres"
        ]
      },
      advantages: {
        title: "Mengapa Memilih Kami",
        items: [
          { title: "Premium & Luxury Concept", desc: "Konsep elegan dan mewah yang disesuaikan dengan visi Anda" },
          { title: "Detail-Oriented Planning", desc: "Perhatian pada setiap detail untuk kesempurnaan acara" },
          { title: "Professional Team", desc: "Tim berpengalaman dengan jaringan vendor terpercaya" },
          { title: "Tailor-Made Events", desc: "Setiap acara dirancang khusus untuk Anda" },
          { title: "Stress-Free Experience", desc: "Kami tangani semua, Anda nikmati momennya" },
          { title: "Guaranteed Excellence", desc: "Komitmen pada kualitas dan kepuasan tertinggi" }
        ]
      },
      services: {
        title: "Layanan & Paket",
        packages: [
          {
            name: "Wedding Package",
            desc: "Pernikahan impian dengan konsep luxury dan elegan",
            highlights: ["Full venue decoration", "Premium vendor management", "Wedding day coordinator"]
          },
          {
            name: "Engagement / Akad",
            desc: "Momen sakral dengan tata cara yang sempurna",
            highlights: ["Traditional & modern concept", "Complete ceremony setup", "Professional documentation"]
          },
          {
            name: "Birthday & Private Party",
            desc: "Perayaan personal yang berkesan dan istimewa",
            highlights: ["Themed decoration", "Entertainment management", "Intimate or grand scale"]
          },
          {
            name: "Corporate Event & MICE",
            desc: "Event profesional dengan eksekusi berkelas",
            highlights: ["Conference management", "Team building events", "Professional setup"]
          }
        ]
      },
      portfolio: {
        title: "Portfolio Kami",
        filters: ["Semua", "Wedding", "Engagement", "Birthday", "Corporate"]
      },
      testimonials: {
        title: "Testimoni Klien",
        items: [
          { name: "A & D", event: "Wedding", text: "Topeng EO membuat pernikahan kami sempurna! Setiap detail diperhatikan dengan baik dan hasilnya melebihi ekspektasi." },
          { name: "PT. Global Solutions", event: "Corporate Event", text: "Profesional, tepat waktu, dan hasil yang luar biasa. Highly recommended untuk event perusahaan!" },
          { name: "R & S", event: "Engagement", text: "Tim yang sangat membantu dan ramah. Acara lamaran kami berjalan dengan indah dan lancar." }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Apa saja jenis event yang bisa ditangani?", a: "Kami menangani berbagai jenis event termasuk pernikahan, engagement/akad, birthday party, corporate event, dan berbagai acara special lainnya." },
          { q: "Apakah konsep dekor bisa custom?", a: "Tentu! Setiap konsep dekorasi dirancang khusus sesuai dengan preferensi dan visi Anda. Tim kami akan membantu mewujudkan impian Anda." },
          { q: "Bagaimana proses konsultasi awal?", a: "Hubungi kami via WhatsApp untuk konsultasi gratis. Kami akan mendengarkan kebutuhan Anda dan memberikan rekomendasi terbaik." },
          { q: "Apakah menerima event di luar kota?", a: "Ya, kami melayani event di berbagai kota. Diskusikan lokasi event Anda dengan tim kami untuk detail lebih lanjut." }
        ]
      },
      contact: {
        title: "Mari Ciptakan Event Luxury Anda",
        cta: "Konsultasi Sekarang via WhatsApp",
        phone: "+62 812-3456-7890",
        email: "hello@topengeo.com",
        address: "Jl. Mewah No. 123, Jakarta Selatan",
        hours: "Mon - Sat: 09:00 - 18:00"
      }
    },
    en: {
      hero: {
        title: "Topeng Event Organizer",
        tagline: "Crafting Luxury Moments for Your Once-in-a-Lifetime Event",
        subtitle: "Premium, Magnificent, Elegant, Glamorous, and Luxury Wedding & Event Organizer",
        ctaPrimary: "Consult via WhatsApp",
        ctaSecondary: "View Our Portfolio"
      },
      about: {
        title: "About Topeng EO",
        description: "Topeng Event Organizer is a premium wedding & event organizer focused on details, experience, and professional service. We deliver magnificent and exceptional events for your precious moments.",
        features: [
          "Experienced Professional Team",
          "Elegant & Curated Event Concepts",
          "Seamless & Stress-Free Execution"
        ]
      },
      advantages: {
        title: "Why Choose Us",
        items: [
          { title: "Premium & Luxury Concept", desc: "Elegant and luxurious concepts tailored to your vision" },
          { title: "Detail-Oriented Planning", desc: "Attention to every detail for perfect execution" },
          { title: "Professional Team", desc: "Experienced team with trusted vendor network" },
          { title: "Tailor-Made Events", desc: "Every event uniquely designed for you" },
          { title: "Stress-Free Experience", desc: "We handle everything, you enjoy the moment" },
          { title: "Guaranteed Excellence", desc: "Commitment to highest quality and satisfaction" }
        ]
      },
      services: {
        title: "Services & Packages",
        packages: [
          {
            name: "Wedding Package",
            desc: "Dream wedding with luxury and elegant concept",
            highlights: ["Full venue decoration", "Premium vendor management", "Wedding day coordinator"]
          },
          {
            name: "Engagement / Akad",
            desc: "Sacred moment with perfect ceremony",
            highlights: ["Traditional & modern concept", "Complete ceremony setup", "Professional documentation"]
          },
          {
            name: "Birthday & Private Party",
            desc: "Memorable and special personal celebration",
            highlights: ["Themed decoration", "Entertainment management", "Intimate or grand scale"]
          },
          {
            name: "Corporate Event & MICE",
            desc: "Professional events with classy execution",
            highlights: ["Conference management", "Team building events", "Professional setup"]
          }
        ]
      },
      portfolio: {
        title: "Our Portfolio",
        filters: ["All", "Wedding", "Engagement", "Birthday", "Corporate"]
      },
      testimonials: {
        title: "Client Testimonials",
        items: [
          { name: "A & D", event: "Wedding", text: "Topeng EO made our wedding perfect! Every detail was well-attended and exceeded our expectations." },
          { name: "PT. Global Solutions", event: "Corporate Event", text: "Professional, on-time, and outstanding results. Highly recommended for corporate events!" },
          { name: "R & S", event: "Engagement", text: "Very helpful and friendly team. Our engagement ran beautifully and smoothly." }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "What types of events can you handle?", a: "We handle various events including weddings, engagements/akad, birthday parties, corporate events, and other special occasions." },
          { q: "Can the decoration concept be customized?", a: "Absolutely! Every decoration concept is uniquely designed according to your preferences and vision. Our team will help bring your dreams to life." },
          { q: "How does the initial consultation work?", a: "Contact us via WhatsApp for a free consultation. We'll listen to your needs and provide the best recommendations." },
          { q: "Do you serve events outside the city?", a: "Yes, we serve events in various cities. Discuss your event location with our team for more details." }
        ]
      },
      contact: {
        title: "Let's Create Your Luxury Event",
        cta: "Consult Now via WhatsApp",
        phone: "+62 812-3456-7890",
        email: "hello@topengeo.com",
        address: "Jl. Mewah No. 123, South Jakarta",
        hours: "Mon - Sat: 09:00 - 18:00"
      }
    }
  };

  const t = content[language];

  // Portfolio items
  const portfolioItems = [
    { category: "wedding", image: "🎊", title: "Elegant Garden Wedding", venue: "The Ritz-Carlton" },
    { category: "wedding", image: "💐", title: "Grand Ballroom Ceremony", venue: "Grand Hyatt" },
    { category: "engagement", image: "💍", title: "Intimate Engagement", venue: "Private Villa" },
    { category: "birthday", image: "🎂", title: "Luxury Birthday Gala", venue: "Five-Star Hotel" },
    { category: "corporate", image: "🏢", title: "Annual Conference", venue: "Convention Center" },
    { category: "wedding", image: "✨", title: "Beachside Wedding", venue: "Bali Resort" },
  ];

  const filteredPortfolio = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter.toLowerCase());

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.testimonials.items.length]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const whatsappNumber = "6281234567890"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-elegant hover:shadow-glow transition-all hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-40 flex gap-2">
        <Button
          variant={language === "id" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("id")}
          className="font-semibold"
        >
          ID
        </Button>
        <Button
          variant={language === "en" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="font-semibold"
        >
          EN
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        
        <div className="relative z-10 text-center text-background px-4 max-w-5xl animate-on-scroll">
          <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold border-0">
            Premium Event Organizer
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold drop-shadow-lg">
            {t.hero.title}
          </h1>
          
          <p className="text-2xl md:text-3xl font-serif mb-4 text-background drop-shadow-md">
            {t.hero.tagline}
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-background/90 max-w-3xl mx-auto drop-shadow">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-foreground text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-all hover:scale-105 border-0"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.hero.ctaPrimary}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-background/10 backdrop-blur-sm text-background border-background/30 hover:bg-background/20 text-lg px-8 py-6"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-elegant">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-foreground">
            {t.about.title}
          </h2>
          
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {t.about.features.map((feature, idx) => (
              <Card key={idx} className="border-border/50 shadow-soft hover:shadow-elegant transition-all hover-scale">
                <CardContent className="p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="font-semibold text-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground">
            {t.advantages.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.advantages.items.map((item, idx) => (
              <Card key={idx} className="border-primary/20 shadow-soft hover:shadow-elegant transition-all hover-scale overflow-hidden group">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground">
            {t.services.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.packages.map((pkg, idx) => (
              <Card key={idx} className="border-accent/20 shadow-soft hover:shadow-elegant transition-all hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-14 w-14 rounded-lg bg-gradient-burgundy flex items-center justify-center flex-shrink-0">
                      <Heart className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-2 text-foreground">{pkg.name}</h3>
                      <p className="text-muted-foreground">{pkg.desc}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-foreground border-0"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consult Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
            {t.portfolio.title}
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {t.portfolio.filters.map((filter, idx) => (
              <Button
                key={idx}
                variant={activeFilter === (idx === 0 ? "all" : filter.toLowerCase()) ? "default" : "outline"}
                onClick={() => setActiveFilter(idx === 0 ? "all" : filter.toLowerCase())}
                className="transition-all hover:scale-105"
              >
                {filter}
              </Button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, idx) => (
              <Card key={idx} className="overflow-hidden border-border/50 shadow-soft hover:shadow-elegant transition-all hover-scale group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-elegant flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-xl mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {item.venue}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground">
            {t.testimonials.title}
          </h2>
          
          <div className="relative">
            <Card className="border-primary/20 shadow-elegant">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-foreground" />
                  </div>
                  
                  <p className="text-xl italic mb-6 text-foreground leading-relaxed">
                    "{t.testimonials.items[currentTestimonial].text}"
                  </p>
                  
                  <p className="font-semibold text-foreground text-lg">
                    {t.testimonials.items[currentTestimonial].name}
                  </p>
                  <p className="text-muted-foreground">
                    {t.testimonials.items[currentTestimonial].event}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length)}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.items.length)}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto animate-on-scroll text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-foreground">
            Trusted By Premium Brands & Partners
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-muted rounded-lg flex items-center justify-center">
                <Award className="h-12 w-12 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
            {t.faq.title}
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-card border border-border/50 rounded-lg px-6 shadow-soft hover:shadow-elegant transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-elegant">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-foreground">
            {t.contact.title}
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {language === "id" 
              ? "Hubungi kami untuk konsultasi gratis dan wujudkan event impian Anda" 
              : "Contact us for free consultation and bring your dream event to life"}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-primary/20 shadow-soft">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <Phone className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">{t.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <Mail className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">{t.contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <Clock className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hours</p>
                      <p className="font-semibold text-foreground">{t.contact.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">{t.contact.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-foreground text-lg py-6 shadow-elegant hover:shadow-glow transition-all hover:scale-105 border-0"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.contact.cta}
              </Button>
              
              {/* Social Media */}
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Map */}
            <Card className="border-border/50 shadow-soft overflow-hidden">
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1751171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[400px]"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-serif text-xl font-semibold mb-2">Topeng Event Organizer</p>
          <p className="text-background/70 text-sm">
            © 2024 Topeng Event Organizer. Premium Wedding & Event Planner.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
