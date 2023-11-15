//import of express
const exspress = require('express');
const app = exspress();
const port = 3000;
//import of routes
const sommeroute = require('./routes/sommeroutes')
    //config serveur
app.use(exspress.json())
app.use(exspress.urlencoded({ extended: true }))
    //config of routes
app.use('/somme', sommeroute)
    //starting the server
app.listen(port, () => {
    console.log('server is running on localhost:3000');
})