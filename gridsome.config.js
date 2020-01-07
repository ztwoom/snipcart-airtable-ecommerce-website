// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const slugify = str => str.split(" ").join("-");

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js"
      }
    },
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: "keyHYLBRYsPLrKxBn", // required
        baseId: "appzNTyqqyjU4byv6", // required
        tableName: "Product", // required
        typeName: "Product", // required
        select: {} // optional
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
