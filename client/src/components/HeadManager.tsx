import { useEffect } from 'react';

interface HeadManagerProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'business.business';
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
}

export function HeadManager({
  title,
  description,
  keywords = 'advocacia, direito, consultoria jurídica, serviços legais',
  image = 'https://ppadv.com.br/og-image.jpg',
  url = 'https://ppadv.com.br',
  type = 'website',
  author,
  publishedDate,
  updatedDate,
}: HeadManagerProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | PP Advogados`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', `${title} | PP Advogados`);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${title} | PP Advogados`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Update article metadata if applicable
    if (type === 'article') {
      if (author) updateMetaTag('article:author', author);
      if (publishedDate) updateMetaTag('article:published_time', publishedDate);
      if (updatedDate) updateMetaTag('article:modified_time', updatedDate);
    }

    // Update viewport and charset
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1');
      document.head.appendChild(viewport);
    }

    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }
  }, [title, description, keywords, image, url, type, author, publishedDate, updatedDate]);

  return null;
}

function updateMetaTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`) ||
            document.querySelector(`meta[name="${property}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    const isProperty = property.startsWith('og:') || property.startsWith('article:') || property.startsWith('twitter:');
    if (isProperty) {
      tag.setAttribute('property', property);
    } else {
      tag.setAttribute('name', property);
    }
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

export default HeadManager;
