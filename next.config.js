const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["gsap", "react-syntax-highlighter"]);
const withMdx = require("@next/mdx")();

module.exports = withPlugins([[withTM], [withMdx]], {
    pageExtensions: ["js", "jsx", "mdx"],
    images: {
        domains: ["i.imgur.com", "media.giphy.com", "i.scdn.co", "cdn.glitch.com"],
    } /*
    webpack: (config, { dev, isServer }) => {
        // react -> preact
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
            });
        }
        return config;
    }, */,
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
