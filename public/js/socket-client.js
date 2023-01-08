
//Este es el socket del Cliente
const socket = io();

console.log('Hello World');


//Listeners: 

//Saber cuándo me conecto al servidor: 
socket.on('connect', () =>{
    console.log('Connected to Server');
})

socket.on('disconnect', () =>{
    console.log('Disconnected from server');
}) 



