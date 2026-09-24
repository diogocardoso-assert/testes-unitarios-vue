// DEMO 1 — Anatomia de um teste unitário (função pura)
// Vamos escrever JUNTOS em aula: troque cada it.todo por um it(...) de verdade.
import { describe, it, expect } from 'vitest'
import { calcularDesconto } from '../../src/utils/calculos.js'

describe('calcularDesconto', () => {
  // Arrange (preparar) → Act (agir) → Assert (verificar)
  it('aplica 10% de desconto sobre 100', () => {
    // Arrange
    const preco = 100
    const percentual = 10
    // Act
    const resultado = calcularDesconto(preco, percentual)
    // Assert
    expect(resultado).toBe(90)
  })

  it('não altera o preço quando o desconto é 0%', () => {
    expect(calcularDesconto(50, 0)).toBe(50)
  })

  it('zera o preço quando o desconto é 100%', () => {
    expect(calcularDesconto(80, 100)).toBe(0)
  })

  it('lança erro para percentual maior que 100', () => {
    // Para testar erro, passamos uma FUNÇÃO para o expect
    expect(() => calcularDesconto(100, 150)).toThrow('Percentual inválido')
  })

  it('lança erro para percentual negativo', () => {
    expect(() => calcularDesconto(100, -5)).toThrow()
  })
})
