import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { 
  MessageCircle, 
  Award, 
  Users, 
  Sparkles, 
  Heart, 
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Crown,
  Gem,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-ballroom.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceEngagement from "@/assets/service-engagement.jpg";
import serviceBirthday from "@/assets/service-birthday.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";

const Index = () => {
  const [language, setLanguage] = useState<"id" | "en">("id");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPortfolio, setSelectedPortfolio] = useState<any>(null);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

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
          { title: "Premium & Luxury Concept", desc: "Konsep elegan dan mewah yang disesuaikan dengan visi Anda", icon: Crown },
          { title: "Detail-Oriented Planning", desc: "Perhatian pada setiap detail untuk kesempurnaan acara", icon: Gem },
          { title: "Professional Team", desc: "Tim berpengalaman dengan jaringan vendor terpercaya", icon: Users },
          { title: "Tailor-Made Events", desc: "Setiap acara dirancang khusus untuk Anda", icon: Sparkles },
          { title: "Stress-Free Experience", desc: "Kami tangani semua, Anda nikmati momennya", icon: Heart },
          { title: "Guaranteed Excellence", desc: "Komitmen pada kualitas dan kepuasan tertinggi", icon: Star }
        ]
      },
      services: {
        title: "Layanan & Paket",
        packages: [
          {
            name: "Wedding Package",
            desc: "Pernikahan impian dengan konsep luxury dan elegan",
            highlights: ["Full venue decoration", "Premium vendor management", "Wedding day coordinator"],
            image: serviceWedding
          },
          {
            name: "Engagement / Akad",
            desc: "Momen sakral dengan tata cara yang sempurna",
            highlights: ["Traditional & modern concept", "Complete ceremony setup", "Professional documentation"],
            image: serviceEngagement
          },
          {
            name: "Birthday & Private Party",
            desc: "Perayaan personal yang berkesan dan istimewa",
            highlights: ["Themed decoration", "Entertainment management", "Intimate or grand scale"],
            image: serviceBirthday
          },
          {
            name: "Corporate Event & MICE",
            desc: "Event profesional dengan eksekusi berkelas",
            highlights: ["Conference management", "Team building events", "Professional setup"],
            image: serviceCorporate
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
          { name: "R & S", event: "Engagement", text: "Tim yang sangat membantu dan ramah. Acara lamaran kami berjalan dengan indah dan lancar." },
          { name: "M Family", event: "Birthday", text: "Pesta ulang tahun yang tak terlupakan! Semua tamu kami terkesan dengan dekorasi dan suasananya." },
          { name: "Innovation Corp", event: "Corporate", text: "Event launching produk kami sukses besar berkat bantuan Topeng EO. Sangat merekomendasikan!" }
        ]
      },
      faq: {
        title: "Pertanyaan yang Sering Diajukan",
        items: [
          { q: "Apa saja jenis event yang bisa kami tangani?", a: "Kami menangani berbagai jenis event mulai dari wedding, engagement, birthday party, hingga corporate event dan MICE. Setiap event dirancang dengan konsep premium dan elegan." },
          { q: "Apakah konsep dekor bisa custom?", a: "Tentu! Kami sangat mendorong konsep custom yang disesuaikan dengan visi dan preferensi Anda. Tim kami akan membantu mewujudkan ide Anda menjadi kenyataan." },
          { q: "Bagaimana proses konsultasi awal?", a: "Konsultasi awal dapat dilakukan via WhatsApp atau bertemu langsung di kantor kami. Kami akan mendiskusikan visi, budget, dan detail acara Anda." },
          { q: "Apakah menerima event di luar kota?", a: "Ya, kami menerima event di berbagai kota. Silakan hubungi kami untuk informasi lebih lanjut mengenai coverage area." }
        ]
      },
      contact: {
        title: "Mari Ciptakan Acara Mewah Anda",
        cta: "Konsultasi Sekarang via WhatsApp",
        phone: "+62 812-3456-7890",
        email: "info@topengeo.com",
        address: "Jl. Luxury Boulevard No. 123, Jakarta Selatan",
        hours: "Senin - Sabtu: 09:00 - 18:00"
      }
    },
    en: {
      hero: {
        title: "Topeng Event Organizer",
        tagline: "Crafting Luxury Moments for Your Once-in-a-Lifetime Event",
        subtitle: "Premium Wedding & Event Organizer - Grand, Elegant, Glamorous, and Luxurious",
        ctaPrimary: "Consult via WhatsApp",
        ctaSecondary: "View Our Portfolio"
      },
      about: {
        title: "About Topeng EO",
        description: "Topeng Event Organizer is a premium wedding & event organizer focused on detail, experience, and professional service. We deliver grand and exceptional events for your precious moments.",
        features: [
          "Experienced Professional Team",
          "Elegant & Curated Event Concepts",
          "Smooth & Stress-Free D-Day Execution"
        ]
      },
      advantages: {
        title: "Why Choose Us",
        items: [
          { title: "Premium & Luxury Concept", desc: "Elegant and luxurious concepts tailored to your vision", icon: Crown },
          { title: "Detail-Oriented Planning", desc: "Attention to every detail for event perfection", icon: Gem },
          { title: "Professional Team", desc: "Experienced team with trusted vendor network", icon: Users },
          { title: "Tailor-Made Events", desc: "Every event is uniquely designed for you", icon: Sparkles },
          { title: "Stress-Free Experience", desc: "We handle everything, you enjoy the moment", icon: Heart },
          { title: "Guaranteed Excellence", desc: "Commitment to highest quality and satisfaction", icon: Star }
        ]
      },
      services: {
        title: "Our Services & Packages",
        packages: [
          {
            name: "Wedding Package",
            desc: "Your dream wedding with luxury and elegant concept",
            highlights: ["Full venue decoration", "Premium vendor management", "Wedding day coordinator"],
            image: serviceWedding
          },
          {
            name: "Engagement / Akad",
            desc: "Sacred moment with perfect ceremony arrangements",
            highlights: ["Traditional & modern concept", "Complete ceremony setup", "Professional documentation"],
            image: serviceEngagement
          },
          {
            name: "Birthday & Private Party",
            desc: "Memorable personal celebration and special moments",
            highlights: ["Themed decoration", "Entertainment management", "Intimate or grand scale"],
            image: serviceBirthday
          },
          {
            name: "Corporate Event & MICE",
            desc: "Professional events with classy execution",
            highlights: ["Conference management", "Team building events", "Professional setup"],
            image: serviceCorporate
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
          { name: "A & D", event: "Wedding", text: "Topeng EO made our wedding perfect! Every detail was well taken care of and the results exceeded our expectations." },
          { name: "PT. Global Solutions", event: "Corporate Event", text: "Professional, on time, and amazing results. Highly recommended for corporate events!" },
          { name: "R & S", event: "Engagement", text: "Very helpful and friendly team. Our engagement event went beautifully and smoothly." },
          { name: "M Family", event: "Birthday", text: "Unforgettable birthday party! All our guests were impressed with the decoration and atmosphere." },
          { name: "Innovation Corp", event: "Corporate", text: "Our product launch event was a huge success thanks to Topeng EO. Highly recommend!" }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "What types of events can you handle?", a: "We handle various types of events from weddings, engagements, birthday parties, to corporate events and MICE. Every event is designed with premium and elegant concepts." },
          { q: "Can the decoration concept be customized?", a: "Absolutely! We highly encourage custom concepts tailored to your vision and preferences. Our team will help turn your ideas into reality." },
          { q: "How does the initial consultation work?", a: "Initial consultation can be done via WhatsApp or in-person at our office. We will discuss your vision, budget, and event details." },
          { q: "Do you accept events outside the city?", a: "Yes, we accept events in various cities. Please contact us for more information about our coverage area." }
        ]
      },
      contact: {
        title: "Let's Create Your Luxury Event",
        cta: "Consult Now via WhatsApp",
        phone: "+62 812-3456-7890",
        email: "info@topengeo.com",
        address: "Jl. Luxury Boulevard No. 123, South Jakarta",
        hours: "Monday - Saturday: 09:00 - 18:00"
      }
    }
  };

  const text = content[language];

  // Portfolio items with images
  const portfolioItems = [
    { 
      id: 1, 
      category: "wedding", 
      title: "Royal Wedding of Sarah & Michael",
      venue: "The Grand Ballroom",
      images: [heroImage, serviceWedding, heroImage]
    },
    { 
      id: 2, 
      category: "wedding", 
      title: "Garden Wedding of Amanda & James",
      venue: "Botanical Garden Resort",
      images: [serviceWedding, heroImage, serviceWedding]
    },
    { 
      id: 3, 
      category: "engagement", 
      title: "Intimate Engagement Ceremony",
      venue: "Private Villa",
      images: [serviceEngagement, serviceEngagement, heroImage]
    },
    { 
      id: 4, 
      category: "birthday", 
      title: "Golden Birthday Celebration",
      venue: "Luxury Hotel Ballroom",
      images: [serviceBirthday, serviceBirthday, heroImage]
    },
    { 
      id: 5, 
      category: "corporate", 
      title: "Annual Company Gala",
      venue: "Convention Center",
      images: [serviceCorporate, serviceCorporate, heroImage]
    },
    { 
      id: 6, 
      category: "corporate", 
      title: "Product Launch Event",
      venue: "Modern Exhibition Hall",
      images: [serviceCorporate, heroImage, serviceCorporate]
    }
  ];

  const filteredPortfolio = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter.toLowerCase());

  const currentYear = new Date().getFullYear();

  // Intersection Observer for animations
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

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handlePortfolioClick = (item: any) => {
    setSelectedPortfolio(item);
    setIsPortfolioOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar language={language} onLanguageChange={setLanguage} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-glow hover-scale"
      >
        <MessageCircle size={28} />
      </a>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm backdrop-blur-sm">
              <Crown className="w-4 h-4 mr-2 inline" />
              Premium Event Organizer
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gradient-gold animate-on-scroll tracking-wide">
              {text.hero.title}
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary animate-on-scroll tracking-wider" style={{ animationDelay: "0.2s" }}>
              {text.hero.tagline}
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto animate-on-scroll leading-relaxed" style={{ animationDelay: "0.4s" }}>
              {text.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover-glow text-lg px-8 py-6 font-semibold"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {text.hero.ctaPrimary}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm text-lg px-8 py-6"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {text.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold tracking-wide">
              {text.about.title}
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {text.about.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {text.about.features.map((feature, index) => (
                <Card key={index} className="bg-card/50 border-primary/20 backdrop-blur-sm hover-scale hover:shadow-elegant">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient-gold mb-16 animate-on-scroll tracking-wide">
            {text.advantages.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {text.advantages.items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card/70 border-primary/20 backdrop-blur-sm hover-scale hover:shadow-elegant animate-on-scroll group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary tracking-wide">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient-gold mb-16 animate-on-scroll tracking-wide">
            {text.services.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {text.services.packages.map((pkg, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group hover-scale hover:shadow-elegant animate-on-scroll border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2 tracking-wide">{pkg.name}</h3>
                    <p className="text-foreground/90 leading-relaxed">{pkg.desc}</p>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-card/90 backdrop-blur-sm">
                  <ul className="space-y-3">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-soft"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {language === 'id' ? 'Konsultasi Sekarang' : 'Consult Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient-gold mb-12 animate-on-scroll tracking-wide">
            {text.portfolio.title}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
            {text.portfolio.filters.map((filter, index) => (
              <Button
                key={index}
                variant={activeFilter === (index === 0 ? "all" : filter.toLowerCase()) ? "default" : "outline"}
                className={`${
                  activeFilter === (index === 0 ? "all" : filter.toLowerCase())
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "border-primary/30 text-foreground hover:bg-primary/10"
                } font-semibold`}
                onClick={() => setActiveFilter(index === 0 ? "all" : filter.toLowerCase())}
              >
                {filter}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPortfolio.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden group cursor-pointer hover-scale hover:shadow-elegant animate-on-scroll border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handlePortfolioClick(item)}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.images[0]} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge className="bg-primary/90 text-primary-foreground mb-3 capitalize">
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-serif font-bold text-primary mb-1 tracking-wide">{item.title}</h3>
                    <p className="text-foreground/90 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {item.venue}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Dialog */}
      <Dialog open={isPortfolioOpen} onOpenChange={setIsPortfolioOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-md border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif font-bold text-gradient-gold tracking-wide">
              {selectedPortfolio?.title}
            </DialogTitle>
            <p className="text-foreground/70 flex items-center gap-2 mt-2">
              <MapPin className="w-4 h-4" />
              {selectedPortfolio?.venue}
            </p>
          </DialogHeader>
          
          <div className="grid gap-4 mt-6">
            {selectedPortfolio?.images.map((image: string, index: number) => (
              <div key={index} className="relative h-80 rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={`${selectedPortfolio.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-soft"
              onClick={() => {
                setIsPortfolioOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {language === 'id' ? 'Konsultasi untuk Event Serupa' : 'Consult for Similar Event'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-elegant overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient-gold mb-16 animate-on-scroll tracking-wide">
            {text.testimonials.title}
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {text.testimonials.items.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="flex-shrink-0 w-[85%] md:w-[45%] lg:w-[48%] bg-card/70 border-primary/20 backdrop-blur-sm hover-scale hover:shadow-elegant snap-start"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-foreground/80 italic leading-relaxed text-base">"{testimonial.text}"</p>
                    
                    <div className="pt-4 border-t border-primary/20">
                      <p className="font-serif font-bold text-primary text-lg tracking-wide">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.event}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient-gold mb-16 animate-on-scroll tracking-wide">
            {language === 'id' ? 'Dipercaya Oleh' : 'Trusted By'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
            {[1, 2, 3, 4].map((_, index) => (
              <div 
                key={index} 
                className="h-24 bg-card/50 border border-primary/10 rounded-lg flex items-center justify-center hover-scale animate-on-scroll backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Award className="w-12 h-12 text-primary/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient-gold mb-16 animate-on-scroll tracking-wide">
            {text.faq.title}
          </h2>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4 animate-on-scroll">
            {text.faq.items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/70 border border-primary/20 rounded-lg px-6 backdrop-blur-sm hover:shadow-soft"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-primary/80 tracking-wide">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient-gold mb-8 animate-on-scroll tracking-wide">
              {text.contact.title}
            </h2>
            
            <div className="text-center mb-12 animate-on-scroll">
              <Button 
                size="lg" 
                className="w-full max-w-sm mx-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover-glow text-lg px-8 py-6 font-semibold"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                {text.contact.cta}
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/70 border-primary/20 backdrop-blur-sm animate-on-scroll">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6 tracking-wide">
                    {language === 'id' ? 'Informasi Kontak' : 'Contact Information'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{text.contact.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground">{text.contact.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground">{text.contact.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground">{text.contact.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-primary/20">
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" className="border-primary/30 hover:bg-primary/10">
                        <Instagram className="w-5 h-5 text-primary" />
                      </Button>
                      <Button variant="outline" size="icon" className="border-primary/30 hover:bg-primary/10">
                        <Facebook className="w-5 h-5 text-primary" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/70 border-primary/20 backdrop-blur-sm animate-on-scroll overflow-hidden">
                <div className="h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2087516285855!2d106.82493931476892!3d-6.236704495481879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf2accd853cd!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/95 border-t border-primary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-soft">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Topeng</p>
                  <p className="font-serif text-2xl font-bold text-primary tracking-wide">Luxury Events</p>
                </div>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                Event organizer premium yang menghadirkan eksekusi megah, elegan, dan penuh detail untuk setiap momen istimewa Anda.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Luxury Planning", "Detail Execution", "Premium Vendors"].map((tag) => (
                  <Badge key={tag} className="bg-primary/10 text-primary border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary/70 mb-6">Menu</p>
              <ul className="space-y-3 text-foreground/70">
                {[
                  { label: language === "id" ? "Tentang Kami" : "About Us", href: "#about" },
                  { label: language === "id" ? "Layanan" : "Services", href: "#services" },
                  { label: language === "id" ? "Portfolio" : "Portfolio", href: "#portfolio" },
                  { label: language === "id" ? "Testimoni" : "Testimonials", href: "#testimonials" },
                  { label: language === "id" ? "Kontak" : "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors tracking-wide text-sm font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Kontak</p>
              <div className="space-y-4 text-foreground/70">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">WhatsApp</p>
                    <p className="text-base">{text.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-base">{text.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{language === "id" ? "Kantor" : "Office"}</p>
                    <p className="text-base leading-relaxed">{text.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{language === "id" ? "Jam Operasional" : "Hours"}</p>
                    <p className="text-base">{text.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-primary/70">
                {language === "id" ? "Konsultasi Cepat" : "Quick Consultation"}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                {language === "id"
                  ? "Bagikan detail event Anda dan tim kami akan mengkurasi konsep terbaik dalam 24 jam."
                  : "Share your event details and we will curate the finest concept within 24 hours."}
              </p>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === "id" ? "Hubungi via WhatsApp" : "Chat via WhatsApp"}
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open("https://instagram.com", "_blank")}
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open("https://facebook.com", "_blank")}
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Topeng Event Organizer. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.4em] text-primary/60">
              <span>{language === "id" ? "Elegan" : "Elegant"}</span>
              <span>{language === "id" ? "Detail" : "Detail"}</span>
              <span>{language === "id" ? "Eksklusif" : "Exclusive"}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
