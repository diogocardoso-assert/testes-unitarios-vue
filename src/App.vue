<script setup>
import Contador from './components/Contador.vue'
import FormLogin from './components/FormLogin.vue'
import ListaUsuarios from './components/ListaUsuarios.vue'

function aoLogar(dados) {
  alert(`Login de ${dados.email}`)
}
</script>

<template>
  <main style="font-family: sans-serif; max-width: 480px; margin: 2rem auto; display: grid; gap: 2rem">
    <Contador :inicial="0" :maximo="5" />
    <FormLogin @login="aoLogar" />
    <ListaUsuarios />
  </main>
</template>
