import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';
import { useAppSelector } from '../../hooks/redux';
import { getTitle } from '../../store/selectors/recipes';

function Home() {
  const recipes = useAppSelector((state) => state.recipes.list);

  // on veut qu'une fonction nous renvoye un titre "Voici nos 6 recettes"
  const title = useAppSelector((state) => getTitle(state.recipes.list));

  return (
    <Page>
      <AppHeader />
      <Content title="Les recettes oRecipes" text={title} recipes={recipes} />
    </Page>
  );
}

export default Home;
