import axios from "@/utils/axios";

const ProductApi = {
  getAll: (params) => {
    return axios.get(`/api/v1/public/bonsais?${params}`);
  },
};

export { ProductApi };
