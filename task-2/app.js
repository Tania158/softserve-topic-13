const booksAPI = "books.json";

document.getElementById("downloadButton").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", booksAPI, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const books = JSON.parse(xhr.responseText);

      books.forEach((book) => {
        document.querySelector(
          ".authors-list"
        ).innerHTML += `<li>${book.author}</li>`;
      });
    }
  };
  xhr.send();
});
