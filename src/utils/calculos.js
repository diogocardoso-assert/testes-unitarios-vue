/**
 * Aplica um desconto percentual sobre um preço.
 * calcularDesconto(100, 10) -> 90
 * Lança erro se o percentual estiver fora de 0..100.
 */
export function calcularDesconto(preco, percentual) {
  if (percentual < 0 || percentual > 100) {
    throw new Error('Percentual inválido')
  }
  return preco - (preco * percentual) / 100
}

/**
 * Regra simples de e-mail: algo@algo.algo, sem espaços.
 */
export function validarEmail(email) {
  if (typeof email !== 'string') return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * Gera as iniciais de um nome, ignorando preposições.
 * "Maria da Silva" -> "MS"   |   "joão" -> "J"   |   "" -> ""
 */
export function gerarIniciais(nome) {
  const ignorar = ['da', 'de', 'do', 'das', 'dos', 'e']
  return nome
    .trim()
    .split(/\s+/)
    .filter((parte) => parte && !ignorar.includes(parte.toLowerCase()))
    .map((parte) => parte[0].toUpperCase())
    .join('')
}
