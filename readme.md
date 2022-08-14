
## Documentação da API
`Todas as rodas event são necessario estar logado e passar o bearer token`

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

