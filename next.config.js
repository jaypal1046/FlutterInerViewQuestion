/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{ protocol: 'https', hostname: 'new.axilthemes.com' },{ protocol: 'https', hostname: 'images.unsplash.com' },{ protocol: 'https', hostname: 'images.pexels.com' },{ protocol: 'https', hostname: 'firebasestorage.googleapis.com' }],

      },
      
}

module.exports = nextConfig
