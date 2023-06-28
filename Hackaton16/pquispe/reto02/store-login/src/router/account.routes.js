import { LayoutAccount, LoginAccount, RegisterAccount } from '@/views/account';

export default {
  path: '/account',
  component: LayoutAccount,
  children: [
    { path: '', redirect: 'login' },
    { path: 'login', component: LoginAccount },
    { path: 'register', component: RegisterAccount },
  ],
};
