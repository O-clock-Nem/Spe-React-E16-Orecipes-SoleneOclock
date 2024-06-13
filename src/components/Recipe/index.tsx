/* eslint-disable arrow-body-style */
import { Navigate, useParams } from 'react-router-dom';

import Page from '../Page';
import AppHeader from '../AppHeader';

import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

import { useAppSelector } from '../../hooks/redux';
import { findRecipe } from '../../store/selectors/recipes';

import './styles.scss';

function Recipe() {
  // on va chercher dans le state la recette à afficher
  // on veut recuperer le slug de l'URL pour le donner en param à findRecipe
  // on utilise le hook de react-router-dom useParams
  const { slug } = useParams();

  // si jamais le slug ne correspond à aucune recette du tableau recipe vaut undefined
  const recipe = useAppSelector((state) =>
    findRecipe(state.recipes.list, slug)
  );

  // si recipe vaut undefined on navige vers la page erreur
  if (!recipe) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients list={recipe.ingredients} />
        <Instructions steps={recipe.instructions} />
      </div>
    </Page>
  );
}

export default Recipe;
