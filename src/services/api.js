// Camada que conversa com a API.
// Em "npm run dev", o Vite serve public/api/usuarios.json como se fosse o backend.
// Nos testes unitários, ESTE módulo é substituído por um mock:
// não queremos depender de servidor nenhum estar no ar.

export async function buscarUsuarios() {
  const resposta = await fetch('/api/usuarios.json')
  if (!resposta.ok) {
    throw new Error('Falha ao buscar usuários')
  }
  return resposta.json()
}
