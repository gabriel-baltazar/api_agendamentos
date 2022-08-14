
# API de agendamentos

A api foi criada com o intuito de desenvolver e estudar as seguintes tecnologias:
 - Node.JS
 - Docker compose
 - Redis
 - Postgres




## Autores

- [Gabriel Baltazar](https://www.github.com/gabriel-baltazar)


## Documentação da API
`Todas as rotas event são necessario estar logado e passar o bearer token`
`Para o teste de envio de email foi utilizado o mailtrap portanto é necessario configurar as variaveis de ambiente`

#### Retorna todos os eventos

```http
GET /event
```
#### Retorna um evento

```http
GET /event/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | O ID do evento que você quer |

##### Retorno de acordo com o filtro escolhido
 - `proximo` - Retorna o proximo evento
 - `finalizados` - Retorna eventos ja finalizados
 - `id_user` - Retorna todos eventos criados pelo usuario

```http
GET /eventFilter
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `filter`      | `string` | filtro  |

#### Cria um novo evento

```http
POST /event
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` |Nome do evento |
| `image`     | `file`   |Banner do evento |
| `event_date`| `datetime` |Data do evento |
| `location`  | `string` |Localização do evento |
| `phone`     | `int` |Telefone do evento |


#### Atualiza dados de um evento

```http
PUT /event/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` |Id do evento |
| `name`      | `string` |Nome do evento |
| `image`     | `file`   |Banner do evento |
| `event_date`| `datetime` |Data do evento |
| `location`  | `string` |Localização do evento |
| `phone`     | `int` |Telefone do evento |
| `ready`     | `boolean` |Status do evento |


#### Exclui o evento

```http
DELETE /event/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` |Id do evento |

#### Criar um usuário

```http
POST /auth/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` |Nome do usuário |
| `email`      | `string` |Email do usuário |
| `password`      | `string` |Senha do usuário |
| `confirmPassword`      | `string` |Confirmação da senha do usuário |

#### Loga um usuário

```http
POST /auth/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` |Email do usuário |
| `password`      | `string` |Senha do usuário |

#### Desabilita um usuário
```http
DELETE /auth/disable/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` |Id do usuário |
| `email`      | `string` |Email do usuário |

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`

`SECRET`

`MAILTRAP_USER`

`MAILTRAP_PASS`

`REDIS_PASS`


Segue .env e config usado para testes em ambiente local

``` 
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/agendamento?schema=public"
SECRET=ASBAIUSAHSU9NIONAJNISBQ9AOISNIOIYBSILISO

MAILTRAP_USER=338ad51549c2b8 (Necessario gerar suas proprias credenciais)
MAILTRAP_PASS=b0a4fbd48decee (Necessario gerar suas proprias credenciais)
REDIS_PASS=eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81
```


## Instalação

Clone o repositorio
```bash
git clone <link-repositorio>
```

Instale todas as dependencias do projeto
```bash
cd api_agendamentos
npm install
```

Certifique-se de que ja possui docker instaldo em sua maquina e que esta operando
```bash
cd docker
docker compose up -d
```

Rode as migraçoes do prisma
```bash
cd api_agendamentos
npx prisma migrate dev
```

Inicie o servidor

```bash
cd api_agendamentos
npm run dev
```

O servidor estara rodando em seu endereço http://localhost:3000 ou se preferir pode setar uma porta nas variaveis de ambiente 

exemplo:
  `PORT=3030`