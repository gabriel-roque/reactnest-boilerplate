<p align="center">
  <img src="web-app/src/assets/img/logos/reactdonis.png"/>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/reactdonis/deploys"><img src="https://api.netlify.com/api/v1/badges/81d22914-c554-4770-975e-a41ba0ddf776/deploy-status"></a>
  <a href="https://pt-br.reactjs.org/"><img src="https://img.shields.io/badge/ReactJS-16.x-blue"></a>
  <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/Redux-4.0.x-blue"></a>
  <a href="https://github.com/reduxjs/redux-thunk"><img src="https://img.shields.io/badge/Redux Thunk-2.3.x-green"></a>
  <a href="https://reacttraining.com/react-router/web/guides/quick-start"><img src="https://img.shields.io/badge/React Router-5.1.x-blueviolet"></a>
  <a href="https://pm2.keymetrics.io/"><img src="https://img.shields.io/badge/PM2-4.2.x-orange"></a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node-12.x-green"></a>
  <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/Postgress-10-blue"></a>
  <a href="https://adonisjs.com/"><img src="https://img.shields.io/badge/AdonisJS-4.x-blueviolet"></a>
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/NPM-6.x-red"></a>
  <a href="https://www.conventionalcommits.org/en/v1.0.0/"><img src="https://img.shields.io/badge/Commitizen-friendly-green"></a>
</p>

<hr>

## ⚓ Summary

