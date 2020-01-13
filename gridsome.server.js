const globalHeadMetadata = [
  {
    key: "indexPageTitle",
    value: "Original factory packaged Bariatric Surgical reloads products"
  },
  {
    key: "indexPageDescription",
    value:
      "We sell original factory packaged Echelon Endopath Bariatric Surgical Reloads products within the US"
  },
  {
    key: "productPageTitle",
    value: "Product catalog / Shop"
  },
  {
    key: "productPageDescription",
    value:
      "Explore our product catalog and filter items by product code, cartridge color or tissue thickness"
  }
];

module.exports = function(api) {
  api.loadSource(store => {
    globalHeadMetadata.forEach(({ key, value }) =>
      store.addMetadata(key, value)
    );
  });
};
