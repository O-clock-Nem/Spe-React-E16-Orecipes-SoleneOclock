import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';

import Loading from './Loading';
import './App.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import getRecipes from '../../store/thunks/getRecipes';
import Favorites from '../Favorites/Favorites';
import { getTokenAndPseudoFromStorage } from '../../localStorage/localStorage';
import { actionLogIn } from '../../store/reducers/user';
import { addTokenToAxiosInstance } from '../../axios/axios';

function App() {
  // on recupere logged depuis le state pour conditionner les routes privées
  // si logged est à true les routes existent sinon impossible d'aller dessus
  const logged = useAppSelector((state) => state.user.logged);

  // on peut recuperer le pathname (l'URL) avec le hook de react router dom : useLocation
  // on peut fair eun useEffect avec ce pathname en tableau de dependances
  // comme ça notre effet sera executé a chaque rendu SI l'URL à changé !
  const location = useLocation();
  useEffect(() => {
    // on a changé de page, on remonte en haut
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const loading = useAppSelector((state) => state.recipes.loading);
  const dispatch = useAppDispatch();

  // au premier rendu de App on regarde si y'a un token dans le local storage et si oui on connecte l'utilisateur
  useEffect(() => {
    // objet avec token et pseudo
    const localStorageValues = getTokenAndPseudoFromStorage();
    if (localStorageValues.token && localStorageValues.pseudo) {
      // -> demander au reducer de faire le login
      dispatch(actionLogIn(localStorageValues.pseudo));
      // -> ajouter le token dans l'instance axios
      addTokenToAxiosInstance(localStorageValues.token);
    }
  }, [dispatch]);

  // au premier rendu de App :
  // - fetch les recettes -> middleware
  // - les enregistrer dans le state -> reducer
  useEffect(() => {
    // dans le premier rendu le tableau des recettes est VIDE !
    // envoie de la demande après le premier rendu
    dispatch(getRecipes());
  }, [dispatch]);

  // ça ne sert à rien d'avoir la route /recipe/:slug si le tableau des recettes est vide
  // -> la recette sera pas trouvé on va aller /error
  // ça ne sert à rien d'avoir la route / si le tableau des recettes est vide
  // -> on fera un map sur un tableau vide, ça plantera pas mais ça affiche rien...
  // -----> on n'affiche pas les route si on est loading (si les recettes ne sont pas arrivées dans le state : au premier rendu)

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        {logged && (
          // ici toutes les routes privées, si on n'est pas logged elles n'existent pas !
          <Route path="/favorites" element={<Favorites />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
