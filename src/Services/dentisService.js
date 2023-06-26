export async function getAllUser() {
  const apiEndPoint = "https://jsonplaceholder.typicode.com/users";
  return await (await fetch(apiEndPoint)).json();
}
export async function getUserDetail(id) {
  const apiEndPoint = "https://jsonplaceholder.typicode.com/users/" + id;
  return await (await fetch(apiEndPoint)).json();
}
