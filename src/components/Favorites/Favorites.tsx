import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

function Favorites() {
  // le user arrive sur cette page par le navlink "mes recettes pref" donc il est connecté
  // mais si il est pas connecté et qu'il tape le lien dans l'URL direct il faut ne pas afficher cette page
  // on recupere dans le state les recettes pref du user connecté
  const recipesPref = [];

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
