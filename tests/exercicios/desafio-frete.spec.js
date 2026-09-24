// DESAFIO — Caça ao bug (≈5 min, para quem terminar antes)
// Leia APENAS a regra de negócio no topo de src/utils/carrinho.js.
// Escreva testes baseados na regra. Um deles deve FALHAR e revelar o bug.
// Depois corrija a função e veja tudo ficar verde.
import { describe, it, expect } from 'vitest'
import { calcularFrete } from '../../src/utils/carrinho.js'

describe('calcularFrete', () => {
  it.todo('cobra R$ 15 para subtotal de R$ 100')
  it.todo('frete grátis para subtotal de R$ 250')
  it.todo('carrinho vazio não paga frete')
  it.todo('??? pense nos valores de FRONTEIRA da regra ???')
})
