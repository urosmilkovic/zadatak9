import axios from "axios";
import { apiBaseUrl } from "../config";

const StoreAPI = {
  products: (params) =>
    axios.get(`${apiBaseUrl}/products`, { params }).then((x) => x.data),
  product: (id) =>
    axios.get(`${apiBaseUrl}/products/${id}`).then((x) => x.data),
  categories: () =>
    axios.get(`${apiBaseUrl}/products/categories`).then((x) => x.data),
  category: (category, params) =>
    axios
      .get(`${apiBaseUrl}/products/category/${category}`, { params })
      .then((x) => x.data),
};

export default StoreAPI;
