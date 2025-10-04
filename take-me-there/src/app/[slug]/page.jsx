import TirupatiPilgrimageBlog from '@/app/components/blogs/ap/TirupatiBlog'
import { notFound } from 'next/navigation'
import Layout from '../components/layout/Layout';
import PinterestBlogTemplate from '../components/blogs/PinterestBlogTemplate';
import ModernTirupatiBlog from '../components/blogs/ap/ModernTirupatiBlog';
import ModernBlogTemplate from '../components/blogs/ModernBlogTemplate';
import TirupatiGuide from '@/app/components/blogs/ap/TirupatiBlog';


export default function BlogPage({ params }) {
  const { slug } = params
  

  const blogComponents = {
    'tirupati-cooler-itinerary': <TirupatiGuide />,
    'golden-temple-amritsar-guide': <TirupatiGuide />, // Placeholder - can create AmritsarBlog later
    'kerala-backwater-cruise': <TirupatiGuide />, // Placeholder - can create KeralaBackwaterBlog later
    'rajasthan-royal-heritage': <TirupatiGuide />, // Placeholder - can create RajasthanBlog later
    'goa-beach-paradise': <TirupatiGuide />, // Placeholder - can create GoaBlog later
    'kashmir-valley-adventure': <TirupatiGuide />, // Placeholder - can create KashmirBlog later
    'varanasi-spiritual-journey': <TirupatiGuide />, // Placeholder - can create VaranasiBlog later
    // 'ooty-2-day-road-trip': <OotyBlog />,
    // 'kodaikanal-nature-escape': <KodaikanalBlog />,
  }

  const SelectedBlog = blogComponents[slug]

  if (!SelectedBlog) return notFound()

  return (
    <Layout>

      {SelectedBlog}
    </Layout>
  )
}


export async function generateStaticParams() {
  return [
    { slug: 'tirupati-cooler-itinerary' },
    { slug: 'golden-temple-amritsar-guide' },
    { slug: 'kerala-backwater-cruise' },
    { slug: 'rajasthan-royal-heritage' },
    { slug: 'goa-beach-paradise' },
    { slug: 'kashmir-valley-adventure' },
    { slug: 'varanasi-spiritual-journey' },
    // Add other Indian destination slugs here as needed
  ]
}




