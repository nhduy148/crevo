import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import IntroSection from './components/IntroSection';
import MarqueeSection from './components/MarqueeSection';
import ContactSection from './components/ContactSection';
import PortfolioSection from './components/PortfolioSection';
import ClientsSection from './components/ClientsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AwardsSections from './components/AwardsSections';
import BlogSection from './components/BlogSection';

export default function Home() {
  return (
    <main>
      <Header />
      <ServicesSection />
      <IntroSection />
      <MarqueeSection />
      <PortfolioSection />
      <ClientsSection />
      <TestimonialsSection />
      <AwardsSections />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
