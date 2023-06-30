<template>
  <div class="card">
    <div class="card-header px-5">
      <h1 class="text-center">Iniciar Sesión</h1>
    </div>
    <div class="card-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="mb-3">
          <label for="username" class="mb-2">Nombre de usuario:</label>
          <Field type="text" class="form-control" :class="{ 'is-invalid': errors.username }"  id="username" name="username" autocomplete="off" />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>

        <div class="mb-3">
          <label for="password" class="mb-2">Contraseña</label>
          <Field type="password" class="form-control" :class="{ 'is-invalid': errors.password }" id="password" name="password" autocomplete="off" />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>

        <div class="mb-3 d-flex flex-wrap gap-3">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
            Ingresar
          </button>
          <router-link to="register" class="btn btn-secondary">Registrarse</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '@/stores';

async function onSubmit(values) {
  const authStore = useAuthStore();
  const { username, password } = values;
  await authStore.login(username, password);
}

const schema = Yup.object().shape({
  username: Yup.string().required('Nombre de usuario requerido.'),
  password: Yup.string().required('La contraseña es requerida.')
});
</script>

<style scoped></style>