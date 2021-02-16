import axios from 'axios';

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const getData = (url: string): any => api.get(url).then((response) => (response.data));
