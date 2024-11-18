/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Chấp nhận tất cả các hostname
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://self-signed-server.com/api/:path*",
  //     },
  //   ];
  // },
};

// if (process.env.NODE_ENV === "development") {
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
// }

export default nextConfig;
