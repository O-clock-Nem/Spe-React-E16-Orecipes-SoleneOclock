import { createAsyncThunk } from '@reduxjs/toolkit';
// importe notre instance de axios avec la base url préconfiguré
import axiosInstance, { addTokenToAxiosInstance } from '../../axios/axios';
// on ajoute "type" devant le type importé pour casser le cycle de depenances
// car on importe le type du store qui importe le reducer qui import l'action checkLogin qui est nous ici
// si on a un dendency cycle pour des valeurs et non des types faut revoir notre architecture
import type { RootState } from '..'; // le fichier index
import { addTokenAndPseudoToStorage } from '../../localStorage/localStorage';

const checkLogin = createAsyncThunk('CHECK_LOGIN', async (_, thunkAPI) => {
  // on recupère les infos email et password du state grace à la fonction getState
  // de la thunkAPI qui nous est passé en second paramètre de notre middleware
  const state = thunkAPI.getState() as RootState;
  const { email, password } = state.user.credentials;

  const result = await axiosInstance.post('/login', {
    email,
    password,
  });

  // on ajoute le token reçu à l'instance axios pour que les header autorisation soit présents pour toutes les prochaines requetes
  addTokenToAxiosInstance(result.data.token);
  // on ajoute aussi le token au localStorage
  addTokenAndPseudoToStorage(result.data.token, result.data.pseudo);

  // on veut enregistrer dans le state le pseudo -> on dispatch (automatiquement) une action fulfilled au reducer et on ajoute le pseudo dans le payload de l'action fulfilled en le retournant
  return result.data.pseudo;
});

export default checkLogin;
