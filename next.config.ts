// // next.config.ts
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   output: 'export', // Enables static export
//   images: {
//     unoptimized: true, // Needed for export mode
//   },
// };

// export default nextConfig;
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // This generates /product/index.html instead of product.html
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
