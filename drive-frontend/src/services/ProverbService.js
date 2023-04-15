import axios from "axios";
import { properties as p } from "../data/properties";

class ProverbService {

  customHeaders = {
    'x-api-key': 'hakdog'
  }

  getAll() {
    return axios.get(`${p.API_BASE_URL}/proverbs/`, {headers: this.customHeaders});
  }

  getById(id) {
    return axios.get(`${p.API_BASE_URL}/proverbs/${id}`, {headers: this.customHeaders});
  }

  store(newProverb) {
    return axios.post(`${p.API_BASE_URL}/proverbs/`, newProverb, {headers: this.customHeaders});
  }

  destroy(id) {
    return axios.delete(`${p.API_BASE_URL}/proverbs/${id}`, {headers: this.customHeaders});
  }

  update(id, updatedProverb) {
    return axios.put(`${p.API_BASE_URL}/proverbs/${id}`, updatedProverb, {headers: this.customHeaders});
  }

  getAllCountries() {
    return axios.get(`${p.API_BASE_URL}/proverbs/countries`, {headers: this.customHeaders});
  }

  getRandomProverb() {
    return axios.get(`${p.API_BASE_URL}/proverbs/random`, {headers: this.customHeaders});
  }

}

const proverbService = new ProverbService();

export default proverbService;