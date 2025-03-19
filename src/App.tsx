import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import SEO from './components/SEO';
import Loader from './components/loader/Loader';
import MainContent from './components/MainContent';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <SEO />
        <Loader />
        <MainContent />
      </LanguageProvider>
    </HelmetProvider>
  );
}