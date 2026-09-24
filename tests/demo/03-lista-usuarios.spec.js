// DEMO 3 — Isolando o componente da API (mock) + código assíncrono
// Vamos escrever JUNTOS em aula.
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import ListaUsuarios from '../../src/components/ListaUsuarios.vue'
import { buscarUsuarios } from '../../src/services/api.js'

// 1) Aqui vamos substituir o módulo da API por um dublê (vi.mock)

describe('ListaUsuarios', () => {
  it.todo('mostra "Carregando..." enquanto a API não responde')
  it.todo('renderiza os usuários retornados pela API')
})
