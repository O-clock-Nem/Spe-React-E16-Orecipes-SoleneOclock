import { useEffect } from 'react';
import getFavRecipes from '../../store/thunks/getFavRecipes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';
import { Navigate } from 'react-router-dom';

function Favorites() {
  const dispatch = useAppDispatch();

  // on recupere logged et si on est pas logged on renvoie vers la page d'acceuil
  const logged = useAppSelector((state) => state.user.logged);

  // le user arrive sur cette page par le navlink "mes recettes pref" donc il est connecté
  // mais si il est pas connecté et qu'il tape le lien dans l'URL direct il faut ne pas afficher cette page
  // au premier chargement de la page favorites on fait une demande de fetch des recettes pref et de sauvegarde dans le state
  useEffect(() => {
    // - fetch les recettes pref -> thunk
    // - les enregistrer dans le state -> reducer
    dispatch(getFavRecipes());
  }, []);

  // on lit dans le state les recettes pref du user connecté
  const recipesPref = useAppSelector((state) => state.recipes.listFav);

  if (!logged) {
    return <Navigate to="/" />;
  }
  return (
    <Page>
      <AppHeader />
      <Content
        title="Mes recettes préférées"
        text="Les meilleures"
        recipes={recipesPref}
      />
    </Page>
  );
}

export default Favorites;
