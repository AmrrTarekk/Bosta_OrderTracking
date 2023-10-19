import axios from "axios";

export const url = "https://tracking.bosta.co/shipments/track/";

const axiosDefault = axios.create({
  baseURL: url,
});

export default axiosDefault;
