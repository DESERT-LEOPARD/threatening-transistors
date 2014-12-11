/************ Server *****************/
var app = require('./server/server-config.js');
<<<<<<< HEAD:server.js
=======

>>>>>>> moved server.js into root dir:server.js
var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server now listening on port ' + port);
