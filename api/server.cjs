const express = require('express');
const app = express();
app.use(express.json());

let mails = [];

// ➕ Ajouter un mail
app.post('/mails', (req, res) => {
    const newMail = {
        sender: req.body.sender,
        content: req.body.content
    };
    mails.push(newMail);
    res.status(201).json(newMail);
});

// 📩 Voir tous les mails
app.get('/mails', (req, res) => {
    res.json(mails);
});

// 🏠 Page d'accueil
app.get('/', (req, res) => {
    res.send('✅ Serveur mails opérationnel');
});

app.listen(3000, () => {
    console.log('✅ Server is running at http://localhost:3000');
});
