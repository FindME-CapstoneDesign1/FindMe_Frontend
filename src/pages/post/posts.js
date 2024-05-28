import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getLostPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts/lost`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch lost posts:', error);
    throw error;
  }
};

export const getFoundPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/posts/found`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch found posts:', error);
      throw error;
    }
  };

