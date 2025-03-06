import axios from "axios";

export const CatAPI=axios.create({
    baseURL:'https://catfact.ninja',
    timeout:3000
});
