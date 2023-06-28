<template>
  <div class="card">
    <div class="card-header px-5">
      <h1 class="text-center">Registrarse</h1>
    </div>
    <div class="card-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="mb-3">
          <label for="firstName" class="mb-2">Nombre:</label>
          <Field type="text" class="form-control" :class="{ 'is-invalid': errors.firstName }" id="firstName"
            name="firstName" autocomplete="off" />
          <div class="invalid-feedback">{{ errors.firstName }}</div>
        </div>

        <div class="mb-3">
          <label for="lastName" class="mb-2">Apellido:</label>
          <Field type="text" class="form-control" :class="{ 'is-invalid': errors.lastName }" id="lastName" name="lastName"
            autocomplete="off" />
          <div class="invalid-feedback">{{ errors.lastName }}</div>
        </div>

        <div class="mb-3">
          <label for="username" class="mb-2">Nombre de usuario:</label>
          <Field type="text" class="form-control" :class="{ 'is-invalid': errors.username }" id="username" name="username"
            autocomplete="off" />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>

        <div class="mb-3">
          <label for="password" class="mb-2">Contraseña</label>
          <Field type="password" class="form-control" :class="{ 'is-invalid': errors.password }" id="password"
            name="password" autocomplete="off" />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>

        <div class="mb-3 d-flex flex-wrap gap-3">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
            Registrar
          </button>
          <router-link to="login" class="btn btn-secondary">Cancelar</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';

const schema = Yup.object().shape({
  firstName: Yup.string().required('El nombre es requerido.'),
  lastName: Yup.string().required('El apellido es requerido.'),
  username: Yup.string().required('Nombre de usuario es requerido.'),
  password: Yup.string().required('La constraseña es requerida.').min(6, 'La constraseña debe ser de al menos 6 caracteres'),
});

async function onSubmit(values) {
  const usersStore = useUsersStore();
  const alertStore = useAlertStore();
  try {
    await usersStore.register(values);
    await router.push('/account/login');
    alertStore.success('Usted se ha registrado satisfactoriamente.');
  } catch (error) {
    alertStore.error(error);
  }
}
</script>

<style scoped></style>