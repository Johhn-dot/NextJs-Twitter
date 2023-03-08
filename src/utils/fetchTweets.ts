export async function fetchTweets() {
  const response = await fetch("http://localhost:3000/api/tweets");
  const data = await response.json();

  return data;
}
