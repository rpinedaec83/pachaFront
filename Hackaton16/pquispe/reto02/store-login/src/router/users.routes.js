import { LayoutUsers, ListUsers, AddEdit } from '@/views/users';

export default {
  path: '/users',
  component: LayoutUsers,
  children: [
    { path: '', component: ListUsers },
    { path: 'add', component: AddEdit },
    { path: 'edit/:id', component: AddEdit },
  ],
};
