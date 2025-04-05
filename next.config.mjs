/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'barranquiia.com',
            },
          ],
          destination: 'https://www.caribe-ia.com/barranqui-ia',
        },
      ]
    }
  }
};

export default nextConfig;
