//UI Variables
const img = document.querySelector('#img');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const cell = document.querySelector('#cell');

document.querySelector('#generateBtn').addEventListener('click', async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    console.log(user);
    img.src = user.picture.medium;
    name.innerHTML = `Name : ${user.name.title} ${user.name.first} ${user.name.last}`;
    email.innerHTML = `Email : ${user.email}`;
    cell.innerHTML = `Cell : ${user.cell}`;
});