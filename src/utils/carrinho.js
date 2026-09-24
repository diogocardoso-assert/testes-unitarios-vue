/**
 * REGRA DE NEGÓCIO (do documento de requisitos):
 *  - Compras A PARTIR DE R$ 200,00 têm frete grátis.
 *  - Abaixo disso, o frete é R$ 15,00.
 *  - Carrinho vazio (subtotal 0) não paga frete.
 *
 * ✅ GABARITO: o bug era usar > em vez de >= na fronteira de R$ 200.
 *    O teste com subtotal exatamente 200 revelou o problema.
 */
export function calcularFrete(subtotal) {
  if (subtotal === 0) return 0
  if (subtotal >= 200) return 0
  return 15
}
