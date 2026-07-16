import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList';
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
}

// Organization Schema
export const organizationSchema = {
  name: 'PP Advogados',
  description: 'Escritório de advocacia especializado em consultoria jurídica para empresas',
  url: 'https://ppadv.com.br',
  logo: 'https://ppadv.com.br/logo.png',
  foundingDate: '2009',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+55-11-94382-5880',
    email: 'contato@ppadv.com.br',
    areaServed: 'BR',
    availableLanguage: 'pt-BR',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'São Paulo',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01310-100',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.facebook.com/pelegrinelliepadoan/',
    'https://www.instagram.com/pelegrinelliepadoan/',
    'https://www.linkedin.com/company/pelegrinelliepadoan/',
    'https://bit.ly/ppadv_youtube',
  ],
};

// Local Business Schema
export const localBusinessSchema = {
  name: 'PP Advogados',
  image: 'https://ppadv.com.br/logo.png',
  description: 'Escritório de advocacia especializado em consultoria jurídica',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'São Paulo',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01310-100',
    addressCountry: 'BR',
  },
  telephone: '+55-11-94382-5880',
  email: 'contato@ppadv.com.br',
  url: 'https://ppadv.com.br',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '127',
  },
};

// Service Schema
export const serviceSchema = (serviceName: string, description: string) => ({
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'PP Advogados',
    url: 'https://ppadv.com.br',
  },
  areaServed: 'BR',
  availableLanguage: 'pt-BR',
});

// Article Schema
export const articleSchema = (
  title: string,
  description: string,
  image: string,
  publishedDate: string,
  author: string = 'PP Advogados'
) => ({
  headline: title,
  description: description,
  image: image,
  datePublished: publishedDate,
  author: {
    '@type': 'Organization',
    name: author,
    url: 'https://ppadv.com.br',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PP Advogados',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ppadv.com.br/logo.png',
    },
  },
});

// Breadcrumb Schema
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export default StructuredData;
