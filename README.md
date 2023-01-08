 # Introducción a los WEB SOCKETS:

 {Problemática qué solucionan los Web Sockets: desde un pc (cliente) se hace un petición a un servidor. ¿Y si hay alguna actualización? El servidor por sí solo no le envia la info al cliente (Hasta que se haga una nueva solicitud}.

¿Cómo funcionan entonces los mensajes privados? El servidor debe enviar notificaciones al servidor al usuario con estos mensajes. Los sockets son eso: *mantener una comunicación cliente servidor*

 - ¿Qué son los Web Sockets?

 Permiten mantener una comunicación ACTIVO ACTIVO entre cliente y servidor. (Se pueden enviar Strings, Bools, Objects...).

    - Se envita usar peticiones GET constantemente. Porque ahora estas están activas con el servidor y el servidor activos con estos.

 - ¿Para qué sirven los Web Sockets?

 Algunas cosas:

    - Notificaciones cuándo los usuarios se desconectan. Cuando un nuevo usuario se conecta. Cuando un usuario se vuelva a conectar.

    Más importante: *podemos disparar eventos personalizados*

    CHAT: nuevos mensajes
    Garficas: actualizaciones

# ¿Qué es Socket.io? 

Es un implementación de lo que se conoce como Web Socket. Es muy parecido a Express (Se puede crear también un res/web server). Es como el express de los web sockets.  

# ¿Qué son los eventos por Stockets?

Son todas aquellas interacciones que un socket (cliente), puede hacer. Ejemplo: Ingresar, salir, enviar, recibir...


# Mensajes de conexión y desconexión: 

   "Socket.on": Es para estar escuchando algún evento. 