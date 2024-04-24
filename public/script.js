window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book-id');

    if (bookId) {
        fetch(`/books/${bookId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Livro não encontrado');
                }
                return response.json();
            })
            .then(book => {
                const bookDetailsDiv = document.getElementById('book-details');
                bookDetailsDiv.innerHTML = `
                    <h2>${book.title}</h2>
                    <p>Autor: ${book.author}</p>
                `;
            })
            .catch(error => {
                const bookDetailsDiv = document.getElementById('book-details');
                bookDetailsDiv.innerHTML = `<p>${error.message}</p>`;
            });
    }
};

