// EXERCÍCIO 3 — Mock da API (≈10 min)
// Use a DEMO 3 (tests/demo/03-lista-usuarios.spec.js) como referência.
// Dicas:
//   buscarUsuarios.mockResolvedValue([])            -> API respondeu lista vazia
//   buscarUsuarios.mockRejectedValue(new Error())   -> API falhou
//   await flushPromises()
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import ListaUsuarios from '../../src/components/ListaUsuarios.vue'
import { buscarUsuarios } from '../../src/services/api.js'

vi.mock('../../src/services/api.js', () => ({
  buscarUsuarios: vi.fn()
}))

describe('ListaUsuarios — estados de borda', () => {
  beforeEach(() => vi.clearAllMocks())

  it.todo('mostra "Nenhum usuário cadastrado." quando a API retorna []')
  it.todo('mostra mensagem de erro quando a API falha')
  it.todo('some com o "Carregando..." depois que a API responde')
})
