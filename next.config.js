const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["gsap"]);
const withMdx = require("@next/mdx")();

module.exports = withPlugins([[withTM], [withMdx]], {
    distDir: "build",
    pageExtensions: ["js", "jsx", "mdx"],
    images: {
        domains: ["i.imgur.com", "media.giphy.com", "cdn.glitch.com"],
    },
});
