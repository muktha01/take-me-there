import TirupatiPilgrimageBlog from '@/app/components/blogs/TirupatiBlog'
import { notFound } from 'next/navigation'
import Layout from '../components/layout/Layout';


export default function BlogPage({ params }) {
  const { slug } = params
  

  const blogComponents = {
    'tirupati-cooler-itinerary': <TirupatiPilgrimageBlog />,
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
    // Add other slugs here as needed
  ]
}




