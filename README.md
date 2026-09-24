# Testes Unitários no Front-end — Vue 3 + Vitest

Material da aula prática de **DEPS · TSI · IFPB**.

## 1. Pré-requisitos

- **Node.js 24 LTS** (ou 22.22 em diante) → confira com `node -v`
- Um editor (VS Code recomendado — extensão oficial **Vitest** ajuda muito)

## 2. Instalação (faça antes da aula, se puder)

```bash
git clone [URL-DO-REPOSITORIO]
cd testes-unitarios-vue
npm install
npm test
```

Se aparecer `1 passed` e `29 todo`, está tudo pronto. ✅

Os `todo` são os testes que vamos escrever: as demos juntos em aula, os exercícios por conta de vocês.

> Quer guardar suas respostas no seu GitHub? Faça um **fork** do repositório e clone o seu fork.
> A cada `git push`, o GitHub Actions roda os testes automaticamente (aba **Actions**).

## 3. Comandos

| Comando             | O que faz                                                       |
|---------------------|-----------------------------------------------------------------|
| `npm test`          | Roda os testes em **modo watch** (re-executa ao salvar)         |
| `npm run test:run`  | Roda uma vez e sai (é o que um pipeline de CI faria)            |
| `npm run test:ui`   | Abre a interface visual do Vitest no navegador                  |
| `npm run coverage`  | Gera o relatório de cobertura (pasta `coverage/`)               |
| `npm run dev`       | Sobe o app Vue no navegador (a API é um JSON em `public/api/`)  |

Dica no modo watch: aperte `f` para rodar só os que falharam, `p` para filtrar por nome de arquivo, `q` para sair.

## 4. Estrutura

```
src/
  utils/calculos.js        funções puras (desconto, e-mail, iniciais)
  utils/carrinho.js        ⚠️ tem um bug escondido (desafio)
  services/api.js          faz o fetch na API — será MOCKADO nos testes
  components/
    Contador.vue           props, clique, evento emitido
    FormLogin.vue          v-model, validação, submit
    ListaUsuarios.vue      chamada assíncrona à API
tests/
  00-ambiente.spec.js      confirma que a instalação deu certo
  demo/                    👉 exemplos que vamos escrever JUNTOS em aula
  exercicios/              👉 É AQUI QUE VOCÊ TRABALHA (troque os it.todo)
public/api/usuarios.json   API falsa para o npm run dev
```

## 5. Cola rápida

```js
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'

// matchers mais usados
expect(x).toBe(3)                 // igualdade estrita (===)
expect(obj).toEqual({ a: 1 })     // compara conteúdo de objetos/arrays
expect(lista).toHaveLength(2)
expect(valor).toBeDefined() / toBeUndefined()
expect(() => fn()).toThrow('mensagem')
expect(mock).toHaveBeenCalledTimes(1)
expect(mock).toHaveBeenCalledWith('arg')

// componente
const wrapper = mount(Componente, { props: { nome: 'Ana' } })
wrapper.find('[data-test="x"]').text()
wrapper.find('[data-test="x"]').exists()
wrapper.findAll('li')
await wrapper.find('button').trigger('click')
await wrapper.find('input').setValue('texto')
wrapper.emitted('nome-do-evento')

// mock de módulo
vi.mock('../../src/services/api.js', () => ({ buscarUsuarios: vi.fn() }))
buscarUsuarios.mockResolvedValue([...])   // sucesso
buscarUsuarios.mockRejectedValue(new Error())  // falha
await flushPromises()
```

## 6. Gabarito

As soluções ficam na branch `gabarito`, liberada depois da aula. Nela, os próprios arquivos de `tests/` aparecem resolvidos.

**Jeito mais fácil: pelo navegador.** Abra a comparação entre as branches:

```
[URL-DO-REPOSITORIO]/compare/main...gabarito
```

Cada arquivo aparece com as linhas que precisavam ser escritas.

**Ver um arquivo resolvido, sem trocar de branch:**

```bash
git fetch origin
git show origin/gabarito:tests/exercicios/ex1-calculos.spec.js
```

**Rodar o gabarito na sua máquina:** faça commit do seu trabalho antes, senão o Git não deixa trocar de branch.

```bash
git add -A
git commit -m "Meus exercícios"
git fetch origin
git switch gabarito
npm test
git switch main    # para voltar
```

Tente os exercícios antes de olhar.

## 7. Problemas comuns

- **Aviso de `engine` ou erro estranho no `npm install`** → Node antigo. Instale o Node 24 LTS e rode `npm install` de novo.
- **`npm` não reconhecido** → Node não instalado ou terminal aberto antes da instalação. Feche e abra de novo.
- **Teste passa mas o DOM não mudou** → faltou `await` no `trigger`/`setValue`.
- **Lista vazia mesmo com mock** → faltou `await flushPromises()`.
- **`document is not defined`** → o `environment: 'jsdom'` do `vite.config.js` foi removido.
