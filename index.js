function fetchBooks() {
  // Return the fetch promise
  return fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())
      .then(data => renderBooks(data))
      .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear any existing content in the main element

  books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
  });

  const bookList = document.getElementById('book-list');
  bookList.innerHTML = ''; // Clear any existing content in the book list

  books.forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = book.name;
      bookList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
