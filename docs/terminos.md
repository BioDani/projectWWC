# Terminos y definiciones

### HTTP
Protocolo de comunicación que permite las transferencias de información en la web. 

### Petición
Cliente envia una petición a través del internet al servidor. El servidor la procesa, manda a internet y la retorna al cliente. 

### Métodos
Verbo que indica al servidor lo que se quiere hacer. Estos son: GET, POST, PUT, PATCH y DELETE.

### Cabeceras
Información contextual de la petición, cómo quiero hacer la petición. 

### Cookies
Cabecera para compartir información entre peticiones.

### Cors
Cabecera para manejar información desde url por fuera del servicio. 

### Autenticación
Cabecera para asegurarse si se puede hacer peticiones al servidor. 

### Caché
Cabecerra para gestionar durante cuando tiempo la respuesta será la misma. 

### Estados
Número que indica que ha pasado con una petición
- 200: Ok
- 201: created

Errores del cliente
- 401: Unauthorized
- 403: Forbidden
- 404: Not found

Errores del servidor
- 500: Internal server error


### ORM (Object-Relational Mapping)
Un ORM es una técnica que permite mapear objetos y sus relaciones en una base de datos relacional. Básicamente, el ORM se encarga de traducir las operaciones de lectura y escritura de objetos en operaciones equivalentes en la base de datos. Proporciona una abstracción de la base de datos relacional y permite a los desarrolladores trabajar con objetos en el código fuente de la aplicación sin tener que lidiar directamente con la sintaxis del lenguaje de consulta de la base de datos (como SQL). 

Ejemplo: __Sequelize__,  un ORM de node.js que admite múltiples bases de datos relacionales como MySQL, PostgreSQL, SQLite y MSSQL.

### ODM (Object-Document Mapping) 

Técnica  utilizada en el contexto de bases de datos NoSQL, especialmente en bases de datos orientadas a documentos. Un ODM permite mapear objetos y sus relaciones en documentos almacenados en la base de datos NoSQL. 

Ejemplo: __Mongoose__ para MongoDB. 