const withMdx = require("@next/mdx")();

module.exports = withMdx({
    pageExtensions: ["js", "jsx", "mdx"],
    images: {
        domains: ["i.imgur.com", "media.giphy.com"],
    },
});
