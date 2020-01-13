const slugify = str => str.split(" ").join("-");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteName: "Bariatric Reloads",
  siteUrl: "https://bariatricreloads.com",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          whitelistPatternsChildren: [/^m-message/, /^snipcart/]
        }
      }
    },
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: isProd ? process.env.AT_API_KEY : process.env.DEV_AT_API_KEY,
        baseId: isProd ? process.env.AT_BASE_ID : process.env.DEV_AT_BASE_ID,
        tableName: "Product",
        typeName: "Product"
      }
    }
  ],
  templates: {
    Product: [
      {
        path: node =>
          `/products/${slugify(node["Product code"])}-${slugify(
            node["Color cartridge"]
          )}-${slugify(node["Product name"])}-${slugify(
            node["Staple size"]
          )}x${slugify(node["Open staple height"])}`,
        component: "./src/templates/ProductDetails.vue"
      }
    ]
  }
};
