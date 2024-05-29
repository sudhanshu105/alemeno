import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

export const fetchCourseById = async (id) => {
  const response = await axios.get(`${API_URL}/courses/${id}`);
  return response.data;
};
