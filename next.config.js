const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["gsap", "react-syntax-highlighter"]);
const withMdx = require("@next/mdx")();

module.exports = withPlugins([[withTM], [withMdx]], {
    pageExtensions: ["js", "jsx", "mdx"],
    images: {
        domains: ["i.imgur.com", "media.giphy.com", "i.scdn.co", "cdn.glitch.com"],
    },
    async rewrites() {
        return [
            {
                source: "/bee.js",
                destination: "https://cdn.splitbee.io/sb.js",
            },
            {
                source: "/_hive/:slug",
                destination: "https://hive.splitbee.io/:slug",
            },
        ];
    },
    async headers() {
        return [
            {
                // headers matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value:
                            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
            {
                source: "/icons/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31556952, immutable",
                    },
                ],
            },
            {
                source: "/assets/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31556952, immutable",
                    },
                ],
            },
        ];
    },
});
