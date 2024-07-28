import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
   console.log("getEmployees response:", response.data);
  return response.data;
  
};

export const addEmployee = async (employee) => {
  const response = await axios.post(`${API_URL}/employees`, employee);
  return response.data;
};

export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${API_URL}/employees/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/employees/${id}`);
  return response.data;
};
