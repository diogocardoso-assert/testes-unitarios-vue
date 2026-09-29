<script setup>
import Contador from './components/Contador.vue'
import FormLogin from './components/FormLogin.vue'
import ListaUsuarios from './components/ListaUsuarios.vue'

function aoLogar(dados) {
  alert(`Login de ${dados.email}`)
}
</script>

<template>
  <main class="pagina">
    <header>
      <h1>Aula de Testes Unitários</h1>
      <p>Vue 3 + Vitest</p>
    </header>

    <div class="card contador">
      <h2>Contador</h2>
      <Contador :inicial="0" :maximo="5" />
    </div>

    <div class="card login">
      <h2>Login</h2>
      <FormLogin @login="aoLogar" />
    </div>

    <div class="card usuarios">
      <h2>Usuários</h2>
      <ListaUsuarios />
    </div>
  </main>
</template>
