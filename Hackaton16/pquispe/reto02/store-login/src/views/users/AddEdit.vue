<template>
  <h1 class="mt-4">{{ title }}</h1>
  <template v-if="!(user?.loading || user?.error)">
    <Form @submit="onSubmit" :validation-schema="schema" :initial-values="user" v-slot="{ errors, isSubmitting }">
      <div class="row">
        <div class="col-12 col-sm-6 mb-3">
          <label for="firstName">Nombre</label>
          <Field name="firstName" type="text" id="firstName" class="form-control"
            :class="{ 'is-invalid': errors.firstName }" />
          <div class="invalid-feedback">{{ errors.firstName }}</div>
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <label for="lastName">Apellido</label>
          <Field name="lastName" type="text" id="lastName" class="form-control"
            :class="{ 'is-invalid': errors.lastName }" />
          <div class="invalid-feedback">{{ errors.lastName }}</div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-sm-6 mb-3">
          <label for="username">Username</label>
          <Field name="username" type="text" id="username" class="form-control"
            :class="{ 'is-invalid': errors.username }" />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <label for="password">
            Contraseña
            <em v-if="user">(Deja en blanco si deseas conservar la misma contraseña.)</em>
          </label>
          <Field name="password" type="password" id="password" class="form-control"
            :class="{ 'is-invalid': errors.password }" />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
      </div>

      <div class="d-flex gap-3">
        <button class="btn btn-primary" :disabled="isSubmitting">
          <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
          Guardar
        </button>
        <router-link to="/users" class="btn btn-secondary">Cancelar</router-link>
      </div>
    </Form>
  </template>
  <template v-if="user?.loading">
    <div class="text-center m-5">
      <span class="spinner-border spinner-border-lg align-center"></span>
    </div>
  </template>
  <template v-if="user?.error">
    <div class="text-center m-5">
      <div class="text-danger">Error cargando usuario: {{ user.error }}</div>
    </div>
  </template>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';

const usersStore = useUsersStore();
const alertStore = useAlertStore();
const route = useRoute();
const id = route.params.id;

let title = 'Add User';
let user = null;

if (id) {
  title = 'Edit User';
  ({ user } = storeToRefs(usersStore));
  usersStore.getById(id);
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required('El Nombre es requerido.'),
  lastName: Yup.string()
    .required('El Apellido es requerido.'),
  username: Yup.string()
    .required('Nombre de usuario es requerido.'),
  password: Yup.string()
    .transform(x => x === '' ? undefined : x)
    // password optional in edit mode
    .concat(user ? null : Yup.string().required('La constraseña es requerida.'))
    .min(6, 'La contraseña debe ser de al menos 6 caracteres.')
});

async function onSubmit(values) {
  try {
    let message;
    if (user) {
      await usersStore.update(user.value.id, values)
      message = 'User updated';
    } else {
      await usersStore.register(values);
      message = 'User added';
    }
    await router.push('/users');
    alertStore.success(message);
  } catch (error) {
    alertStore.error(error);
  }
};
</script>

<style scoped></style>