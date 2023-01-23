// HTML Reference
const lblOnline = document.querySelector('#lblOnline'); 
const lblOffline = document.querySelector('#lblOffline'); 
const txtMessage = document.querySelector('#txtMessage'); 
const btnSend = document.querySelector('#btnSend'); 

//Este es el socket del Cliente: mantiene el estado de la comunicación con nuestro servidor
const socket = io();

//Test: 
console.log('Hello World');

/*
Listeners
*/ 

//Events to:  
socket.on('connect', () =>{
    console.log('Connected to Server');
    lblOffline.style.display = 'none'; 
    lblOnline.style.display = ''; 
})

socket.on('disconnect', () =>{
    console.log('Disconnected from server');
    lblOffline.style.display = ''; 
    lblOnline.style.display = 'none'; 
})

//Siempre uno de los dos va a quedar raro.
socket.on('send-message', (payload) => {
    console.log(payload);
})


//Send from socket/client. Client Talking
btnSend.addEventListener('click', () => {
    const message = txtMessage.value; 
    // console.log(message);
    const payload = {
        message, 
        id: '123', 
        date : new Date().getTime()
    }
    socket.emit('send-message', payload, (res) => {
        console.log('From Server', res);
    })
})


