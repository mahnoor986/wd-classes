const express = require('express'); 
const path = require('path');
const app= express();

const PORT = 3000;
// it means we're naming the port that our server will listen .

app.use(express.urlencoded({ extended: false }));
//  express.urlencoded() converts data into a format that can be easily used in our code. It is used to parse URL encoded data. 
//  extended: false means that the data will be in a simple format, not nested.

app.use(express.json());
//  tells express that our data is in json format. 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"));
});


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // req.body contains data sent from the form in contact.html.

    res.send(`Thank you for your enquiry, ${name}. We will get back to you at ${email} soon!`);
// res.send means it will send a response back to the client (the browser) with a message that includes the user's name and email address.

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});








