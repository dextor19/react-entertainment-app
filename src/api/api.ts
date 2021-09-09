import axios from "axios";

//THIS IS THE BASE OF THE URL
const baseURL = axios.create({
    baseURL : "https://api.themoviedb.org/3"
});

export default baseURL;