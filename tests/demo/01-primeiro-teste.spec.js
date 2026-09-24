// DEMO 1 — Anatomia de um teste unitário (função pura)
// Vamos escrever JUNTOS em aula: troque cada it.todo por um it(...) de verdade.
import { describe, it, expect } from 'vitest'
import { calcularDesconto } from '../../src/utils/calculos.js'

describe('calcularDesconto', () => {
  // Arrange (preparar) → Act (agir) → Assert (verificar)
  it.todo('aplica 10% de desconto sobre 100')
  it.todo('não altera o preço quando o desconto é 0%')
  it.todo('zera o preço quando o desconto é 100%')
  it.todo('lança erro para percentual maior que 100')
  it.todo('lança erro para percentual negativo')
})
