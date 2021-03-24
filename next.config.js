const withPlugins = require("next-compose-plugins");
const withPrefresh = require("@prefresh/next");
const withTM = require("next-transpile-modules")(["gsap", "react-syntax-highlighter"]);
const withMdx = require("@next/mdx")();
const withPWA = require("next-pwa");
const withPreact = require("next-plugin-preact");
const preact = require("preact");

const runtimeCaching = require("next-pwa/cache");
runtimeCaching[0].handler = "StaleWhileRevalidate";

const prod = process.env.NODE_ENV === "production";

module.exports = withPlugins([[withTM], [withMdx], [withPreact], [withPWA], [withPrefresh]], {
   pageExtensions: ["js", "jsx", "mdx"],
   images: {
      domains: ["i.imgur.com", "media.giphy.com", "i.scdn.co", "cdn.glitch.com"],
   },
   experimental: {
      modern: true,
   },
   pwa: {
      disable: prod ? false : true,
      register: false,
      dest: ".next/pwa",
      skipWaiting: false,
      runtimeCaching,
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
