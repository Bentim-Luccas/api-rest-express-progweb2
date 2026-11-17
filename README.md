# API REST com Express — CRUD de Alunos em Memória

**Projeto:** `api-rest-express-progweb2`  
**Etapa:** `branch_20260811` (mesmo código da `master` antes da documentação)

API RESTful desenvolvida para gerenciar um conjunto de alunos, demonstrando operações de cadastro, consulta, atualização e exclusão de registros com Node.js e Express.

## 1. Descrição

Esta API foi desenvolvida na Unidade Curricular Programação Web 2 do Senac RJ para estudar os métodos HTTP e as operações CRUD. Ela disponibiliza um recurso de alunos que pode ser consumido por navegadores, Bruno, Insomnia ou outras aplicações HTTP. Os registros são mantidos em um array JavaScript durante a execução do servidor, sem persistência em banco de dados.

## 2. Funcionalidades

- Exibição de mensagem na rota inicial.
- Listagem de alunos.
- Busca de alunos por identificador.
- Cadastro de alunos.
- Atualização do nome e do curso de alunos.
- Exclusão de alunos.
- Leitura de corpos JSON com o middleware `express.json()`.

O projeto **não possui** autenticação, banco de dados, geração automática de IDs, validação de entrada nem tratamento customizado de erros.

## 3. Tecnologias Utilizadas

- Node.js e JavaScript (ES Modules).
- Express 5 (`^5.2.1` no `package.json`).
- Nodemon (`^3.1.14`, dependência de desenvolvimento).
- npm e Git.
- Bruno, Insomnia ou outro cliente HTTP para testes manuais (não são dependências do projeto).

## 4. Arquitetura e Organização do Projeto

```text
api-rest-express-progweb2/
├── src/
│   └── app.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

- `src/app.js`: configura o Express, registra o middleware JSON, declara o array `alunos`, define as rotas CRUD e as funções auxiliares de busca.
- `server.js`: importa a aplicação e inicia a escuta na porta `3000`.
- `package.json`: lista as dependências e o script `dev`.
- `package-lock.json`: fixa as versões resolvidas.
- `.gitignore`: ignora `node_modules/`, `.env` e outros arquivos locais.

O CRUD está concentrado em `app.js`: esta etapa ainda não implementa camadas separadas de controller, service e repository.

## 5. Pré-requisitos

- Node.js e npm.
- Git para clonar o repositório.
- Navegador, Bruno, Insomnia ou cliente similar para testar endpoints.

Não é necessário MySQL, PostgreSQL ou Docker.

## 6. Instalação

### 6.1 Clone o repositório

```bash
git clone https://github.com/Bentim-Luccas/api-rest-express-progweb2.git
```

### 6.2 Acesse a pasta e selecione a branch

```bash
cd api-rest-express-progweb2
git switch branch_20260811
```

### 6.3 Instale as dependências

```bash
npm ci
```

O `npm ci` utiliza o lockfile versionado. `npm install` também é possível.

## 7. Configuração das Variáveis de Ambiente

Não há arquivo `.env.example` nem necessidade de `.env` nesta etapa. A porta `3000` é definida em `server.js`.

O `.gitignore` exclui `.env` para evitar exposição acidental de credenciais em atividades futuras.

## 8. Execução do Projeto

**Desenvolvimento:**

```bash
npm run dev
```

O script chama `nodemon server.js`.

**Execução direta:**

```bash
node server.js
```

O projeto não possui script `npm start` configurado. A API é disponibilizada em `http://localhost:3000`. Para encerrá-la, use `Ctrl + C`.

## 9. Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/` | Exibe a mensagem inicial. |
| GET | `/alunos` | Retorna a lista de alunos. |
| GET | `/alunos/:id` | Retorna um array com o aluno de ID correspondente (ou `[]`). |
| POST | `/alunos` | Adiciona ao array o objeto JSON recebido. |
| PUT | `/alunos/:id` | Atualiza os campos `nome` e `curso` do aluno encontrado. |
| DELETE | `/alunos/:id` | Remove do array o registro localizado por ID. |

## 10. Exemplos de Requisição e Resposta

**Consultar alunos:**

```http
GET /alunos HTTP/1.1
Host: localhost:3000
```

Resposta inicial (`200 OK`), antes de alterações:

```json
[
  { "id": 1, "nome": "Bruno", "curso": "ADS" },
  { "id": 2, "nome": "Maria", "curso": "ADS" },
  { "id": 3, "nome": "Lara", "curso": "ADS" },
  { "id": 4, "nome": "José", "curso": "ADS" }
]
```

**Cadastrar aluno:**

