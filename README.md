# API REST com Express — Servidor Inicial

**Projeto:** `api-rest-express-progweb2`  
**Etapa:** `branch_20260804`

API RESTful introdutória desenvolvida para demonstrar a criação de um servidor HTTP com Node.js e Express e a configuração de uma rota inicial.

## 1. Descrição

Este projeto foi desenvolvido na Unidade Curricular Programação Web 2 do Senac RJ. Seu objetivo é demonstrar a estrutura mínima de uma API Express: inicializar um servidor HTTP e responder à rota raiz com uma mensagem. Pode ser acessado por navegadores e clientes HTTP, como Bruno e Insomnia. Nesta etapa, não há cadastro de registros.

## 2. Funcionalidades

- Inicializar um servidor HTTP na porta `3000`.
- Responder à rota `GET /` com a mensagem `Minha API REST com Express`.
- Reiniciar automaticamente o processo em desenvolvimento usando Nodemon.

## 3. Tecnologias Utilizadas

- Node.js e JavaScript (ES Modules).
- Express 5 (`^5.2.1` no `package.json`).
- Nodemon (`^3.1.14`, dependência de desenvolvimento).
- npm e Git.

Não utiliza banco de dados, Docker, Prisma, JWT nem Swagger.

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

- `src/app.js`: cria o aplicativo Express e define a rota raiz.
- `server.js`: importa o aplicativo e inicia o servidor na porta `3000`.
- `package.json`: define dependências e o script de desenvolvimento.
- `package-lock.json`: registra as versões resolvidas das dependências.
- `.gitignore`: impede que arquivos locais, como `node_modules/` e `.env`, sejam enviados ao Git.

O projeto ainda não separa rotas em controllers, services ou repositories.

## 5. Pré-requisitos

- Node.js e npm.
- Git para clonar o repositório.

Não é necessário ter MySQL ou Docker instalado.

## 6. Instalação

### 6.1 Clone o repositório

```bash
git clone https://github.com/Bentim-Luccas/api-rest-express-progweb2.git
```

### 6.2 Acesse a pasta do projeto e selecione a branch

```bash
cd api-rest-express-progweb2
git switch branch_20260804
```

### 6.3 Instale as dependências

```bash
npm ci
```

O comando `npm ci` usa o `package-lock.json` já versionado. `npm install` também pode instalar as dependências, mas pode atualizar o lockfile.

## 7. Configuração das Variáveis de Ambiente

Esta etapa **não utiliza variáveis de ambiente**. A porta `3000` está definida diretamente em `server.js`; não é necessário criar `.env`.

O `.gitignore` já ignora `.env` para proteger possíveis configurações futuras.

## 8. Execução do Projeto

**Desenvolvimento:**

```bash
npm run dev
```

O script executa `nodemon server.js`.

**Execução direta:**

```bash
node server.js
```

O `package.json` não define um script `npm start` nesta etapa. Após iniciar, acesse `http://localhost:3000/`. Para encerrar, pressione `Ctrl + C`.

## 9. Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/` | Retorna a mensagem inicial da API. |

## 10. Exemplos de Requisição e Resposta

**Requisição:**

```http
GET / HTTP/1.1
Host: localhost:3000
```

**Resposta:** `200 OK`, corpo em texto simples:

```text
Minha API REST com Express
```

## 11. Autenticação

Não foi implementada autenticação. A rota é pública.

## 12. Tratamento de Erros

Não há tratamento de erros personalizado. O projeto utiliza o comportamento padrão do Express e não define respostas JSON padronizadas para falhas.

## 13. Testes

Ainda não há testes automatizados. O script `npm test` é o placeholder gerado pelo npm e termina com erro intencionalmente.

**Teste manual:** inicie a aplicação e acesse `GET http://localhost:3000/` no navegador, Bruno ou Insomnia. Confirme a mensagem inicial.

## 14. Documentação da API

Não há Swagger/OpenAPI. A única rota está descrita nas seções 9 e 10 deste README.

## 15. Modelo de Dados

Não há entidades, modelos ou armazenamento de dados nesta etapa.

## 16. Regras de Negócio

O único comportamento implementado é retornar uma mensagem fixa para a rota `GET /`. Não há regras de cadastro, validação ou autorização.

## 17. Extras — Programação Web 2

Não foram implementadas funcionalidades extras além do escopo inicial da atividade. A separação entre configuração (`app.js`) e inicialização (`server.js`) integra a organização básica aprendida.

## 18. Versionamento e Organização das Branches

A disciplina utiliza branches semanais no formato `branch_yyyymmdd`. O professor orienta integrar as atividades à branch principal após a conclusão.

Neste repositório, a branch principal existente chama-se **`master`**, e não `main`.

- `branch_20260804`: servidor Express e rota inicial (esta etapa).
- `branch_20260811`: evolução para CRUD de alunos em memória.
- `master`: branch principal.

Para acessar esta etapa: `git switch branch_20260804`. A existência dessas branches não comprova, isoladamente, que houve merge.

## 19. Autor

- **Nome:** Luccas Souza Bentim
- **Turma:** Programação Web II — 2026.2 — Noite
- **Unidade Curricular:** Programação Web 2
- **GitHub:** https://github.com/Bentim-Luccas

## 20. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos na Unidade Curricular Programação Web 2 — Senac RJ, destinado ao estudo, à avaliação e ao acompanhamento acadêmico.

O `package.json` declara o identificador de licença `ISC`. Este README não substitui o texto integral de uma licença.
