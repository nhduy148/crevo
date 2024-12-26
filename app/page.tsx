import Header from './components/(Home)/HeaderSection';
import ServicesSection from './components/(Home)/ServicesSection';
import IntroSection from './components/(Home)/IntroSection';
import MarqueeSection from './components/(Home)/MarqueeSection';
import ContactSection from './components/ContactSection';
import ProjectSection from './components/(Home)/ProjectSection';
import ClientsSection from './components/(Home)/ClientsSection';
import TestimonialsSection from './components/(Home)/TestimonialsSection';
import AwardsSections from './components/(Home)/AwardsSections';
import BlogSection from './components/(Home)/BlogSection';
import DataProject from '../data/project.json';

// import { useRouter } from 'next/router';
// import en from '../public/locales/en/common.json';
// import vi from '../public/locales/en/common.json';

export default function Home() {
  //   const { locale } = useRouter();
  //   const t = locale === 'en' ? en : vi;
  return (
    <main>
      <Header />
      {/* <h1> {t.welcome}</h1> */}

      <ServicesSection />
      <IntroSection />
      <MarqueeSection />
      <ProjectSection data={DataProject} />
      <ClientsSection />
      <TestimonialsSection />
      <AwardsSections />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
