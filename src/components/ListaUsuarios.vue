<script setup>
import { ref, onMounted } from 'vue'
import { buscarUsuarios } from '../services/api.js'

const usuarios = ref([])
const carregando = ref(true)
const erro = ref(false)

onMounted(async () => {
  try {
    usuarios.value = await buscarUsuarios()
  } catch {
    erro.value = true
  } finally {
    carregando.value = false
  }
})
</script>

<template>
  <section>
    <p v-if="carregando" data-test="carregando">Carregando...</p>
    <p v-else-if="erro" data-test="erro">Erro ao carregar usuários.</p>
    <p v-else-if="usuarios.length === 0" data-test="vazio">Nenhum usuário cadastrado.</p>
    <ul v-else>
      <li v-for="u in usuarios" :key="u.id" data-test="usuario">{{ u.nome }}</li>
    </ul>
  </section>
</template>
