// EXERCÍCIO 1 — Funções puras (≈10 min)
// Troque cada it.todo por um it(...) com o teste de verdade.
// Rode:  npm test   (fica observando e re-executa ao salvar)
import { describe, it, expect } from 'vitest'
import { validarEmail, gerarIniciais } from '../../src/utils/calculos.js'

describe('validarEmail', () => {
  it('retorna true para "aluno@ifpb.edu.br"', () => {
    expect(validarEmail('aluno@ifpb.edu.br')).toBe(true)
  })
  it('retorna false para e-mail sem @', () => {
    expect(validarEmail('aluno.ifpb.edu.br')).toBe(false)
  })
  it('retorna false para e-mail com espaço no meio', () => {
    expect(validarEmail('alu no@ifpb.edu.br')).toBe(false)
  })
  it('retorna false quando recebe algo que não é string (ex.: null)', () => {
    expect(validarEmail(null)).toBe(false)
  })
})

describe('gerarIniciais', () => {
  it('"Maria da Silva" vira "MS"', () => {
    expect(gerarIniciais('Maria da Silva')).toBe('MS')
  })
  it('funciona com nome minúsculo: "joão" vira "J"', () => {
    expect(gerarIniciais('joão')).toBe('J')
  })
  it('ignora espaços extras: "  Ana   Paula  " vira "AP"', () => {
    expect(gerarIniciais('  Ana   Paula  ')).toBe('AP')
  })

  // BÔNUS: reescreva os casos acima com it.each
  it.each([
    ['Maria da Silva', 'MS'],
    ['joão', 'J'],
    ['  Ana   Paula  ', 'AP'],
    ['José dos Santos e Souza', 'JSS'],
    ['', '']
  ])('"%s" -> "%s"', (nome, esperado) => {
    expect(gerarIniciais(nome)).toBe(esperado)
  })
})
