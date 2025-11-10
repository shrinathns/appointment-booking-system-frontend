import axios from "axios";

export const api = axios.create({
  baseURL: "https://4wloqmfivjmcvhcrntmls2otu40soxzc.lambda-url.us-east-1.on.aws/api/appointments"
});
