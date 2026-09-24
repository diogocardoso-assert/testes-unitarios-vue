// EXERCÍCIO 1 — Funções puras (≈10 min)
// Troque cada it.todo por um it(...) com o teste de verdade.
// Rode:  npm test   (fica observando e re-executa ao salvar)
import { describe, it, expect } from 'vitest'
import { validarEmail, gerarIniciais } from '../../src/utils/calculos.js'

describe('validarEmail', () => {
  it.todo('retorna true para "aluno@ifpb.edu.br"')
  it.todo('retorna false para e-mail sem @')
  it.todo('retorna false para e-mail com espaço no meio')
  it.todo('retorna false quando recebe algo que não é string (ex.: null)')
})

describe('gerarIniciais', () => {
  it.todo('"Maria da Silva" vira "MS"')
  it.todo('funciona com nome minúsculo: "joão" vira "J"')
  it.todo('ignora espaços extras: "  Ana   Paula  " vira "AP"')

  // BÔNUS: reescreva os casos acima com it.each
  // it.each([
  //   ['Maria da Silva', 'MS'],
  //   ...
  // ])('%s -> %s', (nome, esperado) => { ... })
})
