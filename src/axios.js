import axios from "axios";

const instances = axios.create({
  baseURL: "https://reqres.in",
});

export default instances;
