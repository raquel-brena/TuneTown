# TuneTown - Web I

<p align="center">
  <img src="https://github.com/raquel-brena/TuneTown/assets/108936463/03cf6ac1-26af-4b77-853d-7845f42e3695" width="150" title="TuneTown logo">
  <div align="center">
    <a href="https://www.figma.com/file/iVpO60XiZhKMpQHhY1grHQ/TuneTown%2C-web?type=design&node-id=227%3A1116&mode=design&t=xxiYHaZKLoFouYhh-1" title="Figma Project"> 🎨 Figma Project</a> ·
    <a href="https://github.com/raquel-brena/TuneTown/issues" title="Report Bug"> Report Bug</a> ·
    <a href="https://github.com/raquel-brena/TuneTown/issues" title="Request Feature">Request Feature</a>
  </div>
</p>

## Description

TuneTown is a simple application for friends to connect and share their favorite songs using the Spotify API. This is a project for the Web Development I course. This is the backend! Find the frontend here:

![cover](https://github.com/raquel-brena/TuneTown-backend/assets/108936463/4dd0dd80-26fc-42c2-8af7-cfff32b03e6d)


## Como Executar

Para executar este projeto localmente, siga as instruções abaixo:

### Pré-requisitos

- Docker e Docker Compose instalados

### Passos

#### 1. Clone este repositório em seu computador:

```
git clone git@github.com:raquel-brena/web1.git
```

#### 2. Navegue até o diretório do projeto:

```
cd web1
```

#### 3. Execute o comando abaixo para iniciar o projeto :

*Na primeira execução, é necessário construir as imagens:*

```
docker-compose up --build
```
*Após isso, basta executar normalmente (O "-d" serve para rodar o projeto em segundo plano):*
```
docker-compose up -d
```
*Para verificar se os contêineres estão em execução:*
```
docker-compose ps
```

#### 4. Acesse a aplicação em seu navegador através do seguinte endereço:

```
http://localhost:3000
```
