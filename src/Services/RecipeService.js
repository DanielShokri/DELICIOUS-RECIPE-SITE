import axios from "axios";

export default {
    query
};


async function query(searchParam) {
    const res = await axios.get(`https://api.edamam.com/search?q=${searchParam}&app_id=0e5eb50c&app_key=e228b6ee20ccd1c4b14a4c5288e3c942`)
    return res.data;
}