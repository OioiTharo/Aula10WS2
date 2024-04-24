const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
app.use(bodyParser.json());

let books = [
    { id: 1, title: 'Dom Quixote', author: 'Miguel de Cervantes' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'Orgulho e Preconceito', author: 'Jane Austen' }
];

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Livro não encontrado' });
    }

    res.json(book);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
