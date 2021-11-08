import axios from "axios";

async function getAllProducts() {
  try {
    const result = await axios.get("./data.json");
    return { ...result, isError: false };
  } catch (error) {
    return { isError: true, errorMessage: error };
  }
}

function getCards(label, data) {
  const result = data.filter((item) => {
    return item.label === label;
  });

  return result[0].data;
}

export { getAllProducts, getCards };
