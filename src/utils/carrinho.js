/**
 * REGRA DE NEGÓCIO (do documento de requisitos):
 *  - Compras A PARTIR DE R$ 200,00 têm frete grátis.
 *  - Abaixo disso, o frete é R$ 15,00.
 *  - Carrinho vazio (subtotal 0) não paga frete.
 *
 * ⚠️ DESAFIO: esta função tem um bug escondido.
 *    Escreva testes que revelem o bug ANTES de olhar a implementação.
 */
export function calcularFrete(subtotal) {
  if (subtotal === 0) return 0
  if (subtotal > 200) return 0
  return 15
}
