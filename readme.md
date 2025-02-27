# LABIV-APINEWS

Este proyecto es una API REST desarrollada con Node.js para proporcionar noticias.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `.vscode`: Configuración de Visual Studio Code.

- `controllers`: Contiene los controladores de las rutas de la API.
    * `maca_controller.js`: Controlador para las rutas relacionadas con Maca.
    * `sofia_controller.js`: Controlador para las rutas relacionadas con Sofía.
    * `tomas_controller.js`: Controlador para las rutas relacionadas con Tomás.

- `models`: Contiene los modelos de datos de la aplicación.
    * `server.js`: Archivo principal del servidor Node.js.

* `app.js`: Archivo principal de la aplicación.


## Dependencias

El proyecto utiliza las siguientes dependencias:

* ```bash {
  "name": "proyecto-api_news",
  "version": "1.0.0",
  "description": "Proyecto con node y con api de noticias.",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app",
    "dev": "nodemon app"
  },
  "author": "Tomas Merlo",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.5.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  }
}



## Configuración

1.  Clona el repositorio.
2.  Instala las dependencias ejecutando `npm install`.
3.  Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.
PORT=5000
API_KEY =4d2d1a04d0954dcaa66103c3e2a44fda

## Ejecución

Para ejecutar el servidor, ejecuta el siguiente comando:
```bash
npm start