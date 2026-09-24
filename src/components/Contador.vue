<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  inicial: { type: Number, default: 0 },
  maximo: { type: Number, default: 10 }
})

const emit = defineEmits(['atingiu-maximo'])

const valor = ref(props.inicial)
const noMaximo = computed(() => valor.value >= props.maximo)
const noMinimo = computed(() => valor.value <= 0)

function incrementar() {
  if (noMaximo.value) return
  valor.value++
  if (noMaximo.value) emit('atingiu-maximo', valor.value)
}

function decrementar() {
  if (noMinimo.value) return
  valor.value--
}
</script>

<template>
  <section>
    <p data-test="valor">Contagem: {{ valor }}</p>
    <button data-test="decrementar" :disabled="noMinimo" @click="decrementar">-</button>
    <button data-test="incrementar" :disabled="noMaximo" @click="incrementar">+</button>
    <p v-if="noMaximo" data-test="aviso">Limite atingido!</p>
  </section>
</template>
