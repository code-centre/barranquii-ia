/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
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
