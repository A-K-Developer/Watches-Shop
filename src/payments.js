const express = require('express'); // Import
const app = express();              // Create
const PORT = 3000;                  // Configure

// Do your task here, in this space.

app.listen(PORT, (error) => {       // Listen
    if(!error){
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    } else{
        console.log("Error occurred, server can't start", error);
    }
});

app.get('*', function (req,res) {
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT ;

    const fullUrl = `${protocol}://${host}:${port}${url}`

    const responseString = `Full URL is ${fullUrl}`
    res.send(responseString)
})