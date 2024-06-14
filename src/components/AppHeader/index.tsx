import { useState } from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  actionChangeCredential,
  actionLogOut,
} from '../../store/reducers/user';
import checkLogin from '../../store/thunks/checkLogin';

function AppHeader() {
  // STATE LOCAL
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // STATE REDUX
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
            // on veut modifier le state local
            // on utilise soit seetEmail soit setPassword
            if (name === 'email') {
              setEmail(value);
            } else {
              setPassword(value);
            }
          }}
          handleLogin={() => {
            // - faire un call api vers /login -> thunk
            // - enregistrer le pseudo dans le state -> reducer
            dispatch(checkLogin({ email, password }));
          }}
          handleLogout={() => {
            // passer logged à false dans le state -> reducer
            // vider email et password et pseudo
            dispatch(actionLogOut());
            setEmail('');
            setPassword('');
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
