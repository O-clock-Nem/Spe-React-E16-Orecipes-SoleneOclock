import axios from 'axios';

// on créé une instance axios avec la base url pré configuré
// de partout on va utiliser notre instance plutot que axios classique comme ça la base url ne sera pas à répéter à chaque fois
const axiosInstance = axios.create({
  // on peut configurer la base url mais aussi toutes les autres option configurable d'une requete
  // https://axios-http.com/fr/docs/req_config
  baseURL: 'https://orecipesapi.onrender.com/api',
});

// cette fonction ajoute le token dans les entetes de toutes les requetes qui seront lancée avec l'instance, on l'execute dès qu'on reçoit le token du back (quand on est connecté)
export const addTokenToAxiosInstance = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// cette fonction enleve le token des entetes de toutes les requetes qui seront lancée avec l'instance, on l'execute dès qu'on se deconnecte
export const removeTokenFromAxiosInstance = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export default axiosInstance;
