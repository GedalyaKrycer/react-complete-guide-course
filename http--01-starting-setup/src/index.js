import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';



axios.interceptors.request.use(request => {
    return request;
}, error => {
    console.log('req error: ' + error);
    return Promise.reject(error);
});

axios.interceptors.response.use(res => {
    return res;
}, error => {
    console.log('res error: ' + error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
