const express = require("express");
// Cors: permite proteger el servidor de una manera superficial. Discrimina quien puede acceder al restAPI. Usualmente siempre se usa el cors.
const cors = require("cors");

class Server {
  // En JS las propiedades se definen en el constructor. Aqui haré el llamado del resto de propiedades
  constructor() {
    // Creo la app como una propiedad
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
    };

    // MIDDLEWARES: funciones que añaden más funcionalidades a mi web server. Aqui se llamaran y ejecutaran.
    this.middlewares();

    // Disparar las rutas
    this.routes();
  }

  //Middleware: Es una función que se ejecuta antes de llamar un controlador o seguir con la ejecucuón de mis peticiones. Funciones que se realizar antes de hacer un llamado.
  middlewares() {
    // usaremos muchos!

    //Forma en que decimos que usamos un middlewares (.use)

    //CORS:
    this.app.use(cors());

    //Directorio público. Se usa para cargar los archivos que quiero mostrar por ejemplo en el LOCAL HOST
    this.app.use(express.static("public"));
  }

  // Metodo para manejo/def de rutas
  routes() {
    // Las rutas que queremos usar de acuerdo al path. Siempre ordenar afabéticamente
    // this.app.use(this.paths.auth, require("../routes/auth.routes"));
  }

  // Hacia donde va a mirar o escuchar el RestServer
  listen() {
    this.app.listen(this.port, () => {
      console.log("Se ejecuta en: ", this.port);
    });
  }
}

module.exports = Server;
