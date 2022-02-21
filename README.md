[Nest](https://github.com/nestjs/nest)

## Instalación

```bash
$ npm install
```

## Correr la app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## NestJS

Es un framework basado en Express que te permite generar un proyecto limpio y bien armado. Sigue la regla de *convention-over-configuration*.

Request -> Controller -> services

Cuando a una clase FooController le ponemos el decorator Controller, le pasamos por string la url que va a escuchar y Nest internamente hace un mapeo para saber qué URL va para cada controller.

Dentro del controller definimos los métodos get,post,delete usando decorators. Podemos anidar rutas como /foo/bar pasando un string dentro del decorator GET, POST, etc.

### Migraciones

```bash
# Generar migraciones en base al diff (primero hacer npm run build !)
$ npx typeorm migration:generate -n SchemaSync

# Correr migraciones
$ npx typeorm migration:run

# Revert
$ npx typeorm migration:revert
```

### Injección de dependencias

La idea de injección de dependencias sigue la técnica [inversion of control (IoC) ](https://en.wikipedia.org/wiki/Inversion_of_control) para delegar la inicialización de instancias en lugar de definirlas dentro de la misma clase. 

[Info 1 - doc oficial](https://docs.nestjs.com/fundamentals/custom-providers)

[Info 2 - post de Medium](https://medium.com/geekculture/nestjs-and-dependency-injection-3ce0886148c4)

### Testing

[Info](https://docs.nestjs.com/fundamentals/testing)
