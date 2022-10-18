<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <h1 align="center">Pokedex App</h1>


## Instalación

```bash
$ yarn install
```

## Configuración

1. Tener Nest CLI instalado
```bash
$ npm i -g @nestjs/cli
```
2. Instalar y correr [Docker Desktop](https://www.docker.com/products/docker-desktop/), enseguida correr.
```bash
$ docker-compose up -d
```
3. Configurar las variables de entorno en ```.env``` (utiliza ```.env.example``` como plantilla).
```bash
# puerto donde corre la app
PORT=3000

# cadena de conexion MongoDB
MONGODB_CNN=mongodb://localhost:27017/nest-pokemon

# limite de registros en consulta de pokemons
DEFAULT_LIMIT=10
```

## Corriendo la app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
>**Nota:** En modo desarrollo puedes ejecutar el endpoint http://localhost:3000/api/v2/seed para reconstruir la base de datos.

## Dockerización de la app
### Build
```bash
$ docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

### Run
```bash
$ docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```
>**Nota:**
Por defecto, __docker-compose__ usa el archivo ```.env```, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con
```
docker-compose -f docker-compose.prod.yaml up --build
```