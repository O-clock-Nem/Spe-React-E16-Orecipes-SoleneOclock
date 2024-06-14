import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';

function AppHeader() {
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
