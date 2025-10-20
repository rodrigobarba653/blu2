import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  // Optimize for better performance and avoid timeouts
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ["@iconify/react", "gsap"],
  },
};

export default nextConfig;
