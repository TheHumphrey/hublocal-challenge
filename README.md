# HubLocal Challenge

Este é um desafio para testar as minhas habilidades como Fullstack Developer.

> This is a challenge by [Coodesh](https://coodesh.com/)

## Decições tomadas durante do desenvolvimento:

- Decidi iniciar o projeto pelo frontend, deixando apenas o design pronto.
- Após terminar todo o design do frontend iniciei o backend.
- Para o sistema de autenticação decidi utilizar a estrategia de retornar um token valido por 30 dias para o cliente utilizando JWT.
- Para armazenar as senhas do usuários no bancos de dados eu utilizei bcrypt para transformar elas em hash utilizando um salto de ate 10. Fazendo isso
  caso o banco de dados venha a vazar as senhas serão uma hash que não da pra fazer a engenharia reversa e que uma unica senha possa ter ate mesmo 10 hash validas dificultando tentativas de quebras de senhas atraves de bruteforce.
- Após terminar toda a parte de autenticação coloquei proteção em todos os outros endpoints que serão desenvolvidos (empresa,locais), sendo necessario enviar um
  token valido para conseguir uma resposta de sucesso do backend.
- Ao terminar todo o backend voltei para o frontend e corrigi algumas falhas e fiz a integração com o backend.

## Tecnologias (Front-End):

- [React](https://pt-br.reactjs.org/)
- [React Router Dom](https://reactrouter.com/en/main)
- [React Cookie](https://www.npmjs.com/package/react-cookie)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Styled Components](https://styled-components.com/)
- [Use Context Selector](https://github.com/dai-shi/use-context-selector)
- [Material Ui (MUI)](https://mui.com/)
- [Material UI Icons (MUI)](https://mui.com/material-ui/material-icons/)
- [Typescript](https://www.typescriptlang.org/)

## Tecnologias (Back-End):

- [Node](https://nodejs.org/en/)
- [Nest](https://nestjs.com/)
- [JWT](https://jwt.io/)
- [PassPort](https://www.npmjs.com/package/passport)
- [Prisma](https://www.prisma.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Class Transformer](https://github.com/typestack/class-transformer)
- [Class Validator](https://www.npmjs.com/package/class-validator)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/pt-BR/)

## Como Rodar o projeto

### 1° Passo **Instalando as dependecias**

1. Baixe e instale a versão LTS do [NodeJS](https://nodejs.org/en/)
2. Baixe e instale o [git](https://git-scm.com/)
3. Após instalar o git execute o seguinte comando na pasta que deseja clonar o projeto:

```
  git clone https://github.com/TheHumphrey/einstein-challanger.git
```

se tiver uma ssh utilize o seguinte comando:

```
  git clone git@github.com:TheHumphrey/einstein-challanger.git
```

4. Abra o projeto no Visual studio Code (VSCode).
5. Abre um Terminal e utilize o seguintes comandos:

```
  cd backend
```

6. Instale as dependencias do backend com o seguinte comando:

**Com NPM**

```
  npm install
```

**Com Yarn**

```
  yarn
```

7. Baixe e instale o [docker](https://www.docker.com/)

8. Reinicie o Computador (caso o docker tenha sido instalado agora).

9. Abra novamente o terminal no backend (passo 5) e execute o seguinte comando:

```
  docker-compose up
```

10. Abra um novo terminal e execute o seguinte comando:

```
  cd frontend
```

11. Instale as dependencias do frontend com o seguinte comando:

**Com NPM**

```
  npm install
```

**Com Yarn**

```
  yarn
```

### 2° Passo **Executando a aplicação**

1. No terminal do backend que esta aberto execute o seguinte comando:

**Com NPM**

```
  npm run start:dev
```

**Com Yarn**

```
  yarn start:dev
```

2. No terminal do frontend que esta aberto execute o seguinte comando:

**Com NPM**

```
  npm run dev
```

**Com Yarn**

```
  yarn dev
```

3. Acesso o endereço http://localhost:5173

## Rotas da api

### Autenticação

**/user/create**

Tipo: [POST]
Exemplo de envio:

```json
{
  "name": "Nome",
  "email": "teste@teste.com",
  "password": "Teste@1234"
}
```

**/login**

Tipo: [POST]
Exemplo de envio:

```json
{
  "email": "teste@teste.com",
  "password": "Teste@1234"
}
```

### Empresas

**/app/companies**
Tipo: [GET]

**/app/companies**
Tipo: [POST]
Exemplo de envio:

```json
{
  "cnpj": "11.111.111/0001-11",
  "name": "Teste",
  "website": "www.teste.com"
}
```

**/app/companies/:id**
Tipo: [PUT]
Exemplo de envio:

```json
{
  "cnpj": "11.111.111/0001-11",
  "name": "Teste",
  "website": "www.teste.com"
}
```

**/app/companies/:id**
Tipo: [DELETE]

### Locais

**/app/location**
Tipo: [GET]

**/app/location**
Tipo: [POST]
Exemplo de envio:

```json
{
  "name": "Local Teste",
  "cep": "11111111",
  "street": "Rua teste",
  "number": "SN",
  "district": "Teste",
  "city": "Teste",
  "state": "Teste"
}
```

**/app/location/:id**
Tipo: [PUT]
Exemplo de envio:

```json
{
  "name": "Local Teste",
  "cep": "11111111",
  "street": "Rua teste",
  "number": "SN",
  "district": "Teste",
  "city": "Teste",
  "state": "Teste"
}
```

**/app/location/:id**
Tipo: [DELETE]

## Imagens da aplicação

### Login

![alt text](https://i.postimg.cc/VkNtrHfZ/login.png)

---

### Cadastro

![alt text](https://i.postimg.cc/9MP0NGXq/cadastro1.png)

---

### Minhas empresas sem empresa cadastrada

![alt text](https://i.postimg.cc/BbQSYkwd/empresavazia.png)

---

### Modal de cadastro de empresa

![alt text](https://i.postimg.cc/HsrHrwG4/modalcadastroempresa.png)

---

### Minhas empresas com empresa cadastrada

![alt text](https://i.postimg.cc/2yqJSxq1/empresascomumacadastrada.png)

---

### Modal de editar empresa

![alt text](https://i.postimg.cc/g0HrgV2L/editarempresa.png)

---

### Modal de deletar empresa

![alt text](https://i.postimg.cc/tJWgVWwg/deletarempresa.png)

---

### Locais sem local cadastrado

![alt text](https://i.postimg.cc/XYJ0R9Ly/locais.png)

---

### Modal de cadastro de local

![alt text](https://i.postimg.cc/gJnjGnWg/adicionarlocal.png)

---

### Local com um cadastrado

![alt text](https://i.postimg.cc/Wp8WBz4B/localcomumcadastrado.png)

---

### Editar local cadastrado

![alt text](https://i.postimg.cc/mZmjdnXR/localeditar.png)

---

### Deletar local cadastrado

![alt text](https://i.postimg.cc/KY7rtpk6/localdeletar.png)
