import axios from "axios";
import { properties as p } from "../data/properties";

class ProverbService {

  getAll() {
    return axios.get(`${p.API_BASE_URL}/proverbs/`);
  }

  getById(id) {
    return axios.get(`${p.API_BASE_URL}/proverbs/${id}`);
  }

  store(newProverb) {
    return axios.post(`${p.API_BASE_URL}/proverbs/`, newProverb);
  }

  destroy(id) {
    return axios.delete(`${p.API_BASE_URL}/proverbs/${id}`);
  }

  update(id, updatedProverb) {
    return axios.put(`${p.API_BASE_URL}/proverbs/${id}`, updatedProverb);
  }

}

const proverbService = new ProverbService();

export default proverbService;