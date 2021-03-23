const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
//   const promise = new Promise((resolve, reject) => {
    // const xhr = new XMLHttpRequest();
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.open(method, url);

    // xhr.responseType = 'json';

    // xhr.onload = function () {
    //   if (xhr.status >= 200 && xhr.status < 300) {
    //     resolve(xhr.response);
    //   } else {
    //     reject(new Error('Something went wrong'));
    //   }
    //   // const listOfPost = JSON.parse(xhr.response); // json data
    // };

    // xhr.onerror = function () {
    //   reject(new Error('Failed to send Request'));
    // };

    // xhr.send(JSON.stringify(data));
//   });
//   return promise;

  return fetch(url, {
      method: method,
    //   data: JSON.stringify(data), // this is for Json
    body: data // this is for formadata
    //   headers: {
    //       'Content-Type': 'application/json'
    //   }
  }).then(resp => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp.json();
    } else {
        return resp.json().then(errData => {
            console.log('Errored')
            throw new Error('Something went wrong in the server')
        })
    }
  }).catch(error => {
      throw new Error('Something went wrong')
  }); // fetch is promisified by default

}

async function fetchPosts() {
  try {
    listElement.innerHTML = ''; // to make the list elemnet empty - elese it will append
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
    for (const post of responseData) {
      const postElement = document.importNode(postTemplate.content, true);
      postElement.querySelector('h2').textContent = post.title.toUpperCase();
      postElement.querySelector('p').textContent = post.body;
      postElement.querySelector('li').id = post.id;
      listElement.append(postElement);
    }
  } 
  catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData(form);
//   fd.append('title', title);
//   fd.append('body', content);
  fd.append('userId', userId);

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector('#title').value;
  const content = event.currentTarget.querySelector('#content').value;
  createPost(title, content);
});

postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log('clicked on button', postId);
  }
});
