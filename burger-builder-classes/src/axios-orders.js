import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-16546-default-rtdb.firebaseio.com/'
});

export default instance;