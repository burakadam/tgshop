import data from "../constants/data.json";

function getFilters() {
  const result = data.products.map((item) => {
    return item.label;
  });

  return result;
}

export { getFilters };
