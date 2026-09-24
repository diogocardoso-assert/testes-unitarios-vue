// DEMO 2 — Testando um componente Vue
// Vamos escrever JUNTOS em aula: mount → find → trigger → expect
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Contador from '../../src/components/Contador.vue'

describe('Contador', () => {
  it.todo('renderiza o valor inicial recebido por prop')
  it.todo('incrementa ao clicar em +')
  it.todo('desabilita o botão - quando o valor é zero')
  it.todo('emite "atingiu-maximo" no limite')
})
