import axios from "axios";

export default axios.create({
    baseURL:'https://movieslist.azurewebsites.net',
    headers: {"ngrok-skip-browser-warning": "true"}
});