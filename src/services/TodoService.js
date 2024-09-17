import axios from 'axios';

const API_URL = 'https://localhost:7105/api/todo';

export const TodoService = {
  getAll: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  add: async (title) => {
    const response = await axios.post(API_URL, { title });
    return response.data;
  },

  toggle: async (todo) => {
    const response = await axios.put(`${API_URL}/${todo.id}`, { ...todo, isComplete: !todo.isComplete });
    return response.data;
  },

  delete: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
};