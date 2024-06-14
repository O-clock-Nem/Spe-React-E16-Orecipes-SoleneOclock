import { createAsyncThunk } from '@reduxjs/toolkit';
// importe notre instance de axios avec la base url préconfiguré
import axiosInstance from '../../axios/axios';

const checkLogin = createAsyncThunk('CHECK_LOGIN', async () => {
  // ici le call API vers /login
  const result = await axiosInstance.post('/login', {
    email: 'bob@mail.io',
    password: 'bobo',
  });

  console.log(result);
});

export default checkLogin;
