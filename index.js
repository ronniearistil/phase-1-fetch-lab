// Function to fetch data from the Game of Thrones API
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // Fetch from the API
    .then(response => response.json()) // Parse the response as JSON
    .then(books => renderBooks(books)) // Call renderBooks with the JSON data
    .catch(error => console.log('Error:', error)); // Handle any errors
}

// Function to render the books into the DOM
function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  
  // Iterate through the array of books
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.name; // Set the text of each list item to the book's name
    bookList.appendChild(li); // Append the list item to the book list
  });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
