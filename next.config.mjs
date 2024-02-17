/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['www.google.com', 'media.istockphoto.com', 'lh3.googleusercontent.com'] //domains of the video or image links to import
  }
};

export default nextConfig;
