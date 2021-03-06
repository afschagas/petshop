import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const busca = async (url, setDado) => {
  const reposta = await api.get(url);
  setDado(reposta.data);
};
