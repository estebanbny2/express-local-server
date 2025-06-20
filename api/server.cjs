const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Liste de mails simulée
const mails = [
    { id: 1, sender: 'example@mail.com', content: 'Hello world from Render server' }
];

// GET /mails → récupérer la liste des mails
app.get('/mails', (req, res) => {
    res.json(mails);
});

// POST /mails → ajouter un mail (pour test depuis Postman ou n8n ensuite)
app.post('/mails', (req, res) => {
    const { sender, content } = req.body;
    const newMail = {
        id: mails.length + 1,
        sender,
        content
    };
    mails.push(newMail);
    res.status(201).json(newMail);
});

app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});
