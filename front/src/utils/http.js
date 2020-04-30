import axios from 'axios';

export const API_URL = "https://hetic-fake-portfolio.herokuapp.com";

export const getProjects = async() => await axios.get(`${API_URL}/projects`).then(res => res.data);

export const getAboutSection = async() => await axios.get(`${API_URL}/about`).then(res => res.data);
