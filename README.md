![Logo App https://app.brandmark.io](./images/logo_qualpock.png)
# _Finanzas personales conscientes_

_**Qualpock**_ es un nombre pegadizo que deriva de las palabras "calidad" y "bolsillo". El nombre hace referencia a la capacidad de la API para ayudar a los usuarios a gestionar sus finanzas personales con comodidad y portabilidad.

https://qualpock-api.onrender.com

# Setup
Para correr el proyecto de manera local

```sh
git clone https://github.com/BioDani/projectWWC.git
```
Navege hasta la carpeta que almacena la versión V.2.1.0 de la aplicación. Ver tag de la aplicación funcional: [release 3: Qualpock V2.1.0 ](https://github.com/BioDani/projectWWC/releases/tag/v2.1.0).

```sh
projectWWC % cd project_V2.0
```
Instale todas las dependencias y paquetes que requiere el proyecto. Para ello deberá contar con el gestor de paquetes de *__node.js__*, __*npm*__. 

```sh
npm install 
```
Cree en la raiz del proyecto `project_V2.0` un archivo `.env` que almacene las variables de entorno que son requeridas.

Use como referencia el archivo [.env.example](project_V2.0/.env.example) que se encuentra en el presente repositorio. 

Adicionalmente, deberá usar la suite de servicios de datos en la nube `MongoDB Atlas` para crear una base de datos en la cual se almacenarán los documentos o collections que son requeridos en el proyecto. 

En caso de que solo quiera usar la aplicación, está se encuentra desplegada a través de Render y puede ser usada a través de plataformas API como `Postman` o `insomnia`. 

[https://qualpock-api.onrender.com](https://qualpock-api.onrender.com/healthcheck).


Finalmente, podrá correr el proyecto en un ambiente local de desarrollo usando `nodemon` así 

```sh
npm run dev
```
O en ambientes de prueba como

```sh
npm run start
```

# 

Adicionalmente, deberá 

1. Crear modelo
2. Usar el modelo en las rutas
3. Usar las rutas para definir los controladores



```bash
npm install express mongoose dotenv 
```

```bash
sudo npm install --save-dev eslint eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise husky lint-staged nodemon prettier
```

```json
{
  "id_user": "60c9e10d8a15e50c3c87a3e0", // ID de usuario existente en la colección 'users'
  "account_name": "Mi cuenta",
  "account_type": "Tipo de cuenta",
  "account_balance": 1000,
  "account_currency": "USD",
  "account_transactions": [
    {
      "initial_value": 1000,
      "transaction_value": -500,
      "account_balance": 500,
      "date_transaction": "2023-06-14T00:00:00Z"
    },
    {
      "initial_value": 500,
      "transaction_value": 200,
      "account_balance": 700,
      "date_transaction": "2023-06-15T00:00:00Z"
    }
  ]
}

```