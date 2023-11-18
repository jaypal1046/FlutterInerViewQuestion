/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{ protocol: 'https', hostname: 'new.axilthemes.com' },{ protocol: 'https', hostname: 'images.unsplash.com' },{ protocol: 'https', hostname: 'images.pexels.com' }],

      },
      
}

module.exports = nextConfig
