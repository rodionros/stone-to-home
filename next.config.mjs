/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true
    }
};

export default nextConfig;
