import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {},
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
