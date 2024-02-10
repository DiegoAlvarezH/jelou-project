# Proyecto para Jelou 

## Ejercicio logica de arrays

![score](https://github.com/DiegoAlvarezH/jelou-project/blob/main/score.png)

## Solucion preguntas seleccion multiple

1. **a. GET**

> [!NOTE]
> Se debería escoger el método "GET" porque solo queremos obtener datos sin cambiar nada. En el rápido mundo de las criptomonedas, "GET" es como preguntar y recibir sin perder tiempo alterando información.

2. **b. /contacts/{contact_id}**

> [!NOTE]
> Se debería elegir la ruta "/contacts/{contact_id}" porque facilita a los clientes la obtención de información de un solo contacto y es lo suficientemente flexible para adaptarse a posibles cambios futuros en el software.

3. **b. 403 if the user doesn't exist, and 401 if the password is wrong.**

> [!NOTE]
> Esta opción utiliza el código de estado HTTP 403 cuando el usuario no existe, lo que indica un acceso prohibido, y el código 401 cuando la contraseña es incorrecta, indicando una falta de autenticación.

4. **a. TRUE**

> [!NOTE]
> Se debe usar un UUID ficticio en el ejemplo de código como guía visual para mostrar cómo debe ser el formato real de un UUID en el sistema, proporcionando claridad a los usuarios sobre la estructura esperada. Para mantener nuestras key seguras y evitar problemas de seguridad.

5. **b. Check for the presence of an error. If it exists, throw an exception with the error** 

> [!NOTE]
> Esto se debe a que "throw" interrumpe la ejecución normal del código y permite un manejo más efectivo de las situaciones de error.

6. **b. Make a trait to handle errors so it'll collect errors in any class that uses it.**

> [!NOTE]
> Implementar un trait para manejar errores es beneficioso ya que centraliza la lógica de manejo de errores en un lugar, permitiendo su reutilización en múltiples clases.

7. **b. loopProductsAndParse()**

> [!NOTE]
> Esta opción describe de manera clara y concisa la acción principal del método, que es iterar sobre productos y realizar el análisis de datos.

8. **b. Put them in a configuration file, then include that file in the code everywhere that needs to access the database.**

> [!NOTE]
> Esta es la forma mas segura, ya que tienes un archivo de configuracion (.env) para inicializar variables de acceso que puedes utilizar en cualquier parte de nuestro proyecto.

# Coding Excercise

## Problem: Detalles de la API - JelouBlog

[Coleccion Postman](https://drive.google.com/file/d/1Ng2Qys-r4CnPoFizImzKWY9sqUQ0vpfd/view?usp=sharing)

### Nota: se implemento el paquete cookie-parser, tener en cuenta a la hora de probar en su cliente eje: postman. recuerda que las cookies se agregan manualmente.

Esto nos ayuda a personalizar nuestro contenido y tambien almacenar nuestras funciones de manera directa.

### CRUD usuarios

Puedes crear usuarios, editar, leer, eliminar mediante la api. (recuerda donde se ejecuta tu servidor) por defecto el proyecto se esta ejecutando en el puerto 4000.

Registrar usuarios (POST):

```bash
 Ruta: http://localhost:3000/api/auth/register
```

```bash
 Body(cuerpo JSON):
{
"email": "test1@gmail.com",
"password": "test123",
"username": "test123"
}
```

Login/Leer usuarios (POST):

```bash
 Ruta: http://localhost:3000/api/auth/login
```

```bash
 Body(cuerpo JSON):
{
"email": "test1@gmail.com",
"password": "test123",
}
```

Actualizar usuarios (PUT):

```bash
 Ruta: http://localhost:4000/api/auth/update-user
```

```bash
 Body(cuerpo JSON):
{
  "username": "nuevo123",
  "email": "nuevo@gmail.com"
}
```

Agregar nuestro bearer token de login

```bash
Bearer
```

Eliminar usuarios (DELETE):

```bash
 Ruta: http://localhost:4000/api/auth/delete-user
```

Agregar nuestro bearer token de login

```bash
Bearer: eyJhbGciOiJ....
```

### CRUD blogs

Crear blog (POST):

```bash
 Ruta: http://localhost:4000/api/blogs
```

```bash
 Body(cuerpo JSON):
{
  "title": "Blog de prueba",
  "description": "Descripción del blog",
  "credits": "Créditos del blog",
  "date": "2024-01-30T12:00:00Z",
  "isPublic": true
}
```

Obtener todos los blogs (GET):

```bash
 Ruta: http://localhost:4000/api/blogs
```
Headers:
```bash
Bearer: eyJhbGciOiJ....
```

Obtener los blogs por ID (GET):

```bash
 Ruta: http://localhost:4000/api/blogs:id
```

Headers:
```bash
Bearer: eyJhbGciOiJ....
```

Actualizar un Blog por ID (PUT):

```bash
 Ruta: http://localhost:4000/api/blogs/:id
```

Headers:
```bash
Bearer: eyJhbGciOiJ....
```

```bash
 Body(cuerpo JSON):
{
  "title": "Nuevo título blog",
  "description": "Nueva descripción",
  "credits": "Nuevos créditos",
  "date": "2024-01-31T14:30:00Z",
  "isPublic": false
}
```

Eliminar un Blog por ID (DELETE):

```bash
 Ruta: http://localhost:4000/api/blogs/:id
```
Headers:
```bash
Bearer: eyJhbGciOiJ....
```

Comentar un blog (POST): 

```bash
 Ruta: http://localhost:4000/api/blogs/:id/comment
```
Headers:
```bash
Bearer: eyJhbGciOiJ....
```
```bash
 Body(cuerpo JSON):
{
  "text": "Este es un comentario sobre el blog."
}
```

Darle like a un blog (POST): 

```bash
 Ruta: http://localhost:4000/api/blogs/:id/like
```
Headers:
```bash
Bearer: eyJhbGciOiJ....
```

## Scenario Analysis

Redacte en draw la solucion del problema
![analysis](https://github.com/DiegoAlvarezH/jelou-project/blob/main/scenario-analysis.png)

