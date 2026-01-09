const API_URL = "http://localhost:3000"; // json-server ou backend

// BOOKS
export async function getBooks() {
  const res = await fetch(`${API_URL}/books`);
  return res.json();
}

export async function updateBook(id, data) {
  return fetch(`${API_URL}/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

// AUTHORS
export async function getAuthors() {
  const res = await fetch(`${API_URL}/authors`);
  return res.json();
}

export async function updateAuthor(id, data) {
  return fetch(`${API_URL}/authors/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
