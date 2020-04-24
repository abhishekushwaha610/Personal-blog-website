import axios from 'axios';
const API_URL = 'http://localhost:8000/api';


export default class Postservice{
    getAllPost(){
        return axios.get(`${API_URL}/`).then(response => response.data);
    }
    
    getPost(slug){
        return axios.get(`${API_URL}/${slug}`).then(response => response.data);
    }
}