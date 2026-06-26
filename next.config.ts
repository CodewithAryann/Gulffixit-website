import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    qualities: [75, 85, 90],
  },
  compress: true,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
