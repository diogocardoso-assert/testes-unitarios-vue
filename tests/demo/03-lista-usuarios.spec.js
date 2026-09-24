// DEMO 3 — Isolando o componente da API (mock) + código assíncrono
// Vamos escrever JUNTOS em aula.
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import ListaUsuarios from '../../src/components/ListaUsuarios.vue'
import { buscarUsuarios } from '../../src/services/api.js'

// 1) Aqui vamos substituir o módulo da API por um dublê (vi.mock)
vi.mock('../../src/services/api.js', () => ({
  buscarUsuarios: vi.fn()
}))

describe('ListaUsuarios', () => {
  beforeEach(() => {
    vi.clearAllMocks() // cada teste começa com o dublê limpo
  })

  it('mostra "Carregando..." enquanto a API não responde', () => {
    buscarUsuarios.mockReturnValue(new Promise(() => {})) // nunca resolve
    const wrapper = mount(ListaUsuarios)
    expect(wrapper.find('[data-test="carregando"]').exists()).toBe(true)
  })

  it('renderiza os usuários retornados pela API', async () => {
    buscarUsuarios.mockResolvedValue([{ id: 1, nome: 'Ana' }])
    const wrapper = mount(ListaUsuarios)
    await flushPromises() // espera as Promises pendentes terminarem
    expect(wrapper.findAll('[data-test="usuario"]')).toHaveLength(1)
    expect(buscarUsuarios).toHaveBeenCalledTimes(1)
  })
})
