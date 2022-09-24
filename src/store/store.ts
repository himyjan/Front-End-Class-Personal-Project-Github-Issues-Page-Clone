/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
import { LoginUser } from '../types/loginUserType';
import createStore from './createStore';

const store = createStore({
  loginUser: {} as LoginUser,
});

export type ValuesStore = ReturnType<typeof store.getState>;

export default store;

const useStore = (selector: (state: ValuesStore) => number) => {};

useStore(() => 1);
