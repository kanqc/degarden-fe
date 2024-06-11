import axios from "@/utils/axios";

const CategoryApi = {
  getAll: () => {
    return axios.get("/api/v1/public/categories");
  },
  getByTree: () => {
    return axios.get("/api/v1/public/categories/get-by-tree");
  },
};

export { CategoryApi };
