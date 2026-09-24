// DEMO 2 — Testando um componente Vue
// Vamos escrever JUNTOS em aula: mount → find → trigger → expect
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Contador from '../../src/components/Contador.vue'

describe('Contador', () => {
  it('renderiza o valor inicial recebido por prop', () => {
    const wrapper = mount(Contador, { props: { inicial: 3 } })
    expect(wrapper.find('[data-test="valor"]').text())
      .toBe('Contagem: 3')
  })

  it('incrementa ao clicar em +', async () => {
    const wrapper = mount(Contador)
    // trigger devolve uma Promise: o Vue precisa re-renderizar o DOM
    await wrapper.find('[data-test="incrementar"]').trigger('click')
    expect(wrapper.text()).toContain('Contagem: 1')
  })

  it('desabilita o botão - quando o valor é zero', () => {
    const wrapper = mount(Contador)
    const botao = wrapper.find('[data-test="decrementar"]')
    expect(botao.attributes('disabled')).toBeDefined()
  })

  it('emite "atingiu-maximo" no limite', async () => {
    const wrapper = mount(Contador, {
      props: { inicial: 1, maximo: 2 }
    })

    await wrapper.find('[data-test="incrementar"]').trigger('click')

    expect(wrapper.emitted('atingiu-maximo')).toHaveLength(1)
    expect(wrapper.emitted('atingiu-maximo')[0]).toEqual([2])
  })
})
