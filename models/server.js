const express = require("express");
const cors = require("cors");

class Server {
  // En JS las propiedades se definen en el constructor. Aqui haré el llamado del resto de propiedades
  constructor() {
    // Creo la app como una propiedad
    this.app = express();
    this.port = process.env.PORT; 
    this.paths = {};              //Le envio mi APP. 
    this.server = require('http').createServer(this.app);
    //Este io es la información de todos mis sockets (Clientes) conectados: //Puedo enviar mensajes a todos mis sockets. 
    this.io = require('socket.io')(this.server);


    // MIDDLEWARES: funciones que añaden más funcionalidades a mi web server. Aqui se llamaran y ejecutaran.
    this.middlewares();

    // Disparar las rutas
    this.routes();

    //Sockets config: 
    this.sockets(); 
  }

  //Middleware: Es una función que se ejecuta antes de llamar un controlador o seguir con la ejecucuón de mis peticiones. Funciones que se realizar antes de hacer un llamado.
  middlewares() {

    //Forma en que decimos que usamos un middlewares (.use)

    //CORS:
    this.app.use(cors());

    //Directorio público. Se usa para cargar los archivos que quiero mostrar por ejemplo en el LOCAL HOST
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, require("../routes/auth.routes"));
  }

  sockets() {

    this.io.on('connection', (socket) => {

      console.log('someone connected!', socket.id);

      socket.on('disconnect', () => {
        console.log('Socket (client) disconnect', socket.id);
      })
    })
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Se ejecuta en: ", this.port);
    });
    
  }
}

module.exports = Server;
