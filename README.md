# 💰 Boas vindas ao repositório do projeto API de Investimentos! 💰

Este projeto surgiu a partir do desafio técnico de back-end para o processo seletivo da <a href="https://www.xpinc.com/">XP Inc.</a>.
Teve como proposta o desenvolvimento de uma aplicação que se assemelha ao dia a dia da XP – um aplicativo de investimento em ações, com algumas
funcionalidades de conta digital.

## 🔌 Tomadas de decisão

Desenvolvi a presente aplicação em JavaScript e Node.js, pensando na usabilidade das linguagens e compatibilidade com navegadores modernos.
Para criar ambientes isolados, utilizei o Docker – para empacotar toda a aplicação e suas dependências, facilitando assim sua distribuição.
Desenvolvi a API utilizando ORM Sequelize, para suportar diferentes dialetos de bancos de dados.
Para facilitar a manutenção e adição de novos recursos reaproveitando o código, segui o padrão de arquitetura MSC _(Models – Services – Controllers)_.
Por fim, utilizei o ESLint para padronizar a indentação do código e minimizar erros.

## 🎬 Executando o projeto
<details>
  <summary><strong>👍 🐋 Com Docker</strong></summary>
  <br/>

  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Esses serviços irão inicializar um container chamado `invest_api` e outro chamado `invest_api_db`;

  - A partir daqui você pode rodar o container `invest_api` via CLI ou abri-lo no VS Code, por exemplo;

  > :information_source: Use o comando `docker exec -it invest_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências com `npm install`. (Instale dentro do container).
  
  👉 **DENTRO do container**, você pode executar os seguintes comandos:
  
  - `npm run prestart`: para gerar as migrations do `invest_api_db`;
  
  - `npm run seed`: para gerar os seeders do `invest_api_db`;

  - `npm run dev`: para rodar a aplicação na porta `3000` pelo `nodemon`;
  
  - `npm run drop`: para dropar o `invest_api_db`.

</details>
<details>
  <summary><strong>👎 🐋 Sem Docker</strong></summary>
  <br/>

  > :information_source: É necessário que você tenha `npm`, `node` e `MySQL` instalados na sua máquina.

  > :information_source: Instale as dependências com `npm install`.

  > :information_source: Rode a aplicação com `npm run dev` na porta `3000` pelo `nodemon`, ou adapte o `.env` caso queira.
  
</details>
<details>
<summary><strong>🔐 .env.example</strong></summary><br/>
  
> :information_source: No arquivo `.env.example` contém as variáveis de ambiente utilizadas nesta aplicação. Faça uma cópia e renomeie-a apenas para `.env`, em seguida insira os valores nas variáveis de ambiente conforme sua utilização.
  
</details>

## 🔖 Endpoints
<details>
  <summary><strong>👣 Rotas e funções</strong></summary>
  <br/>
  
  | Rotas | Funções |
  |---|---|
  | `/investimentos/comprar` | Envia a ordem de compra do ativo |
  | `/investimentos/vender` | Envia a ordem de venda do ativo |
  | `/ativos/cliente/:id` | Lista todos os ativos da carteira do cliente |
  | `/ativos/:id` | Lista todos os ativos da corretora |
  | `/conta/deposito` | Realiza um depósito na conta do cliente |
  | `/conta/saque` | Realiza um saque da conta do cliente |
  | `/conta/:id` | Lista o cliente e o saldo disponível na conta |

</details>
  
## 🤖 Tecnologias utilizadas

  - [`Node.js`](https://nodejs.org/)
  - [`JavaScript`](https://www.javascript.com/)
  - [`Docker`](https://www.docker.com/)
  - [`MySQL`](https://www.mysql.com/)
  - [`Express`](https://expressjs.com/)
  - [`Sequelize`](https://sequelize.org/)
  - [`ESLint`](https://eslint.org/)

## 🙏 Agradecimentos

Obrigada <a href="https://betrybe.com">Trybe</a> e <a href="https://www.xpinc.com/">XP Inc.</a>, por me proporcionarem esta e**XP**eriência enriquecedora! 🚀
