# Portfolio API
A simple **NodeJS** API for portfolio project powered with **Fastify Framework** and **Prisma ORM**.

## Table of contents

<!-- TOC -->
* [Dependencies](#dependencies)
  * [Production dependencies](#production-dependencies)
  * [Dev dependencies](#dev-dependencies)
* [Routes](#routes)
* [Installation](#installation)
<!-- TOC -->

---

## Dependencies

### Production dependencies

| Nom              | Version   |
|------------------|-----------|
| `fastify`        | `^4.12.0` |
| `@prisma/client` | `^4.9.0`  |
| `dotenv`         | `^16.0.3` |
| `jsonwebtoken`   | `^9.0.0`  |
| `bcryptjs`       | `^2.4.3`  |

### Dev dependencies
| Nom      | Version  |
|----------|----------|
| `prisma` | `^4.9.0` |

## Routes

| Route            | Method | Login   | Properties                                 | Description       |
|------------------|--------|---------|--------------------------------------------|-------------------|
| `/user/register` | `POST` | `false` | `email - string` <br/> `password - string` | Register new user |

## Installation
Create a `.env` file with the structure of the [`.env.example`](./.env.example) file and set the different variables :
```shell
cp .env.example .env
```

Install dependencies :
```shell
npm install
```

Start server :
```shell
npm start
```