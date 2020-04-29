import axios from 'axios';

export const getProjects = async() => await axios.get(`${process.env.REACT_APP_API_URL}/projects`).then(res => res.data);

export const getAboutSection = async() => await axios.get(`${process.env.REACT_APP_API_URL}/about`).then(res => res.data);
