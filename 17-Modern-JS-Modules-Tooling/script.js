// Importing Module
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Vaseline', 10);
// const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await posts.json();

const getLastPost = async function () {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await posts.json();
  const lastPost = data.slice(-1)[0];
  return { title: lastPost.title, body: lastPost.body };
};

const lastPost = await getLastPost();
console.log(lastPost);
