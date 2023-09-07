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
