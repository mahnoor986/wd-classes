const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 , username: "johndoe" , password:"password123"   },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 25 , username: "janesmith" , password:"password456"   },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", age: 35 , username: "bobjohnson" , password:"password789"   },
    { id: 4, name: "Alice Brown", email: "alice.brown@example.com", age: 28 , username: "alicebrown" , password:"password012"   },
    { id: 5, name: "Charlie Davis", email: "charlie.davis@example.com", age: 32 , username: "charliedavis" , password:"password345"   },
]

app.get('/users/', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
    if (name) {
        return res.json({ message: `Hello, ${name}!` });
        res.json(name);
    }
    if (email) {
        return res.json({ message: `Your email is ${email}.` });
        res.json(email);
    }
    if (age) {
        return res.json({ message: `You are ${age} years old.` });
        res.json(age);
    }
    if (username) {
        return res.json({ message: `Your username is ${username}.` });
        res.json(username);
    }
});

app.get("/users/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen (PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});