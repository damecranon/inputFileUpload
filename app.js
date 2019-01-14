const server = require('server');

const { get, post } = server.router;

//launch server
server({ port : 3000}, [
    get('/', ctx => 'Hello World!')
]);





