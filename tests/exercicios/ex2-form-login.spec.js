// EXERCÍCIO 2 — Componente com formulário (≈15 min)
// Dicas:
//   await wrapper.find('[data-test="email"]').setValue('texto')
//   await wrapper.find('form').trigger('submit')
//   wrapper.emitted('login')  -> undefined se nunca emitiu
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormLogin from '../../src/components/FormLogin.vue'

describe('FormLogin', () => {
  it.todo('não mostra mensagem de erro ao abrir a tela')
  it.todo('mostra erro ao enviar com e-mail inválido')
  it.todo('NÃO emite "login" quando a senha tem menos de 6 caracteres')
  it.todo('emite "login" com { email, senha } quando os dados são válidos')
})
