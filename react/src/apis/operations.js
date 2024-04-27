import axios from 'axios';

// Set base URL for Axios requests
axios.defaults.baseURL = 'http://localhost:5000';

// Define API operations
const apiOperations = {
    // Function for making a POST request
    apiPost: (endpoint, jsonData, headers) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(endpoint, jsonData, headers);
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    },

    // Function for making a PUT request
    apiPut: (endpoint, jsonData, headers) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.put(endpoint, jsonData, headers);
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    },

    // Function for making a DELETE request
    apiDelete: (endpoint, headers) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.delete(endpoint, headers);
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    },
};

// Export API operations
export { apiOperations };
