export async function fetchJokes() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single&amount=5');
    const data = await response.json();
    return data.jokes;
  }
  