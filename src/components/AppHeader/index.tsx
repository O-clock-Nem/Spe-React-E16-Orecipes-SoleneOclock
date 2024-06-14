import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actionChangeCredential } from '../../store/reducers/user';
import checkLogin from '../../store/thunks/checkLogin';

function AppHeader() {
  // -- Inputs controlés :
  // X on va ajouter email et password dans le state redux pour input controlés
  // X on recupère la valeur de email et password pour filer à LoginForm
  // X dans changeField (au change des inputs) on va aller modifier la valeur de email ou password dans le state redux (dispatch action)
  const email = useAppSelector((state) => state.user.credentials.email);
  const password = useAppSelector((state) => state.user.credentials.password);
  const logged = useAppSelector((state) => state.user.logged);
  const pseudo = useAppSelector((state) => state.user.pseudo);
  const error = useAppSelector((state) => state.user.error);

  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <div>
        <LoginForm
          email={email}
          password={password}
          changeField={(value: string, name: 'email' | 'password') => {
            // on veut modifier le state redux
            dispatch(
              actionChangeCredential({
                inputName: name,
                newValue: value,
              })
            );
          }}
          handleLogin={() => {
            console.log('handleLogin executé');
            // - faire un call api vers /login -> thunk
            // - enregistrer le pseudo dans le state -> reducer
            dispatch(checkLogin());
          }}
          handleLogout={() => {
            console.log('handlelout executé');
          }}
          isLogged={logged}
          loggedMessage={`Bonjour ${pseudo}`}
        />
        {error && <p className="error">{error}</p>}
      </div>
    </header>
  );
}

export default AppHeader;
