import axios from 'axios';

const API_URL = 'https://tinyfac.es/api/data';

export const CardService = {
  async getAll(quantity = 1) {
    try {
      const {data} = await axios.get(`${API_URL}?limit=${quantity}&quality=0`);
      return data;
    } catch (er) {
      console.error(er);
    }
  },
  async getOneRandomCard() {
    try {
      const {data} = await axios.get(`${API_URL}?limit=1&quality=0`);
      return data[0];
    } catch (er) {
      console.error(er);
    }
  },
};
