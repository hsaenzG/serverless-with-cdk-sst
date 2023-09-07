# serverless-with-cdk-sst
Despliegue de una aplicación serverless junto a la infra estructura relacionada a la app utilizando CDK + SST en stacks independientes


## Aplicacion Serverless
El primer stack "servelessApp" desplegaras una REST API con 3 metodos:

  "GET /notes"
  "GET /notes/{id}"
  "PUT /notes/{id}"

## Infraestructura
El segundo stack desplegara una VPC publica con un EC2 con acceso publico

Este proyecto es un ejemplo base de como se puede implementar el uso de SST en el desarrollo de aplicaciones serverless en conjunto con AWS CDK. 
El cual puede ser integrado a un proceso de CI/CD facilmente.

## Despliegue
Paso 1 - Instalación
```
$ npm install
```
Paso 2 - Despliega en modo dev
```
$ npm run dev
```
Paso 3 - Prueba los endpoints (en los outputs del paso anterior encontrarlas la URL de tu API desplegada.
Paso 4 - Despliegue modo prod
```
$ npx sst deploy --stage prod
```
Paso 5 - ingresa a tu cuenta de AWS y verifica que la VPC se creo al igual que la instancia de EC2

## Limpieza
1. Elimina los recursos creados en este ejercicio
```
$ npx sst remove
```
2. Elimina el ambiente de producción
```
$ npx sst remove --stage prod
```