- [Introduction](#-introduction)
  - [Motivation](#-motivation)
- [Minimal Requirements](#minimal-requirements)
- [Features](#-features)
  - [Ngnix](#ngnix)
  - [PM2](#pm2)
  - [JWT](#jwt)
  - [Redux + Redux Thunk](#redux)
  - [React Router](#react-router)
  - [Commitlint](#commitlint)
- [Install](#-install)
  - [Development](#-development)
  - [Production](#-production)
  - [Run App](#-run-app)
- [Web-App](#-web-app)
  - [Why Typescript](#why-typescript)
  - [File directory](#file-directory)
  - [Style Guide](#style-guide)
- [References](#-references)

## 💡 Introduction

A starter project template with (Ngnix, ReactJS, Redux, Redux Thunk, React Router, AdonisJS, PostgreSQL, Docker, PM2) + (Conventional Changelog with Commitlint, Husky, Git CZ)

### 🏃 Motivation

🇺🇸 **EUA**

You may not want to set up a project from scratch, so decide to look for some base templete to design your system without having to deal with many configurations. So maybe ReactDonis is a good alternative for you and your team. The motivation is to share a pre-modeled structure where you can start your project in a few minutes and modify it according to the needs of your project.

ReactDonis does not seek to be a silver bullet (only solution) for all projects, but rather to provide an initial model for the construction of projects.

🇧🇷 **PT-BR**

Talvez você não queira configurar um projeto do zero, então resolve procurar algum templete base para projetar seu sistema sem ter que lidar com muitas configurações. Então talvez o ReactDonis seja uma boa alternativa para você e seu time. A motivação está em compartilhar uma estrutura pré modelada onde você pode começar seu projeto em poucos minutos e modificar conforme as necessidades do seu projeto.

O ReactDonis não procura ser uma bala de prata (única solucação) para todos os projetos e sim prover um modelos inicial para a construção de projetos.

## 🎉 Features

#### Ngnix

🇺🇸

Ngnix comes with a basic configuration, for more configurations just open the `default.conf` file in the `ngnix/config/default.conf` directory of this project. For more details on Ngnix settings access the documentation <a href="https://nginx.org/en/docs/" target="_blank">here</a>

🇧🇷

O Ngnix vem com uma configuração básica, para mais configurações basta abrir o arquivo `default.conf` no diretório `ngnix/config/default.conf` deste projeto. Para mais detalhes sobre configurações do Ngnix acesse a documenteção <a href="https://nginx.org/en/docs/" target="_blank">aqui</a>

**default.conf**

```
├── ngnix
│   └── config
│       └── default.conf
```

```
server {
  listen 80;
	index index.html;
	server_name localhost;
	error_log  /var/log/nginx/error.log;
	access_log /var/log/nginx/access.log;
	root /var/www/html;

  location / {
    try_files $uri /index.html =404;
  }
}
```

[🔝 back to top](#-summary)

#### PM2

🇺🇸

The use of PM2 is only used in **production configurations**. PM2 is an advanced manager for nodejs processes. You can learn more about PM2 and its features <a href="https://pm2.keymetrics.io/" target="_blank">here</a> The PM2 configuration file can be found at `api/ecosystem.config.js`

🇧🇷

O uso do PM2 é somente utilizado em **configurações para produção**. O PM2 é um gerenciador avançado para processos nodejs. Você pode saber mais sobre o PM2 e suas funcionalidades <a href="https://pm2.keymetrics.io/" target="_blank">aqui</a>. O arquivo de configuração do PM2 se encontra em `api/ecosystem.config.js`

**ecosystem.config.js**

```js
module.exports = {
  apps: [
    {
      name: 'api',
      script: 'server.js',

      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
```

🇺🇸

When running in production you will get a result similar to 2 instances of the API managed by PM2. Through the `npx pm2 monit` command, the PM2 monitored over the API will be displayed on your terminal.

🇧🇷

Ao executar em produção você terá um resultado semelhante a 2 instâncias da API gerenciada pelo PM2. Através do comando `npx pm2 monit` será exibido em seu terminal o monitorado do PM2 sobre a API.

<p align="center">
  <img src="web-app/src/assets/github/pm2-cluster.png">
  <img src="web-app/src/assets/github/pm2-monit.png">
</p>

[🔝 back to top](#-summary)

#### JWT

In comming...

#### Redux + Redux Thunk

In comming...

#### React Router

In comming...

#### Conventional Changelog

This project has tools that apply the standards provided for in **RFC 2119** for code change message standardization conventions. To learn more about the tools, we recommend accessing their own documentation.

Este projeto possui ferramentas que aplicam as normas previstas na **RFC 2119** pra convenções de padronização de mensagens de alteração de código. Para saber mais sobre as ferramentas recomendamos acessar sua própria documentação.

| Tools & RFC                                                              |
| ------------------------------------------------------------------------ |
| [Commitlint](https://github.com/conventional-changelog/commitlint)       |
| [Husky](https://github.com/typicode/husky)                               |
| [Git CZ](https://github.com/commitizen/cz-cli)                           |
| [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt)                         |
| [Conventional Changelog](https://www.conventionalcommits.org/en/v1.0.0/) |

[🔝 back to top](#-summary)

## 📝 Minimal Requirements

- NodeJs 12.x
- Docker 18.x
- Docker-compose 1.25.x

## 🚀 Install

```
$ git clone https://github.com/gabriel-roque/react-donis-docker-starter
$ cd react-donis-docker-starter
```

### 🔧 Configure in development

```
$ ./entrypoint-dev.sh
```

### 🔧 Configure in production

```
$ ./entrypoint-prod.sh
```

## 📈 Run app

```
$ cd web-app && npm start
$ docker-compose up -d
```

[🔝 back to top](#-summary)

> Check **web-app** in http://localhost:3000/ for _**DEVELOPMENT**_

> Check **web-app** in http://localhost/ for _**PRODUCTION**_

> Check **api** in http://localhost:8080

## 🖥️ Web-App

### Why Typescript

In comming...

### File directory

<hr>

**Core**

🇺🇸

The core module should contain only parts of your application that have no relation to a business rule. Services or singleton instances should also be allocated to the core module, that is, they will only have a single instance in the entire application.

_How to define?_

**Question**: How do I know what to put in the core module or not?

**Answer**: Simple, ask yourself the following question. If I put this here can I use it in another project easily without many complications and without containing any business rules?

If so, this part of the application can be easily maintained in the core, if the answer is no, it should be attached to the module that the business rule corresponds to.

🇧🇷

O môdulo core deve conter somente partes da sua aplicação que não possuem nenhuma relação com regra de negócio. Também deve ser alocado ao core module serviços ou instâncias singleton, isto é que só terão apenas uma única instância em toda a aplicação.

_Como definir?_

**Questão**: Como saber o que devo colocar ou não no môdulo core?

**Resposta**: Simples, se faça a seguinte pergunta. Se eu colocar isso aqui eu posso usar em outro projeto facilmente sem muitas complicações e sem conter alguma regra de négocio?

Se sim, esta parte da aplicação pode ser matinda facilmente na core, caso a resposta seja não ela deverá ficar juntamente ao môdulo que a regra de negócio corresponde.

<hr>

### Style Guide

Reduza o caminho de importação usando arquivos index como agregadores.

Nome de componentes página devem usar o sufuxo [Login**Page**]

**Assets**

**Configs**

**Core**

**Layouts**

**Modules**

**Name Files**

In comming...

Se o seu componente possui regra negócio, ele não deverá ficar aqui e sim dentro dos componentes do módulo a que a regra de negócio se referência.

## 👤 Authors

| Gabriel Roque                                                                       |
| ----------------------------------------------------------------------------------- |
| <img src="https://avatars2.githubusercontent.com/u/32438220?s=460&v=4" width="110"> |
| <a href="https://github.com/gabriel-roque">Github</a>                               |
| <a href="https://www.linkedin.com/in/gabriel-roque/">Linkedin</a>                   |

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/gabriel-roque/react-donis-docker-starter/issues).

## Show your support

Give a ⭐️ if this project helped you!

<p align="center">
  <img src="https://raw.githubusercontent.com/gabriel-roque/design/master/logo-gabriel-roque.png" width="200"/>
</p>

## ⛳ References

[KISS (Keep it Simple and Stupid)](https://medium.com/@devisha.singh/the-kiss-principle-in-software-development-everything-you-need-to-know-dd8ea6e46bcd) |
[NGNIX](https://nginx.org/en/docs/) |
[Commitlint](https://github.com/conventional-changelog/commitlint) |
[Husky](https://github.com/typicode/husky) |
[Git CZ](https://github.com/commitizen/cz-cli) |
[RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) |
[Conventional Changelog](https://www.conventionalcommits.org/en/v1.0.0/) |

[🔝 back to top](#-summary)
