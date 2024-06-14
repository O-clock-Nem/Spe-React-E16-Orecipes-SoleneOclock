import axios from 'axios';

// on créé une instance axios avec la base url pré configuré
// de partout on va utiliser notre instance plutot que axios classique comme ça la base url ne sera pas à répéter à chaque fois
const axiosInstance = axios.create({
  // on peut configurer la base url mais aussi toutes les autres option configurable d'une requete
  // https://axios-http.com/fr/docs/req_config
  baseURL: 'https://orecipesapi.onrender.com/api',
});

export default axiosInstance;
