import { createPinia } from 'pinia';

export const setupStore = (app) => {
  const store = createPinia();
  app.use(store);
};