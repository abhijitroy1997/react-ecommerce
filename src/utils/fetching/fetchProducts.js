import axios from "axios";

export const getProducts = async () => {
  try {
    const prods = await axios(
      "https://github.com/abhijitroy1997/react-ecommerce/blob/main/db.json"
    );

    return prods;
  } catch (err) {
    console.log("Error In fetching");
  }
};
