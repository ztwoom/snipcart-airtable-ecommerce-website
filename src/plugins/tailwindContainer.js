module.exports = ({ addComponents, theme }) => {
  const containerSizes = ["540px", "720px", "960px", "1140px"];
  let viewportWidth;
  const containerMediaQueries = containerSizes.map((size, i) => {
    viewportWidth = Object.values(theme("screens"))[i];
    return {
      [`@media (min-width: ${viewportWidth})`]: {
        ".container": {
          "max-width": size
        }
      }
    };
  });
  addComponents([
    {
      ".container": {
        "max-width": "100%"
      }
    },
    ...containerMediaQueries
  ]);
};
