import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actionChangeCredential } from '../../store/reducers/user';

function AppHeader() {
  // X on va ajouter email et password dans le state redux pour input controlés
  // X on recupère la valeur de email et password pour filer à LoginForm
  const email = useAppSelector((state) => state.user.credentials.email);
  const password = useAppSelector((state) => state.user.credentials.password);
  // dans changeField (au change des inputs) on va aller modifier la valeur de email ou password dans le state redux (dispatch action)

  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        changeField={(value: string, name: 'email' | 'password') => {
          console.log('changeFiel executé');
          console.log('value', value);
          console.log('name', name);
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
        }}
        handleLogout={() => {
          console.log('handlelout executé');
        }}
        isLogged={false}
        loggedMessage="message "
      />
    </header>
  );
}

export default AppHeader;
