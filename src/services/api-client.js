import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3fca7114cf064440995afdb55e66ffc6",
  },
});
