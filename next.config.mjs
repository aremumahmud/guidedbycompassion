
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async redirects() {
        return [
            // Permanent redirect: old /locations/texas/:city → new /home-care/texas/:city
            {
                source: '/locations/texas/:cityName',
                destination: '/home-care/texas/:cityName',
                permanent: true,
            },
            // Redirect bare /locations/texas to the index (optional landing)
            {
                source: '/locations/texas',
                destination: '/home-care/texas',
                permanent: true,
            },
            {
                source: '/locations',
                destination: '/home-care/texas',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