```http
POST /alunos HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "id": 5,
  "nome": "Carlos",
  "curso": "ADS"
}
```

Resposta: `201 Created` com o corpo textual `Aluno cadastrado com sucesso!`.

**Buscar aluno por ID:** `GET /alunos/5` retorna um **array**, por exemplo:

```json
[{ "id": 5, "nome": "Carlos", "curso": "ADS" }]
```

**Atualizar aluno:**

```http
PUT /alunos/5 HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "nome": "Carlos Silva",
  "curso": "Engenharia de Software"
}
```

A resposta contém a lista inteira, com o aluno atualizado.

**Excluir aluno:** `DELETE /alunos/5` remove o registro encontrado e retorna uma mensagem de texto.

## 11. Autenticação

Não há autenticação ou autorização. Todas as rotas são públicas.

## 12. Tratamento de Erros

Não há validação ou tratamento personalizado. O projeto utiliza respostas normais do Express e pode apresentar comportamento incorreto ou erro para entradas inválidas. Em particular:

- `GET /alunos/:id` retorna `[]` quando não encontra aluno; não retorna um `404` personalizado.
- `DELETE /alunos/:id`: se o ID não existir, `findIndex()` devolve `-1` e `splice(-1, 1)` remove **o último elemento** indevidamente.
- `PUT /alunos/:id`: se o ID não existir, tenta modificar `alunos[-1]` (indefinido), podendo resultar em erro interno.
- `POST /alunos` não valida campos ou identificadores duplicados.

Essas limitações descrevem o código atual; **não foram corrigidas neste exercício**.

## 13. Testes

Não há testes automatizados configurados. O `npm test` existente é apenas o placeholder padrão e termina com erro intencionalmente.

**Roteiro manual (Bruno ou Insomnia):**

1. `GET /alunos` — consultar os quatro registros iniciais.
2. `POST /alunos` — cadastrar aluno de ID `5` com JSON válido.
3. `GET /alunos/5` — consultar o aluno cadastrado.
4. `PUT /alunos/5` — alterar nome e curso.
5. `DELETE /alunos/5` — excluir o aluno.
6. `GET /alunos/5` — confirmar o retorno `[]`.
7. Reiniciar o servidor e observar que o array retorna aos dados iniciais.

## 14. Documentação da API

Não há Swagger/OpenAPI. Consulte a tabela de rotas e os exemplos deste README.

## 15. Modelo de Dados

Os dados estão em um array de objetos JavaScript:

```text
Aluno
├── id    (número nos registros de exemplo)
├── nome  (texto nos registros de exemplo)
└── curso (texto nos registros de exemplo)
```

Não há entidade persistida, banco de dados ou diagrama entidade-relacionamento nesta etapa. O código não impõe validação de tipos em tempo de execução.

## 16. Regras de Negócio

- A lista inicial contém quatro alunos: Bruno, Maria, Lara e José, todos do curso ADS.
- A inclusão acrescenta ao array o corpo JSON enviado pelo cliente.
- A atualização modifica os campos `nome` e `curso` de um registro localizado por ID.
- A exclusão remove um item pela posição encontrada.
- Os dados permanecem apenas na memória e são recriados a cada reinício da aplicação.

Não há regras implementadas para impedir IDs duplicados, exigir campos ou restringir acessos.

## 17. Extras — Programação Web 2

Não foram adicionados recursos extras como JWT, paginação, Swagger ou Docker. As funções auxiliares `buscarAlunoPorId()` e `buscarIndexAluno()` evitam repetir diretamente as buscas nas rotas; fazem parte da solução atual do exercício.

## 18. Versionamento e Organização das Branches

O padrão da disciplina é `branch_yyyymmdd`, com desenvolvimento semanal e integração à branch principal após a conclusão.

A branch principal deste repositório chama-se **`master`**, e não `main`.

- `branch_20260804`: servidor Express com rota inicial.
- `branch_20260811`: evolução para CRUD em memória (esta etapa).
- `master`: no estado consultado antes desta documentação, aponta para o mesmo commit de `branch_20260811`.

Para acessar esta etapa: `git switch branch_20260811`. A existência das branches não comprova, por si só, que houve um merge registrado.

## 19. Autor

- **Nome:** Luccas Souza Bentim
- **Turma:** Programação Web II — 2026.2 — Noite
- **Unidade Curricular:** Programação Web 2
- **GitHub:** https://github.com/Bentim-Luccas

## 20. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos na Unidade Curricular Programação Web 2 — Senac RJ, destinado ao estudo, à avaliação e ao acompanhamento acadêmico.

O `package.json` declara o identificador de licença `ISC`; este README não substitui o texto integral de uma licença.
