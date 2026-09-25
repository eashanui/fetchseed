const nextConfig = {
  // Keep development manifests separate from production builds.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  output: "export",
  devIndicators: false,
};

export default nextConfig;
