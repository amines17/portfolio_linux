import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function SEO({ 
  title = 'Amine SOUFI - Software Engineer',
  description = 'Software Engineer passionate about cloud architecture and full-stack development. Expert in React, Node.js, and cloud technologies.',
  image = 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800'
}: SEOProps) {
  const { language } = useLanguage();
  
  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Amine SOUFI" />
      <link rel="canonical" href="https://amine-soufi.dev" />
    </Helmet>
  );
}