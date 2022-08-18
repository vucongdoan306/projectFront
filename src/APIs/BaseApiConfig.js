import axios from "axios";
let BaseAPIConfig = axios.create({ baseURL:`http://localhost:5281/api/v2/`}); 


BaseAPIConfig.interceptors.response.use(
  
  (response) => response,
  (error) => {
    
    if (error && error.response && (error.response.status == 401 || error.response.status==500)) {
      console.log("expired");
    }
    return Promise.reject(error);
  }
);



export default BaseAPIConfig;