import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import Navbar from './Navbar';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import TypingSection from './common/TypingSection';

export default function MainContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <TypingSection title={t.experience.title} index={1}>
        <Experience />
      </TypingSection>
      <TypingSection title={t.projects.title} index={2}>
        <Projects />
      </TypingSection>
      <TypingSection title={t.skills.title} index={3}>
        <Skills />
      </TypingSection>
      <TypingSection title={t.contact.title} index={4}>
        <Contact />
      </TypingSection>
    </main>
  );
}