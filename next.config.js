const nextTranslate = require("next-translate-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = 
    withBundleAnalyzer(
        nextTranslate({
            reactStrictMode: true,
            images: {
              remotePatterns: [
                { protocol: 'https', hostname: 'images.unsplash.com' },
                { protocol: 'https', hostname: 'tailwindui.com' },
                { protocol: 'https', hostname: 'cdn.codewave.dev' },
              ],
            },
        })
    );
