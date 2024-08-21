// Set authorization header globally for all Axios requests
const token = localStorage.getItem("e-listahan");

const config = (axios.defaults.headers.common[
    "Authorization"
] = `Bearer ${token}`);

// Create Axios instance with baseURL
const apiClient = axios.create({
    config: config,
    baseURL: "/api/",
    withCredentials: true,
});

// Add request interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("active-sidebar");
            localStorage.removeItem("e-listahan");
            window.location.href = "/dashboard";
        }
        return Promise.reject(error);
    }
);

export default apiClient;
