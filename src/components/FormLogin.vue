<script setup>
import { ref, computed } from 'vue'
import { validarEmail } from '../utils/calculos.js'

const emit = defineEmits(['login'])

const email = ref('')
const senha = ref('')
const tentouEnviar = ref(false)

const formularioValido = computed(
  () => validarEmail(email.value) && senha.value.length >= 6
)

function enviar() {
  tentouEnviar.value = true
  if (!formularioValido.value) return
  emit('login', { email: email.value, senha: senha.value })
}
</script>

<template>
  <form @submit.prevent="enviar">
    <input data-test="email" v-model="email" type="email" placeholder="E-mail" />
    <input data-test="senha" v-model="senha" type="password" placeholder="Senha" />
    <p v-if="tentouEnviar && !formularioValido" data-test="erro">
      Informe um e-mail válido e uma senha com pelo menos 6 caracteres.
    </p>
    <button data-test="entrar" type="submit">Entrar</button>
  </form>
</template>
