// EXERCÍCIO 2 — Componente com formulário (≈15 min)
// Dicas:
//   await wrapper.find('[data-test="email"]').setValue('texto')
//   await wrapper.find('form').trigger('submit')
//   wrapper.emitted('login')  -> undefined se nunca emitiu
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormLogin from '../../src/components/FormLogin.vue'

// Função auxiliar: evita repetir o mesmo "arrange" em todo teste
async function preencher(wrapper, email, senha) {
  await wrapper.find('[data-test="email"]').setValue(email)
  await wrapper.find('[data-test="senha"]').setValue(senha)
  await wrapper.find('form').trigger('submit')
}

describe('FormLogin', () => {
  it('não mostra mensagem de erro ao abrir a tela', () => {
    const wrapper = mount(FormLogin)
    expect(wrapper.find('[data-test="erro"]').exists()).toBe(false)
  })

  it('mostra erro ao enviar com e-mail inválido', async () => {
    const wrapper = mount(FormLogin)
    await preencher(wrapper, 'email-invalido', '123456')
    expect(wrapper.find('[data-test="erro"]').exists()).toBe(true)
  })

  it('NÃO emite "login" quando a senha tem menos de 6 caracteres', async () => {
    const wrapper = mount(FormLogin)
    await preencher(wrapper, 'aluno@ifpb.edu.br', '123')
    expect(wrapper.emitted('login')).toBeUndefined()
  })

  it('emite "login" com { email, senha } quando os dados são válidos', async () => {
    const wrapper = mount(FormLogin)
    await preencher(wrapper, 'aluno@ifpb.edu.br', 'segredo123')

    expect(wrapper.emitted('login')).toHaveLength(1)
    expect(wrapper.emitted('login')[0][0]).toEqual({
      email: 'aluno@ifpb.edu.br',
      senha: 'segredo123'
    })
  })
})
