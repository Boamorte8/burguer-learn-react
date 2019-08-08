import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burguer-learn-react.firebaseio.com/'
});

export default instance;