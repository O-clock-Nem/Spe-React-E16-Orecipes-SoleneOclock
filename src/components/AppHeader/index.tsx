import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';

function AppHeader() {
  // X on va ajouter email et password dans le state redux pour input controlés
  // on recupère la valeur de email et password pour filer à LoginForm
  // dans changeField (au change des inputs) on va aller modifier la valeur de email ou password dans le state redux (dispatch action)

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email="email"
        password="ps"
        changeField={(value: string, name: 'email' | 'password') => {
          console.log('changeFiel executé');
          console.log('value', value);
          console.log('name', name);
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
