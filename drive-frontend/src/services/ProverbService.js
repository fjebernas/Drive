import axios from "axios";

const API_BASE_URL = 'http://192.168.1.99:8080/api/drive';

class ProverbService {

  getAll() {
    return axios.get(`${API_BASE_URL}/proverbs/`);
  }

  getById(id) {
    return axios.get(`${API_BASE_URL}/proverbs/${id}`);
  }

  store(newProverb) {
    return axios.post(`${API_BASE_URL}/proverbs/`, newProverb);
  }

  destroy(id) {
    return axios.delete(`${API_BASE_URL}/proverbs/${id}`);
  }

  update(id, updatedProverb) {
    return axios.put(`${API_BASE_URL}/proverbs/${id}`, updatedProverb);
  }

}

const proverbService = new ProverbService();

export default proverbService;