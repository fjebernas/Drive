import axios from "axios";

const API_BASE_URL = 'http://192.168.1.99:8080/api/drive';

class ProverbService {

  getAll() {
    return axios.get(`${API_BASE_URL}/proverbs/`);
  }

  store(newProverb) {
    return axios.post(`${API_BASE_URL}/proverbs/`, newProverb);
  }

}

const proverbService = new ProverbService();

export default proverbService;