# API REST Node.js Express Livraria

## Descrição

Este projeto é uma API REST para gerenciar uma livraria, construída com Node.js e Express. Ele segue boas práticas de programação, garantindo um código organizado e de fácil manutenção.

## Funcionalidades

- **Gerenciamento de Livros:** Criação, leitura, atualização e exclusão de livros.
- **Gerenciamento de Autores:** Criação, leitura, atualização e exclusão de autores.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no lado do servidor.
- **Express:** Framework web para Node.js.
- **Mongoose:** ORM (Object-Relational Mapping) para acesso ao banco de dados.

## Instalação

### Pré-requisitos

- Node.js v18 ou superior instalado

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/Ygor-Evaldt-dev/api-rest-nodejs-express-livraria.git
   cd api-rest-nodejs-express-livraria
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `.env`:
   ```env
   DATABASE_URL="sua_url_de_conexão_do_banco_de_dados"
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

6. A API estará disponível em `http://localhost:3000`.

## Endpoints Principais

### Livros

- **POST /books:** Cria um novo livro.
- **GET /books:** Lista todos os livros.
- **GET /books/:id:** Retorna um livro específico.
- **GET /books/:search:** Retorna todos os livros por filtro específico.
- **PUT /books/:id:** Atualiza um livro.
- **DELETE /books/:id:** Deleta um livro.

### Autores

- **POST /authors:** Cria um novo autor.
- **GET /authors:** Lista todos os autores.
- **GET /authors/:id:** Retorna um autor específico.
- **PUT /authors/:id:** Atualiza um autor.
- **DELETE /authors/:id:** Deleta um autor.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- [LinkedIn](https://www.linkedin.com/in/ygor-evaldt/)
- evaldtygor@gmail.com
