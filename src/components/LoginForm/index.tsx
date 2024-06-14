import { FormEvent } from 'react';
import Field from './Field';

import './styles.scss';

interface LoginFormProps {
  email: string;
  password: string;
  changeField: (value: string, name: 'email' | 'password') => void;
  handleLogin: () => void;
  handleLogout: () => void;
  isLogged?: boolean;
  loggedMessage?: string;
}
function LoginForm({
  // chaine affichée dans la value du input email
  email,
  // chaine affichée dans la value du input password
  password,
  // fonction executée au change des inputs email et password et qui reçoit en param la nouvelle valeur de l'input et le nom de l'input (soit email soit password)
  changeField,
  // fonction executée au click sur le bouton ok (à la valid du form)
  handleLogin,
  // fonction executée au click sur le bouton deconexion
  handleLogout,
  // booleen qui pilote l'affichage du formulaire : si vrai le form ets affiché, si faux le message + bouton deconnexion est affiché
  isLogged,
  // affiché si isLogged est false
  loggedMessage,
}: LoginFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
  };

  const handleChangeField = (name: 'email' | 'password') => (value: string) => {
    changeField(value, name);
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">{loggedMessage}</p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <form
          autoComplete="off"
          className="login-form-element"
          onSubmit={handleSubmit}
        >
          <Field
            placeholder="Adresse Email"
            onChange={handleChangeField('email')}
            value={email}
          />
          <Field
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangeField('password')}
            value={password}
          />
          <button type="submit" className="login-form-button">
            OK
          </button>
        </form>
      )}
    </div>
  );
}

// attention ça va etre deprecié
LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
