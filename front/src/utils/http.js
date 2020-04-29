import axios from 'axios';

export const getProjects = async() => await axios.get(`${process.env.REACT_APP_API_URL}/projects`).then(res => res.data);
