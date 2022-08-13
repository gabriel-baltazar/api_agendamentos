Seu desafio será uma API para criação de agendamentos em Nodejs utilizando express.
Banco de dados: Postgres
ORM: Prisma (recomendado, não obrigatório)

Requisitos solicitados:
- Seu projeto precisa estar no github
- Pelo menos 2 branches ( uma dev e a master )
- Cada funcionalidade deve estar em um commit*
- Você deve seguir a padronização de conventional commits
- Tentar criar uma estrutura de pastas que faça sentido caso você precise implementar mudanças/atualizações, e para dividir as funcionalidades
- Utilizar código simples, mas descritivo, colocando a melhor nomenclatura de variáveis, funções e etc

A api deve ter 7 rotas sendo:
 - [X] Cadastro de usuário
 - [X] Login de usuário
 - [X] CRUD dados usuário
 - [X] CRUD de eventos
 - [X] A rota de Delete deve apenas setar o usuário como desativado, já para eventos, deve deletar todo o eventos e relacionados
 - [X] O evento muda para ready via update ou se estiver à 48h de acontecer

Usuário:
 - [X] Extra: O usuário precisa estar logado para interagir com eventos
 - [X] Extra: A senha ser salva criptografada 
 - [X] Extra: O login deve retornar um JWT com data de expiração
 - [X] Extra: O email deve ser único

Evento:
 - [X] Extra: O nome do evento deve ser unico
 - [X] Extra: A imagem pode ser enviada como multipart form data, sendo salva em uma pasta local ( Salve a referencia em id da imagem no postgres como texto, e crie uma collection no Redis com id:image para referenciar a imagem)
 - [X] Extra: Rota que permite filtrar qual é o evento mais próximo de acontecer, ou quais já foram finalizados, ou quais eventos um usuário tem
 - [ ] Extra: Envie um email (simples) para o usuário sobre o evento dele estar pronto para acontecer

* - Funcionalidade é tudo que engloba uma funcionalidade da API, por exemplo, a conexão com o banco de dados pode ser uma funcionalidade, ou todo processo de Create funcionando pode ser considerado uma funcionalidade
[15:00, 31/07/2022] Juliano Ventola (Mentoria): A data de entrega do seu desafio é dia 12/08, caso você precise de mais tempo, por favor me avise, que alongamos sem problemas. Caso você consiga finalizar antes, por favor me avise
