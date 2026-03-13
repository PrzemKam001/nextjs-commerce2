/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ppr: true,               ← WYŁĄCZONE – to powodowało błąd
    inlineCss: true,           // możesz zostawić, nie szkodzi
    useCache: false,           // wyłączone, bo często wiąże się z PPR
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

export default nextConfig;