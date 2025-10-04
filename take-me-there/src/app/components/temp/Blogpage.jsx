'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Calendar, User, Clock } from 'lucide-react';

const BlogPages = ({
  title = "Welcome to Our Travel Blog",
  subtitle = "Discover amazing destinations and travel experiences",
  heroImage = null,
  publishedDate = "December 15, 2024",
  author = "Travel Expert",
  readTime = "5 min read",
  contentSections = [],
  images = [],
  videos = [],
  metaDescription = "Explore incredible India with our comprehensive travel guides and tips",
  tags = ["travel", "adventure", "explore"]
}) => {
  const [activeSection, setActiveSection] = useState('');

  // Generate table of contents from content sections
  const tableOfContents = contentSections.map((section, index) => ({
    id: `section-${index}`,
    title: section.heading,
    slug: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  }));

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('data-section');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>{title} | Travel Stories</title>
        <meta name="description" content={metaDescription || subtitle} />
        <meta name="keywords" content={tags.join(', ')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription || subtitle} />
        {heroImage && <meta property="og:image" content={heroImage.src || heroImage} />}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription || subtitle} />
        {heroImage && <meta name="twitter:image" content={heroImage.src || heroImage} />}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Head>

            <div className="min-h-screen bg-white">
        {/* Hero Section */}
        {heroImage && (
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src={heroImage.src || heroImage}
                alt={heroImage.alt || title}
                fill
                className="object-cover"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {heroImage.caption && (
              <div className="absolute bottom-4 right-4 text-white/80 text-sm bg-black/50 px-3 py-2 rounded">
                {heroImage.caption}
              </div>
            )}
          </section>
        )}

        {!heroImage && (
          <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700">
                  {subtitle}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4" />
              <span className="font-medium">{author.name}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(publishedDate)}</span>
            </div>
            {readTime && (
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
            )}
          </div>

          {/* Table of Contents */}
          {contentSections.length > 3 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Table of Contents</h2>
              <nav className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {tableOfContents.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.slug}`}
                        className={`block text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                          activeSection === item.slug ? 'text-blue-600 font-medium' : ''
                        }`}
                      >
                        {index + 1}. {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {contentSections.map((section, index) => {
              const sectionSlug = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              
              return (
                <section 
                  key={index} 
                  id={sectionSlug}
                  data-section={sectionSlug}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-8 text-gray-900 leading-tight">
                    {section.heading}
                  </h2>
                  
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.htmlContent }}
                  />

                  {/* Inline Images */}
                  {section.images && section.images.map((image, imgIndex) => (
                    <figure key={imgIndex} className="my-12">
                      <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          quality={85}
                        />
                      </div>
                      {image.caption && (
                        <figcaption className="text-center text-gray-600 text-sm mt-4 italic">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}

                  {/* Inline Videos */}
                  {section.videos && section.videos.map((video, vidIndex) => (
                    <figure key={vidIndex} className="my-12">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <video
                          src={video.src}
                          controls
                          className="w-full h-full object-cover"
                          poster={video.poster}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      {video.caption && (
                        <figcaption className="text-center text-gray-600 text-sm mt-4 italic">
                          {video.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </section>
              );
            })}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {author.bio && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-6">
                {author.avatar && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{author.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{author.bio}</p>
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default BlogPages;
