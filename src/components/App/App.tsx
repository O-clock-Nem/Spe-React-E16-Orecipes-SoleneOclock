import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';

import Loading from './Loading';
import './App.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import getRecipes from '../../store/thunks/getRecipes';

function App() {
  const loading = useAppSelector((state) => state.recipes.loading);
  const dispatch = useAppDispatch();

  // au premier rendu de App :
  // - fetch les recettes -> middleware
  // - les enregistrer dans le state -> reducer
  useEffect(() => {
    // dans le premier rendu le tableau des recettes est VIDE !
    // envoie de la demande après le premier rendu
    dispatch(getRecipes());
  }, []);

  // ça ne sert à rien d'avoir la route /recipe/:slug si le tableau des recettes est vide
  // -> la recette sera pas trouvé on va aller /error

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
