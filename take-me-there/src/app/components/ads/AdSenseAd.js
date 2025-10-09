'use client'

import { useEffect } from 'react'

export default function AdSenseAd({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  style = {},
  className = ''
}) {
  useEffect(() => {
    // Push ad to AdSense queue
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.log('AdSense error:', err)
      }
    }
  }, [])

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  )
}

// Pre-configured ad components for different placements
export function BannerAd({ className = '' }) {
  return (
    <AdSenseAd
      adSlot="XXXXXXXXXX" // Replace with actual slot ID
      adFormat="horizontal"
      className={`banner-ad ${className}`}
      style={{ minHeight: '90px', marginBottom: '20px' }}
    />
  )
}

export function SidebarAd({ className = '' }) {
  return (
    <AdSenseAd
      adSlot="XXXXXXXXXX" // Replace with actual slot ID
      adFormat="rectangle"
      className={`sidebar-ad ${className}`}
      style={{ minHeight: '250px', marginBottom: '20px' }}
    />
  )
}

export function InContentAd({ className = '' }) {
  return (
    <AdSenseAd
      adSlot="XXXXXXXXXX" // Replace with actual slot ID
      adFormat="fluid"
      className={`in-content-ad ${className}`}
      style={{ minHeight: '200px', margin: '20px 0' }}
    />
  )
}

export function MobileAd({ className = '' }) {
  return (
    <div className={`block md:hidden ${className}`}>
      <AdSenseAd
        adSlot="XXXXXXXXXX" // Replace with actual slot ID
        adFormat="rectangle"
        style={{ minHeight: '250px', margin: '20px 0' }}
      />
    </div>
  )
}