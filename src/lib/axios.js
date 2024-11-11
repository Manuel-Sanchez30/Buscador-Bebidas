import axios from 'axios';

const api = axios.create({
    baseURL:'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
});

export default api;