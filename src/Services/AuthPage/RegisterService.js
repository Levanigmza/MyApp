import axios from 'axios';

const API_BASE_URL = "https://localhost:7277/api";

const registerService = {
    register: async (data) => {
        try {
          const response = await axios.post(`${API_BASE_URL}/Registration`, data);
          return response.data;
        } catch (error) {
          console.error('Error during registration:', error);
          throw error;
        }
      },
};

export default registerService;
