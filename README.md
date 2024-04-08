# Rede Social Simples - Desenvolvimento de Sistemas Web I

Este é um projeto simples de uma rede social desenvolvido como parte do curso "Desenvolvimento de Sistemas Web I" na Universidade Federal do Rio Grande do Norte (UFRN).

## Descrição do Projeto

Aplicação web de uma rede social simples construída utilizando React.js com Vite como bundler.

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
