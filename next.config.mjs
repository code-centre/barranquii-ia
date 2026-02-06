/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: '/:path*',
  //         has: [
  //           {
  //             type: 'host',
  //             value: 'barranquiia.com',
  //           },
  //         ],
  //         destination: 'https://www.caribe-ia.com/barranqui-ia',
  //       },
  //     ]
  //   }
  // }
};

export default nextConfig;
