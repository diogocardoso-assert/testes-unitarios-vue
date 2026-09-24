// DESAFIO — Caça ao bug (≈5 min, para quem terminar antes)
// Leia APENAS a regra de negócio no topo de src/utils/carrinho.js.
// Escreva testes baseados na regra. Um deles deve FALHAR e revelar o bug.
// Depois corrija a função e veja tudo ficar verde.
import { describe, it, expect } from 'vitest'
import { calcularFrete } from '../../src/utils/carrinho.js'

describe('calcularFrete', () => {
  it('cobra R$ 15 para subtotal de R$ 100', () => {
    expect(calcularFrete(100)).toBe(15)
  })
  it('frete grátis para subtotal de R$ 250', () => {
    expect(calcularFrete(250)).toBe(0)
  })
  it('carrinho vazio não paga frete', () => {
    expect(calcularFrete(0)).toBe(0)
  })

  // Valores de FRONTEIRA: logo abaixo e exatamente no ponto em que a regra muda
  it('cobra frete em R$ 199,99', () => {
    expect(calcularFrete(199.99)).toBe(15)
  })
  it('frete grátis EXATAMENTE em R$ 200 (este teste revelou o bug)', () => {
    expect(calcularFrete(200)).toBe(0)
  })
})
